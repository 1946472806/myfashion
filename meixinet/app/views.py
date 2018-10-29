import hashlib
import random
import time

from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.

from app.models import User, Car, Details, Goods, List, lunbo, lunbo1, One, GoodsCar
import json

# 首页
def index(request):
    #获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
    #大图轮播数据
    lunbos = lunbo.objects.all()
    #小图轮播数据
    lunbos1 = lunbo1.objects.all()
    # 此用户的购物车数据
    goodscar = GoodsCar.objects.filter(u_tel=tel)
    #购物车总价和总数量
    num_all = 0
    price_all = 0
    if goodscar.count():
        for gcar in goodscar:
            num_all += gcar.num
            price_all += gcar.num * gcar.price_good

    return render(request,'index.html',{'username':tel,'lunbos':lunbos,'lunbos1':lunbos1,'goodscar':goodscar,'num_all':num_all,'price_all':price_all})

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
            try:
                #保存数据
                token = genegrate_token()
                password = genegrate_password(password)
                user = User.createuser(tel,password,token)
                user.save()
            except Exception as e:
                msg = '注册失败!' + str(e)
                return render(request, 'register.html', {'msg': msg})
            # 重定向页面
            response = redirect('app:index')
            response.set_cookie('username',token)
            return response

# 登录
def login(request):
    if request.method == 'GET':
        return render(request,'login.html')
    elif request.method == 'POST':
        #获取数据
        tel = request.POST.get('tel')
        password = request.POST.get('password')
        password = genegrate_password(password)
        #判断用户是否存在或密码是否正确
        users = User.objects.filter(u_tel=tel,u_password=password)
        msg = ''
        if not users.count(): #不存在
            msg = '用户或密码不正确!'
            return render(request,'login.html',{'msg':msg})
        else:
            #更新token
            user = users.first()
            user.u_token = genegrate_token()
            user.save()

            response = redirect('app:car')
            token = user.u_token
            response.set_cookie('username',token)
            return response

# 商品列表
def list(request):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
    #相关推荐轮播数据源
    listcar = Car.objects.all()
    return render(request, 'list.html',{'username':tel,'listcar':listcar})

# 商品
def goods(request):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
    return render(request, 'goods.html',{'username':tel})

# 购物车
def car(request):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
    return render(request, 'car.html',{'username':tel})

#下单结算
def balance(request):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
    if not tel:
        return redirect('app:login')
    else:
        # 获取下单数据
        return  HttpResponse('下单成功')

#添加收藏
def collection(request):
    return None

#token生成
def genegrate_token():
    token = str(time.time) + str(random.random())
    #md5算法
    md5 = hashlib.md5()
    md5.update(token.encode('utf-8'))
    token = md5.hexdigest()
    return token

#密码加密
def genegrate_password(password):
    sha = hashlib.sha512()
    sha.update(password.encode('utf-8'))
    return sha.hexdigest()

#删除已选购的商品
def delcar(request,id):
    goodcar = GoodsCar.objects.filter(id=id)
    goodcar.delete()
    #刷新页面,重定向
    return redirect('app:login')