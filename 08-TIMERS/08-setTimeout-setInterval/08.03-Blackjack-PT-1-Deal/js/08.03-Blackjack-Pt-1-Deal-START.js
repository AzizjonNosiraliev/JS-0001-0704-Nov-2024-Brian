// Lesson 08.03 - START

// Blackjack - Pt. 1: DEAL..!
// Review of earlier lesson Making a deck of cards with a nested loop
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
// the kinds and suits arrays: OR use arr.forEach()
kinds.forEach(k => {
    suits.forEach(s => {

        // 4. Concatenate card name and image file:
        // - name "Queen of Diamonds" corresponds to file "Queen-of-Diamonds.png"
        let name = `${k} of ${s}`;
        let file = `${k}-of-${s}.png`;

        // 6. Set the valu property based on the kind of card
        // - the length of the kind string reveals if it is a face card
        // as only "Jack", "Queen", "King" have more than 3 characters

        // Review: Each card is an object with 5 properties:
        /* 
            - name: the name of the card: "Jack of Hearts"
            - file: the card file name: "Jack-of-Hearts.png"
            - kind: 2-10, 'Jack', 'Queen', 'King', 'Ace'
            - suit: 'Diamonds', 'Hearts', 'Spades', 'Clubs'
            - valu: numeric value; face card = 10, Ace = 11
        */

       // above if-else if-else as ternary
       let valu = k == "Ace" ? 11 : k.length ? 10 : k;

        // 7. Declare a card object with the 5properties, the values of which are the 5 corresponding variables 
        const card = { 
            name: name,
            file: file, 
            kind: k, 
            suit: s, 
            valu: valu
        };
        // 8. Push the card object into the deck array:
        deck.push(card);
    }); // close forEach(s => {})
}); // close forEach(k => {})

// 9. Review: Shuffle (randomize) the deck:
deck.sort(() => Math.random() - 0.5);
deck.sort(() => Math.random() - 0.5);

// 10. Review: Make a shoe consisting of 6 decks of cards, using the spread ... operator
const shoe = [...deck, ...deck, ...deck, ...deck, ...deck, ...deck];

// 11. Review: Shuffle (randomize) the shoe:
shoe.sort(() => Math.random() - 0.5);
shoe.sort(() => Math.random() - 0.5);
console.log(shoe);

// 12. Get the DOM elements:
// - Get the DEAL button and assign a listener for calling the deal function when clicked
const dealBtn = document.getElementById('deal-btn');
dealBtn.addEventListener('click', deal);

// - Get the HIT and STAND buttons, which won't be assigned listeners yet
const hitBtn = document.getElementById('hit-btn');
hitBtn.addEventListener('click', hit);

const standBtn = document.getElementById('stand-btn');
standBtn.addEventListener('click', stand);

// - Get the h2, which will be used for prompts, such as "HIT or STAND?"
const outputH2 = document.querySelector('h2');

// 13. Get the divs that hold the player and dealer cards
const dealerCardsDiv = document.getElementById('dealer-cards-div');
const playerCardsDiv = document.getElementById('player-cards-div');

// 13B. Get the spans that display the player and dealer scores
const dealerScoreSpan = document.getElementById('dealer-score-span');
const playerScoreSpan = document.getElementById('player-score-span');

// 14. Declare global vars need for keeping track of the deal
// - dealCounter keeps track of total cards dealt
let dealCounter = 0;
// - arrays for holding player and dealer cards 
const dealerHand = [];
const playerHand = [];
// variables for keeping score:
let playerScore = 0;
let dealerScore = 0;
// keep track of Aces separately, as their value can vary (11 or 1)
let pAceScore = 0;
let dAceScore = 0;

// DEAL
// Now, that we have the shoe, let's deal a hand of Blackjack. We dealt a hand of
// poker in the earlier lesson where we made the deck of cards, BUT this will be
// different: to better emulate game play, we will use setInterval to deal on a 
// 1-second delay between cards
// the deal consists of 2 hands -- player and dealer -- each of whom get 2 cards
// the dealer's SECOND card is dealt face down -- the "hole card"

