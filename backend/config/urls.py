"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from apps.users.views import UserViewSet
from apps.skills.views import SkillViewSet
from apps.missions.views import MissionViewSet
from apps.applications.views import ApplicationViewSet
from apps.users import auth_views 
from apps.odds.views import ODDViewSet

# Création du router
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'missions', MissionViewSet)
router.register(r'applications', ApplicationViewSet)
router.register(r'odds', ODDViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    
    # Routes d'authentification
    path('api/auth/signup/', auth_views.signup, name='signup'),
    path('api/auth/login/', auth_views.login, name='login'),
    path('api/auth/logout/', auth_views.logout, name='logout'),
    path('api/auth/me/', auth_views.me, name='me'),
]

