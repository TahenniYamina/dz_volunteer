from django.utils import timezone
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from django_filters.rest_framework import DjangoFilterBackend

from .models import Application
from .serializers import ApplicationSerializer
from apps.permissions.is_missionOwner import IsMissionOwner
from apps.permissions.is_volunteer import IsVolunteer


class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['status', 'mission', 'volunteer']

    def get_permissions(self):
        if self.action == 'create':
            return [IsVolunteer()]
        if self.action in ['update', 'partial_update', 'validate_hours', 'change_status']:
            return [IsMissionOwner()]
        return [IsAuthenticated()]

    def perform_create(self, serializer):
        volunteer = self.request.user
        mission = serializer.validated_data['mission']

        if Application.objects.filter(volunteer=volunteer, mission=mission).exists():
            raise ValidationError("Vous avez déjà postulé à cette mission.")

        if not mission.skills_required.exists():
         raise ValidationError("Cette mission n'a aucune compétence requise définie.")
        
        
        required_skills = mission.skills_required.filter(verification_required=True)
        volunteer_skills = volunteer.skills.filter(userskill__status='verified')
        
        volunteer_skill_ids = volunteer_skills.values_list('id', flat=True)

        missing_skills = [
            skill.name for skill in required_skills
            if skill.id not in volunteer_skill_ids
        ]

        if missing_skills:
            raise ValidationError(
                f"Compétences manquantes ou non validées : {', '.join(missing_skills)}"
            )

        serializer.save(volunteer=volunteer)

    @action(detail=True, methods=['post'])
    def validate_hours(self, request, pk=None):
        application = self.get_object()

    
        if application.mission.end_date > timezone.now():
            return Response(
                {"detail": "La mission n'est pas encore terminée."},
                status=status.HTTP_400_BAD_REQUEST
            )


        if application.status != 'confirmed':
            return Response(
                {"detail": "La candidature doit être confirmée pour valider les heures."},
                status=status.HTTP_400_BAD_REQUEST
            )

        if application.hours_validated > 0:
            return Response(
                {"detail": "Les heures ont déjà été validées."},
                status=status.HTTP_400_BAD_REQUEST
            )


        try:
            hours = int(request.data.get('hours'))
            if hours <= 0:
                raise ValueError
        except (TypeError, ValueError):
            return Response(
                {"detail": "Veuillez fournir un nombre d'heures valide."},
                status=status.HTTP_400_BAD_REQUEST
            )

        application.hours_validated = hours
        application.save()

        
        if hasattr(application.volunteer, 'total_hours'):
            application.volunteer.total_hours += hours
            application.volunteer.save()

        return Response(
            {"detail": f"{hours} heures validées pour {application.volunteer.username}."},
            status=status.HTTP_200_OK
        )

    @action(detail=True, methods=['post'])
    def change_status(self, request, pk=None):
        application = self.get_object()
        new_status = request.data.get('status')

        valid_statuses = dict(Application.STATUS_CHOICES)

        if new_status not in valid_statuses:
            return Response(
                {"detail": "Statut invalide."},
                status=status.HTTP_400_BAD_REQUEST
            )

        application.status = new_status
        application.save()

        return Response(
            {"detail": f"Statut changé à {valid_statuses[new_status]}."},
            status=status.HTTP_200_OK
        )
