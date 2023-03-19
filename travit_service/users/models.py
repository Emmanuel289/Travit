from django.db import models

class User(models.Model):
    email = models.EmailField(verbose_name='Email', blank=False)
    password = models.CharField(verbose_name='Password', blank=False, max_length=40)
    
    class Meta:
        ordering = ['id']
        
    def __str__(self):
        return f'User(id={self.id}, email={self.email})'    