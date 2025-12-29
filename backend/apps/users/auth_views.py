from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import User
from .serializers import UserSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    """
    Inscription d'un nouvel utilisateur (bénévole ou organisation)
    """
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    user_type = request.data.get('user_type')  # 'volunteer' ou 'organization'
    
    # Validation
    if not username or not email or not password or not user_type:
        return Response(
            {'error': 'Tous les champs sont requis : username, email, password, user_type'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    if user_type not in ['volunteer', 'organization']:
        return Response(
            {'error': 'user_type doit être "volunteer" ou "organization"'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Vérifier si l'utilisateur existe déjà
    if User.objects.filter(username=username).exists():
        return Response(
            {'error': 'Ce nom d\'utilisateur existe déjà'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    if User.objects.filter(email=email).exists():
        return Response(
            {'error': 'Cet email est déjà utilisé'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Créer l'utilisateur
    user = User.objects.create_user(
        username=username,
        email=email,
        password=password,
        is_volunteer=(user_type == 'volunteer'),
        is_organization=(user_type == 'organization')
    )
    
    # Créer le token
    token = Token.objects.create(user=user)
    
    return Response({
        'token': token.key,
        'user': UserSerializer(user).data
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    """
    Connexion avec email ou username
    """
    identifier = request.data.get('identifier')  # email OU username
    password = request.data.get('password')

    if not identifier or not password:
        return Response(
            {'error': 'Email/username et password sont requis'},
            status=status.HTTP_400_BAD_REQUEST
        )

    #  Chercher l'utilisateur
    try:
        if '@' in identifier:
            user = User.objects.get(email=identifier)
        else:
            user = User.objects.get(username=identifier)
    except User.DoesNotExist:
        return Response(
            {'error': 'Identifiants invalides'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    #  Authentifier avec username + password
    user = authenticate(username=user.username, password=password)

    if user is None:
        return Response(
            {'error': 'Identifiants invalides'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    # Token
    token, created = Token.objects.get_or_create(user=user)

    return Response({
        'token': token.key,
        'user': UserSerializer(user).data
    })


@api_view(['POST'])
def logout(request):
    """
    Déconnexion (suppression du token)
    """
    if request.user.is_authenticated:
        # Supprimer le token
        Token.objects.filter(user=request.user).delete()
        return Response({'message': 'Déconnexion réussie'})
    
    return Response(
        {'error': 'Non authentifié'},
        status=status.HTTP_401_UNAUTHORIZED
    )


@api_view(['GET'])
def me(request):
    """
    Récupérer les informations de l'utilisateur connecté
    """
    if request.user.is_authenticated:
        return Response(UserSerializer(request.user).data)
    
    return Response(
        {'error': 'Non authentifié'},
        status=status.HTTP_401_UNAUTHORIZED
    )