from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
from dash_app.models import *
import bcrypt
Trip.objects.order_by("-created_at")


def index(request):
    return render(request, 'login_app/login.html')


def register(request):
    errors = User.objects.basic_validator(request.POST)
    request.session['name'] = request.POST['first_name']
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
        return redirect('/dashboard')


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
        return redirect('/dashboard')


def logout(request):
    request.session.flush()
    return redirect('/')


def dash(request):
    if 'user_name' not in request.session:
        return redirect('/')
    else:
        user = User.objects.get(id=request.session['user_id'])
        l = User.objects.all()
        new_l = []
        for i in l:
            if i.id != request.session['user_id']:
                new_l.append(i)

        context = {
            'user_trips': user.trips,
            'users': User.objects.all(),
            'trips': Trip.objects.all(),
            'other_users': new_l


        }
        return render(request, 'login_app/dash.html', context)
