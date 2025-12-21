from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Application
from .serializers import ApplicationSerializer
from apps.permissions.is_missionOwner import IsMissionOwner
from apps.permissions.is_volunteer import IsVolunteer

class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def get_permissions(self):
      if self.action == 'create':
         return [IsVolunteer()]
      if self.action in ['update', 'partial_update']:
         return [IsMissionOwner()]
      return [IsAuthenticated()]
