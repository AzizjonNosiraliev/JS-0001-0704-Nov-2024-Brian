// TIC-TAC-TOE in 35 lines of JavaScript code
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
const btn = document.querySelector('button'); // the only button
btn.addEventListener('click', play); // btn calls function
const sqs = document.querySelectorAll('.sq'); // all 9 squares
const spn = document.querySelector('span'); // output feedback here
let XO = "X", turns = 0; // game play variables
// set to either "X" or "O" with each square clicked
// counts total squares played; at 9 it's a Cat's Game
// boolean to toggle between X's turn and O's turn
// initial configuration of the used squares object: all squares numbered from 1-9
const s = {s1: 1, s2: 2, s3: 3, s4: 4, s5: 5, s6: 6, s7: 7, s8: 8, s9: 9};
sqs.forEach(e => e.addEventListener('click', move)); // make squares clickable

function play() {
    XO = "X";
    turns = 0; // reset the counter that keeps track of turns
    sqs.forEach((e,i) => { // iterate over all the squares in the squares array
        s["s" + (i+1)] = i+1; // reset each corresponding property in sqs object
        e.textContent = ""; // clear the text from each square
        e.addEventListener('click', move); // make squares call the addXO function
    });
    spn.textContent = 'Game on! X\'s turn..'; // prompt the player to start the game
}

function move() {
    // *** ### *** ### *** ADD "X" OR "O" *** ### *** ### ***
    turns++; // increment counter
    this.textContent = XO; // output the X or O to the clicked square
    s['s'+this.id] = XO; // set obj key value based on id of clicked square: s4=4
    // XsTurn = !XsTurn; // flip the boolean to toggle whose turn it is
    // XsTurn ? XO = "X" : XO = "O"; // set XO value based on boolean
    // XsTurn ? span.textContent = "X's turn.." : span.textContent = "O's turn.." ; 
    this.removeEventListener('click', move); // make square unclickable
    // *** ### *** ### *** CHECK FOR WINNER !!! *** ### *** ### ***
    if(turns > 4) { // check for a winner from 5th turn on
        // check for winner across top row and down left column:
        if((s.s1==s.s2 && s.s1==s.s3) || (s.s1==s.s4 && s.s1==s.s7) || 
        // heck for winner diagonally from upper left and down middle column
        (s.s1==s.s5 && s.s1==s.s9) || (s.s2==s.s5 && s.s2==s.s8) ||        
        // heck for winner diagonally from upper right and down right column
        (s.s3==s.s5 && s.s3==s.s7) || (s.s3==s.s6 && s.s3==s.s9) ||        
        // check for winner across the middle row across the bottom row
        (s.s4==s.s5 && s.s4==s.s6) || (s.s7==s.s8 && s.s7==s.s9)) {
            spn.textContent = XO + " Wins!"; // announce the winner
            sqs.forEach(e => e.removeEventListener('click', move));
            return; // exit the function so that the Cat's Game message will not appear if it
            // took 9 turns to get a winner
        }
    }
    // if we made it this far, there is no winner yet, so toggle "X" / "O" for the next
    XO == "X" ? XO = "O" : XO = "X"; // set XO value based on boolean
    // if we used all 9 turns and no winner yet, it's a tie -- Cat's Game, else switch turns
    turns == 9 ? spn.textContent = "Cat's Game!" : spn.textContent = XO + "'s move.."; 
}