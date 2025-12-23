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
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['status', 'mission', 'volunteer']

    def get_permissions(self):
        if self.action == 'create':
            return [IsVolunteer()]
        if self.action in ['update', 'partial_update']:
            return [IsMissionOwner()]
        return [IsAuthenticated()]

    def perform_create(self, serializer):
        mission = serializer.validated_data['mission']
        volunteer = serializer.validated_data['volunteer']

        # Récupérer les compétences requises et vérifiées
        required_skills = mission.skills_required.filter(verification_required=True)
        # Utiliser le nom correct du related_name dans UserSkill
        volunteer_skills = volunteer.skills.filter(userskill__status='verified')

        # Vérifier les compétences manquantes
        missing_skills = [skill.name for skill in required_skills if skill not in volunteer_skills]
        if missing_skills:
            raise ValidationError(
                f"Vous n'avez pas toutes les compétences requises validées : {', '.join(missing_skills)}"
            )

        # Créer la candidature
        serializer.save()

    @action(detail=True, methods=['post'], permission_classes=[IsMissionOwner])
    def validate_hours(self, request, pk=None):
        application = self.get_object()
        hours = request.data.get('hours')

        if not hours or not str(hours).isdigit():
            return Response({"detail": "Veuillez fournir un nombre d'heures valide."}, 
                            status=status.HTTP_400_BAD_REQUEST)

        # Vérifier que la mission est terminée
        if application.mission.end_date > timezone.now():
            return Response({"detail": "La mission n'est pas encore terminée."}, 
                            status=status.HTTP_400_BAD_REQUEST)

        # Mettre à jour les heures validées
        application.hours_validated = int(hours)
        application.save()

        # Mettre à jour le total d'heures du bénévole
        if hasattr(application.volunteer, 'total_hours'):
            application.volunteer.total_hours += int(hours)
            application.volunteer.save()

        return Response({"detail": f"{hours} heures validées pour {application.volunteer.username}."})

    @action(detail=True, methods=['post'], permission_classes=[IsMissionOwner])
    def change_status(self, request, pk=None):
        application = self.get_object()
        new_status = request.data.get('status')

        if new_status not in dict(Application.STATUS_CHOICES):
            return Response({"detail": "Statut invalide."}, status=status.HTTP_400_BAD_REQUEST)

        application.status = new_status
        application.save()
        return Response({"detail": f"Statut changé à {new_status}."})
