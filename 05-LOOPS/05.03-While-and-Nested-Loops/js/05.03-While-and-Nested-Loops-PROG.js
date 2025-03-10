/* Lesson 05.03 - START
while loops and do while loops
break keyword; nested for loops

while loop
A while loop has the essential three ingredients found in a for loop: 

for(counter; condition; incrementer) 

The difference is that in a for loop, the three things are all neatly bundled in parentheses:

- In a while loop, only the condition is inside the parentheses. 

- The counter is actually declared outside the loop, above the actual loop, in the global scope
- the counter is incremented inside the loop's curly braces, either right at the top or down at the very bottom of the { }

Another diff is in a while loop the "counter" is actually a misnomer -- it's a target that you are going for
*/
for(let i = 0; i < 11; i++) {
    console.log('i inside for loop:', i);
}
// 1. Write a while loop, with counter variable `n` declared in the global scope and incremented inside the loop. The loop runs as long as `n` is less than 11:
let n = 0;
console.log('n before while loop:', n);

while (n < 11) {
    // looping code:
    console.log('n inside while loop:', n);
    // incrementer to avoid infinite loop:
    n++;
}

console.log('n after while loop:', n); // 11
    

// do while loop

// In a "do while loop", the condition is evaluated only after the loop has already run, which means that the loop must run at least once. 

// 2. Write a 'do while' loop with the same counter, condition and increment as in the while loop:
n = 0;

do {
    console.log('inside do while loop:', n);
    n++;
} while(n < 10);

console.log('after do while loop:', n); // 11

/*
Overall, while and do while loops are pretty similar:
- with both, the loop counter is declared in the global scope
- with both, the counter is incremented inside the curly braces

Again, the main difference is that the "do while" loop must run at least once, because the condition is evaluated only after the loop has alredy run once. Let's test this by having a condition that is false from the start, and yet the "do while" still runs once:
*/

// 3. Write a 'do while' loop with the same counter and increment as in the while loop, but with a condition that is false right from the get go. This loop runs once:
// n = 0;

// console.log('after do while loop:', n); // 1

// 4. Now, try the same counter, increment and condition with a regular while loop. The condition is evaluated before the loop runs, and so the loop does not run even once:
// n = 0;
// condition is false right from the start
    // doesn't run even once

// console.log('after while loop:', n); // 11

// Write these while and do while loops that concatenate the counter, resulting in output of "1 12 123 1234 12345 123456"


console.log('strAnswer:'); 
// 1 12 123 1234 12345 123456

// 5. Loop the counter from 0-10, but skip the 5 with `continue`:

// skip the 5

// console.log(str); // 0 1 2 3 4 6 7 8 9 10

// continue keyword is used to skip an iteration
// 6. Reset the variables and do while loop, this time skipping the 6:

// skip 6

// skip the 6
// 0 1 2 3 4 5 7 8 9 10

// 7. Reset the vars and next try a for loop, skipping the 7

// skip the 7

//  console.log(str); // 0 1 2 3 4 5 6 8 9 10


// The continue keyword skips an iteration, but does not stop the loop. The break keyword, on the other hand, exits the loop.

 /* 
 When should you use a while loop instead of a for loop? 
 When the number of iterations is not specified.
 In a for loop, the condition and incrementer determine how many times the loop runs. We have done many examples of this, but consider another for reference:
*/

 // 9. Given this array, loop through it to make fruit jellybeans. The loop is set up to run the length of the array, which is 12 in this case, so the number of iterations is specified.
 const fruits = ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'kiwi', 'mango', 'orange', 'peach', 'pear', 'plum', 'raspberry'];
const jellybeans = [];

// for(fru of fruits) {
for(let i = 0; i < fruits.length; i++) {
    // jellybeans.push(`${fru} jellybean`);
    jellybeans.push(`${fruits[i]} jellybean`);
}

console.log('jellybeans:', jellybeans);

// CHALLENGE: write the while loop version of the jellybean maker
// ' while jellybean'

const jbeans = [];

let j = 0;
while(j < fruits.length) {
    jbeans.push(`${fruits[j]} jellybean`);
    j++;
}

console.log('jbeans:', jbeans);

 // Now, compare the above to a scenario where the number of iterations is unknown; so for example, what if every time the loop runs we choose a fruit at random. We keep choosing and choosing until we get a 'kiwi'. This could take two tries, or it could take 20 tries. This is the kind of scenario where we want a while loop--not a for loop. We set up a condition where we keep choosing random fruits as long as (while) the chosen fruit is NOT kiwi.

 // 10. Choose random fruits one at a time on a while loop, until we get a kiwi--then stop. We do not know how many iterations this will take:
 let randomFruit = "";
 
 while(randomFruit != "kiwi") {
    let r = ~~(Math.random()*fruits.length); // 0-11
    randomFruit = fruits[r];
    console.log(randomFruit);
 }

// CHALLENGE: Make a powerball lottery ticket as follows:
// 5 unique numbers from 1-69 (in ascending order)
let ticketArr = [];

