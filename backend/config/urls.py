from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static

from apps.skills.views import SkillViewSet
from apps.missions.views import MissionViewSet
from apps.applications.views import ApplicationViewSet
from apps.odds.views import ODDViewSet
from apps.users import auth_views
from . import settings

# Création du router pour les ViewSets
router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'missions', MissionViewSet)
router.register(r'applications', ApplicationViewSet)
router.register(r'odds', ODDViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    
    # Routes d'authentification / inscription
    path('api/', include('apps.users.urls')),

    path('skills/user-skill/', include('apps.skills.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)