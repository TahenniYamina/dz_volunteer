from rest_framework import serializers
from .models import Application
from apps.users.serializers import UserSerializer
from apps.missions.serializers import MissionSerializer

class ApplicationSerializer(serializers.ModelSerializer):
    volunteer = UserSerializer(read_only=True)
    mission = MissionSerializer(read_only=True)

    class Meta:
        model = Application
        fields = ('id', 'volunteer', 'mission', 'status', 'hours_validated', 'applied_at')
#  read_only pour que le backend controle 
#  et ne laisse pas le frontend changer les donnees
