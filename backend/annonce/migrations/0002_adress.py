# Generated by Django 4.0.4 on 2022-12-13 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('annonce', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Adress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wilaya', models.CharField(blank=True, max_length=20, null=True)),
                ('commune', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
    ]