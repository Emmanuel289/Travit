from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    username = models.CharField(verbose_name="Username", blank=False, max_length=20, unique=True)
    email = models.EmailField(verbose_name="Email", blank=False, unique=True)
    password = models.CharField(verbose_name='Password', blank=False, max_length=40)
    class Meta:
        ordering = ['id']
        
    def __str__(self):
        return f'User(id={self.id}, email={self.email})' 