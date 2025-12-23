from django.core.management.base import BaseCommand
from apps.odds.models import ODD

ODD_LIST = [
    {"code": "ODD1", "title": "Pas de pauvreté", "description": "Éradiquer la pauvreté sous toutes ses formes partout dans le monde."},
    {"code": "ODD2", "title": "Faim zéro", "description": "Éliminer la faim, assurer la sécurité alimentaire et améliorer la nutrition."},
    {"code": "ODD3", "title": "Bonne santé et bien-être", "description": "Permettre à tous de vivre en bonne santé et promouvoir le bien-être à tous les âges."},
    {"code": "ODD4", "title": "Éducation de qualité", "description": "Assurer l’accès de tous à une éducation de qualité, sur un pied d’égalité et promouvoir les possibilités d’apprentissage tout au long de la vie."},
    {"code": "ODD5", "title": "Égalité entre les sexes", "description": "Parvenir à l’égalité des sexes et autonomiser toutes les femmes et les filles."},
    {"code": "ODD6", "title": "Eau propre et assainissement", "description": "Garantir l’accès de tous à l’eau et à l’assainissement et gérer durablement les ressources en eau."},
    {"code": "ODD7", "title": "Énergie propre et d’un coût abordable", "description": "Garantir l’accès de tous à des services énergétiques fiables, durables et modernes à un coût abordable."},
    {"code": "ODD8", "title": "Travail décent et croissance économique", "description": "Promouvoir une croissance économique soutenue, le plein emploi et un travail décent pour tous."},
    {"code": "ODD9", "title": "Industrie, innovation et infrastructure", "description": "Bâtir une infrastructure résiliente, promouvoir une industrialisation durable et encourager l’innovation."},
    {"code": "ODD10", "title": "Inégalités réduites", "description": "Réduire les inégalités dans les pays et d’un pays à l’autre."},
    {"code": "ODD11", "title": "Villes et communautés durables", "description": "Rendre les villes et les établissements humains inclusifs, sûrs, résilients et durables."},
    {"code": "ODD12", "title": "Consommation et production responsables", "description": "Établir des modes de consommation et de production durables."},
    {"code": "ODD13", "title": "Lutte contre les changements climatiques", "description": "Prendre d’urgence des mesures pour lutter contre les changements climatiques et leurs répercussions."},
    {"code": "ODD14", "title": "Vie aquatique", "description": "Conserver et exploiter de manière durable les océans, les mers et les ressources marines pour le développement durable."},
    {"code": "ODD15", "title": "Vie terrestre", "description": "Gérer durablement les forêts, lutter contre la désertification, stopper et inverser la dégradation des terres et mettre fin à l’appauvrissement de la biodiversité."},
    {"code": "ODD16", "title": "Paix, justice et institutions efficaces", "description": "Promouvoir l’avènement de sociétés pacifiques et inclusives, assurer l’accès de tous à la justice et mettre en place des institutions efficaces, responsables et ouvertes à tous."},
    {"code": "ODD17", "title": "Partenariats pour la réalisation des objectifs", "description": "Renforcer les moyens de mise en œuvre et revitaliser le partenariat mondial pour le développement durable."},
]

class Command(BaseCommand):
    help = "Charge les 17 ODD dans la base de données"

    def handle(self, *args, **kwargs):
        for odd_data in ODD_LIST:
            ODD.objects.update_or_create(code=odd_data['code'], defaults={
                'title': odd_data['title'],
                'description': odd_data['description']
            })
        self.stdout.write(self.style.SUCCESS("Les 17 ODD ont été ajoutés avec succès !"))
