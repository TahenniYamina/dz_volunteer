from rest_framework import serializers
from .models import Mission
from apps.skills.serializers import SkillSerializer
from apps.skills.models import Skill
from apps.users.serializers import OrganizationRegisterSerializer


class MissionSerializer(serializers.ModelSerializer):
    organization = OrganizationRegisterSerializer(read_only=True)

    skills_required = serializers.PrimaryKeyRelatedField(
        queryset=Skill.objects.all(),
        many=True,
        required=False
    )
    class Meta:
        model = Mission
        fields = ('id', 'title', 'description', 'date', 'location', 'slots', 'organization', 'skills_required', 'is_archived')
