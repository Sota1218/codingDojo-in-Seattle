# Generated by Django 2.2 on 2019-12-10 05:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ninja_app', '0002_remove_dojos_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ninjas',
            name='dojo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ninja', to='ninja_app.Dojos'),
        ),
    ]