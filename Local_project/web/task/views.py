from django.shortcuts import render, redirect
from .models import *
from .forms import taskForm
from django.views.generic import DetailView


def tasks(request):
    tests = task.objects.all()
    return render(request, 'task/tasks.html', {'tests': tests})


class DefinitionsView(DetailView):
    model = task
    template_name = 'task/definitions.html'
    context_object_name = 'task'


class TasksDetailView(DetailView):
    model = task
    template_name = 'task/detailview.html'
    context_object_name = 'task'


def create(request):
    error = ''
    if request.method == 'POST':
        form = taskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            error = 'Форма была неверной'

    form = taskForm()
    data = {
        'form': form,
        'error': error
    }
    return render(request, 'task/create.html', data)
