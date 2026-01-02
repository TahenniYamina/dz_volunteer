from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .serializers import (
    VolunteerRegisterSerializer,
    OrganizationRegisterSerializer,
    LoginSerializer,
    UserSerializer
)


@api_view(['POST'])
@permission_classes([AllowAny])
def volunteer_signup(request):
    serializer = VolunteerRegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token, _ = Token.objects.get_or_create(user=user)

    return Response({
        'token': token.key,
        'user': UserSerializer(user).data
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def organization_signup(request):
    serializer = OrganizationRegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token, _ = Token.objects.get_or_create(user=user)

    return Response({
        'token': token.key,
        'user': UserSerializer(user).data
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']

    token, _ = Token.objects.get_or_create(user=user)

    return Response({
        'token': token.key,
        'user': UserSerializer(user).data
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    request.user.auth_token.delete()
    return Response({'message': 'Logged out'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(UserSerializer(request.user).data)


class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        if hasattr(user, "volunteer"):
            # Dashboard pour bénévole
            data = {
                "type": "volunteer",
                "missions": [mission.title for mission in user.volunteer.missions.all()],
                "skills": [skill.name for skill in user.volunteer.skills.all()],
            }
        elif hasattr(user, "organization"):
            # Dashboard pour organisation
            data = {
                "type": "organization",
                "missions": [mission.title for mission in user.organization.missions.all()],
                "volunteers_count": user.organization.volunteers.count(),
            }
        else:
            data = {"error": "User type unknown"}

        return Response(data)