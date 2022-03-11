from .models import Lead
from .serializers import LeadSerializer
from rest_framework import generics
from django.shortcuts import render

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer



def index(request):
    return render(request, "djangoapp/index.html")
