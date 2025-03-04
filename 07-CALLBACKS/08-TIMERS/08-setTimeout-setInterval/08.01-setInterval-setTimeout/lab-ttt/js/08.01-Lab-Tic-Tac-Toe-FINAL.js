// TIC-TAC-TOE in 88 lines of JavaScript code
// // 2 player tic-tac-toe:
// NOT you vs. computer -- user plays both X and O
// click PLAY button to clear squares and reset game variables
// X goes first: click a square to add "X"
// O goes next: click a square to add "O"
// keep going until "X" or "O" wins -- or it's a "Cat's Game"
// the big algorithmic challenge is how to check for 3 in a row
// loop them (forEach) and assign listeners
// get all squares and make them clickable:
// when clicked the square calls a function
// winning squares turn green by having winner class applied to them
const playBtn = document.querySelector('button'); // the only button
playBtn.addEventListener('click', playNewGame); // btn calls function
const squares = document.querySelectorAll('.sq'); // all 9 squares
const span = document.querySelector('span'); // output feedback here
let XO = "X", turns = 0, XsTurn = true; // game play variables
// set to either "X" or "O" with each square clicked
// counts total squares played; at 9 it's a Cat's Game
// boolean to toggle between X's turn and O's turn
// initial configuration of the used squares object: all squares null
const usedSqs = {sq1:null, sq2:null, sq3:null, sq4:null, sq5:null, sq6:null, sq7:null, sq8:null, sq9:null}; // object of 9 properties
squares.forEach(e => e.addEventListener('click', addXO)); // clickable

function playNewGame() {
    XsTurn = true; // new game starts with X's turn
    turns = 0; // reset the counter
    squares.forEach((e,i) => {
        usedSqs["sq" + (i+1)] = null; // reset object to all null
        e.textContent = ""; // clear the text from each square
        e.classList.remove('winner'); // remove the green winner class
        e.disabled = false; // re-enable squares to call functions
        e.addEventListener('click', addXO); // make squares call func
    });
    span.textContent = "X's turn..";
}

function addXO() {
    turns++; // increment counter
    XsTurn ? XO = "X" : XO = "O"; // set XO value based on boolean
    this.textContent = XO; // output the X or O to the clicked square
    usedSqs[this.id] = XO; // change obj property from null to X or O
    XsTurn = !XsTurn; // flip the boolean to toggle whose turn it is
    XsTurn ? XO = "X" : XO = "O"; // set XO value based on boolean
    XsTurn ? span.textContent = "X's turn.." : span.textContent = "O's turn.." ; 
    if(turns > 4) checkForWinner(); // check for a winner from 5th turn on
    this.removeEventListener('click', addXO); // make square unclickable
}

// two rounds of refactoring: 
// squares[0].classList.add('winner') relegated to function
//if(usedSqs.sq1) put right inside the inner if, thereby eliminating a
// whole level of nesting
function checkForWinner() {

    // check for winner from upper left corner all 3 possible ways:
    // horizontally across the top, verically down the left side
    // and diagonally from upper left to lower right
    // there are 8 possible winning configurations of 3 in a row:

    // 1. check for winner horizontally, across the top:
    if(usedSqs.sq1 && usedSqs.sq1 == usedSqs.sq2 && usedSqs.sq1 == usedSqs.sq3) {
        span.textContent = usedSqs.sq1 + " Wins!"; // output 
        highlightWinner(0,1,2);
        // game over so prevent further clicking on squares
        squares.forEach(e => e.removeEventListener('click', addXO));
        return; // winner found, so return to end the function
    }

    // 3. check for winner vertically, down the left hand column:
    if(usedSqs.sq1 && usedSqs.sq1 == usedSqs.sq4 && usedSqs.sq1 == usedSqs.sq7) {
        span.textContent = usedSqs.sq1 + " Wins!";
        squares.forEach(e => e.removeEventListener('click', addXO));
        highlightWinner(0,3,6);
        return;
    }

    // 3. check for winner diagonally, from upper left to lower right:
    if(usedSqs.sq1 && usedSqs.sq1 == usedSqs.sq5 && usedSqs.sq1 == usedSqs.sq9) {
        span.textContent = usedSqs.sq1 + " Wins!";
        squares.forEach(e => e.removeEventListener('click', addXO));
        highlightWinner(0,4,8);
        return;
    }

    // 4. check for winner vertically, down the middle column:
    if(usedSqs.sq2 && usedSqs.sq2 == usedSqs.sq5 && usedSqs.sq5 == usedSqs.sq8) {
        span.textContent = usedSqs.sq2 + " Wins!";
        squares.forEach(e => e.removeEventListener('click', addXO));
        highlightWinner(1,4,7);
        return;
    }

    // 5. check for winner diagonally, from upper right to lower left:
    if(usedSqs.sq3 && usedSqs.sq3 == usedSqs.sq5 && usedSqs.sq3 == usedSqs.sq7) {
        span.textContent = usedSqs.sq3 + " Wins!";
        squares.forEach(e => e.removeEventListener('click', addXO));
        highlightWinner(2,4,6);
        return;
    }

    // 6. check for winner vertically, down the right hand column:
    if(usedSqs.sq3 && usedSqs.sq3 == usedSqs.sq6 && usedSqs.sq3 == usedSqs.sq9) {
        span.textContent = usedSqs.sq3 + " Wins!";
        squares.forEach(e => e.removeEventListener('click', addXO));
        highlightWinner(2,5,8);
        return;
    }

    // 7. check for winner horizontally, across the middle row:
    if(usedSqs.sq4 && usedSqs.sq4 == usedSqs.sq5 && usedSqs.sq4 == usedSqs.sq6) {
        span.textContent = usedSqs.sq4 + " Wins!";
        squares.forEach(e => e.removeEventListener('click', addXO));
        highlightWinner(3,4,5);
        return;
    }

    // 8. check for winner horizontally, across the bottom row:
    if(usedSqs.sq7 && usedSqs.sq7 == usedSqs.sq8 && usedSqs.sq7 == usedSqs.sq9) {
        span.textContent = usedSqs.sq7 + " Wins!";
        squares.forEach(e => e.removeEventListener('click', addXO));
        highlightWinner(6,7,8);
        return;
    }

    if(turns == 9) { // if 9 turns have been played, without a winner
        span.textContent = "Cat's Game!";  // it's a tie (Cat's Game)
        squares.forEach(e => e.removeEventListener('click', addXO));
    } // if(turns == 9)

} // function checkForWinner()

// function highlightWinner adds winner class (green bg) to winning squares
function highlightWinner(tic,tac,toe) {
    squares[tic].classList.add('winner');
    squares[tac].classList.add('winner');
    squares[toe].classList.add('winner');
}


