from django.shortcuts import render
from rest_framework import viewsets
from .models import ODD
from .serializers import ODDSerializer

class ODDViewSet(viewsets.ModelViewSet):
    queryset = ODD.objects.all()
    serializer_class = ODDSerializer
