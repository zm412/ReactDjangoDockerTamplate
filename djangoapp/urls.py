from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('api/lead/', views.LeadListCreate.as_view() ),
]

