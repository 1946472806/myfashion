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
    u_tel = models.CharField(max_length=20)
    good_id = models.IntegerField(default=0)
    img = models.CharField(max_length=256)
    wen = models.CharField(max_length=100)
    said1 = models.CharField(max_length=50)
    said2 = models.CharField(max_length=50)
    unit = models.CharField(max_length=10)
    num = models.IntegerField()
    price_good = models.DecimalField(max_digits=10, decimal_places=4)

    @classmethod
    def creategoodscar(cls,tel,id,img,wen,said1,said2,unit,num,price_good):
        goodscar = cls(u_tel=tel,good_id=id,img=img,wen=wen,said1=said1,said2=said2,unit=unit,num=num,price_good=price_good)
        return goodscar

#购买商品下单结算表
class GoodsBuyDetail(models.Model):
    u_tel = models.CharField(max_length=20)
    good_id = models.IntegerField(default=0)
    img = models.CharField(max_length=256)
    wen = models.CharField(max_length=100)
    said1 = models.CharField(max_length=50)
    said2 = models.CharField(max_length=50)
    unit = models.CharField(max_length=10)
    num_all = models.IntegerField()
    price_good = models.DecimalField(max_digits=10, decimal_places=4)
    price_all = models.DecimalField(max_digits=10, decimal_places=4)
