from rest_framework import serializers
from base.models import User


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class registrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields = '__all__'
    def save(self):
        user = User(
            email=self.validated_data['email'],
            username=self.validated_data['username'],
            address = self.validated_data['address'],
            first_name=self.validated_data['first_name'],
            last_name=self.validated_data['last_name'],

            
        )
        password = self.validated_data['password']        
        password2 = self.validated_data['password2']
        if password != password2 :
            return serializers.ValidationError({'password':'Passwords must match.'})   
        user.set_password(password) 
        user.save()
        return user

class updateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name','address','phone']
    def save(self):
        first_name=self.validated_data['first_name']
        last_name=self.validated_data['last_name']
        phone  = self.validated_data['phone']
        address = self.validated_data['address']
        age = self.validated_data['age']
        work = self.validated_data['work']
        if(first_name is not null):
            user.first_name = first_name
        if(last_name is not null):
            user.last_name = last_name
        if(Nationality is not null):
            user.address = address
        if(phone is not null):
            user.phone = phone
        user.save()    

