from django.shortcuts import render,redirect
from django.contrib import messages
from .models import User
import bcrypt
# Create your views here.
def index(request):
    return render(request,'index.html')
def register(request):
    print(request.POST)
    errors=User.objects.basic_validator(request.POST)
    #request.session['name']=request.POST['first_name']
    if len(errors) > 0 :
        for value in errors.items():
            messages.error(request,value)
        return redirect('/')
    else:    
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        User.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],email=request.POST['email'],password=pw_hash)
        return redirect('/success')

def login(request):
    u=User.objects.filter(email=request.POST['email_log'])
    if u:
        logged_user = u[0]
        if bcrypt.checkpw(request.POST['password_log'].encode(),logged_user.password.encode()):
            request.session['user_name']=logged_user.first_name
            return redirect('/success')
    return redirect('/')

def success(request):
    return render(request,'success.html')