from django.db import models

# Create your models here.
class dojos(models.Model):
    name=models.CharField(max_length=225)
    city=models.CharField(max_length=225)
    state=models.CharField(max_length=2)
    desc=models.TextField()
    

class ninjas(models.Model):
    dojo=models.ForeignKey(dojos,related_name="ninja",on_delete=models.CASCADE)
    first_name=models.CharField(max_length=225)
    last_name=models.CharField(max_length=225)