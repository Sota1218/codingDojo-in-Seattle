from django.shortcuts import render, redirect
from .models import Book
from login_app.models import User
# Create your views here.


def all_books(request):
    context = {
        'all_books': Book.objects.all(),
    }
    return render(request, 'book_app/book.html', context)


def add(request):
    upload_user = User.objects.get(id=request.session['user_id'])
    Book.objects.create(
        title=request.POST['title'], desc=request.POST['desc'], uploaded_by=upload_user)
    return redirect('/books')
