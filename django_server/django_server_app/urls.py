from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^random_tweet/', views.random_tweet, name='random_tweet'),
]