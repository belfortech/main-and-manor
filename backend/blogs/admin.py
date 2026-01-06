from django.contrib import admin
from .models import Blog, Category, BlogSection

# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields= {"slug": ("name",)}

class BlogSectionInline(admin.TabularInline):
    model = BlogSection
    extra = 1
    fields = ("order", "title", "content")


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "status", "is_featured" ,"created_at")
    list_filter = ("status", "category", "is_featured")
    prepopulated_fields = {"slug": ("title",)}
    inlines = [BlogSectionInline]
