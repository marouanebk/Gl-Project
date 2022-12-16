from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Annonce
from .serializers import AnnonceSerializer
from annonce import serializers
from .utils import updateAnnonce, getAnnonceDetail, deleteAnnonce, getAnnoncesList, createAnnonce , getAnnounceByName
from django.shortcuts import get_object_or_404
from rest_framework import filters , generics
# from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.


@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/annonces/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of annonces'
        },
        {
            'Endpoint': '/annonces/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single Annonce object'
        },
        {
            'Endpoint': '/search/keyword=name',

            'method': 'GET',
            'body': None,
            'description': 'Returns annonces by name '
        },
        {
            'Endpoint': '/annonces/create/',
            'method': 'POST',
            'body': {'body': "" , 'title': ""},
            'description': 'Creates new Annonce with data sent in post request'
        },
        {
            'Endpoint': '/annonces/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing Annonce with data sent in post request'
        },
        {
            'Endpoint': '/annonces/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting Annonce'
        },
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
def getAnnonces(request):

    if request.method == 'GET':
        return getAnnoncesList(request)

    if request.method == 'POST':
        return createAnnonce(request)


@api_view(['GET', 'PUT', 'DELETE'])
def getAnnonce(request, pk):

    if request.method == 'GET':
        return getAnnonceDetail(request, pk)

    if request.method == 'PUT':
        return updateAnnonce(request, pk)

    if request.method == 'DELETE':
        return deleteAnnonce(request, pk)

@api_view(['GET'])
def getAnnounceByNameView(request, name):

    return getAnnounceByName(request, name)


class AnnonceSearch(generics.ListAPIView):
    # permission_classes = [AllowAny]
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    filter_backends = [filters.SearchFilter]
    # DjangoFilterBackend
    search_fields = ['^title' ]
    filterset_fields = ["body", "created"]

# http://127.0.0.1:8000/api/annonces/custom/?search=second&body=testing+df
# http://127.0.0.1:8000/api/annonces/custom/?search=second&created=2022-12-13T22:24:26.615288Z
# http://127.0.0.1:8000/api/annonces/custom/?search=second&created__get2022-12-13T00:00:00.000000Z