// Lesson 08.05 - PROG
// Blackjack - Pt. 5: Bet ..!
//  - Player bets by choosing from menu
//  - Chips appear on table
//  - bet() function handles betting
//  - with each hand, money won or lost is tallied
//  - player starts with $5,000 (or any amount)

// Given: kinds and suits arrays for making a deck of cards:
const kinds = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs'];

// 1. Declare an array for storing the deck of 52 cards
const deck = [];

// 2. Set up a nested "loop" of kinds and suits. 
//    Rather than use an actual loop, try forEach():
kinds.forEach(k => {
    suits.forEach(s => {

        // 3. Concatenate the card file name:
        let file = `${k}-of-${s}.png`;

        // 4. Have a ternary set the card value based on conditions:
        //    if k is Ace, the value is 11
        //    else if +k converts to a number, the value is the number
        //    else it must be a face card, so the value is 10
        let valu = k == 'Ace' ? 11 : +k ? +k : 10; 

        // 5. Declare a card object and assign it the two properties:
        const card = { file: file, valu: valu };

        // 6. Push the card object into the deck array:
        deck.push(card);
        
    }); // end suits.forEach
}); // end kinds.forEach

// 9. Shuffle the deck twice:
deck.sort(() => Math.random() - 0.5);
deck.sort(() => Math.random() - 0.5);

// 10. Make a shoe consisting of 6 decks of cards:
const shoe = [...deck, ...deck, ...deck, ...deck, ...deck, ...deck];

// 11. Shuffle (randomize) the shoe twice:
shoe.sort(() => Math.random() - 0.5);
shoe.sort(() => Math.random() - 0.5);

// ### *** Get the DOM elements *** ###

// 12. Get the DEAL, HIT and STAND buttons:
const dealBtn = document.getElementById('deal-btn');
const hitBtn = document.getElementById('hit-btn');
const standBtn = document.getElementById('stand-btn');

// 13. Have the buttons call their respective functions.
//     Comment out the hit and stand listeners, as these
//     functions will not be declared for quite a while:
dealBtn.addEventListener('click', deal);
hitBtn.addEventListener('click', hit);
standBtn.addEventListener('click', stand);

// 14. Get the divs for holdiong the player and dealer hands:
const playerCardsDiv = document.getElementById('player-cards-div');
const dealerCardsDiv = document.getElementById('dealer-cards-div');

//  15. Get the spans for displaying the player and dealer scores:
const playerScoreSpan = document.getElementById('player-score-span');
const dealerScoreSpan = document.getElementById('dealer-score-span');

// 16. Get the output box, which provides prompts and feedback:
const outH2 = document.querySelector('h2');

// 17. Get the bet menu, for choosing the amount of money to bet:
const betMenu = document.getElementById('bet-menu');

// 18. Have the bet menu call the bet() function:
betMenu.addEventListener('change', bet);

// 19. Get the span which displays the player's money total:
const moneySpan = document.getElementById('money-span');

// 20. Get the div where the player's chips appear
const chipsDiv = document.getElementById('chips-div');

// Declare global variables for game play:

// 21. Declare arrays for holding player and dealer hands (cards): 
const playerHand = [];
const dealerHand = [];

// 22. Declare variables for keeping score:
let playerScore = 0;
let dealerScore = 0;

// 23. Declare variables for keeping track of Ace values.
//     which can be 11 or 1 depending on the score
//     (Ace 11 becomes Ace 1 if an 11 would bust the hand)
let playerAceScore = 0; // player Ace score
let dealerAceScore = 0; // dealer Ace score

// 24. Declare a dealCounter to keep track of cards dealt:
//     There are exactly 4 cards dealt (2 each) to start:
let dealCounter = 0;

// 25. Set a variable for keeping track of player's money:
let money = 5000;

// 26. Output the money to the moneySpan with comma format:
moneySpan.textContent = "$" + money.toLocaleString();

// 27. Set the bet amount as the value of the bet menu:
let betAmt = betMenu.value;

// SKIP steps 28-46 -- the bet() function
// bet() is not essential for playing Blackjack, so..
// bet(), which features animated chips, will be implemented last
// proceed directly to step 47: deal()

