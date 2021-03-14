from django.shortcuts import render
from .models import *


def tasks(request):
    tests = task.objects.all()
    return render(request, 'task/tasks.html', {'tests': tests})


def create(request):
    return render(request, 'task/create.html')