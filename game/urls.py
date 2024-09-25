from django.urls import path
from game import views

urlpatterns = [
    path('', views.home, name='home'),          # This will route the root URL to the home view
    path('move/', views.make_move, name='make_move'),  # This will route the /move/ URL to the make_move view
]
