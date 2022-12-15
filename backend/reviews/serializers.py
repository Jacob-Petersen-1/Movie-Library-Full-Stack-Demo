from rest_framework import serializers
from authentication.models import User
from .models import Review


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]

class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(many =False, read_only=True)
    class Meta:
        model = Review
        fields = ['id', 'movie_id', 'text','user']
        depth = 1