// 15. Define the deal function:
function deal() {
    console.log('deal()'); // make sure function is being called
    // 16. Since this is a new hand, reset the scores and "clear the table"
    // - reset the player and dealer scores
    dealerScore = 0;
    playerScore = 0;
    // - empty the divs that display the cards
    dealerCardsDiv.innerHTML = "";
    playerCardsDiv.innerHTML = "";
    // - clear the text from the output h2:
    outputH2.innerHTML = "";
    // - reset the score spans:
    dealerScoreSpan.innerHTML = "Dealer Shows: 0";
    playerScoreSpan.innerHTML = "Player Score: 0";
    // - empty the arrays that store the player and dealer hands
    dealerHand.length = 0;
    playerHand.length = 0;
    // - reset the deal counter
    dealCounter = 0;

    // disable the DEAL button the instant it is clicked
    // so that it cannot be clicked again during game
    dealBtn.disabled = true;
    dealBtn.classList.toggle('disabled-btn');

    // 17. Call the setInterval method with its callback function, set equal to a variable,
    // dealInterval will be used to clear interval (stop deal)
    const dealInterval = setInterval(() => {

        // 18. Increment the counter that keeps track of how many cards have been dealt
        dealCounter++;

        // 20. Instantiate new image object to hold the card image
        const cardPic = new Image();

        // 21. Pop card object off shoe array and save it as new card
        const cardObj = shoe.pop();

        // 21B. Set src of cardPic to file prop of cardObj

        // 19. If this is the 4th and final card being dealt:
        //     - clear the interval (stop the deal)
        //     - deal this card face down
        if(dealCounter == 4) {
            cardPic.src = `images/cards350px/0-Back-of-Card-Red.png`;
            clearInterval(dealInterval);
        } else {
            cardPic.src = `images/cards350px/${cardObj.file}`;
        }

        // DETERMINE WHO GETS THE CARD 
        // modulus % gives even cards to dealer, odd cards to player
        // 26. Push the card into the correct hand based on odd-even
        // DEALER CARDS:  
        if(dealCounter % 2 == 0) { // even (2 and 4) is the dealer's card
            // output the card to the dealers box
            cardPic.style.width = "105px";
            dealerCardsDiv.appendChild(cardPic);
            dealerHand.push(cardObj);
            dealerScore += cardObj.valu;
            // do not reveal the dealer score -- just the value of the first card
            // which is stored in the dealerHand array at index 0
            dealerScoreSpan.innerHTML = "Dealer Shows: " + dealerHand[0].valu;

            // test the rare "Dealer has 2 Aces" scenario:
            // cardObj.kind = 'Ace'; // force current card to be an Ace
            // dealerScore = 22; // set score to 22 to emulate 2 Aces dealt to dealer

            // check if the dealer's newly dealt card is an Ace
            if(cardObj.kind == 'Ace') {
                // if dealer's score is 22, they have 2 Aces
                if(dealerScore == 22) { // this is the 2nd Ace if score is 22
                    // subtract 10 from the score -- 22 on the deal is impossible
                    dAceScore = 12; // 2nd Ace counts 1
                    dealerScore = 12;
                    console.log('2nd Ace dAceScore, dealerScore:',dAceScore,dealerScore);
                    // set the valu prop of the 2nd Ace in playerHand to 1
                    dealerHand[1].valu = 1; // { kind:'Ace', valu:1 }
                    console.log('dealerHand w Ace 1:', dealerHand);
                } else { // if score is NOT 22, this is the first Ace
                    dAceScore = 11; // 1st Ace counts 11
                    console.log('1st Ace dAceScore:',dAceScore);
                }
            } // if card is an Ace

        // PLAYER CARDS:    
        } else { // player gets odd card (1 and 3)
            playerCardsDiv.appendChild(cardPic);
            playerHand.push(cardObj);
            playerScore += cardObj.valu;
            playerScoreSpan.innerHTML = "Player Score: " + playerScore;

            // test the rare "player has 2 Aces" scenario:
            // cardObj.kind = 'Ace'; // force current card to be an Ace
            // playerScore = 22; // set score to 22 to emulate 2 Aces dealt to player
            // check if the player's newly dealt card is an Ace
            if(cardObj.kind == 'Ace') {
                // if dealer's score is 22, they have 2 Aces
                if(playerScore == 22) { // this is the 2nd Ace if score is 22
                    // subtract 10 from the score -- 22 on the deal is impossible
                    pAceScore = 12; // 2nd Ace counts 1
                    playerScore = 12;
                    console.log('2nd Ace pAceScore, playerScore:',pAceScore,playerScore);
                    // player score just went from 22 to 12, so update output score:
                    playerScoreSpan.innerHTML = "Player Score: " + playerScore;
                    // set the valu prop of the 2nd Ace in playerHand to 1
                    playerHand[1].valu = 1; // { kind:'Ace', valu:1 }
                    console.log('playerHand w Ace 1:', playerHand);
                } else { // if score is NOT 22, this is the first Ace
                    pAceScore = 11; // 1st Ace counts 11
                    console.log('1st Ace pAceScore:',pAceScore);
                }
            } // if card is an Ace
        }

        // 34. Log the hands and scores to the console
        console.log('Player Hand:', playerHand);
        console.log('Player Score:', playerScore)
        console.log('Dealer Hand:', dealerHand);
        console.log('Dealer Score:', dealerScore);

    // 40. Set the setInterval timer for the card dealing to repeat every 1 second:
    }, 1000);

    setTimeout(() => {
        // set up testing scores that we can hard code
        // playerScore = 21;
        // dealerScore = 21;
        // 35. Check if BOTH have Blackjack
        if(dealerScore == 21 && playerScore == 21) {
            outputH2.innerHTML = "Wow! Both have Blackjack! It's a PUSH!";
            // reveal the hole card (dealer's hidden card) by setting its src
            // to be the actual card, which is stored in dealerHand arr
            // the cards on the table exist as children propery of their
            // parent div, where children is an array
            setTimeout(() => {
                dealerCardsDiv.children[1].src = `images/cards350px/${dealerHand[1].file}`;
            },1500);
        } else if(dealerScore == 21) {
            outputH2.innerHTML = "Dealer has Blackjack! You LOSE!";
            setTimeout(() => {
                dealerCardsDiv.children[1].src = `images/cards350px/${dealerHand[1].file}`;
            },1500);
        } else if(playerScore == 21) {
            outputH2.innerHTML = "You have Blackjack! You WIN!";
            setTimeout(() => {
                dealerCardsDiv.children[1].src = `images/cards350px/${dealerHand[1].file}`;
            },1500);
        } else {
            outputH2.innerHTML = "HIT or STAND..?";
            // nobody has Blackjack, so Game On! Enable HIT, STAND btns
            hitBtn.disabled = false; // enable the HIT button
            hitBtn.classList.toggle('disabled-btn'); // and also make it look enabled
            standBtn.disabled = false; // enable the STAND button
            standBtn.classList.toggle('disabled-btn'); // and also make it look enabled
        }
    },5500);
    
} // end deal() 

