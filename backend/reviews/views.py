from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from .models import Review
from .serializers import ReviewSerializer



@permission_classes([AllowAny])
class VideoReviews(APIView):

    def get(self, request, movie_id):
        video_Reviews = Review.objects.filter(movie_id = movie_id)
        serializers = ReviewSerializer(video_Reviews, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)



@permission_classes([IsAuthenticated])
class ReviewPost(APIView):

    def post(self, request):
        serializers = ReviewSerializer(data=request.data)
        # the following validates that API user input is true or accurate to the database
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)
