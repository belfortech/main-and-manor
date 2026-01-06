from django.urls import path
from .views import CommunityListApiView

urlpatterns = [
    path("", CommunityListApiView.as_view(), name="community-list"),
]