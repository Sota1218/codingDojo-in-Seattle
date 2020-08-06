from django.shortcuts import render
from time import gmtime
from datetime import datetime,date
    
def index(request):
    now = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    context = {
        "time":datetime.strptime(now,"%Y/%m/%d %H:%M:%S")
    }
    return render(request,'index.html', context)
now = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
time = datetime.strptime(now,"%Y/%m/%d %H:%M:%S")
print(time)
