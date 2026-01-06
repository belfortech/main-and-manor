from django.urls import path
from .views import (
    BlogListAPIView,
    BlogDetailAPIView,
    FeaturedBlogListAPIView,
    CategoryListAPIView
)

urlpatterns = [
    path("", BlogListAPIView.as_view()),
    path("featured/", FeaturedBlogListAPIView.as_view()),
    path("categories/", CategoryListAPIView.as_view()),
    path("<slug:slug>/", BlogDetailAPIView.as_view()),
]