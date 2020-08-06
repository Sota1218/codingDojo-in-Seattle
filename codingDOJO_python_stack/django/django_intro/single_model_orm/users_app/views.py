from django.shortcuts import render,redirect
from .models import User
# Create your views here.
def index(request):
    context={
        'users':User.objects.all(),
    }
    return render(request,"index.html",context)
def add(request):
    f=request.POST['first_name']
    l=request.POST['last_name']
    e=request.POST['email']
    a=request.POST['age']
    User.objects.create(first_name=f,last_name=l,email_address=e,age=a)
    return redirect('/')