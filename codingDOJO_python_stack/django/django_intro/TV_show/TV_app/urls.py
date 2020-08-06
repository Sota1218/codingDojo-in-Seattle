from django.urls import path
from . import views

urlpatterns=[
    path('shows',views.shows),
    path('shows/new',views.new),
    path('create',views.create),
    path('shows/<int:id>',views.one_show),
    path('delete/<int:id>',views.delete),
    path('shows/<int:id>/edit',views.edit),
    path('edit/<int:id>',views.editing),
]
