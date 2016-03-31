import datetime

from django.contrib.auth.models import User
from django.db import models


# Create your models here.
from django.utils import timezone


class Tweet(models.Model):
    tweet_text = models.CharField(max_length=140)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)
    pub_date = models.DateTimeField('date published')

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

    def __str__(self):
        return self.tweet_text


class Comment(models.Model):
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE)
    comment_text = models.CharField(max_length=200)
    likes = models.IntegerField(default=0)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.comment_text
