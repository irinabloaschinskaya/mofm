from .models import task
from django.forms import ModelForm, TextInput, Textarea


class taskForm(ModelForm):
    class Meta:
        model = task
        fields = ['title', 'themes', 'definitions', 'theory']

        widgets = {
            'title': TextInput(attrs={
                'placeholder': "Название теста",
                'class': "form-control",
                "maxlength": "50"
            }),
            'themes': TextInput(attrs={
                'placeholder': "Темы теста",
                'class': "form-control",
                "maxlength": "50"
            }),
            'definitions': Textarea(attrs={
                'placeholder': "Определения",
                'class': "form-control",
                'rows': "10"
            }),
            'theory': Textarea(attrs={
                'placeholder': "Теория(необязательно)",
                'class': "form-control",
                'rows': "10",
                'value': 'без теории'
            })
        }
