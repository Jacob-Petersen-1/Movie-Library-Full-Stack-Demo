from django.urls import path
from . import views

urlpatterns = [
    path('send/review/', views.ReviewPost.as_view()),
    path('<str:movie_id>/', views.VideoReviews.as_view())
]