function hit() {
    console.log('Hit Me!');
    // outputH2.innerHTML = 'Hit Me!';
    const cardObj = shoe.pop();
    const cardPic = new Image();
    cardPic.src = `images/cards350px/${cardObj.file}`;
    playerCardsDiv.appendChild(cardPic);
    playerHand.push(cardObj);
    playerScore += cardObj.valu;
    playerScoreSpan.innerHTML = "Player Score: " + playerScore;
    if(playerScore > 21) {
        if(pAceScore >= 11) {
            playerScore -= 10; // reduce player score to 10
            pAceScore -= 10; // reduce player Ace score to 10
            // update the player score display
            playerScoreSpan.innerHTML = "Player Score: " + playerScore;
        } else {
            setTimeout(() => {
                outputH2.innerHTML = 'Yer! BUSTED!'
                dealBtn.disabled = false;
                dealBtn.classList.toggle('disabled-btn');
                hitBtn.disabled = true;
                hitBtn.classList.toggle('disabled-btn');
                standBtn.disabled = true;
                standBtn.classList.toggle('disabled-btn');
            }, 1000);
        }
    }
}

function stand() {
    console.log('I will stand!');
    outputH2.innerHTML = 'I will stand!';
    
}
// END: Lesson 08.03
// NEXT: Lesson 08.04