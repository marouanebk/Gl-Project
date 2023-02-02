from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone = models.IntegerField(null=True, blank=True)
    address = models.CharField(null=True, blank=True, max_length=50)
    email = models.EmailField(max_length=240, unique=True)
    age = models.PositiveIntegerField(blank=True,null=True )
    work = models.CharField(null = True, blank = True, max_length=50)
    username = models.CharField(null = True, blank = True, max_length=60)
    profile_picture = models.ImageField(upload_to="images/", null=True, blank=True , default='5032667_1.png')
    cover_picture = models.ImageField(upload_to="images/", null=True, blank=True , default='5032667_1.png')
    passwordResetPin = models.PositiveIntegerField(blank=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    def __str__(self):
        return self.email