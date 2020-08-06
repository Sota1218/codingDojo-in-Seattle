from django.shortcuts import render,redirect
from dash_app.models import Message,Comment
from login_app.models import User
# Create your views here.
def wall(request):
    Message.objects.order_by('-created_at')
    context={
        'messages':Message.objects.all().order_by('-created_at'),
        'comments':Comment.objects.all(),
        'users':User.objects.all()

    }
    return render(request,'wall_app/posts.html',context)
def message(request):
    Message.objects.create(user=User.objects.get(id=request.session['user_id']),message=request.POST['message'])
    
    return redirect('/dashboard/')


def comment(request):
    Comment.objects.create(user=User.objects.get(id=request.session['user_id']),message=Message.objects.get(id=request.POST['message_id']),comment=request.POST['comment'])
    return redirect('/dashboard/')
    