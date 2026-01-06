from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Property
from .serializers import PropertySerializer



class PropertyListAPIView(generics.ListAPIView):
    queryset = Property.objects.filter(is_off_plan=False).order_by("-created_at")
    serializer_class = PropertySerializer


class PropertyDetailAPIView(generics.RetrieveAPIView):
    queryset = Property.objects.all()
    serializer_class= PropertySerializer

class FeaturedPropertyListAPIView(generics.ListAPIView):
    queryset = Property.objects.filter(is_featured=True, is_off_plan=False)
    serializer_class = PropertySerializer


class OffPlanPropertyListAPIView(generics.ListAPIView):
    queryset = Property.objects.filter(is_off_plan=True).order_by("-created_at")

    serializer_class = PropertySerializer
