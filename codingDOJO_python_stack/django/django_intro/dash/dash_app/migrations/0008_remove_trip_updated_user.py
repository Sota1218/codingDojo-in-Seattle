# Generated by Django 2.2 on 2019-12-27 04:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dash_app', '0007_trip_updated_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trip',
            name='updated_user',
        ),
    ]