# Generated by Django 2.2 on 2019-12-13 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dash_app', '0004_auto_20191213_2205'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='users',
            field=models.ManyToManyField(blank=True, related_name='trips', to='login_app.User'),
        ),
    ]
