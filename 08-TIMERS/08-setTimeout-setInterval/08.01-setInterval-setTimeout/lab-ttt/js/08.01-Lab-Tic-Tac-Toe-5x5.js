// FIC-FAC-FOE-FOU-FIV in 67 lines of JavaScript code
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
btn.addEventListener('click', renderBoard); // btn calls function
const spn = document.querySelector('span'); // output feedback here
let XO = "X", turns = 0, size = 3, sqs = [], s = {}; // object to hold moves
// set to either "X" or "O" with each square clicked
// counts total squares played; at 9 it's a Cat's Game
// boolean to toggle between X's turn and O's turn
// initial configuration of the used squares object: all squares numbered from 1-9
let h1 = document.querySelector('h1');
const board = document.getElementById('board');
const advCB = document.getElementById('adv');
advCB.addEventListener('change', renderBoard);

function renderBoard() {
    XO = "X";
    turns = 0; // reset the counter that keeps track of turns
    board.innerHTML = "";
    advCB.checked ? size = 5 : size = 3;
    size == 3 ? board.className = 'board3' : board.className = 'board5';
    size == 3 ? h1.textContent = 'Tic-Tac-Toe' : h1.textContent = 'Fic-Fac-Foe-Four-Five';
    for(let i = 1; i <= size**2; i++) {
        let sq = document.createElement('div');
        s['s'+i] = i; // populate the object with key-value pairs: s1:1, etc
        sq.id = i;
        sq.addEventListener('click', move);
        size == 3 ? sq.className = 'sq3' : sq.className = 'sq3 sq5';
        board.appendChild(sq);
        sqs.push(sq);
    }
    spn.textContent = 'X\'s turn..'; // prompt the player to start the game
} // renderBoard() 
renderBoard();

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
    if(size == 3 && turns > 4) { // check for a winner from 5th turn on
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
            return;
        }
    }
    if(size == 5 && turns > 4) { // check for a winner from 5th turn on
        // check for 4-in-a-row across top row and down left column:
        if((s.s1==s.s2 && s.s1==s.s3 && s.s1==s.s4) || (s.s1==s.s6 && s.s1==s.s11 && s.s1==s.s16) || 
        (s.s2==s.s3 && s.s2==s.s4 && s.s2==s.s5) || (s.s6==s.s11 && s.s6==s.s16 && s.s6==s.s21) || 
        // heck for winner diagonally from upper left and down middle column
        (s.s1==s.s7 && s.s1==s.s13 && s.s1==s.s19) || (s.s3==s.s8 && s.s3==s.s13 && s.s3==s.s18) || 
        (s.s5==s.s9 && s.s5==s.s13 && s.s5==s.s17) || (s.s5==s.s10 && s.s5==s.s15 && s.s5==s.s20) || 
        // heck for winner along major diagonal, from upper right and down right column
        (s.s7==s.s13 && s.s7==s.s19 && s.s7==s.s25) || (s.s8==s.s13 && s.s13==s.s18 && s.s8==s.s23) ||               
        (s.s9==s.s13 && s.s9==s.s17 && s.s9==s.s21) || (s.s10==s.s15 && s.s10==s.s20 && s.s10==s.s25) ||               
        // check for winner across the middle row across the bottom row
        (s.s11==s.s12 && s.s11==s.s13 && s.s11==s.s14) || (s.s21==s.s22 && s.s21==s.s23 && s.s21==s.s24) ||
        (s.s12==s.s13 && s.s12==s.s14 && s.s12==s.s15) || (s.s22==s.s23 && s.s22==s.s24 && s.s22==s.s25) ||
        // check for winner 2nd row and 4th row
        (s.s6==s.s7 && s.s6==s.s8 && s.s6==s.s9) || (s.s7==s.s8 && s.s7==s.s9 && s.s7==s.s10) ||
        (s.s16==s.s17 && s.s16==s.s18 && s.s16==s.s19) || (s.s17==s.s18 && s.s17==s.s19 && s.s17==s.s20) ||
        // check for winner 2nd col and 4th col
        (s.s2==s.s7 && s.s2==s.s12 && s.s2==s.s17) || (s.s7==s.s12 && s.s7==s.s17 && s.s7==s.s22) ||
        (s.s4==s.s9 && s.s4==s.s14 && s.s4==s.s19) || (s.s9==s.s14 && s.s9==s.s19 && s.s9==s.s24) ||  
        //check for winner along minor diagonal: 2-8-14-20, 4-8-12-16, 6-12-18-24, 10-14-18-22,
        (s.s2==s.s8 && s.s2==s.s14 && s.s2==s.s20) || (s.s4==s.s8 && s.s4==s.s12 && s.s4==s.s16) ||  
        (s.s6==s.s12 && s.s6==s.s18 && s.s6==s.s24) || (s.s10==s.s14 && s.s10==s.s18 && s.s10==s.s22)) { 
            spn.textContent = XO + " Wins!"; // announce the winner
            sqs.forEach(e => e.removeEventListener('click', move));
            return;
        }
    }
    // if we made it this far, there is no winner yet, so toggle "X" / "O" for the next
    XO == "X" ? XO = "O" : XO = "X"; // set XO value based on boolean
    // if we used all 9 turns and no winner yet, it's a tie -- Cat's Game, else switch turns
    if((size == 3 && turns == 9) || (size == 5 && turns == 25)) {
        spn.textContent = "Cat's Game!";
        sqs.forEach(e => e.removeEventListener('click', move));
    } else {
        spn.textContent = XO + "'s move.."; 
    }
} // function move()