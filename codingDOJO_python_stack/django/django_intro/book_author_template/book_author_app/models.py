from django.db import models

# Create your models here.
class Book(models.Model):
    title=models.CharField(max_length=225)
    desc=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
class Author(models.Model):
    first_name=models.CharField(max_length=225)
    last_name=models.CharField(max_length=225)
    notes=models.TextField(null=True)
    books=models.ManyToManyField(Book,related_name='Authors')
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)