# apps/skills/models.py
from django.db import models
from apps.users.models import User

class Skill(models.Model):
    name = models.CharField(max_length=100)
    verification_required = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class UserSkill(models.Model):
    STATUS_CHOICES = [
        ('pending', 'En attente de validation'),
        ('verified', 'Validé'),
        ('rejected', 'Refusé'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    certificate = models.FileField(upload_to='certificates/', null=True, blank=True)
    
    class Meta:
        unique_together = ('user', 'skill')

User.add_to_class(
    'skills',
    models.ManyToManyField(Skill, through=UserSkill, related_name='users')
)
