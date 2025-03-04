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

// 1. Write a while loop, with counter variable `n` declared in the global scope and incremented inside the loop. The loop runs as long as `n` is less than 11:
let n = 0;
while (n < 11) {
    console.log('n inside while loop:', n);
    n++; // incrementer to avoid infinite loop:
}
console.log('after while loop:', n); // 11
    

// do while loop

// In a "do while loop", the condition is evaluated only after the loop has already run, which means that the loop must run at least once. 

// 2. Write a 'do while' loop with the same counter, condition and increment as in the while loop:
n = 0; 

do {
    console.log('n inside do while loop:', n);
    n++;
}while(n < 11);


console.log('n after do while loop:', n); // 11

/*
Overall, while and do while loops are pretty similar:
- with both, the loop counter is declared in the global scope
- with both, the counter is incremented inside the curly braces

Again, the main difference is that the "do while" loop must run at least once, because the condition is evaluated only after the loop has alredy run once. Let's test this by having a condition that is false from the start, and yet the "do while" still runs once:
*/

// 3. Write a 'do while' loop with the same counter and increment as in the while loop, but with a condition that is false right from the get go. This loop runs once:
let n2 = 0;

do {
    console.log('n2 inside do while loop:', n2);
    n2++;
}while(n2 > 10);


console.log('n2 after do while loop:', n2); // 1

// 4. Now, try the same counter, increment and condition with a regular while loop. The condition is evaluated before the loop runs, and so the loop does not run even once:
// n = 0;
// condition is false right from the start
    // doesn't run even once

// console.log('after while loop:', n); // 11
n2 = 0;
while (n > 11) {
    console.log('n2 inside while loop:', n2);
    n2++; // incrementer to avoid infinite loop:
}
console.log('n2 after while loop:', n2); // 0
// Write these while and do while loops that concatenate the counter, resulting in output of "1 12 123 1234 12345 123456"
let strAnswer = "";
let strNums = "";
n = 1;
while(n < 7) {
    strNums += n;
    strAnswer += strNums + " ";
    n++
}
console.log('while loop strAnswer:', strAnswer); 
// 1 12 123 1234 12345 123456
n = 0;
while(n != 50) {
    n = Math.ceil(Math.random() *100);
    console.log('rand int til we get 50:', n);
}
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
n = 0;
while(n != 50) {
    n = Math.ceil(Math.random() *100);
    console.log('rand int til we get 50:', n);
} 

 // 9. Given this array, loop through it to make fruit jellybeans. The loop is set up to run the length of the array, which is 12 in this case, so the number of iterations is specified.
 const fruits = ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'kiwi', 'mango', 'orange', 'peach', 'pear', 'plum', 'raspberry'];

for(fru of fruits) {
    console.log(fru);
    if (fru == 'kiwi') {
        break
    }
}
for(let i = 0; i < 1000; i++) {
    let r = ~~(Math.random()*fruits.length);
    console.log('rand fruit:', fruits[r]);
    if(fruits[r] == 'kiwi') {
        break;
    }
}
let currentFruit = "";
while(currentFruit != 'kiwi') {
    let r = ~~(Math.random()*fruits.length);
    currentFruit = fruits[r];
    console.log('rand fruit:', fruits[r]);
}

// ' while jellybean'
console.log(' counter');

 // Now, compare the above to a scenario where the number of iterations is unknown; so for example, what if every time the loop runs we choose a fruit at random. We keep choosing and choosing until we get a 'kiwi'. This could take two tries, or it could take 20 tries. This is the kind of scenario where we want a while loop--not a for loop. We set up a condition where we keep choosing random fruits as long as (while) the chosen fruit is NOT kiwi.

 // 10. Choose random fruits one at a time on a while loop, until we get a kiwi--then stop. We do not know how many iterations this will take:
 console.log('\nwhile loop runs until we get a "kiwi":');

//  'kiwi'


// this loop will run until 'kiwi' is chosen at random from 12-fruit array; this could take 3 tries or 23 tries
// whi
    // generate a rand int in range of fruits array index (0-11)
    // r; // 0-11


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


// make a deck of cards
const kinds = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

const deckOfCards = [];

