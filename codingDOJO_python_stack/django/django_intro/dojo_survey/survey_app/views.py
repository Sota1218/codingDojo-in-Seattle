from django.shortcuts import render,redirect
def index(request):
    # this is the route that shows the form
    return render(request,"index.html")
def create_user(request):
    print("Got Post Info....................")
    name_from_form = request.POST['name']
    location_from_form = request.POST['location']
    language_from_form = request.POST['language']
    comment_from_form = request.POST['comment']
    print(name_from_form)
    print(language_from_form)
    print(location_from_form)
    print(comment_from_form)
    
    request.session["name_on_template"] = name_from_form
    request.session["location_on_template"]= location_from_form
    request.session["language_on_template" ]= language_from_form
    request.session["comment_on_template"] = comment_from_form
        
    
    return redirect('/result')
def result(request):
    return render(request,"result.html")
def again(request):
    val=0
    val+=1
    return redirect('/<int:val>')    
