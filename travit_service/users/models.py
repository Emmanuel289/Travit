from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = models.CharField(
        verbose_name="Username", blank=False, max_length=255, unique=True
    )
    email = models.EmailField(verbose_name="Email", blank=False, unique=True)
    password = models.CharField(verbose_name="Password", blank=False, max_length=255)

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return f"User(id={self.id}, email={self.email})"
