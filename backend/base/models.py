from django.db import models
from django.contrib.auth.models import AbstractUser

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class User(AbstractUser):
    phone = models.IntegerField(null=True, blank=True)
    address = models.CharField(null=True, blank=True, max_length=50)
    email = models.EmailField(max_length=240, unique=True)
    age = models.PositiveIntegerField(blank=True,null=True )
    work = models.CharField(null = True, blank = True, max_length=50)
    username = models.CharField(null = True, blank = True, max_length=60)
    profile_picture = models.ImageField(upload_to=upload_to, null=True, blank=True , default='/images/default.jpg')
    cover_picture = models.ImageField(upload_to=upload_to, null=True, blank=True , default='/images/default.jpg')
    passwordResetPin = models.PositiveIntegerField(blank=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    def __str__(self):
        return self.email