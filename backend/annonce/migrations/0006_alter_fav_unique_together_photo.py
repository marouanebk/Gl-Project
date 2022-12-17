# Generated by Django 4.0.4 on 2022-12-16 20:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('annonce', '0005_fav_person_delete_ad_fav_liker'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='fav',
            unique_together={('liker', 'ad')},
        ),
        migrations.CreateModel(
            name='photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.CharField(max_length=50)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='annonce.annonce', verbose_name='annonce')),
            ],
        ),
    ]