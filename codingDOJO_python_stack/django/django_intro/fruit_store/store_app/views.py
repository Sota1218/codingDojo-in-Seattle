from django.shortcuts import render,redirect
from time import gmtime, strftime
def index(request):
    return render(request,'index.html')
def buy(request):
    request.session["Straw_Q"]=int(request.POST['Strawberry'])
    request.session["Rosp_Q"]=int(request.POST['Rospberry'])
    request.session["Apple_Q"]=int(request.POST['Apple'])
    request.session["name"]=request.POST['name']
    request.session["ID"]=request.POST['ID']
    sum=request.session["Straw_Q"]+request.session["Rosp_Q"]+request.session["Apple_Q"]
    request.session["sum"]=sum
    return redirect('/checkout')
def result(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
    }

    return render(request,'checkout.html',context)
    

    
