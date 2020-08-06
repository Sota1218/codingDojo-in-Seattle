from django.shortcuts import render,redirect
from .models import Dojos,Ninjas
# Create your views here.
def index(request):
    context={
        'dojos':Dojos.objects.all(),
        'Ninjas':Ninjas.objects.all(),
    }
    return render(request,'index.html',context)
def add(request):
    dn=request.POST['dojo_name']
    dc=request.POST['dojo_city']
    ds=request.POST['dojo_state']
    nf=request.POST['ninja_first_name']
    nl=request.POST['ninja_last_name']
    nd=request.POST['ninja_dojo']
    Dojos.objects.create(name=dn,city=dc,state=ds)
    Ninjas.objects.create(dojo=nd,first_name=nf,last_name=nl)
    return redirect('/')