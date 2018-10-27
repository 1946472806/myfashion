from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.

from app.models import User
import json

# 首页
def index(request):
    #获取cookie
    tel = request.COOKIES.get('username')
    return render(request,'index.html',{'username':tel})

# 注册
def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        #获取传过来的注册信息
        tel = request.POST.get('tel')
        password = request.POST.get('password')

        #检测数据库中是否已经存在此用户
        users = User.objects.filter(u_tel=tel)
        msg = ''
        if users.count(): #已经存在此用户
            msg = '已经存在此用户!'
            return render(request,'register.html',{'msg':msg})
        else:
            #保存数据
            user = User.createuser(tel,password)
            user.save()
            # 重定向页面
            response = redirect('app:index')
            response.set_cookie('username',tel)
            return response

# 登录
def login(request):
    if request.method == 'GET':
        return render(request,'login.html')
    elif request.method == 'POST':
        #获取数据
        tel = request.POST.get('tel')
        password = request.POST.get('password')
        #判断用户是否存在或密码是否正确
        users = User.objects.filter(u_tel=tel,u_password=password)
        msg = ''
        if not users.count(): #不存在
            msg = '用户或密码不正确!'
            return render(request,'login.html',{'msg':msg})
        else:
            response = redirect('app:car')
            response.set_cookie('username',tel)
            return response

# 商品列表
def list(request):
    # 获取cookie
    tel = request.COOKIES.get('username')
    return render(request, 'list.html',{'username':tel})

# 商品
def goods(request):
    # 获取cookie
    tel = request.COOKIES.get('username')
    return render(request, 'goods.html',{'username':tel})

# 购物车
def car(request):
    # 获取cookie
    tel = request.COOKIES.get('username')
    return render(request, 'car.html',{'username':tel})

#下单结算
def balance(request):
    # 获取cookie
    tel = request.COOKIES.get('username')
    if not tel:
        return redirect('app:login')
    else:
        # 获取下单数据
        return  HttpResponse('下单成功')