while(ticketArr.length < 5) {
    let r = Math.ceil(Math.random()*69); // 1-69
    // avoid repeats: [19, 57, 42, 42, 24] by checking if r exists in the array already; only push if r is NOT already in array
    // pad start w leading "0"
    r = r.toString().padStart(2,"0");
    if(!ticketArr.includes(r)) {
        ticketArr.push(r);
    }
}
// sort the 5 padded w leading 0 stringy numbers in ascending order
ticketArr.sort();
// add the 6th number -- the Powerball -- from 1-26
let pb = Math.ceil(Math.random()*26);
pb = pb.toString().padStart(2,"0");
ticketArr.push(pb);
console.log(ticketArr);
// followed by 1 number from 1-26 which CAN repeat one of the other 5
// bonus: add leading "0" to one-digit number (pad start)
//        store the ticket as an array of 6 numbers 
// Example: [01, 23, 25, 28, 61, 23]
// HINT:  perhaps a while loop since we do not know how many random numbers we need to generate in order to complete a ticket
// for starters, maybe try a version where you ignore repeats
// extra bonus: make a function called generateLotteryTickets(numTix) which takes in a number of tickets to generate and returns an array of arrays of that many tickets:
/* Sample return value as array of child arrays:
[ [01,13,23,35,61,13],
  [07,20,32,50,52,24],
  [11,12,19,56,67,05] ]
*/


// Lets try another example where we stop a loop when a target value is found.

// 11. Write a while loop that iterates the nums array. The loop stops when it finds a number that is evenly divisible by 7 (has remainder of 0 when divided by 7). Log the numbers and their index, as you go, but the last number logged is the first one that is divisible by 7:
let nums = [53, 37, 123, 88, 112, 136, 155];


console.log(`while loop found a number divisible by 7: at index `);

// 11B. Do the same as a for loop; use keyword break to end loop
// when target is found -- don't go through whole array.
// fo
    // if
        console.log(`for loop found a number divisible by 7: at index `);


// nested loops

// A nested loop is a loop inside a loop. Each time the outer loop runs once, it iterates over the entire inner loop. So, if each loop is running 5 times, the total is 25 iterations (10 x 10). 

// 12. Run a nested loop where we output the values of both inner and outer counter as we go:
for(let i = 0; i<5; i++) {
    for(let j = 0; j<5; j++) {
        console.log('i:',i,'j:',j);
    }
}

// make a deck of cards
const kinds = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const deck = [];

for(let k of kinds) {
    for(let s of suits) {
        let file = `${k}-of-${s}.png`;
        let name = `${k} of ${s}`;
        // let value = k == 'Ace' ? 11 : typeof(k) == 'string' ? 10 : k;
        let value = +k ? k : k == 'Ace' ? 11 : 10;
        const card = {
            name: name,
            kind: k,
            suit: s,
            value: value,
            file: file,
        };
        deck.push(card);
    }
}

// shuffle the deck using that sort(callback) hack w Math.random()

deck.sort(function(a,b) {
    return Math.random() - 0.5;
});

const shoe = [...deck, ...deck, ...deck, ...deck, ...deck, ...deck];

shoe.sort(function(a,b) {
    return Math.random() - 0.5;
});

console.log(shoe); // array of 52 strings: "Queen-of-Hearts.png"

/*
refactor challenge:
instead of just making a deck of string file names, make a deck of
objects of 5 properties each, so it could be used for blackjack or poker:
so, in blackjack a face card is 10, an ace is 11, other cards are 
worth their number value
in poker, the suit is important (all diamonds is a flush)
so the card object needs all this data:

{ name: 'Jack of Diamonds',
  kind: 'Jack',
  suit: 'Diamonds',
  valu: 10,
  file: 'Jack-of-Diamonds.png'
}

  Shuffle the deck, then
  Then: make a 'shoe' array of 6 decks and shuffle the shoe
*/

// name, kind, suit, value, file

//  Then: make a 'shoe' array of 6 decks and shuffle the shoe
// HINT: concat() or ...
console.log();


console.log();



// This next one involves an array of city abbreviations. Once again, we will use a nested loop. Both loops iterate over the same array. The inner loop uses both counters to concatenate a pair of cities. The names is hyphenated, departure-arrival style: NY-MIA

// 13. CHALLENGE 

// CHALLENGE Part A: 
// Given an array of city abbreviations, iterate the array with a nested for loop, pairing each city with every other city:
const cities = ['CHI', 'NY', 'PHI', 'BOS', 'MIA', 'LA', 'SF'];
const flights = [];

for (cit of cities){
    for (cit2 of cities){
        flights.push(`${cit}-${cit2}`)
    }
}
console.log("flights includes self pairs (NY-NY)", flights);

// CHALLENGE Part B: 
// It works, but each city is paired with itself. Try it again with logic that does NOT make any 'self-pairs' (DO NOT HAVE: 'BOS-BOS', 'PHI-PHI', etc.)
const noSelfPairFlights = [];

