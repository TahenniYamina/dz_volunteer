from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import Mission
from .serializers import MissionSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from apps.permissions.is_organization import IsOrganization



class MissionViewSet(ModelViewSet):
    queryset = Mission.objects.all()
    serializer_class = MissionSerializer
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsOrganization()]
        return [AllowAny()]