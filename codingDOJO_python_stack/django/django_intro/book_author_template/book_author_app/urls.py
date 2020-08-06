from django.urls import path
from . import views
urlpatterns=[
    path('',views.index),
    path('new_book', views.new_book),
    path('books/<int:id>', views.show_book),
    path('add_author/<int:id>', views.add_author),
    path('authors', views.show_authors),
    path('authors/<int:id>', views.author_info),
    path('new_author', views.new_author),
    path('add_book/<int:id>', views.add_book),
]    