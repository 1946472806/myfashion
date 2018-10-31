from django.conf.urls import url
from django.conf import settings

from app import views

urlpatterns = [
    url(r'^index/$', views.index,name='index'),
    url(r'^register/$', views.register,name='register'),
    url(r'^login/$', views.login,name='login'),
    url(r'^list/$', views.list,name='list'),
    url(r'^goods/(\d+)/$', views.goods, name='goods'),
    url(r'^car/$', views.car, name='car'),
    url(r'^delcar/(\d+)/$', views.delcar, name='delcar'),
    url(r'^balance/$', views.balance, name='balance'),
    url(r'^collection/(\d+)/$', views.collection, name='collection'),
    url(r'^addtocar/(\d+)/$', views.addtocar, name='addtocar'),
]
