from django.urls import path
from . import views


urlpatterns = [
    path('', views.tasks, name='tasks'),
    path('create', views.create, name='create'),
    path('<int:pk>', views.TasksDetailView.as_view(), name='task-detail'),
    path('<int:pk>/check', views.DefinitionsView.as_view(), name='task-detail2'),
]
