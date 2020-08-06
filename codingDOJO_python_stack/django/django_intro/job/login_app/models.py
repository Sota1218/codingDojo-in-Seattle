from __future__ import unicode_literals
from django.db import models
import re
import bcrypt
# Create your models here.


class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}

        if len(postData['first_name']) < 2:
            errors['first_name'] = 'First name is should be at least 2 characters'
        if len(postData['last_name']) < 2:
            errors['last_name'] = 'Last name is should be at least 2 characters'
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email address!"
        e = User.objects.filter(email=postData['email'])
        if len(e) != 0:
            errors['email'] = ' This email address is used!'
        if len(postData['password']) < 8:
            errors['password'] = 'Password is should be at least 8 characters'
        return errors

    def login_error(self, postData):
        errors = {}
        u = User.objects.filter(email=postData['email_log'])

        if len(u) == 0:
            errors['email_log'] = 'No!!!!!!!!!You should make an account'

        else:
            log_user = u[0]
            if not bcrypt.checkpw(postData['password_log'].encode(), log_user.password.encode()):
                print("incorrect pw")
                errors['password_log'] = 'Not match!'
                print(errors['password_log'])
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=225)
    last_name = models.CharField(max_length=225)
    email = models.CharField(max_length=225)
    password = models.CharField(max_length=225)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
