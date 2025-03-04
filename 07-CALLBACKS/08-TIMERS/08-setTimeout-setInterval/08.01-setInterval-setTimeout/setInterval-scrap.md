let animalsOriginalLength = animals.length;
// output a random animal from the animals array after a 12 second delay
// you need to combine Math.random() with setTimeout
setTimeout(function() {
// 1.) get a random number from within array index range (0-7)
var randNum = Math.floor(Math.random() * animals.length);
// 2.) use random num to get that animal by index from array
var animal = animals[randNum];
// 3.) console.log the animal
console.log(animal);
}, 12000);

setInterval runs a function over and over on a time delay. 

what if you want to run a function on a delayed timer but also on a loop
// for that we use setInterval and to stop the loop-timer we use clearInterval
// we also declare a var with the setInterval method set equal to the var. This way, we can stop the function from being called by passing the var to the clearInterval method.
 
// pick and print a random animal every 5 seconds
let counter = 1;
let myInterval = setInterval(function() {
let randNum = Math.floor(Math.random() * animals.length);
// 2.) use random num to get that animal by index from array
let animal = animals[randNum];
// 3.) console.log the animal
console.log(counter + ".) " + animal);
if(counter == animalsOriginalLength) { // after counter reaches 5, we have outputted 5 animals--enough!
clearInterval(myInterval); // stop the interval from running
console.log("That's enough animals!");
}
counter++;
// make sure that the same animal is not picked twice
// by removing it from the array after it is chosen
animals.splice(randNum, 1); // remove 1 item at randNum index
}, 1000);

how to call a function on a time delay
let a = 36;
let b = 9;

function divideNums() {
console.log(a/b);
}
divideNums();

a = 99; // change value of a from 36 to 99 
// setTimeout calls a function only ONCE;
setTimeout(divideNums, 7000); // call the divideNums function after a 7 second delay

// setTimeout example with anonymous function written inside the setTimeout method itself
setTimeout(function() {
console.log('Hello from anonymous function inside the setTimeout method!');
}, 8500);

// setTimeout print a random int from 1-100 on a 5-second delay:
setTimeout(function() {
console.log(Math.ceil(Math.random()*100));
}, 5000);

const animals = ['aardvark', 'baboon', 'chimpanzee', 'elephant', 'giraffe', 'hamster', 'moose', 'polar bear', 'tiger', 'iguana', 'lion'];
let animalsOriginalLength = animals.length;
// output a random animal from the animals array after a 12 second delay
// you need to combine Math.random() with setTimeout
setTimeout(function() {
// 1.) get a random number from within array index range (0-7)
var randNum = Math.floor(Math.random() * animals.length);
// 2.) use random num to get that animal by index from array
var animal = animals[randNum];
// 3.) console.log the animal
console.log(animal);
}, 12000);

// what if you want to run a function on a delayed timer but also on a loop
// for that we use setInterval and to stop the loop-timer we use clearInterval
// we also declare a var and set setInterval equal to the var so that we can stop it
// pick and print a random animal every 5 seconds
let counter = 1;
let myInterval = setInterval(function() {
let randNum = Math.floor(Math.random() * animals.length);
// 2.) use random num to get that animal by index from array
let animal = animals[randNum];
// 3.) console.log the animal
console.log(counter + ".) " + animal);
if(counter == animalsOriginalLength) { // after counter reaches 5, we have outputted 5 animals--enough!
clearInterval(myInterval); // stop the interval from running
console.log("That's enough animals!");
}
counter++;
// make sure that the same animal is not picked twice
// by removing it from the array after it is chosen
animals.splice(randNum, 1); // remove 1 item at randNum index
}, 1000);

// Let's try a closure with a loop in combination with setTimeout that runs every 1 second for 7 seconds. Once the loop counter reaches 7, clear the interval:
let myInterval;

for (let i = 1; i <= 7; i++) {

  setTimeout(() => {

      console.log(i + ' Mississippi');

      if(i == 7) {
        clearInterval(myInterval);
      }

  }, 1000);

}

### arrow function with setInterval and setTimeout

The **setInterval** and **setTimeout** methods take functions as their arguments. This makes them ideally suited to using arrow functions, since the more concise arrow function can "fit neatly" into the parentheses of the methods.

First, let's do a setTimeout with the function keyword:
We will keep it simple and just console log 'Hello World' after a three-second delay:

```
  setTimeout(function() {
      console.log('Hello World');
  }, 3000);

```

Now, refactor the above, using an arrow function. We don't need the {} braces since it is only one line of code, so it all fits on one line. Take out the semi-colon after the console.log or else the line will end there.

```
  setTimeout(() => console.log('Hello World'), 3000);
  
```


// hoisting: the order of code matters, but sometimes code gets lifted
// higher (hoisted) above where it was declared
// w primitives no hoisting going on.. attempts to log
// variable before it is declared fail every time
console.log(x); // undefined, but no error, per se
var x = 5;
console.log(x); // 5 becasue x has been declared above

// console.log(y);
// ERROR: Cannot access 'y' before initialization
let y = 6;
console.log(y); // this of course works

// console.log(z);
// ERROR: Cannot access 'z' before initialization
const z = 7;
console.log(z); // this of course works

// but what about hoisting of functions
// declare a regular function:
// what happens if function calls come BEFORE declarations
// only the regular function still works (arrow func isn't hoisted)
saySthg();
saySomething();

function saySthg() {
console.log('saying sthg from regular function');
}
// refactor as arrow function:
const saySomething = () => {
console.log('saying something from arrow function');
}

// saySthg();
// saySomething();

Arrow Function Expression
Here we have the fat arrow function declared as a variable:

cost leaf = ["kale", "romaine lettuce", “arugula”, “baby spinach”];
const toppings = ["cucumber", "tomato", "carrot", "celery”, “beet", "mushroom", "parsley"];

// a function that combines the two arrays, chooses half the items at random, puts them into a new array called salad, and returns that.

const makeSalad = (arr1, arr2) => { 
  const ingredients = arr1.concat(arr2);
  const salad = [];
  const numIngreds = Math.floor(ingredients.length / 2);
  for(let i = 0; i < numIngreds; i++) {
     var r = Math.floor(Math.random() *  ingredients.length);
     let ingred = ingedients[r];
     salad.push(ingred);
     ingredients.splice(r, 1); // take out that ingredient
} // end for loop
return food
}
console.log(makeSalad(leaf, toppings));

// setTImeout w arrow func to output each fruit all at once after 10 sec delay:
setTimeout(() => {

fruits.forEach((froot) => {
console.log(froot + ' roll-up');
})

}, 10000);

// each fruit one at a time on a delay -- no forEach
var myInterval;
var i = 0;
myInterval = setInterval(() => {
console.log(fruits[i] + ' smoothie');
i++;
if(i == fruits.length) {
clearInterval(myInterval);
}
}, 1000);
