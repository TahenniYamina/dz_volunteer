from django.contrib import admin
from .models import Skill
# Register your models here.

class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'verification_required')
    search_fields = ('name',)
    list_filter = ('verification_required',)

admin.site.register(Skill, SkillAdmin) 