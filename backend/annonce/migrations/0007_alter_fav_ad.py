# Generated by Django 4.0.4 on 2022-12-17 00:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('annonce', '0006_alter_fav_unique_together_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fav',
            name='ad',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='annonce.adress', verbose_name='Annonce'),
        ),
    ]
