from django.core.management.base import BaseCommand
from rest_framework.authtoken.models import Token
from apps.users.models import User

class Command(BaseCommand):
    help = "Generate token for a user"

    def add_arguments(self, parser):
        parser.add_argument('username', type=str, help='Username')

    def handle(self, *args, **options):
        username = options['username']
        try:
            user = User.objects.get(username=username)
            token, created = Token.objects.get_or_create(user=user)
            if created:
                self.stdout.write(self.style.SUCCESS(f'Token créé: {token.key}'))
            else:
                self.stdout.write(self.style.SUCCESS(f'Token existant: {token.key}'))
        except User.DoesNotExist:
            self.stdout.write(self.style.ERROR(f'Utilisateur {username} introuvable'))