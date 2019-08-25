from django.shortcuts import render, redirect
from .models import *
from django.core import serializers
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from django.contrib.sessions.models import Session
from django.contrib.auth.models import User
subjects = []
result = []
score = []


def create_user(request, name, role, username, password):

    if(UserModel.objects.filter(username=username).exists()):
        return JsonResponse({'status': 'error', 'message': 'Username already exists!'})
    UserModel(username=username, password=password).save()
    if role.isnumeric():
        Student(NAME=name, username=username, ENROLL=role, AR='1').save()
    else:
        Teacher(NAME=name, username=username, COURSE=role).save()
    return JsonResponse({'status': 'success', 'message': 'User registered successfully!'})


def authorise(request, role, username, password):
    if role == 'student':
        # Student(NAME=name,username=username,ENROLL=role).save()
        if(Student.objects.filter(username=username).exists()):
            if(UserModel.objects.filter(username=username).exists() and UserModel.objects.get(username=username).password == password):
                if Student.objects.filter(username=username).AR != '0':
                    Student.objects.filter(username=username).update(AR='1')
                return JsonResponse({'status': 'success', 'name': Student.objects.get(username=username).NAME, 'message': 'User authenticated!'})
            else:
                return JsonResponse({'status': 'error', 'name': '', 'message': 'Incorrect password'})
        else:
            return JsonResponse({'status': 'error', 'name': '', 'message': 'Username does not exist'})
    else:
        # Teacher(NAME=name,username=username,COURSE=role).save()
        if(Teacher.objects.filter(username=username).exists()):
            if(UserModel.objects.filter(username=username).exists() and UserModel.objects.get(username=username).password == password):
                global subjects
                subjects = []
                global result
                result = []
                global score
                score = []
                return JsonResponse({'status': 'success', 'name': Teacher.objects.get(username=username).NAME, 'message': 'User authenticated!'})
            else:
                return JsonResponse({'status': 'error', 'name': '', 'message': 'Incorrect password'})
        else:
            return JsonResponse({'status': 'error', 'name': '', 'message': 'Username does not exist'})


def allstudents(request):
    s_items = Student.objects.all()
    print(s_items)
    s_dict = {
        'student': []
    }
    for i in s_items:
        s_dict['student'].append(
            {'name': i.NAME, 'enroll': i.ENROLL, 'ar': i.AR, 'mail': i.username})
    return JsonResponse(s_dict)


@csrf_exempt
def markattendance(request):
    s_dict = json.loads(request.body.decode())['student']
    for student in s_dict:
        print(student)
        if (student['ar'] == True or str(student['ar']) == 'True' or student['ar'] == 1):
            Student.objects.filter(ENROLL=student['enroll']).update(AR='1')
        else:
            Student.objects.filter(ENROLL=student['enroll']).update(AR='0')
    return JsonResponse({'status': 'success', 'message': 'Marked!'})


@csrf_exempt
def publish(request):
    global subjects
    subjects = json.loads(request.body.decode())
    print(subjects)
    return JsonResponse({'status': 'success', 'message': 'Published!'})


@csrf_exempt
def review(request):
    # one student only
    arr = ""
    foo = json.loads(request.body.decode())
    for c in foo:
        if(c.feedback == "true"):
            arr += "3"
        elif(c.feedback == "false"):
            arr += "2"

    Student.objects.filter(username=username).update(AR=arr)
    return JsonResponse({'status': 'success', 'message': 'Marked!'})


@csrf_exempt
def getLessons(request):
    global subjects
    if True:
        responseArray = []
        response = {}
        for subject in subjects:
            response['name'] = subject
            response['feedback'] = ''
            responseArray.append(response.copy())
        return JsonResponse({'data': responseArray})
    return JsonResponse({'data': []})


@csrf_exempt
def getScores(request):
    global subjects
    global result
    global score
    print("calc", subjects)
    obj2 = Student.objects.filter(~Q(AR='0'))
    obj = [x.AR for x in obj2]
    result = [0]*len(subjects)
    score = [0]*len(subjects)
    for x in obj:
        print(x, subjects)
        for c in range(0, len(x)):
            if x[c] == '2':
                result[c] += 1
            else:
                result[c] += 0
            # if len(x) == len(subjects) or x[0] != '1':
            #     result[c] = result[c] + (1 if x[c] == '2' else 0)
        print(x, subjects)

    scores = [(len(obj)-x) for x in result]  # +ve
    responseArray = []

    for c in range(0, len(subjects)):
        response = {}
        response['name'] = subjects[c]
        response['score'] = result[c]
        response['total'] = len(obj)
        responseArray.append(dict(response))
        print(responseArray)
    return JsonResponse({'data': responseArray})


@csrf_exempt
def me(request):
    pass
