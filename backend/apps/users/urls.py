from django.urls import path
from . import auth_views

urlpatterns = [
    path('auth/register/volunteer/', auth_views.volunteer_signup),
    path('auth/register/organization/', auth_views.organization_signup),
    path('auth/login/', auth_views.login),
    path('auth/logout/', auth_views.logout),
    path('auth/me/', auth_views.me),
    path('dashboard/', auth_views.DashboardView.as_view(), name='dashboard'),
]
