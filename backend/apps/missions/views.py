from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import Mission
from .serializers import MissionSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from apps.permissions.is_organization import IsOrganization
from django_filters.rest_framework import DjangoFilterBackend


class MissionViewSet(ModelViewSet):
    queryset = Mission.objects.all()
    serializer_class = MissionSerializer

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['odd'] # permet au frontend de filtrer par odd
    # donc le frontend pourra faire /missions/?odd=1 pour 
    # obtenir toutes les missions liees a l'odd 1

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsOrganization()]
        return [AllowAny()]
    
    def perform_create(self, serializer):
        serializer.save(organization=self.request.user)