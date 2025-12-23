from django.contrib import admin
from .models import ODD

@admin.register(ODD)
class ODDAdmin(admin.ModelAdmin):
    list_display = ('code', 'title')
