from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^random_tweet/', views.random_tweet, name='random_tweet'),
    url(r'^save_tweet/', views.save_tweet, name='save_tweet'),
    url(r'^get_tweets/', views.get_tweets, name='get_tweets'),
    url(r'^get_csrf_token/', views.get_csrf_token, name='get_csrf_token'),
]
