from django.db import models

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=225)
    price = models.DecimalField(decimal_places=2,max_digits=10)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
