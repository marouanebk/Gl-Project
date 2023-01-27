from django.db import models

# Create your models here.


class Annonce(models.Model):
    title = models.CharField(max_length=20,blank=True)
    description = models.TextField(null=False, blank=False)
    category = models.TextField(null=False, blank=False)
    theme = models.TextField(null=False, blank=False)
    modality = models.TextField(null=False, blank=False)
    sold = models.IntegerField(null=False, blank=False)
    wilaya = models.TextField(null=False, blank=False)
    commune = models.TextField(null=False, blank=False)


    created = models.DateTimeField(auto_now_add=True)
    # adr = models.ForeignKey("Adress", verbose_name=("Adress"), on_delete=models.CASCADE , null = True )


    def __str__(self):
        return self.title

class Photo(models.Model):
    owner = models.ForeignKey("annonce", related_name=("images"), on_delete=models.CASCADE)
    # desc = models.CharField( max_length=50)
    image = models.ImageField(upload_to="img",  null = True , blank = True)
    # def __str__(self):
    #     return 



class Adress(models.Model):
    wilaya = models.CharField(max_length=20,blank=True, null = True)
    commune = models.CharField(max_length=20,blank=True, null = True)


    def __str__(self):
        return self.commune + " " +self.wilaya

class Person(models.Model):
    fname = models.CharField(max_length=20,blank=True)

    def __str__(self):
        return self.fname



class Fav(models.Model):
    liker = models.ForeignKey("Person", verbose_name=("Person"), on_delete=models.CASCADE)
    ad  = models.ForeignKey("Adress", verbose_name=("Annonce"), on_delete=models.CASCADE)

    def __str__(self):
        return self.liker.fname+" "+self.ad.title

    class Meta:
       unique_together = ("liker", "ad")


