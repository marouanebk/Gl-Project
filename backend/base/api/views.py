from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from base.models import User
from .serializers import userSerializer,registrationSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]
    return Response(routes)


@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = userSerializer(users, many = True)
    return Response(serializer.data)    

@api_view(['POST'])
def registrationView(request):
        serializer = registrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid() :
            user = serializer.save()
            data['response'] = "Successfully registered new user."
            # data['email'] = user.email
            # data['username'] = user.username
        else:
            data = serializer.errors()
        return Response(data)        
