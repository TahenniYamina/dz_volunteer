# apps/odds/management/commands/odd_loads.py

from django.core.management.base import BaseCommand
from apps.odds.models import ODD

class Command(BaseCommand):
    help = "Load ODD initial data"

    def handle(self, *args, **options):
        odd_list = [
            (1, "Pas de pauvreté"),
            (2, "Faim zéro"),
            (3, "Bonne santé et bien-être"),
            (4, "Éducation de qualité"),
            (5, "Égalité entre les sexes"),
            (6, "Eau propre et assainissement"),
            (7, "Énergie propre et d’un coût abordable"),
            (8, "Travail décent et croissance économique"),
            (9, "Industrie, innovation et infrastructure"),
            (10, "Inégalités réduites"),
            (11, "Villes et communautés durables"),
            (12, "Consommation et production responsables"),
            (13, "Lutte contre les changements climatiques"),
            (14, "Vie aquatique"),
            (15, "Vie terrestre"),
            (16, "Paix, justice et institutions efficaces"),
            (17, "Partenariats pour la réalisation des objectifs"),
        ]

        for code, title in odd_list:
            odd, created = ODD.objects.get_or_create(
                code=code,
                defaults={"title": title}
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"ODD {code} créé"))
            else:
                self.stdout.write(self.style.WARNING(f"ODD {code} existe déjà"))