// 28. Declare define the bet() function
// bet() function runs when player chooses bet amt from bet menu
// function gets the data-chips from the selected option
// splits  that string into an array 
// loops the array and makes chip images
// which it outputs to the table
// once all chips are out, Deal btn becomes active
function bet() {

    // 29: Save the value of bet menu in the global betAmt var
    betAmt = +betMenu.value; 
    console.log('betAmt:', betAmt);

    // 30. Refresh the bet amount:
    outH2.textContent = "You bet $" + betAmt.toLocaleString();

    // 31. Declare a var for setting the left position of the chip(s)
    let leftPos = 0; // for staggering left pos of chip

    // 32. Clear the chips div to make way for fresh chips:
    chipsDiv.innerHTML = "";

    // 33. Clear the divs that display the cards
    playerCardsDiv.innerHTML = "";
    dealerCardsDiv.innerHTML = "";

    // 34. Get the data-chips value for the selected option:
    //     Get the selected index and store in var:
    let indx = betMenu.selectedIndex;   
    console.log('bet menu selected index:', indx);

    // 35. Use the selected index to get selected option from options array
    let optn = betMenu.options[indx];
    console.log('bet menu selected option:', optn);

    // 36. Get the data- value from the option:
    let data = optn.dataset.chips;
    console.log('data-chips value:', data); // 1000&500&100&100&50

    // 37. Split the chips string on "&" into array of numbers:
    let chipsArr = data.split("&");
    console.log('data-chips array:', chipsArr); // ['1000', '500', '100', '100', '50']

    // 38. Iterate chipsArr using setInterval(), making a new chip every 0.5 sec;
    //     setInterval() is set equal to a variable so that it can be cleared:
    let chipsInterval = setInterval(() => {

        // 39. Use shift() to get the first item from chips array
        //     This item is a numeric string, such as "100"
        let chipVal = chipsArr.shift();

        // 40. Make an image to display the chip correspondign chip image:
        const chipPic = new Image();

        // 41. Concatenate the source of the chip image: "chip-100.png"
        chipPic.src = `images/chips/chip-${chipVal}.png`;

        // 41. Stagger the chip position: each chip is set farther to the left:
        chipPic.style.position = "absolute";
        chipPic.style.width = "120px";
        chipPic.style.left = leftPos + "px";

        // 42. increment leftPos, so that next chip is set farther to left:
        leftPos += 70; 
        
        // 43. Output the chip to its chipsDiv holder:
        chipsDiv.appendChild(chipPic);

        // 44. If chipsArr length is 0, all chips are on the table:
        if(!chipsArr.length) { // ! == not length  == 0

            // 45. Clear (stop) the interval, as all chips are on the table:
            clearInterval(chipsInterval);

            // 46. Activate the DEAL button, so that new hand can be dealt:
            dealBtn.disabled = false;
            dealBtn.classList.toggle('disabled-btn');

        } // end if

    }, 500); // close interval, which runs ever 0.5 seconds
}

// DEAL
// Now, that we have the shuffled, 6-deck shoe, let's deal a hand of Blackjack! 
// We will use setInterval to deal on a 1-second delay between cards
// We will deal two hands -- player and dealer -- with each receiving 2 cards
// The dealer's second card is dealt face down -- the "hole card"

