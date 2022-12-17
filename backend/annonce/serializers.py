from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import Annonce , Fav , Photo




class FavSerializer(ModelSerializer):
    class Meta:
        model = Fav
        fields = '__all__'


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo 
        fields = '__all__'
        depth = 1

class AnnonceSerializer(serializers.ModelSerializer):
    # photos = serializers.RelatedField(many=True ,read_only=True,)
    # tracks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # images = PhotoSerializer(many = True)
    # tracks = serializers.SlugRelatedField(many=True, read_only=True,slug_field='desc')
    # tracks = serializers.SlugRelatedField(
    #     many=True,
    #     read_only=True,
    #     slug_field='desc'
    # )
    photos = serializers.StringRelatedField(many=True)



    class Meta:
        model = Annonce
        fields = ('title','body' ,'created' ,'photos')

    # def create(self, validated_data):
    #     tracks_data = validated_data.pop('tracks')
    #     album = Annonce.objects.create(**validated_data)
    #     for track_data in tracks_data:
    #         Photo.objects.create(owner=album, **track_data)
    #     return album
