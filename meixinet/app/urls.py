from django.conf.urls import url
from django.conf import settings

from app import views

urlpatterns = [
    url(r'^index/$', views.index,name='index'),# 首页
    url(r'^register/$', views.register,name='register'),# 注册
    url(r'^login/$', views.login,name='login'),# 登录
    url(r'^list/(\d+)/$', views.list,name='list'),# 商品列表
    url(r'^goods/(\d+)/$', views.goods, name='goods'),# 商品详情
    url(r'^car/$', views.car, name='car'),# 购物车
    url(r'^delcar/(\d+)/$', views.delcar, name='delcar'),#删除已选购的商品
    url(r'^placeorder/$', views.placeorder, name='placeorder'),  # 下单
    url(r'^collection/(\d+)/$', views.collection, name='collection'),#添加收藏
    url(r'^addtocar/(\d+)/$', views.addtocar, name='addtocar'),#加入购物袋
    url(r'^verifytel/$', views.verifytel, name='verifytel'),# 检测用户是否已经存在
    url(r'^subnum/$', views.subnum, name='subnum'), #减
    url(r'^addnum/$', views.addnum, name='addnum'), #加
    url(r'^goodsel/$', views.goodsel, name='goodsel'), #选择或取消选择
    url(r'^changeall/$', views.changeall, name='changeall'), #全选或取消全选
    url(r'^getorderinfo/$', views.getorderinfo, name='getorderinfo'), #下单详情

    url(r'^notifyurl/$', views.notifyurl, name='notifyurl'),  # 支付完成后，支付宝调用的(通知app服务端)
    url(r'^returnurl/$', views.returnurl, name='returnurl'),  # 支付完成后，app客户端跳转的页面
    url(r'^pay/$', views.pay, name='pay'),  # 支付宝支付

]
