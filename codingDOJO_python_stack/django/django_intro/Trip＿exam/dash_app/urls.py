from django.urls import path
from . import views

urlpatterns=[
    path('',views.wall),
    path('message',views.message),
    path('comment',views.comment),
    
]