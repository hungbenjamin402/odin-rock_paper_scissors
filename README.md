# My Odin Project - Rock Paper Scissors Game in JavaScript

This is a simple implementation of the classic Rock Paper Scissors game in JavaScript. The game is played against the computer for 5 rounds, and the scores are tracked and displayed after each round.

## Features

- Player vs Computer gameplay
- Random computer choice generation
- Score tracking for both player and computer
- 5-round game with results displayed after each round

## How to Play

1. Run the script in a JavaScript environment that supports `prompt()` and `console.log()` (e.g., browser console or Node.js with a prompt library).
2. When prompted, enter your choice: "rock", "paper", or "scissors" (case-insensitive).
3. The computer will randomly choose its option.
4. The winner of the round will be determined and displayed.
5. The game continues for 5 rounds, updating and displaying the scores after each round.

## Code Structure

- `getComputerChoice()`: Generates a random choice for the computer.
- `getUserChoice()`: Prompts the user for their choice.
- `playGame(hScore, cScore)`: Plays a single round of the game and updates the scores.
- Main game loop: Runs the game for 5 rounds and displays the results.

## Example Output

```
Choose "rock", "paper", "scissors"
rock
Users win!
Computer Selection:rock
Computer Selection:scissors
Results:
Round 1: Human score:1
Round 1: Computer score:0
-----------------------------------------------------
Choose "rock", "paper", "scissors"
...
```

## Notes

- The game uses `prompt()` for user input, which may not work in all JavaScript environments. Consider modifying the input method if using in a different context.
- The game logic and scoring are handled within the `playGame()` function.
- The main game loop runs for 5 rounds, but this can be easily modified by changing the loop condition.

## Potential Improvements

- Add input validation to ensure the user enters a valid choice.
- Implement a graphical user interface for a more interactive experience.
- Add an option for the user to choose the number of rounds to play.
- Implement better formatting for the console output.

Feel free to fork this project and make your own improvements!