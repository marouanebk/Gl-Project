from django.db import models

# Create your models here.


class Annonce(models.Model):
    title = models.CharField(max_length=20,blank=True)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    adr = models.ForeignKey("Adress", verbose_name=("Adress"), on_delete=models.CASCADE , null = True)


    def __str__(self):
        return self.title


class Adress(models.Model):
    wilaya = models.CharField(max_length=20,blank=True, null = True)
    commune = models.CharField(max_length=20,blank=True, null = True)


    def __str__(self):
        return self.commune + " " +self.wilaya