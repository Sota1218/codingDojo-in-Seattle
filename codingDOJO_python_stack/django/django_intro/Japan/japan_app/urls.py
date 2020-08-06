from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('aaa', views.aaa),
    path('sss', views.sss),
]
