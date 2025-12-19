from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Mission
from .serializers import MissionSerializer

class MissionViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour gérer les missions de bénévolat.
    """
    queryset = Mission.objects.all()
    serializer_class = MissionSerializer
