# Generated by Django 2.2 on 2019-12-11 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amadon_app', '0002_auto_20191211_2136'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='price',
            field=models.FloatField(),
        ),
    ]