from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from base.models import User
from .serializers import userSerializer,registrationSerializer
from rest_framework.generics import UpdateAPIView
from django.core.mail import send_mail
from random import randint

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['email'] = user.email
        token['address'] = user.address
        token['phone'] = user.phone
        token['age'] = user.age
        token['work'] = user.work
        token['profile_picture'] = user.profile_picture.url
        token['cover_picture'] = user.cover_picture.url
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/authApi/token',
        '/authApi/token/refresh',
    ]
    return Response(routes)


@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = userSerializer(users, many = True)
    return Response(serializer.data)    
@api_view(['POST'])
def getUserbyEmail(request):
    user = User.objects.get(email=request.data['email'])
    serializer = userSerializer(user, many = False)
    return Response(serializer.data)    

@api_view(['POST'])
def registrationView(request):
        serializer = registrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid() :
            user = serializer.save()
            data['response'] = "Successfully registered new user."
            data['email'] = user.email
            data['username'] = user.username
        else:
            print('serializer not valid')    
        
        return Response(data)

             
@api_view(['PUT','GET'])
def update_user(request, pk):
    if request.method == 'GET':
        users = User.objects.get(id = pk)
        serializer = userSerializer(users, many = False)
        return Response(serializer.data) 

    if request.method == 'PUT':
        user = User.objects.get(id = pk)
        try : 
            user.last_name = request.data['last_name']
        except:
            print()
        try : 
            user.first_name = request.data['first_name']
        except:
            print()
        try:        
            user.phone = request.data['phone']
        except:
            print()
        try:        
            user.address = request.data['address']
        except:
            print()
        try:        
            user.work = request.data['work']
        except:
            print()
        try:        
            user.age = request.data['age']
        except:
            print()
        try:        
            user.profile_picture = request.data['profile_pic']
        except:
            print()
        try:        
            user.cover_picture = request.data['cover_pic']
        except:
            print()

        
        user.save()
        serializer = userSerializer(user, many = False)
        return Response(serializer.data)
@api_view(['PUT','GET'])
def update_user_password(request, pk):
    if request.method == 'GET':
        users = User.objects.get(email = pk)
        serializer = userSerializer(users, many = False)
        return Response(serializer.data) 

    if request.method == 'PUT':
        user = User.objects.get(email = pk)
        try : 
            user.set_password(request.data['password'])
        except:
            print()   
        user.save()
        serializer = userSerializer(user, many = False)
        return Response(serializer.data)

@api_view(['POST','GET'])
def changePasssword(request,email):
    if request.method == 'GET':
        users = User.objects.get(email = email)
        serializer = userSerializer(users, many = False)
        return Response(serializer.data)
    else :     
        print(email)
        verify = User.objects.get(email=email)
        print(verify.email)
        if verify:
            otp = randint(100000,999999)
            verify.passwordResetPin = otp
            verify.save()
            
            #link=f"http://localhost:5173/ForgotPassword/{verify.id}"
            send_mail('Reset password', f"this is your password reset pin {otp}", 'mi.mouh111@gmail.com', [verify.email])
            return JsonResponse({"this is the email":email})
        else:
            return JsonResponse({"email found":False})
