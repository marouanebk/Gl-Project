from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone = models.IntegerField(null=True, blank=True)
    Nationality = models.CharField(null=True, blank=True, max_length=30)
    email = models.EmailField(max_length=240, unique=True)
    REQUIRED_FIELDS = ['__all__']
    USERNAME_FIELD = 'email'
    def __str__(self):
        return self.username