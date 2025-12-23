from django.db import models
from apps.users.models import User
from apps.skills.models import Skill
from apps.odds.models import ODD
# Create your models here.
class Mission(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=200)
    date = models.DateField()
    slots = models.PositiveIntegerField()  # nombre de bénévoles nécessaires
    organization = models.ForeignKey(User, on_delete=models.CASCADE, related_name='missions')
    skills_required = models.ManyToManyField(Skill, blank=True)
    is_archived = models.BooleanField(default=False)
    odd = models.ForeignKey(ODD, on_delete=models.SET_NULL, null=True, blank=True, related_name='missions')


    def __str__(self):
        return self.title
