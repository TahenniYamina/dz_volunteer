from rest_framework import serializers
from .models import ODD

class ODDSerializer(serializers.ModelSerializer):
    class Meta:
        model = ODD
        fields = ['id', 'code', 'title', 'description']