from rest_framework import viewsets

from .models import Destination
from .serializers import DestinationSerializer

"""
Viewset for managing travel destinations.
"""


class DestinationViewSet(viewsets.ModelViewSet):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer
