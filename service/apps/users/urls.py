from django.urls import include, path
from rest_framework import routers

from .views import ActivateUserViewSet

router = routers.DefaultRouter()
router.register("", ActivateUserViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
