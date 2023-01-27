from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone = models.IntegerField(null=True, blank=True)
    Nationality = models.CharField(null=True, blank=True, max_length=30)
    email = models.EmailField(max_length=240, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    def __str__(self):
        return self.username