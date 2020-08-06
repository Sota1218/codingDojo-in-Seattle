from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
from book_app.models import *
import bcrypt


def index(request):
    return render(request, 'login_app/login.html')


def register(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        a = User.objects.create(
            first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=pw_hash)
        request.session['user_id'] = a.id
        request.session['user_name'] = request.POST['first_name']
        return redirect('/books')


def login(request):
    errors = User.objects.login_error(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        u = User.objects.get(email=request.POST['email_log'])
        request.session['user_name'] = u.first_name
        request.session['user_id'] = u.id
        return redirect('/books')


def logout(request):
    request.session.flush()
    return redirect('/')
