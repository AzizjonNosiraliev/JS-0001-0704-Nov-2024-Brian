/* Lesson 03.06 - START

Number Guessing Game
In this lesson we will write a number guessing game program:
- Player clicks PLAY button to call **playGame** function
- **playGame** function hides the PLAY button and
- shows the input box for entering guess
- shows the GUESS button for submitting guess
- shows an h2 for displaying feedback
- Program generates a mystery random integer from 1-100
- Player inputs a number by typing or using stepper arrows
- Player clicks GUESS button to call evalGuess function
- evalGuess function compares guess to mystery number
   - feedback is displayed: Too High or Too Low or Congrats
   - function keeps track of total guesses
- Once the mystery number is guessed:
   - the score (GamesPplayed and Guess Avg) is updated
   - the resetGame function is called automatically:
- resetGame function:
   - updates the score
   - shows playBtn; hides guessBox, guessBtn and feedback
- We are ready for a new game: click PLAY AGAIN
*/

// 1. Declare game play variables. These need to be in the global scope, since the vars are used by more than one function.
let r;

// array for keeping track of used guess numbers:
// []

// The above shorthand requires that the variables have the same initial value.

// 2. Get the PLAY and GUESS buttons (GUESS is hidden on page load):
// 'play-btn'
// 'guess-btn'

// 3. Have the buttons call their respective functions:
// 'click'


// 4. Get the guess input box and feedback h2, both of which are also hidden on page load:


// 5. Get the footer spans for keeping score:


// The playGame function runs when the PLAY button is clicked. 

// Array.splice(start_index, num_items)
// removes num_items from start_index
// 'apple', 'banana', 'cherry', 'grape', 'kiwi'
// get rid of banana and cherry using splice:

console.log();
// splice(0) starts removing from index 0, lack of 2nd arg means
// remove all

// 6. Declare the playGame function:


    // set guess box to 0 to start each game

    // 7. Generate a random mystery number from 1-100
    // r;
    console.log('mystery number:');

    // 8. Hide the PLAY button
    // "none"

    // 9. Show the guess input box, GUESS button and feedback h2:
    // "inline-block"

    // "Guess the Mystery Number (1-100)"


// end function playGame()
    
// The evalGuess function runs when GUESS button is clicked. 

    // get guess from input box

    // check if guess has already been used:
    // fruits.includes('kiwi') returns true if 'kiwi' is in fruits array
    // if
        // `Oops! already used!`
        // terminate the func

    // another guess
    // update guess count
    
    // save guess to arr:
    console.log('guessesArr:');

    // compare guess to mystery number
    // if the guess is too low
    // if
        // "Your guess is too LOW"
    // else if the guess is too high
    // el
        // "Your guess is too HIGH"
    // else guess is correct
    // el
        // `Correct! Mystery Number is`



    // update avg

    // 21. Hide input box and guess button:
    // "none"

    // 22. Show playBtn w PLAY AGAIN text:
    // "inline-block"
    // "PLAY AGAIN"
    
    // 26. Empty the guesses array for a new game:

    // remove from index 0,
    // no 2nd arg means go to end, in other words,
    // splice out / remove ALL array items, leaving
    // an empty array []

// end function resetGame()

// the resetGame() function is called when the game is over

// 11. Declare the playGame function:


    // 12. Increase guesses by 1


    // 13. Get the player's guess from the input box and convert it to an actual number:
    

    // 14. If the guess is less than the mystery number:

        // "Guess is too LOW!";
        
    // 15. If the guess is greater than the mystery number:

        // "Guess is too HIGH!";

    // 16. If neither too high nor too low, the guess is correct:

        // `Congrats! You guessed<br>the mystery number: ${r}`;

        // 17. Game's over, so call the resetGame function:
       

    
// end function evalGuess()

// The resetGame function runs automatically when the player guesses correctly.

// 18. Declare the playGame function:


    // 19. Reset the player guess and guess input box to 0:


    // 20. Increment total games played by 1

    
    // 21. Hide the guess input box and guess button:


    // 22. Show playBtn; this time have it say PLAY AGAIN:


    // 23. Update the score average (guesses per game):
    

    // 24. Update the score Games Played and Guess Avg:


// end function resetGame()


   
