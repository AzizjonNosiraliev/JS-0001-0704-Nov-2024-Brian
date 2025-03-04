class TicTacToe {

    constructor(app) {

        // const btn = document.querySelector('button'); // the only button
        this.app = app;
        const h1 = document.createElement('h1');
        h1.textContent = "Tic-Tac-Toe";
        this.app.appendChild(h1);
        const span = document.createElement('span');
        this.h1.textContent = "Click PLAY";
        this.h1.appendChild(span);
        const board = document.createElement('div');
        this.board.className = 'board';
        this.app.appendChild(board);

        for(let i = 1; i <= 9; i++) {
            const square = document.createElement('div');
            square.className = 'sq';
            square.id = i;
            square.addEventListener('click', this.move.bind(this));
            this.board.appendChild(square);
        }

        const btn = document.createElement('button');
        btn.addEventListener('click', this.play.bind(this)); // btn calls function
        btn.className = 'btn';
        btn.textContent = "PLAY";
        this.board.appendChild(btn);

        // const sqs = document.querySelectorAll('.sq'); // all 9 squares
        // const spn = document.querySelector('span'); // output feedback here
    } // constructor()

    play() {
        console.log('play');
    }

    move() {
        console.log('move');
    }

} // class TicTacToe

// let XO = "X", turns = 0; // game play variables
// // set to either "X" or "O" with each square clicked
// // counts total squares played; at 9 it's a Cat's Game
// // boolean to toggle between X's turn and O's turn
// // initial configuration of the used squares object: all squares numbered from 1-9
// const s = {s1: 1, s2: 2, s3: 3, s4: 4, s5: 5, s6: 6, s7: 7, s8: 8, s9: 9};
// sqs.forEach(e => e.addEventListener('click', move)); // make squares clickable

// function play() {
//     XO = "X";
//     turns = 0; // reset the counter that keeps track of turns
//     sqs.forEach((e,i) => { // iterate over all the squares in the squares array
//         s["s" + (i+1)] = i+1; // reset each corresponding property in sqs object
//         e.textContent = ""; // clear the text from each square
//         e.addEventListener('click', move); // make squares call the addXO function
//     });
//     spn.textContent = 'Game on! X\'s turn..'; // prompt the player to start the game
// }

// function move() {
//     // *** ### *** ### *** ADD "X" OR "O" *** ### *** ### ***
//     turns++; // increment counter
//     this.textContent = XO; // output the X or O to the clicked square
//     s['s'+this.id] = XO; // set obj key value based on id of clicked square: s4=4
//     // XsTurn = !XsTurn; // flip the boolean to toggle whose turn it is
//     // XsTurn ? XO = "X" : XO = "O"; // set XO value based on boolean
//     // XsTurn ? span.textContent = "X's turn.." : span.textContent = "O's turn.." ; 
//     this.removeEventListener('click', move); // make square unclickable
//     // *** ### *** ### *** CHECK FOR WINNER !!! *** ### *** ### ***
//     if(turns > 4) { // check for a winner from 5th turn on
//         // check for winner across top row and down left column:
//         if((s.s1==s.s2 && s.s1==s.s3) || (s.s1==s.s4 && s.s1==s.s7) || 
//         // heck for winner diagonally from upper left and down middle column
//         (s.s1==s.s5 && s.s1==s.s9) || (s.s2==s.s5 && s.s2==s.s8) ||        
//         // heck for winner diagonally from upper right and down right column
//         (s.s3==s.s5 && s.s3==s.s7) || (s.s3==s.s6 && s.s3==s.s9) ||        
//         // check for winner across the middle row across the bottom row
//         (s.s4==s.s5 && s.s4==s.s6) || (s.s7==s.s8 && s.s7==s.s9)) {
//             spn.textContent = XO + " Wins!"; // announce the winner
//             sqs.forEach(e => e.removeEventListener('click', move));
//             return; // exit the function so that the Cat's Game message will not appear if it
//             // took 9 turns to get a winner
//         }
//     }
//     // if we made it this far, there is no winner yet, so toggle "X" / "O" for the next
//     XO == "X" ? XO = "O" : XO = "X"; // set XO value based on boolean
//     // if we used all 9 turns and no winner yet, it's a tie -- Cat's Game, else switch turns
//     turns == 9 ? spn.textContent = "Cat's Game!" : spn.textContent = XO + "'s move.."; 
// }