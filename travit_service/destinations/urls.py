from django.urls import include, path
from rest_framework import routers
from .views import DestinationViewSet

router = routers.DefaultRouter()
router.register('', DestinationViewSet)

urlpatterns = [
    path('', include(router.urls))
]
