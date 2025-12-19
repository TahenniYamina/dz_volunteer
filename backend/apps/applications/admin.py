from django.contrib import admin
from .models import Application
# Register your models here.

class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('volunteer', 'mission', 'status', 'applied_at')
    search_fields = ('volunteer__username', 'mission__title')
    list_filter = ('status', 'applied_at')
    ordering = ('-applied_at',)

admin.site.register(Application, ApplicationAdmin)

# list_display : quelles colonnes voir
#   search_fields : recherche rapide par benevode ou mission
#  list_filter : filtres sur le cote
#  ordering : odre d'affichage par defaut
#  admin.site.register : applique tous ca a admin
