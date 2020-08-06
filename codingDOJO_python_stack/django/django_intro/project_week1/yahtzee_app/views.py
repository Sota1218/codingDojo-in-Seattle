from django.shortcuts import render, HttpResponse, redirect
from random import randint
from .models import Account
from django.contrib import messages


def index(request):
    if 'current_user' not in request.session:
        request.session['current_user'] = 0
    if request.session['current_user'] != 0:
        return redirect('/lobby')
    return redirect('/login')


def login(request):

    return render(request, 'login.html')


def register(request):
    return render(request, 'register.html')


def login_process(request):
    errors = Account.objects.another_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/login')
    else:
        curr = Account.objects.filter(email=request.POST['email'])
        request.session['current_user'] = curr[0].id
        return redirect('/lobby')


def register_process(request):
    errors = Account.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/register')
    # password = request.POST['r_password']
    # pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    Account.objects.create(first_name=request.POST['r_first_name'], last_name=request.POST['r_last_name'],
                           email=request.POST['r_email'], password=request.POST['r_password'])
    curr = Account.objects.filter(email=request.POST['r_email'])
    request.session['current_user'] = curr[0].id
    return redirect('/lobby')


def lobby(request):
    if request.session['current_user'] == 0:
        return redirect('/')
    return render(request, 'lobby.html')


def game(request):
    if request.session['current_user'] == 0:
        return redirect('/')
    list1 = [randint(1, 6), randint(1, 6), randint(
        1, 6), randint(1, 6), randint(1, 6)]
    context = {
        "num1": f"/static/imgs/dice{list1[0]}.png",
        "num2": f"/static/imgs/dice{list1[1]}.png",
        "num3": f"/static/imgs/dice{list1[2]}.png",
        "num4": f"/static/imgs/dice{list1[3]}.png",
        "num5": f"/static/imgs/dice{list1[4]}.png",
    }
    pair1 = 0
    pair2 = 0
    pair3 = 0
    pair4 = 0
    pair5 = 0
    pair6 = 0
    for i in range(5):
        if list1[i] == 1:
            pair1 += 1
        if list1[i] == 2:
            pair2 += 1
        if list1[i] == 3:
            pair3 += 1
        if list1[i] == 4:
            pair4 += 1
        if list1[i] == 5:
            pair5 += 1
        if list1[i] == 6:
            pair6 += 1
    for i in range(6)
    return render(request, 'game.html', context)


def probability(request):
    return render(request, 'probability.html')


def log_out(request):
    request.session['current_user'] = 0
    return redirect('/login')
