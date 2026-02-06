from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny


class RegisterView(generics.CreateAPIView): #CreateAPIView is used to create obj in database
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # RegisterView can be accesed by anyone
    permission_classes = [AllowAny]
    
