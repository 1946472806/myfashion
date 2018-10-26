from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^index/$', views.index,name='index'),
    url(r'^register/$', views.register,name='register'),
    url(r'^login/$', views.login,name='login'),
    url(r'^list/$', views.list,name='list'),
    url(r'^goods/$', views.goods, name='goods'),
    url(r'^car/$', views.car, name='car'),
]