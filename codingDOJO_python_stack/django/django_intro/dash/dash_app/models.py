from __future__ import unicode_literals
from django.db import models
from login_app.models import User
# Create your models here.


class TripManager(models.Manager):
    def trip_check(self, postData):
        errors = {}

        if len(postData['dest']) < 3:
            errors['dest'] = 'Destination name is should be at least 2 characters'
        if len(postData['plan']) < 2:
            errors['plan'] = 'A plan must be provided!! Fuck!!!'

        return errors


class Trip(models.Model):
    users = models.ManyToManyField(User, related_name='trips')
    dest = models.CharField(max_length=225)
    start_date = models.DateField()
    end_date = models.DateField()
    plan = models.CharField(max_length=225)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = TripManager()
