from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone = models.IntegerField(null=True, blank=True)
    Nationality = models.IntegerField(null=True, blank=True)
    def __str__(self):
        return self.username