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

            FilePaths(path=file_name_url, path_file_name=file_name,
                      html_content=html).save()
            # Its Inverse path = "_____"  and Path_File _name = ' "     " '
            return redirect("home")
        else:
            return redirect("home")


class ViewBlog(View):
    def get(self, request, blog):
        paths = FilePaths.objects.all()
        blog = FilePaths.objects.get(path=blog)
        return render(request, f"display_temp.html", {"paths": paths, "blog": blog})
