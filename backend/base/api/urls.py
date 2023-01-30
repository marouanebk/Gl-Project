from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes),
    path('register/', views.registrationView, name='register'),
    path('update/<pk>/', views.update_user, name='update'),
    path('update-password/<pk>/', views.update_user_password, name='update'),
    path('forgot-password/<email>/', views.changePasssword, name='forgot password'),
    path('users/', views.getUsers, name='users'),
    path('user/', views.getUserbyEmail, name='user'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]