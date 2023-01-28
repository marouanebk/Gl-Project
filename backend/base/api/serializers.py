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
            phone  = self.validated_data['phone'],
            Nationality = self.validated_data['Nationality'],
            age = self.validated_data['age'],
        )
        password = self.validated_data['password']        
        password2 = self.validated_data['password2']
        if password != password2 :
            return serializers.ValidationError({'password':'Passwords must match.'})   
        user.set_password(password)  
        user.save()
        return user 