from django.shortcuts import render,redirect
from django.contrib import messages
from .models import TV_shows
# Create your views here.
def shows(request):
    shows_list=TV_shows.objects.all()
    context={
        'shows':shows_list
    }
    return render(request,'index.html',context)

def new(request):
    return render(request,'add_show.html')    

def create(request):
        errors=TV_shows.objects.basic_validator(request.POST)

        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request,value)
            return redirect('/shows/new')
        else:
            a=TV_shows.objects.create(title=request.POST['title'],network=request.POST['network'],release_date=request.POST['release_date'],desc=request.POST['desc'])
            return redirect(f'shows/{a.id}')        
        

def one_show(request,id):
    context={
        'id':id,
        'one_show':TV_shows.objects.get(id=int(id)),
        'all_shows':TV_shows.objects.all()
    }
    return render(request,'read_one.html',context)

def delete(request,id):
    delete_show=TV_shows.objects.get(id=int(id))
    delete_show.delete()
    return redirect(f'/shows')

def edit(request,id):
    context={
        'id':int(id),
        'one_show':TV_shows.objects.get(id=int(id)),
        'all_shows':TV_shows.objects.all()
    }
    return render(request,'edit.html',context)
def editing(request,id):
    errors=TV_shows.objects.basic_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request,value)
        return redirect(f'/shows/{id}/edit')
    else:
        edition=TV_shows.objects.get(id=int(id))
        edition.title=request.POST['title']
        edition.network=request.POST['network']
        edition.release_date=request.POST['release_date']
        edition.desc=request.POST['desc']
        edition.save()
        return redirect('/shows')
