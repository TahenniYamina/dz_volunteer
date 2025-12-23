from rest_framework import serializers
from .models import Mission
from apps.users.models import User
from apps.skills.serializers import SkillSerializer

class MissionSerializer(serializers.ModelSerializer):
    organization = serializers.PrimaryKeyRelatedField(queryset=User.objects.filter(is_organization=True))
    skills_required = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Mission
        fields = ('id', 'title', 'description', 'date', 'location', 'slots', 'organization', 'skills_required', 'is_archived')
