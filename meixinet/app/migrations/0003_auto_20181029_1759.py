# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-10-29 09:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20181029_1749'),
    ]

    operations = [
        migrations.AlterField(
            model_name='list',
            name='price_good',
            field=models.CharField(max_length=30),
        ),
    ]