# Generated by Django 4.0.4 on 2022-12-17 00:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('annonce', '0007_alter_fav_ad'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='annonce',
            name='adr',
        ),
    ]