for(k of kinds) {
    for(s of suits) {
        let v = 0;
        if(k == "Ace") {
            v = 11;
        } else if(k.length) {
            v = 10;
        } else {
            v = k;
        }
        const cardObj = { 
            name: `${k} of ${s}`,
            kind: k,
            suit: s,
            valu: k == "Ace" ? 11 : k.length ? 10 : k,
            file: `${k}-of-${s}.png`,
        }
        deckOfCards.push(cardObj);
    }
    
}
console.log(deckOfCards);
/*
refactor challenge:
instead of just making a deck of string file names, make a deck of
objects of 5 properties each, so it could be used for card game(s):
so, in blackjack a face card is 10, an ace is 11, other cards are 
worth their number value
in poker, the suit is important (all diamonds is a flush)
so the card object needs all this data:

{ file: 'Jack of Diamonds',
  kind: 'Jack',
  suit: 'Diamonds',
  valu: 10,
  file: 'Jack-of-Diamonds.png'}

  Shuffle the deck, then
  Then: make a 'shoe' array of 6 decks and shuffle the shoe
*/

// name, kind, suit, value, file

//  Then: make a 'shoe' array of 6 decks and shuffle the shoe

console.log();


console.log();


// This next one involves an array of city abbreviations. Once again, we will use a nested loop. Both loops iterate over the same array. The inner loop uses both counters to concatenate a pair of cities. The names is hyphenated, departure-arrival style: NY-MIA

// 13. Given an array of city abbreviations, iterate the array with a nested for loop, pairing each city with every other city:
const cities = ['CHI', 'NY', 'PHI', 'BOS', 'MIA', 'LA', 'SF'];


console.log("flights includes self pairs (NY-NY)");

// It works, but each city is paired with itself. Try it again with logic that 
// does NOT make any 'self-pairs' (DO NOT HAVE: 'BOS-BOS', 'PHI-PHI', etc.)

console.log("Does NOT include self pairs (NY-NY)")


// It works, and we have "round trip pairs" (NY-MIA, MIA-NY), which makes perfect sense, since flights are in both directions. But in other scenarios we would NOT want "round trip" pairs. For example, if we were making pairs for two-fruit smoothies, we would want "mango-pineapple", but "pineapple-mango" would be redundant.

// Using our array of fruits, The challenge is to make all two-fruit smoothie combos but without any reciprocal pairs. Save the unique, non-"round trip" pairs to smoothies array
const froots = ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'kiwi', 'mango', 'orange', 'peach', 'pear', 'plum', 'raspberry'];
// froots.push('pineapple', 'papaya', 'strawbery');


console.log();


    // j always 1 greater than i, so that no reciprocal pairs are made

console.log('fruitSmoothies:');

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

// constructor method syntax:
// new Date(), new Image(), new Audio()

console.log('uniqueSet:');
// {'apple', 'banana', 'cherry'} object

// add() method is for adding an item to a set
// 'kiwi'; // goes in cuz it's not already there
// 'cherry'; // rejected cuz it's already in Set
console.log('uniqueSet:');

// get the item at index 0 of Set
console.log('uniqueSet[0]:'); // undefined
// set items are not stored by index

// delete() removes item by name from set
// 'banana'
console.log('no banana Set:');
// {'apple', 'kiwi', 'cherry'}

// has() returns true if item is in Set (like includes)
console.log('set has apple?:');
console.log('set has peach?:');

// Array.from(set) The array from constructor takes multiple items and returns an array. If we pass it a set, we get an array.

// 19. Declare a new array set equal to Array.from() with a set as the argument. The result is an array of no duplicate items:

console.log('arrFromSet:');

// go Set - to - Arr by destructuring set:

console.log('arrFromSetDots:');

// ['apple', 'banana', 'cherry']
console.log('arr includes apple?:');
console.log('arr includes peach?:');

// looping an object
// an object is iterable:

console.log('cardObj:');
/* { name: '5 of Hearts', kind: 5, suit: 'Hearts', 
        value: 5,  file: '5-of-Hearts.png' } 
*/
// by default, when you loop an obj, it's by key
// the current item is the key (not the value)

// name, kind, suit, value, file


// to get the value, look it up using dynamic key:

    // 9 of Clubs, 9, Clubs, 9, 9-of-Clubs.png

// make array from keys:

console.log('keysArr:');
// ['name', 'kind', 'suit', 'value', 'file']

// make array from values:

console.log('keysvaluesArrArr:');
// ['King of Hearts', 'King', 'Hearts', 10, 'King-of-Hearts.png']

// Object.entries(obj)
// make array of "tuples" as 2-item from keys and values: ['kind', 'Ace']

console.log('tuplesArr:');
// [ ['name', '5 of Hearts], ['kind', 5], ['suit', 'Hearts'] .. etc. ] ]

// you can loop by keys and values together

    console.log('key:', 'val:'); // key: name val: Ace of Diamonds


// Object.values(obj)

    // 9 of Clubs, 9, Clubs, 9, 9-of-Clubs.png


// DONE: Lesson 05.03
// NEXT: Lesson 05.04