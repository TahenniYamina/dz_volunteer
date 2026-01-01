from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)

    is_volunteer = models.BooleanField(default=False)
    is_organization = models.BooleanField(default=False)

    phone = models.CharField(max_length=20, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)

    birth_date = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=1, blank=True, null=True)
    nationality = models.CharField(max_length=100, blank=True, null=True)

    interests = models.JSONField(default=list, blank=True)
    languages = models.JSONField(default=list, blank=True)
    availability = models.CharField(max_length=50, blank=True, null=True)
    education_level = models.CharField(max_length=50, blank=True, null=True)

    volunteer_experience = models.TextField(blank=True, null=True)
    motivation = models.TextField(blank=True, null=True)

    accepted_terms = models.BooleanField(default=False)

    organization_description = models.TextField(blank=True, null=True)
    organization_website = models.URLField(blank=True, null=True)
    organization_slogan = models.CharField(max_length=200, blank=True, null=True)
    organization_logo = models.ImageField(upload_to='organizations/logos/', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
