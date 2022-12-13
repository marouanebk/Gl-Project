from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Annonce
from .serializers import AnnonceSerializer
from annonce import serializers
from .utils import updateAnnonce, getAnnonceDetail, deleteAnnonce, getAnnoncesList, createAnnonce
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


