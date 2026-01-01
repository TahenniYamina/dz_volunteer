from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User


class VolunteerRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'username', 'email', 'password', 'password2',
            'first_name', 'last_name', 'phone', 'city',
            'birth_date', 'gender', 'nationality',
            'interests', 'languages', 'availability',
            'education_level', 'volunteer_experience',
            'motivation', 'accepted_terms'
        ]

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({'password2': 'Passwords do not match'})
        if not data.get('accepted_terms'):
            raise serializers.ValidationError({'accepted_terms': 'Required'})
        return data

    def create(self, validated_data):
        validated_data.pop('password2')
        password = validated_data.pop('password')

        user = User(**validated_data)
        user.is_volunteer = True
        user.is_organization = False
        user.set_password(password)
        user.save()
        return user


class OrganizationRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    organization_name = serializers.CharField()
    description = serializers.CharField()
    website = serializers.URLField(required=False)
    slogan = serializers.CharField(required=False)

    class Meta:
        model = User
        fields = [
            'username', 'email', 'password', 'password2',
            'organization_name', 'description',
            'website', 'slogan', 'city'
        ]

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({'password2': 'Passwords do not match'})
        return data

    def create(self, validated_data):
        validated_data.pop('password2')
        password = validated_data.pop('password')

        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            city=validated_data.get('city'),
            first_name=validated_data['organization_name'],
            organization_description=validated_data['description'],
            organization_website=validated_data.get('website'),
            organization_slogan=validated_data.get('slogan'),
            is_organization=True,
            is_volunteer=False
        )
        user.set_password(password)
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    identifier = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        identifier = data['identifier']
        password = data['password']

        try:
            if '@' in identifier:
                user = User.objects.get(email=identifier)
            else:
                user = User.objects.get(username=identifier)
        except User.DoesNotExist:
            raise serializers.ValidationError('Invalid credentials')

        user = authenticate(username=user.username, password=password)
        if not user:
            raise serializers.ValidationError('Invalid credentials')

        data['user'] = user
        return data


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'username', 'email',
            'first_name', 'last_name',
            'is_volunteer', 'is_organization'
        ]
