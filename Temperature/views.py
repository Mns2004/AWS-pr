from django.shortcuts import render

# Create your views here.from django.shortcuts


def index(request):
    return render(request,'index.html')
