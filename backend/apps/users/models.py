# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_volunteer = models.BooleanField(default=False)
    is_organization = models.BooleanField(default=False)
    bio = models.TextField(blank=True, null=True)
    total_hours = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.username