// 47. Define the deal() function:
function deal() {

    // 48. This is a new game, so reset the scores:
    playerScore = 0;
    dealerScore = 0;

    // 49. Clear the cards from the previous game:
    playerCardsDiv.innerHTML = "";
    dealerCardsDiv.innerHTML = "";

    // 50. Clear the text from the output h2
    outH2.innerHTML = "";

    // 51. Empty the arrays that store the player and dealer hands
    //     A const array cannot be set to [] by direct assignment,
    //     but its length can be set to 0, which clears it out:
    playerHand.length = 0;
    dealerHand.length = 0;

    // 52. Reset the dealCounter, which counts the cards being dealt:
    dealCounter = 0;

    // 53. Disable the DEAL button so that it can't be clicked during game play:
    dealBtn.classList.toggle('disabled-btn');
    dealBtn.disabled = true;

    // 54. Run a setInterval, set equal to a variable,
    //     which is required to be able to clear the interval (stop the deal)
    let dealInterval = setInterval(() => {

        // 55. Increment the counter each time a card is dealt:
        dealCounter++;

        // 56. Instantiate a new image object to hold the next card image
        let cardPic = new Image();

        // 57. Pop a card object off the shoe array and save it as a new card
        const card = shoe.pop();

        // 58. Set up an if-else statement to handle the logic for dealing two cards 
        //     each to player and dealer, starting with the player.
        //     % (modulus operator) check the remainder of the counter to control
        //     odd - even dealing (player gets odd cards, dealer gets even cards)
        if(dealCounter % 2 == 1) {

            // 59. Output the card to the player's div
            cardPic.style.width = "120px";
            playerCardsDiv.appendChild(cardPic);

            // 60. Push the card into the player's hand
            playerHand.push(card);
            console.log('playerHand:', playerHand);

            // 61. Increment the player's score by the value of the card:
            playerScore += card.valu;
            console.log('playerScore:', playerScore);

            // 62. Display the player's score:
            playerScoreSpan.textContent = "Player Score: " + playerScore;

            // ** ## ** Evaluate Aces ** ## **
            // SKIP steps 63-

            // 63. if player is dealt their first Ace, increase playerAceScore from 0 to 11, BUT
            //     if this is players second Ace, increment playerAceScore by 1 (from 11 to 12)
            if(card.kind == "Ace") {

                // 64. Check if player score is 22, in which case player was dealt TWO Aces:
                //     in this case, the player score must be changed to 12 and playerAceScore
                //     must also be set to 12 (11 for first Ace + 1 for second Ace)
                if(playerScore == 22) {

                    // 65. Set the playerAceScore and playerScore both to 12:
                    playerAceScore = 12;
                    playerScore = 12;

                    // 66. Update player score display:
                    playerScoreSpan.textContent = "Player Score: " + playerScore;
                    console.log('playerScore:', playerScore);

                    // 67. In the playerHand array, change the second Ace value from 11 to 1:
                    playerHand[1].valu = 1;

                // 68. Set up the else part: else, playerScore is NOT 22, 
                //     so this Ace is the player's FIRST Ace: 
                } else {

                    // 69. Since this is the player's first Ace, set their Ace score to 11
                    playerAceScore = 11;

                    // 70. Update the player's score display:
                    playerScoreSpan.textContent = "Player Score: " + playerScore;

                }  // end if-else if(playerScore == 22)

            } // end if-else if(card.kind == "Ace")

        // 71. Set up the else part to handle card dealt to the dealer
        //     if dealCounter % 2 is NOT equal to 1, this even card goes to the dealer:
        } else {

            // 72. Make the dealer cards smaller, to that they appear farther away:
            cardPic.style.width = "105px";

            // 73. Output the card to the dealer's div
            dealerCardsDiv.appendChild(cardPic);

            // 74. Push the card into the dealer's hand
            dealerHand.push(card);
            console.log('dealerHand:', dealerHand);

            // 75. Update the dealer's score:
            dealerScore += card.valu;
            console.log('dealerScore:', dealerScore);

            // 76. Update the Dealer Shows text, but do NOT reveal the dealer's full score;
            //     The dealer's second card is dealt face-down, so do not reveal the score:
            dealerScoreSpan.textContent = "Dealer Shows: " + dealerHand[0].valu;

            // ** ## ** Eval Aces ** ## **
            // 32C. If dealer is dealt an Ace, dealerAceScore goes from 0 to 11
            //      BUT if this is the 2nd Ace, dealerAceScore goes from 11 to 12
            if(card.kind == "Ace") {

                // if newly dealt is an Ace AND dealer score is already 22
                // then this is the SECOND Ace, so dealer was dealt TWO Aces:
                if(dealerScore == 22) {

                    dealerAceScore = 12;
                    dealerScore = 12;
                    console.log('dealerScore:', dealerScore);
                    // go into dealerHand array, and change 2nd Ace value from 11 to 1:
                    dealerHand[1].valu = 1;
                    
                // new card is the FIRST / only Ace: 
                } else {
                    dealerAceScore = 11;
                }
            }
        }

        // 22. If this is the last card -- the "hole card" -- set the image to the back of the card image
        // 19. If this is the 4th card being dealt, clear the interval (stop the deal)
        if(dealCounter == 4) {

            clearInterval(dealInterval);
            cardPic.src = "images/cards350px/0-Back-of-Card-Red.png"; 

            // ## ** ## ** ## ** CHECK for BLACKJACK (21) !! ## ** ## ** ## **
            // but only AFTER all 4 cards are out and hands / scores are updated:

            // set up testing scores:
            // playerScore = 21;
            // dealerScore = 20;

            // assess Blackjack, but for better gameplay do so on a delay:
            setTimeout(() => {

                // check if BOTH Player AND Dealer have Blackjack: 
                if(playerScore == 21 && dealerScore == 21) {

                    outH2.textContent = "Dealer and Player BOTH have Blackjack -- it's a PUSH!";
                    // dealer must prove they have Blackjack by revealing hole card:
                    dealerCardsDiv.children[1].src = `images/cards350px/${dealerHand[1].file}`;

                // check if Player ONLY has Blackjack: 
                } else if(playerScore == 21) {

                    outH2.textContent = "You have Blackjack -- you WIN..!";
                    // increase money total by bet amount and refresh output:
                    money += betAmt * 1.5; // Blackjack Payer 3 to 2, so (*1.5)
                    moneySpan.textContent = "$" + money.toLocaleString();
                // check if Dealer ONLY has Blackjack: 

                } else if(dealerScore == 21) {

                    outH2.textContent = "Dealer has Blackjack -- you LOSE..!";
                    // dealer must prove they have Blackjack by revealing hole card:
                    dealerCardsDiv.children[1].src = `images/cards350px/${dealerHand[1].file}`;
                    // decrease money total by bet amount and refresh output:
                    money -= betAmt;
                    moneySpan.textContent = "$" + money.toLocaleString();

                // no one has Blackjack, so prompt player to Hit or Stand:
                } else {

                    outH2.textContent = "Hit or Stand..?";
                    // enable the Hit and Stand buttons:
                    hitBtn.disabled = false;
                    hitBtn.classList.toggle('disabled-btn');
                    standBtn.disabled = false;
                    standBtn.classList.toggle('disabled-btn');
                }

                // if anyone has Blackjack, game is over, so reactivate Deal btn:
                // but do so on a slight delay:
                setTimeout(() => {

                    // if hit button is still disabled, someone got Blackjack:
                    if(hitBtn.disabled) {
                        // so reactivate the Deal button for a new game:
                        dealBtn.disabled = false;
                        dealBtn.classList.toggle('disabled-btn');
                    }

                }, 2000);
            }, 2000);

        } else { // set source to be of the actual card
            cardPic.src = `images/cards350px/${card.file}`;        
        }

    }, 1000); // end setInterval

} // end deal() func

