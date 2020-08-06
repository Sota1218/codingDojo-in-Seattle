from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_books),
    path('add', views.add),
]
