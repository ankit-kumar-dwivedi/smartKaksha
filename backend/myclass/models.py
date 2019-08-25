# model
from django.db import models


class Teacher(models.Model):
    NAME = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    COURSE = models.CharField(max_length=50)
# username is EMAIL


class Student(models.Model):
    NAME = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    ENROLL = models.CharField(max_length=50, unique=True)
    AR = models.CharField(max_length=50, default='1')


class UserModel(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
