from django.urls import path
from .views import *

urlpatterns = [
    #  path('', home ,name='home'),
    path('register/<name>/<role>/<username>/<password>',
         create_user, name='create_user'),
    path('login/<role>/<username>/<password>', authorise, name='authorise'),
    path('allstudents', allstudents, name='allstudents'),
    path('markattendance', markattendance, name='markattendance'),
    path('getLessonPlan/<username>', getLessons, name='getLessons'),
    path('feedback', review, name='review'),
    path('getScores', getScores, name='getScores'),
    path('publish', publish, name='publish'),
    path('me', me, name='me'),
]
