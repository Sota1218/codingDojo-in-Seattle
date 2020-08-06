from django.urls import path
from . import views

urlpatterns = [
    path('new', views.new),
    path('submit', views.submit),
    path('<int:id>', views.detail),
    path('edit/<int:id>', views.edit),
    path('edit_result/<int:id>', views.edit_result),
    path('remove/<int:id>', views.remove),
    path('join/<int:id>', views.join),

]