// define the hit() function which runs when player clicks HIT button
function hit() {

    const card = shoe.pop();
    const pic = new Image();
    pic.src = `images/cards350px/${card.file}`;

    // output card on a delay:
    setTimeout(() => {

        playerCardsDiv.appendChild(pic);
        // check if card is Ace and if so, does it count 11 or 1
        // no matter what, player CANNOT bust on an Ace:

        if(card.kind == "Ace") {

            // if score is already 10 or more, Ace must count 1:
            if(playerScore > 10) {
                card.valu = 1;
                playerScore++;
                playerAceScore++;

            } else {
                playerScore += 11;
                playerAceScore += 11;
            }

            outH2.textContent = "Player Score: " + playerScore;

        } else { // else card in NOT an Ace, so Player COULD Bust:

            playerScore += card.valu;
            // handle busting and "unbusting" 
            // check if player score is over 21 
            if(playerScore > 21) {

                // check if player has "Ace 11" to "unbust with":
                if(playerAceScore > 10) {  // if playerAceScore is 10+, then player has an "Ace 11"

                    // reduce player score by 10 -- this "unbusts" the player
                    playerScore -= 10;
                    playerAceScore -= 10; // reduce playerAceScore by 10
                    outH2.textContent = "Player Score: " + playerScore;

                // player score > 21 BUT no "Ace 11" to "unbust" with, so BUSTED..!
                } else {

                    setTimeout(() => {
                        
                        outH2.textContent = "You're BUSTED..!";
                        // decrease money by bet amount, refresh output:
                        money -= betAmt;
                        moneySpan.textContent = "$" + money.toLocaleString();
                        playerScoreSpan.textContent = "Player Score: " + playerScore;
                        // reactivate Deal Btn for a new game
                        dealBtn.disabled = false;
                        dealBtn.classList.toggle('disabled-btn'); 
                        // deactivate Hit/Stand btns for new game
                        hitBtn.disabled = true;
                        hitBtn.classList.toggle('disabled-btn'); 
                        standBtn.disabled = true;
                        standBtn.classList.toggle('disabled-btn'); 

                        return; // return to end / exit function

                    }, 1500); // end of setTimeout()

                } // end inner if-else
            } // end middle if-else
        }  // end outer if-else 
        // The following should only run if player did NOT bust 
        // check all non-bust scenarios: 
        // if player has 21, they're done getting cards:
        if(playerScore == 21) {
            stand(); // play goes to dealer so call stand() func
        } else { // else player has less than 21, so:
            outH2.textContent = "Hit or Stand..?";
        }
        // regardless of whether player has 21 or less:
        // push card into Hand
        playerHand.push(card);
        // update Player Score Span
        playerScoreSpan.textContent = "Player Score: " + playerScore;

    }, 1500); // end big setTimeout()

} // end hit() function

