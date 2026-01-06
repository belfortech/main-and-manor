from rest_framework import serializers
from .models import Blog, Category,BlogSection

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug"]

class BlogSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogSection
        fields = ["title", "content", "order"]


class BlogSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    sections = BlogSectionSerializer(many=True, read_only=True)


    class Meta:
        model = Blog
        fields = "__all__"