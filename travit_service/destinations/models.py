from django.db import models
from django.utils import timezone

class Destination(models.Model):
    """Represents a destination for a user to travel to."""
    name = models.CharField(verbose_name="Name", blank=False, max_length=50)
    description = models.TextField(verbose_name="Description", blank=False)
    image = models.ImageField(verbose_name="Image", blank=False, upload_to="images/")
    weather = models.CharField(verbose_name="Weather", blank=False, max_length=50)
    currency = models.CharField(verbose_name="Currency", blank=False, max_length=50)
    timezone = models.CharField(verbose_name="Timezone", blank=False, max_length=50, default=timezone.get_current_timezone_name())