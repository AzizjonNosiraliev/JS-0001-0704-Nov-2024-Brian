// Lesson 08.03 - START

// Blackjack - Pt. 1: DEAL..!
// Review of Lesson 05.04: Making a deck of cards with a nested loop
// New for Lesson 08.03: Deal Blackjack on a timer with setInterval
// Keep score and display the score to the DOM
// Detect Blackjack (21) for the Player, the Dealer -- or both
// Prompt Player to Hit or Stand

// Review the code for making a deck of cards as array of objects

// 1. Given: Arrays for making and storing the cards:
const kinds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs'];
const deck = [];

// 2. Review: Set up a nested for loop that iterates over 
// the kinds and suits arrays:
kinds.forEach(k => {
    suits.forEach(s => {

        // 4. Concatenate the card name and image file names:
        // - name "Queen of Diamonds" corresponds to file "Queen-of-Diamonds.png"
        let name = `${k} of ${s}`;
        let file = `${k}-of-${s}.png`;

        // 5. Declare a variable, valu, with an inital value of 0;
        // - valu is for storing the numeric value of the card
        // let valu;

        // 6. Set the valu property based on the kind of card
        // - the length of the kind string reveals if it is a face card
        // as only "Jack", "Queen", "King" have more than 3 characters
        let valu = k == 'Ace' ? 11 : k.length ? 10 : k;
        // Review: Each card is an object with 5 properties:
        /* 
            - name: the name of the card: "Jack of Hearts"
            - file: the card file name: "Jack-of-Hearts.png"
            - kind: 2-10, 'Jack', 'Queen', 'King', 'Ace'
            - suit: 'Diamonds', 'Hearts', 'Spades', 'Clubs'
            - valu: numeric value; face card = 10, Ace = 11
        */

        // 7. Declare a card object with the 5properties, the values of which are
        // the 5 corresponding variables 
        const card = {name: name,file: file, kind: k, suit: s, value: valu};
        // 8. Push the card object into the deck array:
        deck.push(card);
    });
});
// 9. Review: Shuffle (randomize) the deck:
deck.sort(() => Math.random() - 0.5);
// 10. Review: Make a shoe consisting of 6 decks of cards, using the spread ... operator
const shoe = [...deck, ...deck, ...deck, ...deck, ...deck, ...deck];
// 11. Review: Shuffle (randomize) the shoe:
shoe.sort(() => Math.random() - 0.5);
console.log(shoe);

// 12. Get the DOM elements:
// - Get the DEAL button and assign a listener for calling the deal function when clicked
const dealBtn = document.getElementById('deal-btn');
const hitBtn = document.getElementById('hit-btn');
const standBtn = document.getElementById('stand-btn');
dealBtn.addEventListener('click', deal);
// hitBtn.addEventListener('click', hit);
// standBtn.addEventListener('click', stand);

// - Get the HIT and STAND buttons, which won't be assigned listeners yet
// - Get the h2, which will be used for outputting prompts ("HIT or STAND?", etc.)
const outputH2 = document.querySelector('h2');
// 13. Get the divs that hold the player and dealer cards
const dealerCardsDiv = document.getElementById('dealer-cards-div');
const playerCardsDiv = document.getElementById('player-cards-div');

// 13B. display the player and dealer scores
const dealerScoreSpan = document.getElementById('dealer-score-span');
const playerScoreSpan = document.getElementById('player-score-span');

// 14. Declare global vars need for keeping track of the deal
// - arrays for holding player and dealer cards 
// variables for keeping score:
// - dealCounter keeps track of total cards dealt
let dealCounter = 0;
const dealerHand = [];
const playerHand = [];
let playerScore = 0;
let dealerScore = 0;
// keep tracking Aces separately as their value can very(11 or 1)
let pAceScore = 0;
let dAceScore = 0;

// DEAL
// Now, that we have the shoe, let's deal a hand of Blackjack. We dealt a hand of
// poker in the earlier lesson where we made the deck of cards, BUT this will be
// different: to better emulate game play, we will use setInterval to deal on a 
// 1-second delay between cards
// the deal consists of 2 hands -- player and dealer -- each of whom get 2 cards
// the dealer's first card is dealt face down -- the "hole card"

