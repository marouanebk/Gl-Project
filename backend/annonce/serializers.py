from rest_framework.serializers import ModelSerializer
from .models import Annonce


class AnnonceSerializer(ModelSerializer):
    class Meta:
        model = Annonce
        fields = '__all__'
