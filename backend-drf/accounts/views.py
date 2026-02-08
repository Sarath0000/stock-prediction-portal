from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


class RegisterView(generics.CreateAPIView): #CreateAPIView is used to create obj in database
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # RegisterView can be accesed by anyone
    permission_classes = [AllowAny]

class ProtectedView(APIView):
    # this can be accesed only by the logged in users
    permission_classes = [IsAuthenticated]

    def get(self, request):
        response = {
            'status':'request was permitted'
        }
        return Response(response)
    