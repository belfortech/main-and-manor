from django.contrib import admin
from .models import Community
# Register your models here.

@admin.register(Community)
class CommunityAdmin(admin.ModelAdmin):
    list_display = ("name", "is_featured",)
    list_editable =("is_featured",)
    prepopulated_fields ={"slug":("name",)}
