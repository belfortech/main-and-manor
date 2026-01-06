from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView
from .models import Community
from .serializers import CommunitySerializer

class CommunityListApiView(ListAPIView):
    queryset = Community.objects.filter(is_featured=True)
    serializer_class = CommunitySerializer