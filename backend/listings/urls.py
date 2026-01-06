from django.urls import path
from .views import PropertyListAPIView, PropertyDetailAPIView, OffPlanPropertyListAPIView

urlpatterns = [
    path( "properties/", PropertyListAPIView.as_view(), name="property-list"),
    path("properties/<int:pk>/", PropertyDetailAPIView.as_view(), name="property-detail"),
    path("offplan-properties/", OffPlanPropertyListAPIView.as_view()),

]