from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    total_hours = serializers.IntegerField(read_only=True)  # compteur d'heures validées

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'total_hours', 'is_volunteer', 'is_organization', 'bio')
        