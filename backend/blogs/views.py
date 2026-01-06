from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Blog, Category
from .serializers import BlogSerializer, CategorySerializer

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class BlogListAPIView(generics.ListAPIView):
    serializer_class =  BlogSerializer

    def get_queryset(self):
        queryset = Blog.objects.filter(status="PUBLISHED").order_by("-created_at")
        category_slug = self.request.query_params.get("category")

        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)

        return queryset
        

class FeaturedBlogListAPIView(generics.ListAPIView):
    queryset = Blog.objects.filter(
        status="PUBLISHED",
        is_featured=True
    )
    serializer_class = BlogSerializer

class BlogDetailAPIView(generics.RetrieveAPIView):
    queryset = Blog.objects.filter(status="PUBLISHED")
    serializer_class = BlogSerializer
    lookup_field ="slug"