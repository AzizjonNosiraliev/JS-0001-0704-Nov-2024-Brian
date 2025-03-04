// TIC-TAC-TOE - PROG
// get all squares and make them clickable:
// when clicked the square calls a function

// 1. playBtn 
let playBtn = document.querySelector('.btn');
let squares = document.querySelectorAll('.sq');
// console.log(squares); // Node List
// 2. addEventListener('click', playNewGame);
playBtn.addEventListener('click', playNewGame);
// 3. squares = document.querySelectorAll('.sq');
// 4. forEach
// 5. addEventListener('click', addXO);
const chosenSquares = [];
let XsTurn = true;

// 6. true;
// 7. [];

// 8. this.id;
// 9. slice
// 10. XO;
// 11. ? : ;
// this.textContent = XO;
// 12. push(    {char: XO, valu: Number(num)}    );
// 13. !XsTurn;

// once the 3rd X is in, check each time for winner
// 14. if(usedSqs.length > 4) 
// checkForWinner();

// 15. playNewGame() {
function playNewGame() {
    XsTurn = true;
    // loop through squares Node List and set text
    // to empty string and remove the winner class
    for(i = 0; i < squares.length; i++) {
        squares[i].textContent = ''; 
        squares[i].classList.remove('winner');
        squares[i].addEventListener('click', addXO);
    }
    // refactor #1 : use forEach instead of for loop
    // squares.forEach(function(e) {
    //     e.textContent = ''; 
    //     e.classList.remove('winner');
    // });
        
    // refactor #2 : use arrow function
    // squares.forEach(e => {
    //     e.textContent = '';
    //     e.classList.remove('winner');
    // });
};

function addXO() {
    chosenSquares.push(this.id);
    console.log(chosenSquares);
    this.textContent = "O";
}

// clear the squares of X's and O'x
// 16. forEach(e => {
// 17. e.textContent = "";
// 18. e.classList.remove

// 2 player tic-tac-toe:
// NOT you vs. computer -- user plays both X and O
// click button to clear squares
// X goes first -- click square to add X
// O goes next -- click square to add O
// keep going until someone wins
// keep track of X and O (separate arrays?)
// keep track of square totals (get numbers from id's ?)
// when total reaches certain values or passes certain
// math tests, we have a winner -- modulus maybe ?
// get all the 9 squares in one line of code
// loop them (forEach) and assign listeners
// when clicked the square will become an X or an O
// depending on whose turn it is
// to indicate a winner, make the 3 squares turn green
// that's the .winner css
