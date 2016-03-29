from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello World!")


def random_tweet(request):
    rand_tweet = "Hello"
    return HttpResponse(rand_tweet)
