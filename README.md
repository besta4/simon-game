# Simon Says Game

This is a simple Simon Says game implemented in JavaScript, HTML, and CSS. The game is based on the classic memory game where the player must repeat a sequence of colors that gets progressively longer with each level.

## Features

- **Responsive Gameplay:** The game starts when any key is pressed.
- **Levels:** The game increases the level each time the player successfully repeats the sequence.
- **Visual and Audio Feedback:** Buttons flash in the correct sequence, and the background changes color when the game is over.
- **User Interaction:** Players interact with the game by clicking on the colored buttons.

## How to Play

1. **Start the Game:** Press any key to start the game.
2. **Watch the Sequence:** A color sequence will be shown. The sequence will start with one color and grow by one additional color each level.
3. **Repeat the Sequence:** Click the buttons in the same order as shown in the sequence.
4. **Next Level:** If you successfully repeat the sequence, the game will advance to the next level.
5. **Game Over:** If you click the wrong button, the game will display "Game Over," and your score will be shown. Press any key to restart the game.

## Files in This Project

- **index.html:** The main HTML file that structures the game.
- **app.js:** The JavaScript file containing the game logic.
- **style.css:** The CSS file that styles the game.

## Code Overview

### JavaScript (`app.js`)

- **Global Variables:**
  - `gameseq`: Stores the sequence of colors for the current game.
  - `userseq`: Stores the sequence of colors entered by the user.
  - `btns`: Array containing the color options.
  - `started`: Boolean to check if the game has started.
  - `level`: Tracks the current level of the game.
  - `h2`: References the `<h2>` element in the HTML for updating the level.

- **Functions:**
  - `btnFlash(btn)`: Flashes the button in the sequence.
  - `userFlash(btn)`: Flashes the button when the user clicks it.
  - `levelup()`: Advances the game to the next level and updates the sequence.
  - `btnPress()`: Handles user input and checks the user's sequence against the game's sequence.
  - `checkAns(idx)`: Compares the user's input with the game's sequence and checks for game over.
  - `reset()`: Resets the game state after game over.

### HTML (`index.html`)

- Contains the basic structure of the game, including the title, level display, and buttons for the game.

### CSS (`style.css`)

- Styles the buttons, layout, and visual feedback for the game.

## Running the Game

1. **Download the Project:**
   - Clone the repository or download the ZIP file.

2. **Open the Game:**
   - Open the `index.html` file in a web browser to start playing the game.

## Future Enhancements

- Adding sound effects for button presses and level advancements.
- Implementing a high score feature to track the best score across sessions.
- Enhancing the design with more sophisticated animations and transitions.

## Credits
- **Author**: Besta Dinesh
- **Contact**: [LinkedIn](https://www.linkedin.com/in/besta-dinesh-736599263) | [Instagram](https://www.instagram.com/dinnu_20_04)

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as you wish.

---

Enjoy playing the Simon Says game!
