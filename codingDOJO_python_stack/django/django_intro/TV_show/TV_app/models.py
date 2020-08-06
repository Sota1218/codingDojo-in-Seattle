from __future__ import unicode_literals
from django.db import models

class TV_showsManager(models.Manager):
    def basic_validator(self,postData):
        errors = {}
        
        if len(postData['title']) < 2:
            errors['title'] = 'Title is should be at least 2 characters'
        if len(postData['network']) < 3:
            errors['network'] = 'Network name is should be at least 3 characters'
        if len(postData['desc']) < 10:
            errors['desc'] = 'Please write at least 5 characters in discription'
        return errors

class TV_shows(models.Model):
    title=models.CharField(max_length=225)
    network=models.CharField(max_length=20)
    release_date=models.DateField()
    desc=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    objects = TV_showsManager()