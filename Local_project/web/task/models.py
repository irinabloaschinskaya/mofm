from django.db import models


class task(models.Model):
    title = models.CharField('Название', max_length=50)
    definitions = models.TextField('Определения')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Определение'
        verbose_name_plural = 'Определения'
