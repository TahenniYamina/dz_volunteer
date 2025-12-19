from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour gérer les utilisateurs (bénévoles et organisations).
    Fournit automatiquement list, retrieve, create, update et delete.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
