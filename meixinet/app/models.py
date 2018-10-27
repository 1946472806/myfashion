from django.db import models

# Create your models here.
class User(models.Model):
    u_tel = models.CharField(max_length=20)
    u_password = models.CharField(max_length=20)
    u_isdel = models.BooleanField(default=False)

    @classmethod
    def createuser(cls,tel,password):
        user = cls(u_tel=tel,u_password=password,u_isdel=False)
        return user
class Car(models.Model):
    pass