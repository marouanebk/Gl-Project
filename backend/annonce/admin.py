from django.contrib import admin

# Register your models here.

from .models import Annonce , Adress


admin.site.register(Annonce)
admin.site.register(Adress)
