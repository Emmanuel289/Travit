from rest_framework import viewsets

from .models import Destination
from .serializers import DestinationSerializer

# Create your views here.


class DestinationViewSet(viewsets.ModelViewSet):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer
