from django.shortcuts import render, HttpResponse, redirect
from time import gmtime,strftime
import random

def index(request):
    if 'total' not in request.session:
        request.session['total']=0
    if 'activities' not in request.session:    
        request.session['activities'] = []
    return render(request,'index.html')

def process_money(request):
    request.session['time']= strftime("%Y-%m-%d %H:%M %p", gmtime())
    if 'farm0' in request.POST:
        request.session['money'] = random.randint(10,20)
        request.session['total'] += request.session['money']
        request.session['activities'].append('Earned'+str(request.session['money'])+'golds from the farm!'+' ('+str(request.session['time'])+')')

    elif 'farm1' in request.POST:
        request.session['money'] = random.randint(5,10)
        request.session['total'] += request.session['money']
        request.session['activities'].append('Earned'+str(request.session['money'])+'golds from the Cave!'+' ('+str(request.session['time'])+')')
    elif 'farm2' in request.POST:
        request.session['money'] = random.randint(2,5)
        request.session['total'] += request.session['money']
        request.session['activities'].append('Earned'+str(request.session['money'])+'golds from the House!'+' ('+str(request.session['time'])+')')
    elif 'farm3' in request.POST:
        request.session['money'] = random.randint(-50,50)
        request.session['total'] += request.session['money']
        if request.session['money'] >=0:
            request.session['activities'].append('Earned'+str(request.session['money'])+'golds from the Casino!'+' ('+str(request.session['time'])+')')
        else:
            request.session['money']*=-1
            request.session['activities'].append('Entered a casino and lost '+str(request.session['money'])+'golds... Ouch....'+' ('+str(request.session['time'])+')')
            
    else:
        request.session['total'] = 0
        request.session['activities']=[]

    return redirect('/')