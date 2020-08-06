from django.shortcuts import render,redirect
from .models import Item 
import math
def index(request):
    item_list=Item.objects.all()
    context={
        'Items' : item_list
    }
    return render(request,'index.html',context)


def buy(request):
    if 'total' not in request.session:
        request.session['total']=0
    if 'count' not in request.session:
        request.session['count']=0
    
    result=int(request.POST['quantity'])*float(request.POST['price'])
    request.session['result']=result
    request.session['total']+=float(request.session['result'])
    request.session['count']+=math.floor(int(request.POST['quantity']))
    
    return render(request,'checkout.html')