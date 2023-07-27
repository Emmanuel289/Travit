from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    first_name = models.CharField(
        verbose_name='first_name', blank=False, max_length=150)
    last_name = models.CharField(
        verbose_name='last_name', blank=False, max_length=150)
    email = models.EmailField(
        verbose_name="email_address", blank=False, unique=True)
    re_password = models.CharField(
        verbose_name="Retype Password", blank=False, max_length=255, default='')

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return f"User(id={self.id}, first_name={self.first_name}, last_name={self.last_name}, email={self.email})"