// 15. Define the deal function:
function deal() {
    // 16. Since this is a new hand, reset the scores and "clear the table"
    // - reset the player and dealer scores
    
    dealerScore = 0;
    playerScore = 0;
    // - empty the divs that display the cards
    dealerCardsDiv.innerHTML = '';
    playerCardsDiv.innerHTML = '';
    // - clear the text from the output h2
    outputH2.innerHTML = '';
    // - reset the score again
    dealerScoreSpan.innerHTML = 'Dealer Show: 0';
    playerScoreSpan.innerHTML = 'Player Show: 0';
    // - empty the arrays that store the player and dealer handsdealCounter = 0;
    dealerHand.length = 0;
    playerHand.length = 0;
    // - reset the deal counter 
    dealCounter = 0;

    //disable the DEAl button the instant it is clicked so that it cannot be clicked during game again
    dealBtn.disabled = true;
    dealBtn.classList.toggle('disabled-btn');

    // 17. Call the setInterval method with its callback function, set equal to a variable,
    // myInterval, which will be used to clear the interval (stop deal)
    const dealInterval = setInterval(() => {
        
        // 18. Increment the counter that keeps track of how many card have been dealt
        dealCounter++;

        // 20. Instantiate a new image object to hold the card image
        const cardPic = new Image();

        // 21. Pop a card object off the shoe array and save it as a new card
        const cardObj = shoe.pop();
        
        // 19. If this is the 4th card being dealt, clear the interval (stop the deal)
        if(dealCounter == 4) {
            cardPic.src = `images/cards350px/0-Back-of-Card-Red.png`;
            clearInterval(dealInterval);
        } else {
            cardPic.src = `images/cards350px/${cardObj.file}`;
        }
        // 26. Push the card into the correct hand

        // Determine who gets the card
        if(dealCounter % 2 == 0) {
            cardPic.style.width = '105px';
            dealerCardsDiv.appendChild(cardPic);
            dealerHand.push(cardObj);
            dealerScore += cardObj.value;
            //do not reveal the dealer score -- just the value of the first card 
            //which is stored in dealerHand array under index[0]
            dealerScoreSpan.innerHTML = "Dealer Shows:" + dealerHand[0].value;

            // test conditions 
            // cardObj.kind == 'Ace';
            // dealerScore == 22;

            //check if the dealer's newly dealt card is Ace
            if(cardObj.kind == 'Ace') {
                // if dealer score is 22, they have 2 Aces
                if(dealerScore == 22) {// this is the 2nd Ace if the score is 22
                    //subtract 10 from the score -- 22 on the deal is impossible
                    dAceScore = 12; // 2nd Ace counts 1
                    dealerScore = 12;
                    console.log('2nd Ace dAceScore:', dAceScore);
                    dealerHand[1].value = 1;
                } else {// if score is NOT 22, this is the first Ace
                    dAceScore == 11; // 1st Ace count 11
                    console.log('1st Ace dAceScore:', dAceScore);
                }
            } // if card is an Ace
        // PLAYER CARDS:
        } else {// player gets odd cards
            playerCardsDiv.appendChild(cardPic);
            playerHand.push(cardObj);
            playerScore += cardObj.value;
            playerScoreSpan.innerHTML = "Player Score:" + playerScore;

            // test conditions 
            // cardObj.kind == 'Ace';
            // dealerScore == 22;

            //check if the dealer's newly dealt card is Ace
            if(cardObj.kind == 'Ace') {
                // if dealer score is 22, they have 2 Aces
                if(playerScore == 22) {// this is the 2nd Ace if the score is 22
                    //subtract 10 from the score -- 22 on the deal is impossible
                    pAceScore = 12; // 2nd Ace counts 1
                    playerScore = 12;
                    console.log('2nd Ace pAceScore:', pAceScore);
                    playerScoreSpan.innerHTML = 'P'
                    playerHand[1].value = 1; //
                } else {// if score is NOT 22, this is the first Ace
                    pAceScore == 11; // 1st Ace count 11
                    console.log('1st Ace dAceScore:', pAceScore);
                }
            } // if card is an Ace
        }
        // 34. Log the hands and scores 
        console.log('dealerHand:', dealerHand);
        console.log('dealerScore:', dealerScore);
        console.log('playerHand:', playerHand);
        console.log('playerScore:', playerScore);
    }, 1000); 

    setTimeout(() => {
        // playerScore = 21;
        // dealerScore = 21;
        // 35. If no one has blackjack
        if(dealerScore == 21 && playerScore == 21) {
            outputH2.innerHTML = "Wow! Both have Blackjack! It's a PUSH!";
            // reveal the hole card (dealer's hidden card) by setting its src
            // to be the actual card, which is stored in dealerHand arr
            // the cards on the table exist as children propery of their
            // parent div, where children is an array
            setTimeout(() => {
                dealerCardsDiv.children[1].src = `images/cards350px/${dealerHand[1].file}`;
            },1500);
        } else if (playerScore == 21) {
            outputH2.innerHTML = "You have Blackjack! You WIN!";
            setTimeout(() => {
                dealerCardsDiv.children[1].src = `images/cards350px/${dealerHand[1].file}`;
            },1500);
        } else if (dealerScore == 21) {
            outputH2.innerHTML = "Dealer has Blackjack! You LOSE!";
            setTimeout(() => {
                dealerCardsDiv.children[1].src = `images/cards350px/${dealerHand[1].file}`;
            },1500);
        } else {
            outputH2.innerHTML = "HIT or STAND..?";
            hitBtn.disabled = false; // enable the Hit button
            hitBtn.classList.toggle('disabled-btn');
            standBtn.disabled = false; // enable the Stand button
            standBtn.classList.toggle('disabled-btn');
        }
    }, 5500);

}; // end of the function

// END: Lesson 08.03
// NEXT: Lesson 08.04