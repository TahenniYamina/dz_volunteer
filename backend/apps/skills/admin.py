from django.contrib import admin
from .models import Skill
# Register your models here.

class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'requires_verification')
    search_fields = ('name',)
    list_filter = ('requires_verification',)

admin.site.register(Skill, SkillAdmin)