# apps/skills/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, UserSkillCreateView

router = DefaultRouter()
router.register(r'', SkillViewSet)  # Toutes les routes CRUD pour Skill

urlpatterns = [
    path('', include(router.urls)),                # inclut toutes les routes du ViewSet
    path('user-skill/', UserSkillCreateView.as_view(), name='user-skill-create'),  # endpoint pour créer un UserSkill
]
