import random

from django.core import serializers
from django.middleware.csrf import get_token
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.utils import timezone

from django_server_app.models import Tweet


def index(request):
    return HttpResponse("Hello World!")


def random_tweet(request):  # Select a random tweet from all saved tweets
    tweets = Tweet.objects.all()
    rand = random.randrange(tweets.count())
    rand_tweet = tweets[rand]
    return HttpResponse(rand_tweet)


def get_tweets(request):  # Return all tweets
    tweets = serializers.serialize("json", Tweet.objects.all())
    response = HttpResponse(tweets)
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "*"
    response["Access-Control-Allow-Credentials"] = True
    return response  # Access-Control-Allow-Origin


def save_tweet(request):  # Save a tweet to the DB
    if request.method == 'POST':
        form = request.POST
        tweet = Tweet(tweet_text=form['tweet'],
                      pub_date=timezone.now(),
                      user_id=1)  # TODO: update to support current user
        tweet.save()
    return HttpResponse(form['tweet'])


# We need to get a csrf token to confirm we are verified
# then we can send it as a header in a request POST as X-CSRFToken : token
def get_csrf_token(request):
    return HttpResponse(get_token(request))
