from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
from login_app.models import User
# Create your views he


def new(request):
    if 'user_name' not in request.session:
        return redirect('/')
    else:
        return render(request, 'job_app/new.html')


def submit(request):
    errors = Trip.objects.trip_check(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/jobs/new')
    else:
        user = User.objects.get(id=request.session['user_id'])
        Trip.objects.create(updated_user=user, dest=request.POST['dest'], start_date=request.POST['SD'],
                            end_date=request.POST['ED'], plan=request.POST['plan'])
        tr = Trip.objects.get(plan=request.POST['plan'])
        tr.users.add(user)
        return redirect('/dashboard')


def detail(request, id):
    if 'user_name' not in request.session:
        return redirect('/')
    else:
        context = {
            'trip': Job.objects.get(id=id),
        }
        return render(request, 'job_app/view.html', context)


def edit(request, id):
    if 'user_name' not in request.session:
        return redirect('/')
    else:
        trip = Trip.objects.get(id=id)
        context = {
            'trip': trip,
        }
        return render(request, 'job_app/edit.html', context)


def edit_result(request, id):
    errors = Trip.objects.trip_check(request.POST)
    trip = Trip.objects.get(id=id)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f'/jobs/edit/{id}')
    else:
        trip.dest = request.POST['dest']
        trip.start_date = request.POST['SD']
        trip.ens_date = request.POST['ED']
        trip.plan = request.POST['plan']
        trip.save()
        return redirect('/dashboard')


def remove(request, id):
    d = Job.objects.get(id=id)
    d.delete()
    return redirect('/dashboard')


def join(request, id):

    t = Job.objects.get(id=id)
    u = User.objects.get(id=request.session['user_id'])
    u.join_jobs.add(t)
    return redirect('/dashboard')
