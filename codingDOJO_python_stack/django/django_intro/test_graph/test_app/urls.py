from django.urls import path
from . import views
app_name = 'test_app'
urlpatterns = [
    path('analysis', views.analysis_screen, name='analysis_screen'),
    path('analysis/plot', views.img_plot, name="img_plot"),
]
