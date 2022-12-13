from rest_framework.response import Response
from .models import Annonce
from .serializers import AnnonceSerializer


def getAnnoncesList(request):
    notes = Annonce.objects.all().order_by('-updated')
    serializer = AnnonceSerializer(notes, many=True)
    return Response(serializer.data)


def getAnnonceDetail(request, pk):
    notes = Annonce.objects.get(id=pk)
    serializer = AnnonceSerializer(notes, many=False)
    return Response(serializer.data)


def createAnnonce(request):
    data = request.data
    note = Annonce.objects.create(
        body=data['body'],
        title=data['title']

    )
    serializer = AnnonceSerializer(note, many=False)
    return Response(serializer.data)

def updateAnnonce(request, pk):
    data = request.data
    note = Annonce.objects.get(id=pk)
    serializer = AnnonceSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data


def deleteAnnonce(request, pk):
    note = Annonce.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')
