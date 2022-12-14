from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('annonces/', views.getAnnonces, name="annonces"),
    # path('annonces/<str:pk>/', views.getAnnonce, name="annonces"),
    # get by id 
    # path('annonces/search/keyword=<str:name>/', views.getAnnounceByName, name="annonces"),
    path('annonces/custom/', views.AnnonceSearch.as_view(), name="search"),
]
