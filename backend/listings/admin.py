from django.contrib import admin
from .models import Property


# Register your models here.
@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ("title", "location", "price", "status", "type", "beds", "baths")
    list_filter = ("is_off_plan", "status", "type")
