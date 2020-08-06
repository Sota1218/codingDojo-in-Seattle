from django.shortcuts import render, redirect
from .models import Text
# Create your views here.


def index(request):
    return render(request, 'index.html')


def aaa(request):
    Text.objects.create(text=request.POST['aaa'])
    return redirect('/sss')


def sss(request):
    context = {
        'text_all': Text.objects.all(),
    }
    return render(request, 'sss.html', context)
