from django.db import models
from login_app.models import User
# Create your models here.


class Job(models.Model):
    created_by = models.ForeignKey(
        User, related_name='update_jobs', on_delete=models.CASCADE)
    join_users = models.ManyToManyField(User, related_name='join_jobs')
    name = models.CharField(max_length=255)
    desc = models.TextField()
    location = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
