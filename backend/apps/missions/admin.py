from django.contrib import admin
from .models import Mission
# Register your models here.

class MissionAdmin(admin.ModelAdmin):
    list_display = ('title', 'organization', 'date', 'slots', 'is_archived')
    search_fields = ('title', 'organization__username')
    list_filter = ('date', 'is_archived')
    ordering = ('-date',)

admin.site.register(Mission, MissionAdmin)