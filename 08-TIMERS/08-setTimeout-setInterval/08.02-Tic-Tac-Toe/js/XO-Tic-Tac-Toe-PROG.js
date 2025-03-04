// 1. Get the play button and have it call the play() function:


// 2. Get the feedback span tag:


// 3. Initialize a variable for counting turns (start evaluating winner from 
// turn 5; after 9 turns, game is over, whether or not there is a winner)


// 4. Declare string to store the current turn for output to the board:
// X goes first

// 5. Declare an object to store the moves by row and column.
//    As the game proceeds, 1-9 will be replace by "X" and "O":


// 6. Define the play() function, which resets the game:


    // 7. Reset the gameplay variables and output a prompt for X to go:


    // 8. Get all 9 tic-tac-toe squares as an array

    // 9. Loop the squares array; use the "old loop style" with counter i,
    // since we need the index:

        // 10. Clear the current square of its "X" or "O" from previous game:

        // 11. Reset the 9 square's corresponding object value to null:

        // 12. Click a square to call the addXO function

    // end loop


// end play() function

// 13. Define the addXO function which runs whenever a square is clicked


    // 14. Increment turns

    // 15. Ouput "X" or "O" to the square:

    // 16. A clicked square cannot be clicked again, so remove its listener:

    // 17. Save the move to the object:


    // 18. Flip the XO value:

    // 19. Prompt the player to move:

    // 20. If turns is at least 5, check for winner:

// end addXO function

// 20. Define the checkForWinner function that runs automatically every time a move is made
// and there have been at least 5 turns


    /* Tic-Tac-Toe has EIGHT winning sequences:            
        sq1, sq2, sq3 (top row)       sq3, sq6, sq9 (right col) 
        sq2, sq5, sq8 (mid col)       sq7, sq8, sq9 (bottom row)  
        sq4, sq5, sq6 (mid row)       sq1, sq5, sq9 (diag from upper left)
        sq1, sq4, sq7 (left col)      sq3, sq5, sq7 (diag from upper right)
    */

    // 21. Check for 3 of the same ("X" or "O") in a row in all 8 possible combos:
    // Big "8 OR IF"


        // 22. If one of the 8 if-statements is true, announce the winner:
        
        // exit the function so that we don't check for tie game

    // end big "8 OR" if

    // 23. If no winner is found, check to see if game is over, anyway:


// end checkForWinner() function