function stand() {

    // turn off the Hit and Stand btns, because player is done:
    hitBtn.disabled = true;
    hitBtn.classList.toggle('disabled-btn'); 
    standBtn.disabled = true;
    standBtn.classList.toggle('disabled-btn');
    console.log("Hello from the stand() function!");
    // player is done so erase Hit or Stand message
    outH2.textContent = "Dealer's turn..";

    setTimeout(() => { 
        
        // reveal the hole card on a slight delay
        dealerCardsDiv.children[1].src = `images/cards350px/${dealerHand[1].file}`;

        // now that dealer's hole card is visible, output Dealer Score
        dealerScoreSpan.textContent = "Dealer Score: " + dealerScore;

        // eval whether the dealer gets another card
        // dealer must hit on 16 OR Soft 17 (17 with an "Ace 11")
        if(dealerScore <= 16 || (dealerScore == 17 && dealerAceScore > 10)) {

            setTimeout(() => { // give dealer a card on a slight delay

                const card = shoe.pop();
                const pic = new Image();
                pic.style.width = "105px";
                pic.src = `images/cards350px/${card.file}`;
                dealerCardsDiv.appendChild(pic);

                // no matter what, Dealer CANNOT bust on an Ace:
                if(card.kind == "Ace") {
                    // if score is already 10 or more, Ace must count 1:
                    if(dealerScore > 10) {
                        card.valu = 1;
                        dealerScore++;
                        dealerAceScore++;
                    } else {
                        dealerScore += 11;
                        dealerAceScore += 11;
                    }
                } else { // else card in NOT an Ace, so Dealer COULD Bust:
                    dealerScore += card.valu;
                    // handle busting and "unbusting" 
                    // check if dealer score is over 21 
                    if(dealerScore > 21) {
                        // check if dealer has "Ace 11" to "unbust with":
                        if(dealerAceScore > 10) {  // if dealerAceScore is 10+, dealer has "Ace 11"
                            // reduce dealer score by 10 -- this "unbusts" the dealer
                            dealerScore -= 10;
                            dealerAceScore -= 10; // reduce dealerAceScore by 10
                        }
                    }
                }
                // refresh the dealer score to reflect new card
                dealerScoreSpan.textContent = "Dealer Score: " + dealerScore;
                dealerHand.push(card); // push new card into dealerHand array
                console.log('dealerHand:', dealerHand);

                // call stand function recursively, to see if dealer gets another card
                stand();
                return;

            }, 1250);

        // end if dealerScore is 16 or Soft 17 (so gets another card) 
        // else runs if dealer does not get yet another card 
        // dealer MAY have already BUSTED on card just received
        // so check for bust, and if so annouce DEALER BUSTED
        // else dealer did NOT, so .. let's see who won:   
        } else {
            // dealer is done -- score is 17+, BUT might be BUSTED so check:
            setTimeout(() => {

                if(dealerScore > 21) {
                    outH2.textContent = "Dealer BUSTED -- You WIN..!";
                    dealBtn.disabled = false;
                    dealBtn.classList.remove('disabled-btn'); 
                    hitBtn.disabled = true;
                    hitBtn.classList.add('disabled-btn'); 
                    standBtn.disabled = true;
                    standBtn.classList.add('disabled-btn'); 
                    // increase money by bet amount, refresh output:
                    money += betAmt;
                    moneySpan.textContent = "$" + money.toLocaleString();
                } else {
                    outH2.textContent = "Who won..?";
                    evalWinner();
                }

            }, 1000);
            return;
        }

    }, 1250);

} // end stand()

// this function only runs if player and dealer and both done and no one busted:
function evalWinner() {
    
    setTimeout(() => {
        console.log('Hello from evalWinner()');
        // there are 3 possible outcomes: player won, dealer won or it's a push (tie)
        if(playerScore == dealerScore) {
            outH2.textContent = "It's a PUSH..!";
        } else if(playerScore > dealerScore) {
            outH2.textContent = "You WIN -- Congrats..!";
            // increase money by bet amount, refresh output:
            money += betAmt;
            moneySpan.textContent = "$" + money.toLocaleString();
        } else {
            outH2.textContent = "You LOSE -- Sorry..!";
            // decrease money by bet amount, refresh output:
            money -= betAmt;
            moneySpan.textContent = "$" + money.toLocaleString();
        }

        // after another delay, turn on Deal btn
        setTimeout(() => {
            dealBtn.disabled = false;
            dealBtn.classList.remove('disabled-btn'); 
        }, 1000);

    }, 1250);
 
} // end evalWinner()
 
// END: Lesson 08.05
// NEXT: Lesson 08.05