from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics, permissions
from .models import Skill, UserSkill
from .serializers import SkillSerializer, UserSkillSerializer

class SkillViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour gérer les compétences.
    """
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class UserSkillCreateView(generics.CreateAPIView):
    queryset = UserSkill.objects.all()
    serializer_class = UserSkillSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # lie automatiquement le skill à l'utilisateur connecté
        serializer.save(user=self.request.user)