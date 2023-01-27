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
        # fields = ('id' , 'owner' , 'image')
        fields = ('id','image')
        depth = 1

class AnnonceSerializer(serializers.ModelSerializer):
    # photos = serializers.StringRelatedField(many=True)
    images = PhotoSerializer(many = True , read_only=True)
    uploaded_images = serializers.ListField(
        child = serializers.FileField(max_length = 1000000, allow_empty_file = False, use_url = False),
        write_only = True
    )



    class Meta:
        model = Annonce
        fields = ('id','title','description' ,'category', 'theme','modality','sold','wilaya', 'commune','images' , 'uploaded_images')

    def create(self, validated_data):
        uploaded_data = validated_data.pop('uploaded_images')
        new_product = Annonce.objects.create(**validated_data)
        for uploaded_item in uploaded_data:
            new_product_image = Photo.objects.create(owner = new_product, image = uploaded_item)
        return new_product

    # def create(self, validated_data):
    #     tracks_data = validated_data.pop('tracks')
    #     album = Annonce.objects.create(**validated_data)
    #     for track_data in tracks_data:
    #         Photo.objects.create(owner=album, **track_data)
    #     return album
