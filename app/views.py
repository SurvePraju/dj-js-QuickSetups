from django.shortcuts import render, redirect
from django.views import View
from .models import FilePaths
import re
import os
# Create your views here.


class Home(View):

    def get(self, request):
        paths = FilePaths.objects.all()
        return render(request, "create_new.html", {"paths": paths})

    def post(self, request):
        html = request.POST["inputContent"]

        file_name = re.findall(
            r'<div class="blog-title">(.*?)</div>', html)
        if file_name:
            file_name = file_name[0]
            file_name_url = file_name.replace(" ", "_")
            with open(f"templates/{file_name_url}.html", "a+") as f:
                f.seek(0)
                f.write("{% extends 'base.html' %}\n{% block content %}" +
                        html+"{% endblock content%}")
            FilePaths(path=file_name_url, path_file_name=file_name).save()
            # Its Inverse path = "_____"  and Path_File _name = ' "     " '
            return redirect("home")
        else:
            return redirect("home")


class ViewBlog(View):
    def get(self, request, blog):
        paths = FilePaths.objects.all()
        return render(request, f"{blog}.html", {"paths": paths})
