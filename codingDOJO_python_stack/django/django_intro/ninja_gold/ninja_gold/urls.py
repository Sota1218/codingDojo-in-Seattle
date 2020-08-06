from django.urls import path, include
from ninja_gold_app import views

urlpatterns = [
    path('', include('ninja_gold_app.urls')),
]