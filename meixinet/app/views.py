import hashlib
import os
import random
import time
import uuid

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.alipay import alipay_axf
from app.models import User, Car, Details, Goods, List, lunbo, lunbo1, One, GoodsCar, Order, Orderinfo
import json
from meixinet import settings


# 首页
def index(request):
    #获取cookie
    token = request.COOKIES.get('username')
    data = {}

    if token:
        user = User.objects.filter(u_token=token).last()
        data['username'] = user.u_tel
        # 图片路径
        data['imgpath'] = '/static/' + user.u_img
        # 此用户的购物车数据
        data['goodscar'] = GoodsCar.objects.filter(user=user)

    #大图轮播数据
    data['lunbos'] = lunbo.objects.all()
    #小图轮播数据
    data['lunbos1'] = lunbo1.objects.all()


    return render(request,'index.html',context=data)

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
    num_all = 0
    price_all = 0
    goodscar = []
    if token:
        user = User.objects.filter(u_token=token).last()
        tel = user.u_tel
        # 图片路径
        imgpath = user.u_img
        imgpath = '/static/' + imgpath
        # 此用户的购物车数据
        goodscar = GoodsCar.objects.filter(user=user)
        # 购物车总价和总数量
        if goodscar.count():
            for gcar in goodscar:
                num_all += gcar.num
                price_all += gcar.num * gcar.goods.price_good
    else:
        msg = '请先登录!'
        return render(request, 'login.html', {'msg': msg})
    #相关推荐轮播数据源
    listcar = Details.objects.all()

    flags = {'0':'新近单品','1':'全球购','2':'女士','3':'男仕','4':'童装','5':'腕表','6':'品牌','7':'Mzine'}
    flagname = flags[flag]
    return render(request, 'list.html',{'username':tel,'listcar':listcar,'imgpath':imgpath,'goodscar':goodscar,'num_all':num_all,'price_all':price_all,'flagname':flagname})

# 商品详情
def goods(request,id):
    # 获取cookie
    token = request.COOKIES.get('username')
    tel = ''
    imgpath = ''
    num_all = 0
    price_all = 0
    goodscar = []
    if token:
        user = User.objects.filter(u_token=token).last()
        tel = user.u_tel
        # 图片路径
        imgpath = user.u_img
        imgpath = '/static/' + imgpath
        # 此用户的购物车数据
        goodscar = GoodsCar.objects.filter(user=user)
        # 购物车总价和总数量
        if goodscar.count():
            for gcars in goodscar:
                num_all += gcars.num
                price_all += gcars.num * gcars.goods.price_good
    gcar = Goods.objects.filter(id=id).first()
    # 相关推荐轮播数据源
    listcar = Details.objects.all()

    return render(request, 'goods.html',{'username':tel,'imgpath':imgpath,'listcar':listcar,'gcar':gcar,'goodscar':goodscar,'num_all':num_all,'price_all':price_all})

# 购物车
def car(request):
    # 获取cookie
    token = request.COOKIES.get('username')
    data = {}
    if token:
        user = User.objects.filter(u_token=token).last()
        data['username'] = user.u_tel
        # 图片路径
        data['imgpath'] = '/static/' + user.u_img

        # 此用户的购物车数据
        data['goodscar'] = GoodsCar.objects.filter(user=user).exclude(num=0)

        return render(request, 'car.html',context=data)
    else:
        msg = '请先登录!'
        return render(request, 'login.html', {'msg': msg})


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

#减数量
def subnum(request):
    goodsid = request.GET.get('goodsid')
    token = request.COOKIES.get('username')
    goods = Goods.objects.filter(id=goodsid).first()
    user = User.objects.filter(u_token=token).last()

    goodcarts = GoodsCar.objects.filter(user=user,goods=goods)
    if goodcarts.count():
        goodcart = goodcarts.first()
        goodcart.num -= 1
        goodcart.save()
        return JsonResponse({'mag':'减少数据成功!','num':goodcart.num,'backstatus':'1'})
    else:
        return JsonResponse({'mag': '减少数据失败!', 'backstatus': '-1'})

#加数量
def addnum(request):
    goodsid = request.GET.get('goodsid')
    token = request.COOKIES.get('username')
    goods = Goods.objects.get(id=goodsid)
    user = User.objects.get(u_token=token)

    goodcarts = GoodsCar.objects.filter(user=user, goods=goods)
    if goodcarts.count():
        goodcart = goodcarts.first()
        goodcart.num += 1
        goodcart.save()
        return JsonResponse({'mag': '增加数据成功!', 'num': goodcart.num, 'backstatus': '1'})
    else:
        return JsonResponse({'mag': '增加数据失败!', 'backstatus': '-1'})

# 选择或取消选择
def goodsel(request):
    goodcartid = request.GET.get('goodcartid')
    data = {}
    try:
        goodcart = GoodsCar.objects.get(pk=goodcartid)
        goodcart.isselect =not goodcart.isselect
        goodcart.save()
        data['msg'] = '更新成功'
        data['backstatus'] = '1'
        return JsonResponse(data)
    except Exception as e:
        data['msg'] = '更新失败'
        data['backstatus'] = '-1'
        return JsonResponse(data)

