from django.urls import path , include
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers
from rest_framework_swagger.views import get_swagger_view
from rest_framework.schemas import get_schema_view


router = routers.DefaultRouter()

router.register("products", views.AnnonceViewSet )
# router.register("products", views.AnnonceViewSet )



urlpatterns = [
    # path('', views.getRoutes, name="routes"),


    path("", include(router.urls) , name = "products" ),

    path('annonces/', views.getAnnonces, name="annonces"),
    path('annonces/detail/<str:pk>/', views.getAnnonce, name="annonces"),
    # get by id 
    # path('annonces/search/keyword=<str:name>/', views.getAnnounceByName, name="annonces"),
    path('annonces/custom/', views.AnnonceSearch.as_view(), name="search"),
    path('favorites/<int:user_id>/', views.getFavorites, name="favorites_get"),
    path('favorites/', views.createFavoriteRequest, name="create_favorite"),
    path('user/<int:user_id>/', views.getUserAnnonces, name="user_annonces"),
    path('all/', views.WithImages.as_view(), name="WithImages"),
    # path('annonce-docs', get_schema_view(
    #     title="Your Project",
    #     description="API for all things …"
    # ), name='annonce-docs'),

    
]
