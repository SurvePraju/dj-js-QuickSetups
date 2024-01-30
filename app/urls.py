from django.urls import path, re_path
from . import views


urlpatterns = [
    path("", views.Home.as_view(), name="home"),
    path("blog/<str:blog>", views.ViewBlog.as_view(), name="blog"),

]