for (cit of cities){
    for (cit2 of cities){
        if (cit != cit2){
            noSelfPairFlights.push(`${cit}-${cit2}`)
        }
    }
}

console.log("noSelfPairFlights (no NY-NY)\n", noSelfPairFlights);

// CHALLENGE Part C: 
// It works, and we have "round trip pairs" (NY-MIA, MIA-NY), which makes perfect sense, since flights are in both directions. But in other scenarios we would NOT want "round trip" pairs. For example, if we were making pairs for two-fruit smoothies, we would want "mango-pineapple", but we would NOT want the reciprocal pair, "pineapple-mango", as that would be redundant.

// Using our array of fruits, The challenge is to make all two-fruit smoothie combos but without any reciprocal pairs. Save the unique, non-"round trip" pairs to smoothies array
const froots = ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'kiwi', 'mango', 'orange', 'peach', 'pear', 'plum', 'raspberry'];
froots.push('pineapple', 'papaya', 'strawbery');
froots.sort();
const twoFrootSmoothies = [];

for (let fru of froots){
    for (let fru2 of froots){
        if (fru != fru2){
            let base = `${fru2}-${fru}`
            if(!twoFrootSmoothies.includes(base)){
                twoFrootSmoothies.push(`${fru}-${fru2}`)
            }
        }
    }
}

console.log('twoFrootSmoothies:\n', twoFrootSmoothies);

// OR:
const smoothies = [];
for (f1 of froots) {
    for (f2 of froots) {
        if (f1 != f2 && !smoothies.includes(`${f2}-${f1}`)) {
            smoothies.push(`${f1}-${f2}`);
        }
    }
}
console.log('smoothies:', smoothies);

// OR:
const froothies = [];
// make j one greater than i; that way:
// i and j can never be equal, and:
// you can never get a "backward pair"
for(let i = 0; i < froots.length; i++) {
    for(let j = i+1; j < froots.length; j++) {
        froothies.push(`${froots[i]}-${froots[j]}`);
    }
}
console.log('froothies:', froothies);

// 
// Start with a version that makes all 144 possible pairs. This includes self-pairs like "apple-apple", as well as reciprocal like "apple-apricot" and "apricot-apple". Let's ouput the count, too, so that we know the total:

// 14. Make all 144 possible 2-fruit combinations, and keep count:

// let co // for counting the smoothie combinations
// "2-fruit smoothies -- all 144 combos");

// 15. Reset the counter, and run it again, this time eliminating self-pairs:
// "2-fruit smoothies (NO self-pairs); 132 combox");


// 16. Let's run it again, this time with logic that eliminates reciprocal pairs. The trick is to start the inner counter (j) each time at one greater than the outer counter (i):
// "2-fruit smoothies (No reciprocal pairs); 66 combos");

// increment the counter

// 17. Finally refactor the "smoothie maker" as a function that takes a fruits array as its argument, runs the "smoothie maker" code and returns an array of smoothies:


// Set()
// A set is a data structure similar to an array, but with a set there cannot be any duplicate items. 

// How to Eliminate Duplicate Items from an Array
// Make a Set from the Array and then a New Array from the Set
// If we pass an array containing duplicate values to the Set() object constructor, it returns a Set of unique items -- no duplicates. Like an array, a set has a data type of object.

// 18. Pass an array containing duplicates to the Set constructor method. This returns a Set which can have no duplicates:
const stuff = ['apple', 'apple', 'banana', 'cherry', 'banana'];
const fruitSet = new Set(stuff);
// constructor method syntax:
// new Date(), new Image(), new Set() new Audio()

console.log('fruitSet:', fruitSet);
// {'apple', 'banana', 'cherry'} object

// add() method is for adding an item to a set
fruitSet.add('kiwi'); // goes in cuz it's not already there
fruitSet.add('cherry'); // rejected cuz it's already in Set
console.log('fruitSet:', fruitSet); // {'apple', 'banana', 'cherry', 'kiwi'}

// get the item at index 0 of Set
console.log('fruitSet[0]:', fruitSet[0]); // undefined
// set items are not stored by index

// delete() removes item by name from set
fruitSet.delete('banana');
console.log('no banana Set:', fruitSet); // {'apple', 'cherry', 'kiwi'}

// has() returns true if item is in Set (like includes)
console.log('set has apple?:', fruitSet.has('apple'));
console.log('set has peach?:', fruitSet.has('peach'));

// Array.from(set) The array from constructor takes multiple items and returns an array. If we pass it a set, we get an array.

// 19. Declare a new array set equal to Array.from() with a set as the argument. The result is an array of no duplicate items:
const arrFromSet = Array.from(fruitSet); // ['apple', 'cherry', 'kiwi']
console.log('arrFromSet:', arrFromSet);

// go Set - to - Arr by destructuring set:
const arrFromSetDots = [...fruitSet];
console.log('arrFromSetDots:', arrFromSetDots);

// DONE: Lesson 05.03
// NEXT: Lesson 05.04