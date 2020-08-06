from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('login', views.login),
    path('login/process', views.login_process),
    path('register', views.register),
    path('register/process', views.register_process),
    path('lobby', views.lobby),
    path('game', views.game),
    path('probability', views.probability),
    path('log_out', views.log_out),
]
