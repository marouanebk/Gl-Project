from rest_framework.serializers import ModelSerializer , SerializerMethodField
from rest_framework import serializers


from .models import Annonce , Fav , Photo
from base.models import User


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

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
    # author = userSerializer()
    user_info = SerializerMethodField()

    # author = serializers.HyperlinkedRelatedField(view_name='user-detail', read_only=True)

    # created_by = serializers.StringRelatedField()
    uploaded_images = serializers.ListField(
        child = serializers.FileField(max_length = 1000000, allow_empty_file = False, use_url = False),
        write_only = True
    )



    class Meta:
        model = Annonce
        fields = ('id','author','user_info','title','description' ,'category', 'theme','modality','sold','wilaya', 'commune','images' , 'uploaded_images')

    def create(self, validated_data):
        print("*************************************************************************************")
        print("*************************************************************************************")
        print(validated_data)
        print("*************************************************************************************")
        print("*************************************************************************************")

        uploaded_data = validated_data.pop('uploaded_images')
        new_product = Annonce.objects.create( **validated_data)
        for uploaded_item in uploaded_data:
            new_product_image = Photo.objects.create(owner = new_product, image = uploaded_item)
        return new_product

    def get_user_info(self, obj):
        return userSerializer(obj.author).data        
    # def create(self, validated_data):
    #     tracks_data = validated_data.pop('tracks')
    #     album = Annonce.objects.create(**validated_data)
    #     for track_data in tracks_data:
    #         Photo.objects.create(owner=album, **track_data)
    #     return album
