from django.db import models

# Create your models here.
class User(models.Model):
    first_name=models.CharField(max_length=225)
    last_name=models.CharField(max_length=225)
    email_address=models.CharField(max_length=225)
    age=models.IntegerField()
    creates_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)