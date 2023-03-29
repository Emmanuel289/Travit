# Generated by Django 4.1.7 on 2023-03-29 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Destination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Name')),
                ('description', models.TextField(verbose_name='Description')),
                ('image', models.ImageField(upload_to='images/', verbose_name='Image')),
                ('weather', models.CharField(max_length=50, verbose_name='Weather')),
                ('currency', models.CharField(max_length=50, verbose_name='Currency')),
            ],
        ),
    ]
