from django.db import models

class Game(models.Model):
    board = models.CharField(max_length=9, default="---------")  # Represents a 3x3 board
    player_turn = models.CharField(max_length=1, default="X")    # Current player's turn (X or O)
    game_status = models.CharField(max_length=10, default="ongoing")  # Game status: "ongoing", "X wins", "O wins", "draw"
