from django.db import models
from apps.users.models import User
from apps.missions.models import Mission


class Application(models.Model):
    STATUS_CHOICES = [
        ('pending', 'En attente'),
        ('preselected', 'Présélectionné'),
        ('confirmed', 'Confirmé'),
        ('rejected', 'Refusé'),
    ]

    volunteer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='applications'
    )
    mission = models.ForeignKey(
        Mission,
        on_delete=models.CASCADE,
        related_name='applications'
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )
    hours_validated = models.PositiveIntegerField(default=0)
    applied_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('volunteer', 'mission')  # ✅ sécurité ultime

    def __str__(self):
        return f"{self.volunteer.username} → {self.mission.title}"
