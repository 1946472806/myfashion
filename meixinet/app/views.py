import hashlib
import os
import random
import time
import uuid

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.

from app.models import User, Car, Details, Goods, List, lunbo, lunbo1, One, GoodsCar
import json

# 首页
from meixinet import settings


def index(request):
    #获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    imgpath = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
        # 图片路径
        imgpath = User.objects.filter(u_token=token).last().u_img
        imgpath = '/static/' + imgpath
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

    return render(request,'index.html',{'username':tel,'lunbos':lunbos,'lunbos1':lunbos1,'goodscar':goodscar,'num_all':num_all,'price_all':price_all,'imgpath':imgpath})

# 注册
def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        #获取传过来的注册信息
        tel = request.POST.get('tel')
        password = request.POST.get('password')
        file = request.FILES.get('filename')
        imgurl = file.name
        if imgurl:
            imgurl = 'upfile/'+ tel + '.png'

        try:
            #保存图片
            saveupfile(file,tel)
            #保存数据
            token = str(uuid.uuid5(uuid.uuid4(), 'register'))
            password = genegrate_password(password)
            user = User.createuser(tel,password,token,imgurl)
            user.save()
        except Exception as e:
            msg = '注册失败!' + str(e)
            return render(request, 'register.html', {'msg': msg})
        # 重定向页面
        response = redirect('app:index')
        response.set_cookie('username',token)
        return response

# 检测用户是否已经存在
def verifytel(request):
    tel = request.GET.get('usertel')
    try:
        User.objects.get(u_tel=tel)
        return JsonResponse({'msg':'用户已经存在!','status':'-1'})
    except:
        return JsonResponse({'msg': '用户可用!', 'status': '1'})
#保存上传文件
def saveupfile(file,tel):
    imgname = tel + '.png'
    filepath = os.path.join(settings.MDEIA_ROOT,imgname)
    #文件写入
    with open(filepath,'wb') as fp:
        for info in file.chunks():
            fp.write(info)

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
            # 改成uuid
            # user.u_token = genegrate_token()
            user.u_token = str(uuid.uuid5(uuid.uuid4(), 'login'))
            user.save()

            response = redirect('app:car')
            token = user.u_token
            response.set_cookie('username',token)
            return response

# 商品列表
def list(request,flag):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    imgpath = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
        # 图片路径
        imgpath = User.objects.filter(u_token=token).last().u_img
        imgpath = '/static/' + imgpath
    else:
        msg = '请先登录!'
        return render(request, 'login.html', {'msg': msg})
    #相关推荐轮播数据源
    listcar = Details.objects.all()
    # 此用户的购物车数据
    goodscar = GoodsCar.objects.filter(u_tel=tel)
    # 购物车总价和总数量
    num_all = 0
    price_all = 0
    if goodscar.count():
        for gcar in goodscar:
            num_all += gcar.num
            price_all += gcar.num * gcar.price_good
    flags = {'0':'新近单品','1':'全球购','2':'女士','3':'男仕','4':'童装','5':'腕表','6':'品牌','7':'Mzine'}
    flagname = flags[flag]

    return render(request, 'list.html',{'username':tel,'listcar':listcar,'imgpath':imgpath,'goodscar':goodscar,'num_all':num_all,'price_all':price_all,'flagname':flagname})

# 商品详情
def goods(request,id):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    imgpath = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
        # 图片路径
        imgpath = User.objects.filter(u_token=token).last().u_img
        imgpath = '/static/' + imgpath
    gcar = Goods.objects.filter(id=id).last()
    # 相关推荐轮播数据源
    listcar = Details.objects.all()
    return render(request, 'goods.html',{'username':tel,'imgpath':imgpath,'gcar':gcar,'listcar':listcar})

# 购物车
def car(request):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    imgpath = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
        # 图片路径
        imgpath = User.objects.filter(u_token=token).last().u_img
        imgpath = '/static/' + imgpath
    else:
        msg = '请先登录!'
        return render(request, 'login.html', {'msg': msg})
    # 此用户的购物车数据
    goodscar = GoodsCar.objects.filter(u_tel=tel)
    # 购物车总价和总数量
    num_all = 0
    price_all = 0
    if goodscar.count():
        for gcar in goodscar:
            num_all += gcar.num
            price_all += gcar.num * gcar.price_good
    return render(request, 'car.html',{'username':tel,'imgpath':imgpath,'goodscar':goodscar,'num_all':num_all,'price_all':price_all})

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
def collection(request,id):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    imgpath = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
    else:
        msg = '请先登录!'
        return render(request, 'login.html', {'msg': msg})
    try:
        gcar = Goods.objects.filter(id=id).last()
        user = User.objects.filter(u_token=token).last()
        gcar.g_user.add(user)
        gcar.save()
    except Exception as e:
        return HttpResponse('添加收藏失败！'+ str(e))
    return HttpResponse('添加收藏成功!')

# #token生成
# def genegrate_token():
#     token = str(time.time) + str(random.random())
#     #md5算法
#     md5 = hashlib.md5()
#     md5.update(token.encode('utf-8'))
#     token = md5.hexdigest()
#     return token

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
    return redirect('app:car')

#加入购物袋
def addtocar(request,id):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    if token:
        tel = User.objects.filter(u_token=token).last().u_tel
    else:
        msg = '请先登录!'
        return render(request, 'login.html', {'msg': msg})
    goodss = Goods.objects.filter(id=id).first()
    #判断数据库中是否已经存在此用户对应的此商品
    goodexist = GoodsCar.objects.filter(u_tel=tel,good_id=id)
    if goodexist.count():
        #保存数据
        try:
            goodexists = goodexist.first()
            goodexists.num += 1
            goodexists.save()
        except Exception as e:
            return HttpResponse('保存数据失败!' + str(e))
    else:
        try:
            good = GoodsCar.creategoodscar(tel,id ,goodss.img, goodss.wen, goodss.said1, goodss.said2, goodss.unit, 1, goodss.price_good)
            good.save()
        except Exception as e:
            return HttpResponse('保存数据失败!!' + str(e))
    # return redirect('app:list')
    # 此用户的购物车数据
    goodscar = GoodsCar.objects.filter(u_tel=tel)
    # 购物车总价和总数量
    num_all = 0
    price_all = 0
    if goodscar.count():
        for gcar in goodscar:
            num_all += gcar.num
            price_all += gcar.num * gcar.price_good

    return render(request,'list.html',{'goodscar':goodscar,'num_all':num_all,'price_all':price_all})