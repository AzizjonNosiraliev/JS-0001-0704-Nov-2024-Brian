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
let totalGuesses = 0;
let gamesPlayed = 0;
let guessingAvg = 0;
// console.log("r:", r);
// array for keeping track of used guess numbers:
let guessNumsArr = [];

// The above shorthand requires that the variables have the same initial value.

// 2. Get the PLAY and GUESS buttons (GUESS is hidden on page load):

const playBtn = document.getElementById('play-btn');
const guessBtn = document.getElementById('guess-btn');

// 3. Have the buttons call their respective functions:

playBtn.addEventListener('click', playBtnPress);
guessBtn.addEventListener('click', guessBtnPress);

// 4. Get the guess input box and feedback h2, both of which are also hidden on page load:

const inputBox = document.getElementById('guess-box');
const outBox = document.getElementById('feedback');

// 5. Get the footer spans for keeping score:

const gameSpan = document.getElementById('games-span');
const guessSpan = document.getElementById('guesses-span');
const avgSpan = document.getElementById('avg-span');

// The playGame function runs when the PLAY button is clicked.

// Array.splice(start_index, num_items)
// removes num_items from start_index
// 'apple', 'banana', 'cherry', 'grape', 'kiwi'
// get rid of banana and cherry using splice:

console.log();
// splice(0) starts removing from index 0, lack of 2nd arg means
// remove all
let mysNum = 0;
// 6. Declare the playGame function:
function playBtnPress() {
    // set guess box to 0 to start each game
    guessingAvg = totalGuesses / gamesPlayed;
    avgSpan.textContent = guessingAvg;
    gamesPlayed++;
    gameSpan.textContent = gamesPlayed;


    inputBox.value = 0;
    
    mysNum = Math.ceil(Math.random() * 101);
    // 7. Generate a random mystery number from 1-100
    
    console.log('mystery number:', mysNum);

    // 8. Hide the PLAY button
    playBtn.style.display ="none"

    // 9. Show the guess input box, GUESS button and feedback h2:
    inputBox.style.display = "inline-block";
    outBox.style.display = "inline-block";
    outBox.textContent = "Guess the Mystery Number (1-100)";
    guessBtn.style.display = "inline-block";
    // "Guess the Mystery Number (1-100)"


// end function playGame()
}
// The evalGuess function runs when GUESS button is clicked.
    function guessBtnPress() {
        
    // get guess from input box
    let inputNum = +inputBox.value
    // check if guess has already been used:
    // fruits.includes('kiwi') returns true if 'kiwi' is in fruits array
    totalGuesses++;
    guessSpan.textContent = totalGuesses;
    
    if(guessNumsArr.includes(inputNum)) {
        outBox.textContent = `Oops! You have already guessed ${inputNum}...!`;
        console.log( )
        return;
    }
    // save guess to arr:
    guessNumsArr.push(inputNum);
    console.log('guessNumsArr:', guessNumsArr);

    // compare guess to mystery number
    // if the guess is too low
    if(inputNum < mysNum) {
        outBox.textContent = "Your guess is too LOW";
    }else if(inputNum > mysNum) {
        outBox.textContent = "Your guess is too HIGH";
    }else {
        outBox.innerHTML = `&#127880; &#129395; YAY!<br> Mystery Number is ${mysNum}`;
        guessBtn.disabled = true;
        guessBtn.style.opacity = "0.8";
        guessBtn.style.cursor = "none";
        inputBox.disabled = true;
        inputBox.style.cursor = "none";

        // 15. Display PLAY button after a delay
        guessingAvg = totalGuesses / gamesPlayed;
        avgSpan.textContent = guessingAvg.toFixed(2);
        // setTimeout(callback,delayMS)
        setTimeout(function() {
            // show hide elements for new game:
            // also restore / re-enable guess btn and input for the next game
            playBtn.style.display = "block";
            playBtn.style.margin = "1rem auto";
            guessBtn.style.display = "none";
            guessBtn.disabled = false;
            guessBtn.style.opacity = "1";
            inputBox.disabled = false;
            inputBox.style.display = "none";
            guessBtn.style.cursor = "pointer";
            inputBox.style.cursor = "pointer"
            guessNumsArr = [];
            outBox.innerHTML = "Play again..?";
        }, 5000);
    }
    // update avg
    }
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