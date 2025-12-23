from rest_framework import serializers
from .models import Application
from apps.users.serializers import UserSerializer
from apps.missions.serializers import MissionSerializer
from apps.missions.models import Mission


class ApplicationSerializer(serializers.ModelSerializer):
    volunteer = UserSerializer(read_only=True)
    mission = MissionSerializer(read_only=True)

    mission_id = serializers.PrimaryKeyRelatedField(
        queryset=Mission.objects.all(),
        source='mission',
        write_only=True
    )

    class Meta:
        model = Application
        fields = (
            'id',
            'volunteer',
            'mission',
            'mission_id',      
            'status',
            'hours_validated',
            'applied_at'
        )
        read_only_fields = (
            'volunteer',
            'status',
            'hours_validated',
            'applied_at'
        )
