from django.conf.urls import url
from django.conf import settings

from app import views

urlpatterns = [
    url(r'^index/$', views.index,name='index'),
    url(r'^register/$', views.register,name='register'),
    url(r'^login/$', views.login,name='login'),
    url(r'^list/(\d+)/$', views.list,name='list'),
    url(r'^goods/(\d+)/$', views.goods, name='goods'),
    url(r'^car/$', views.car, name='car'),
    url(r'^delcar/(\d+)/$', views.delcar, name='delcar'),
    url(r'^placeorder/$', views.placeorder, name='placeorder'),  # 下单
    url(r'^collection/(\d+)/$', views.collection, name='collection'),
    url(r'^addtocar/(\d+)/$', views.addtocar, name='addtocar'),
    url(r'^verifytel/$', views.verifytel, name='verifytel'),
    url(r'^subnum/$', views.subnum, name='subnum'), #减
    url(r'^addnum/$', views.addnum, name='addnum'), #加
    url(r'^goodsel/$', views.goodsel, name='goodsel'), #选择或取消选择
    url(r'^changeall/$', views.changeall, name='changeall'), #全选或取消全选
    url(r'^getorderinfo/$', views.getorderinfo, name='getorderinfo'), #下单详情

]