# 全选或取消全选
def changeall(request):
    flag = request.GET.get('flag')
    token = request.COOKIES.get('username')
    if flag == '1':  # 全选
        isselect = 1
    else:  # 全消
        isselect = 0
    try:
        user = User.objects.get(u_token=token)
        cars = GoodsCar.objects.filter(user=user)
        for car in cars:
            car.isselect = isselect
            car.save()
        return JsonResponse({'msg': '反选成功!', 'backstatus': '1'})

    except Exception as e:
        return JsonResponse({'msg': '保存数据失败!', 'backstatus': '-1'})

#下单
def placeorder(request):
    token = request.COOKIES.get('username')

    try:
        user = User.objects.get(u_token=token)
        goodscars = GoodsCar.objects.filter(user=user).filter(isselect=1)
        #订单号
        ordernum = str(uuid.uuid5(uuid.uuid4(), 'order'))
        order = Order.createorder(user, ordernum)
        order.save()
        #生成订单主表和明细表数据
        for goodscar in goodscars:
            orderinfo = Orderinfo.createorderinfo(order,goodscar.goods,goodscar.num)
            orderinfo.save()
            #删除相应购物车数据
            goodscar.delete()
        #跳转到已下单界面
        return JsonResponse({'msg':'下单成功！','ordernum':ordernum,'backstatus': '1'})
    except Exception as e:
        return JsonResponse({'msg': '下单失败!', 'backstatus': '-1'})

# 下单详情
def getorderinfo(request):
    ordernum = request.GET.get('ordernum')

    order = Order.objects.get(ordernum=ordernum)
    return render(request, 'orderinfo.html', {'order': order})

# 支付完成后，支付宝调用的(通知app服务端)
def notifyurl(request):
    if request.method == "POST":
        # 检测是否支付成功
        # 去请求体中获取所有返回的数据：状态/订单号
        from urllib.parse import parse_qs
        # name&age=123....
        body_str = request.body.decode('utf-8')
        post_data = parse_qs(body_str)

        post_dict = {}
        for k, v in post_data.items():
            post_dict[k] = v[0]

        # post_dict有10key： 9 ，1
        sign = post_dict.pop('sign', None)
        status = alipay_axf.verify(post_dict, sign) #POST验证 True

        #返回接收到的数据post_dict如下：
        # {'gmt_create': '2018-11-09 21:47:10', 'charset': 'utf-8', 'gmt_payment': '2018-11-09 21:47:26',
        #  'notify_time': '2018-11-09 21:47:27', 'subject': '测试订单 --- iphone XX', 'buyer_id': '2088102176438721',
        #  'invoice_amount': '1.10', 'version': '1.0', 'notify_id': '9196624f14c7d2f4a91eaff2a9c4042lk5',
        #  'fund_bill_list': '[{"amount":"1.10","fundChannel":"ALIPAYACCOUNT"}]', 'notify_type': 'trade_status_sync',
        #  'out_trade_no': '15', 'total_amount': '1.10', 'trade_status': 'TRADE_SUCCESS',
        #  'trade_no': '2018110922001438720500754426', 'auth_app_id': '2016091900547441', 'receipt_amount': '1.10',
        #  'point_amount': '0.00', 'app_id': '2016091900547441', 'buyer_pay_amount': '1.10',
        #  'seller_id': '2088102176328329'}

        #得到订单号
        out_trade_no = post_dict['out_trade_no']

        # 这里应该根据返回的状态和单据号更新用户订单表中的订单状态
        Order.objects.filter(pk=out_trade_no).update(status=2)
        return JsonResponse({'msg': 'success'})

# 支付完成后，app客户端跳转的页面
def returnurl(request):
    #这里暂时跳转到‘商品’页面
    return redirect('app:list')

#支付宝支付
def pay(request):
    orderid = request.GET.get('orderid')
    # 支付url
    url = alipay_axf.direct_pay(
        subject='测试订单 --- iphone Y',  # 订单名称
        out_trade_no=orderid,  # 订单号
        total_amount=1.1,  # 付款金额
        # return_url='http://112.74.55.3/axf/returnurl/'
        return_url='http://120.78.160.121/returnurl/'
    )

    # 拼接支付网关
    # alipay_url = 'https://openapi.alipaydev.com/gateway.do?{data}'.format(data=url)
    alipay_url = 'https://openapi.alipaydev.com/gateway.do?{data}'.format(data=url)

    return JsonResponse({'alipay_url': alipay_url})

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

    #不需要再判断是否登录,能到这个函数说明已经登录了
    user = User.objects.filter(u_token=token).last()

    goodss = Goods.objects.filter(id=id).first()
    #判断数据库中是否已经存在此用户对应的此商品
    goodexist = GoodsCar.objects.filter(user=user,goods=goodss)
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
            good = GoodsCar.creategoodscar(user,goodss,1)
            good.save()
        except Exception as e:
            return HttpResponse('保存数据失败!!' + str(e))
    return redirect('app:list',0)

