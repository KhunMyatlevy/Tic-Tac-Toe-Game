from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Game

def home(request):
    return render(request, 'game/tictactoe.html')

def make_move(request):
    if request.method == "POST":
        board = request.POST.get('board', '---------')
        player = request.POST.get('player', 'X')

        # Add game logic here to check for win or next move
        # This is an example, add your own logic

        return JsonResponse({"status": "move received", "board": board})
    return JsonResponse({"error": "invalid request"}, status=400)
