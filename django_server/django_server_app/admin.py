from django.contrib import admin

# Register your models here.
from django_server_app.models import Tweet, Comment

admin.site.register(Tweet)
admin.site.register(Comment)
