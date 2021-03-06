from django.db import models

# Create your models here.
#用户表
class User(models.Model):
    u_tel = models.CharField(max_length=20)
    u_password = models.CharField(max_length=256)
    u_isdel = models.BooleanField(default=False)
    u_token = models.CharField(max_length=256,default='')
    u_img = models.CharField(max_length=500,null=True) #用户头像位置信息

    @classmethod
    def createuser(cls,tel,password,token,img):
        user = cls(u_tel=tel,u_password=password,u_token=token,u_img=img,u_isdel=False)
        return user

#大图轮播表
class lunbo(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=256)
    wen = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)

    @classmethod
    def createlunbo(cls,id,img,wen,alt):
        lunbos = cls(id=id,img=img,wen=wen,alt=alt)
        return lunbos

#小图轮播表
class lunbo1(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=256)
    wen = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)
    said1 = models.CharField(max_length=50)
    said2 = models.CharField(max_length=50)
    div = models.CharField(max_length=20)

    @classmethod
    def createlunbo1(cls, id, img, wen, alt,said1,said2,div):
        lunbos1 = cls(id=id, img=img, wen=wen, alt=alt,said1=said1,said2=said2,div=div)
        return lunbos1

#商品档案表
class Goods(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=256)
    wen = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)
    said1 = models.CharField(max_length=50)
    said2 = models.CharField(max_length=50)
    unit = models.CharField(max_length=10)
    price_good = models.DecimalField(max_digits=10,decimal_places=4)
    # 声明关联关系
    g_user = models.ManyToManyField(User,null=True)

    @classmethod
    def creategoods(cls,id,img,wen,alt,said1,said2,unit,price_good):
        goods = cls(id=id,img=img,wen=wen,alt=alt,said1=said1,said2=said2,unit=unit,price_good=price_good)
        return goods

class Car(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=256)
    wen = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)
    said1 = models.CharField(max_length=50)
    said2 = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10,decimal_places=4)
    title = models.CharField(max_length=30)
    html = models.CharField(max_length=30)

    @classmethod
    def createcar(cls, id, img, wen, alt, said1, said2, price,title,html):
        car = cls(id=id, img=img, wen=wen, alt=alt, said1=said1, said2=said2, price=price, title=title,html=html)
        return car

class Details(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=256)
    wen = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)
    said1 = models.CharField(max_length=50)
    said2 = models.CharField(max_length=50)
    unit = models.CharField(max_length=10)
    price_good = models.DecimalField(max_digits=10, decimal_places=4)
    title = models.CharField(max_length=30)
    html = models.CharField(max_length=30)

    @classmethod
    def createdetails(cls,id,img,wen,alt,said1,said2,unit,price_good,title,html):
        details = cls(id=id,img=img,wen=wen,alt=alt,said1=said1,said2=said2,unit=unit,price_good=price_good,title=title,html=html)
        return details

class List(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=256)
    wen = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)
    said1 = models.CharField(max_length=50)
    said2 = models.CharField(max_length=50)
    price_good = models.CharField(max_length=30)

    @classmethod
    def createlist(cls,id,img,wen,alt,said1,said2,price_good):
        list = cls(id=id,img=img,wen=wen,alt=alt,said1=said1,said2=said2,price_good=price_good)
        return list

class One(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=256)
    wen = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)
    said1 = models.CharField(max_length=50)
    said2 = models.CharField(max_length=50)
    unit = models.CharField(max_length=10)
    price = models.DecimalField(max_digits=10, decimal_places=4)
    title = models.CharField(max_length=30)
    html = models.CharField(max_length=30)

    @classmethod
    def createone(cls,id,img,wen,alt,said1,said2,unit,price,title,html):
        one = cls(id=id,img=img,wen=wen,alt=alt,said1=said1,said2=said2,unit=unit,price=price,title=title,html=html)
        return one

#购物车表
class GoodsCar(models.Model):
    # u_tel = models.CharField(max_length=20)
    # good_id = models.IntegerField(default=0)
    user = models.ForeignKey(User)  #改成外键关联方式
    goods = models.ForeignKey(Goods) #改成外键关联方式
    num = models.IntegerField()
    isselect = models.BooleanField(default=True)

    @classmethod
    def creategoodscar(cls,user,goods,num):
        goodscar = cls(user=user,goods=goods,num=num)
        return goodscar

# 订单主表
class Order(models.Model):
    #用户
    user = models.ForeignKey(User)
    #订单号
    ordernum = models.CharField(max_length=256)
    #创建时间
    createtime = models.DateTimeField(auto_now=True)
    #订单状态(1.未付款 2.已付款未发货 3.已发货未收货 4.已收货未评价 5.已评价 6.退款)
    status = models.IntegerField(default=1)

    @classmethod
    def createorder(cls,user,ordernum):
        order = cls(user=user,ordernum=ordernum)
        return order

# 订单明细表
class Orderinfo(models.Model):
    # 订单
    order = models.ForeignKey(Order)
    #商品
    goods = models.ForeignKey(Goods)
    #商品数量
    number = models.IntegerField(default=1)

    @classmethod
    def createorderinfo(cls, order, goods,number):
        orderinfo = cls(order=order, goods=goods,number=number)
        return orderinfo
