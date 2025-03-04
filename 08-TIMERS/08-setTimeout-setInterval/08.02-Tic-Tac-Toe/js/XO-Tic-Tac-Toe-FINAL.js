// 1. Get the play button and have it call the play() function:
const btn = document.querySelector("button"); // new game button
btn.addEventListener("click", play);

// 2. Get the feedback span tag:
const feedback = document.getElementById("feedback"); // green feedback txt

// 3. Initialize a variable for counting turns (start evaluating winner from 
// turn 5; after 9 turns, game is over, whether or not there is a winner)
let turns = 0;

// 4. Declare string to store the current turn for output to the board:
let XO = "X"; // X goes first

// 5. Declare an object to store the moves by row and column.
//    As the game proceeds, 1-9 will be replace by "X" and "O":
const obj = {
    sq1: 1, sq2: 2, sq3: 3,
    sq4: 4, sq5: 5, sq6: 6,
    sq7: 6, sq8: 8, sq9: 9
};

// 6. Define the play() function, which resets the game:
function play() {

    // 7. Reset the gameplay variables and output a prompt for X to go:
    XO = "X"; 
    turns = 0;
    feedback.textContent = "X's turn..";

    // 8. Get all 9 tic-tac-toe squares as an array
    const squaresArr = document.querySelectorAll(".square"); 

    // 9. Loop the squares array; use the "old loop style" with counter i,
    // since we need the index:
    for (let i = 0; i < squaresArr.length; i++) {

        // 10. Clear the current square of its "X" or "O" from previous game:
        squaresArr[i].textContent = ""; 

        // 11. Reset the 9 square's corresponding object value to null:
        obj['sq'+(i+1)] = i+1;

        // 12. Click a square to call the addXO function
        squaresArr[i].addEventListener('click', addXO);

    } // end loop

    console.log('start:', obj);

} // end play() function

// 13. Define the addXO function which runs whenever a square is clicked
function addXO() {

    // 14. Increment turns
    turns++;

    // 15. Ouput "X" or "O" to the square:
    this.textContent = XO;

    // 16. A clicked square cannot be clicked again, so remove its listener:
    this.removeEventListener('click', addXO);

    // 17. Save the move to the object:
    obj[this.id] = XO;

    console.log('this.id', this.id);

    // 18. Flip the XO value:
    XO == "X" ? XO = "O" : XO = "X";

    // 19. Prompt the player to move:
    feedback.textContent = XO + "'s turn..";

    // 20. If turns is at least 5, check for winner:
    if(turns > 4) checkForWinner();

    console.log(obj);
}

// 20. Define the function that runs automatically every time a move is made
// and there have been at least 5 turns
function checkForWinner() {

    /* Tic-Tac-Toe has EIGHT winning sequences:            
        sq1, sq2, sq3 (top row)       sq3, sq6, sq9 (right col) 
        sq2, sq5, sq8 (mid col)       sq7, sq8, sq9 (bottom row)  
        sq4, sq5, sq6 (mid row)       sq1, sq5, sq9 (diag from upper left)
        sq1, sq4, sq7 (left col)      sq3, sq5, sq7 (diag from upper right)
    */

    // 21. Check for 3 of the same ("X" or "O") in a row in all 8 possible combos:
    if((obj.sq1 == obj.sq2 && obj.sq1 == obj.sq3) ||
       (obj.sq1 == obj.sq4 && obj.sq1 == obj.sq7) ||
       (obj.sq1 == obj.sq5 && obj.sq1 == obj.sq9) ||
       (obj.sq2 == obj.sq5 && obj.sq5 == obj.sq8) ||
       (obj.sq3 == obj.sq6 && obj.sq3 == obj.sq9) ||
       (obj.sq3 == obj.sq5 && obj.sq3 == obj.sq7) ||
       (obj.sq4 == obj.sq5 && obj.sq4 == obj.sq6) ||
       (obj.sq7 == obj.sq8 && obj.sq7 == obj.sq9) ) {

            XO == "X" ? XO = "O" : XO = "X";

            // 22. If one of the 8 if-statements is true, announce the winner:
            feedback.textContent = XO + " Wins!";
            return; // exit the function so that we don't check for tie game
    } 

    // 23. If no winner is found, check to see if game is over, anyway:
    if(turns == 9) feedback.textContent = "Cat's Game";

    return;

}