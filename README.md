# LINK: 
https://shreyanshsri.github.io/Tic-Tac-Toe/
# Tic-Tac-Toe
Title: Tic Tac Toe Web Project

# Overview:
The Tic Tac Toe web project is a classic two-player game that allows users to play the popular game of Tic Tac Toe directly in their web browsers. The project is built using HTML, CSS, and JavaScript, making it lightweight, interactive, and easy to play.

# Features:

Game Board: The project presents a 3x3 grid representing the Tic Tac Toe board. Each cell of the grid represents a possible move.

Player Turns: The game allows two players to take turns. Player 1 is typically represented by "X," and Player 2 by "O."

Interaction: Players can click on empty cells on the board to place their respective symbols ("X" or "O"). The game enforces the rule that a cell can only be filled once.

Win Condition: After each move, the project checks for a win condition. If a player has three of their symbols consecutively in a row, column, or diagonal, the game declares that player as the winner.

Draw Condition: If all the cells are filled, and there is no winner, the game is declared a draw.

Reset: The game provides an option to reset the board to play another round.

# Frontend (HTML/CSS/JavaScript):

HTML Structure: The HTML file contains the structure of the game board using a table or a series of div elements. Each cell is given a unique identifier to track its state.

CSS Styling: The CSS file is responsible for styling the game board, including colors, fonts, and layouts. It ensures the game's visual appeal and responsiveness.

JavaScript Logic:

Game Initialization: The JavaScript code initializes the game board and variables required to track the game's state.

Click Event Handlers: Event listeners are added to each cell of the board to capture player clicks. When a player clicks a cell, the corresponding JavaScript function is called to handle the move.

Move Handling: The JavaScript code manages the placement of "X" or "O" symbols on the board, updating the board's state after each move.
Win and Draw Detection: After each move, the code checks for a win condition or a draw. If either condition is met, the game declares the result.

Player Switching: The JavaScript code handles switching between Player 1 and Player 2 turns.
Reset Function: A function is provided to reset the game board, allowing players to play again.
Deployment:

The Tic Tac Toe web project can be hosted on any web server or cloud platform that supports static website hosting, such as GitHub Pages or Netlify. Users can access the game by visiting the project's URL in their web browsers.

Conclusion:
The Tic Tac Toe web project is an enjoyable and interactive implementation of the classic game, allowing users to compete against each other on a simple yet engaging platform. It demonstrates the use of HTML, CSS, and JavaScript to create an interactive web application that is easy to understand and play.
