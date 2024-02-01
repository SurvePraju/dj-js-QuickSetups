from django.db import models

# Create your models here.


class FilePaths(models.Model):
    path = models.CharField(max_length=100)
    path_file_name = models.CharField(max_length=100)
    html_content = models.TextField()

    def __str__(self):
        return self.path_file_name

    def get_all_blogs(self):
        self.paths = self.objects.all()
        return self.paths
