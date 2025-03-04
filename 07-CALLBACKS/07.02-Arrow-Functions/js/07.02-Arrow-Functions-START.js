// Lesson 07.02 - START

// Arrow Functions =>

// An arrow function is a function that uses the => symbol instead of the function keyword. Other things to know about arrow functions:
/*
- arrow functions return implicitly, which means that they always return a value--even when the **return** keyword is absent.
- arrow functions have concise sytnax:
  - => is 2 characters, function is 8 characters
  - if there is only one line of logic, the curly braces { } and return keyword may be omitted
  - if there is only one argument, the argument ( ) may be omitted.
*/
// Let's start by refactoring a "regular" function definition into an **arrow function**:

// 1. Define a "regular" function, which, though simple, has a paramter, so expects an input (argument) and also returns a value:
let greeting = greetUser('BOOM');
console.log('Greet func from above\n',greeting);


function greetUser(user) {
    return `Welcome back, ${user}`;
}

greeting = greetUser('ZACK');
console.log('Greet func from below\n',greeting);

// hoising
// Function definitions are hoisted, meaning that they are lifted to the top of their scope, regardless of where they occur in the lines of code.

// 2. Call the function, supplying the expected argument. Since the function returns a value, set the call equal to a variable. This captures the return value; log the variable to see the greeting:
// 'Brian123'
console.log('function declaration (hoisted) greetUser:\n'); // Welcome back, Brian123!

// 3. To verify that the function definition has been hoisted, call the function above the function definition; it still works:


// converting the function definition into an arrow function
// step 1: is to convert function def to function expression

// 4. Replace the word function with const or let. This turns greetUser into a variable declaration, so put an equal sign right after the name of the variable:
const greetMember = function(user) {
  return `Welcome back, ${user}`;
}

greeting = greetMember('Azizjon');

console.log('function expression (NOT hoisted) greetPal:\n', greeting); // Welcome back, Bub!

// 5.
// converting the function expression into an arrow function
// step 2 is to convert expression to arrow function
// Starting w a function expression:
// A.) delete the word 'function'
// B.) put "fat arrow" => after parentheses:
const greetPal = (pal) => {
  return `Hey, ${pal}`;
}
greeting = greetPal('Bob');

console.log('arrow => function (NOT hoisted) greetBuddy:\n', greeting); // Welcome back, Bub!

// 5B.
// make the arrow function even more concise:
// A.) delete the word 'function'
// B.) put "fat arrow" => after parentheses:
// C.) if there is only one line of logic, the curly braces { } and return keyword may be omitted
// D.) if there is only one argument, the argument ( ) may be omitted.
const greet = pal => `Hi, ${pal}`;

greeting = greet('Jack');

console.log('arrow => function (NOT hoisted) greetBuddy:\n', greeting); 
console.log('=> super-concise:\n'); // Welcome back, Amigo!

// REFACTORING TIME : convert every one of these map() and filter() things to =>

const entrees = [
    { name: 'Chicken with Waffles', vegetarian: false, price: 18, cals: 1200 },
    { name: 'Tofuburger', vegetarian: true, price: 8, cals: 480 },
    { name: 'T-Bone Steak', vegetarian: false, price: 24, cals: 1180 },
    { name: 'Quinoa Casserole', vegetarian: true, price: 14, cals: 560 },
    { name: 'Lobster', vegetarian: false, price: 36, cals: 750 },
    { name: 'Sauteed Vegetable Medley', vegetarian: true, price: 17, cals: 580 },
    { name: 'NY Strip Steak', vegetarian: false, price: 42, cals: 1320 },
    { name: 'Banon Cheeseburger', vegetarian: false, price: 14, cals: 1400 },
    { name: 'Shrimp Scampi', vegetarian: false, price: 23, cals: 1060 },
    { name: 'Quinoa Burger Deluxe', vegetarian: true, price: 16, cals: 630 },
    { name: 'Chicken Salad Supreme', vegetarian: false, price: 13, cals: 710},
    { name: 'Salmon Steak', vegetarian: false, price: 22, cals: 680 },
    { name: 'Pork Chop', vegetarian: false, price: 18, cals: 800 },
    { name: 'Impossible GMO Burger', vegetarian: true, price: 18, cals: 680 },
];

// challenge A: use map(function(e)) to get just the names of the entrees into a new array
// const entreeNames = 

console.log('=> entrees.map(e => e.name):');
// ['Chicken with Waffles', 'Tofuburger', 'T-Bone Steak', 'Quinoa Casserole', 'Lobster', 'Sauteed Vegetable Medley', 'NY Strip Steak', 'Banon Cheeseburger', 'Shrimp Scampi', 'Quinoa Burger Deluxe', 'Chicken Salad Supreme', 'Salmon Steak', 'Pork Chop', 'Impossible GMO Burger']

// challenge B: user filter into map chaining to get just the vegetarian items but with each item prices 20% off for lunch special and with each item having a new property called 'sides', the value of which is a random side dish from an array of 3 sides: 
const sides = ['salad', 'soup', 'potato', 'rice and beans', 'corn on the cobb', 'macaroni and cheese', 'three bean salad'];

vegLunchSpecials = entrees.filter(e => e.vegetarian).map(e => {
  let lowerPrice = e.price * 0.8;
  e.price = +(lowerPrice.toFixed(2));
  let r = ~~(Math.random() * sides.length);
  e.side = sides[r];
  return e;
});

console.log('vegLunchSpecials:',vegLunchSpecials);

const vegSpecials = entrees.filter(e => e.vegetarian).map(e=>({ ...e, price: +(e.price * 0.8).toFixed(2), side: sides[Math.floor(Math.random() * sides.length)]}));

// We will use filter() to save to a new array all **non-vegetarian** entrees with a minimum **price** of 15.
// challenge C: use filter() to sav]e to a new array all **non-vegetarian** entrees with a minimum **price** of 15.
const meatPcEntrees = entrees.filter(function(e) {
  return !e.vegetarian && e.price >=15;
});

console.log("Mpc 1:",meatPcEntrees);

// arrow function version of the above:
const meatPricyEntrees = entrees.filter(e =>!e.vegetarian && e.price >=15);
console.log('meatPricyEntrees', meatPricyEntrees);

// challenge D: Use filter() to save to a new array all non-vegetarian items under 1000 calories:
const meatLess1000Cal = entrees.filter(function(e) {
  return !e.vegetarian && e.cals < 1000;
});

console.log('meatLess1000Cal', meatLess1000Cal);

// arrow function version of the above:
const meat1000cal =  entrees.filter(e => !e.vegetarian && e.cals < 1000);
console.log('=> meat1000cal', meat1000cal);

// challenge E: Given an array of vegetables, use **map()** to make new array of fresh veggies: ['fresh beet', 'fresh carrot', etc]

const veggies = ['beet', 'carrot', 'celery', 'cucumber', 'broccoli', 'cauliflower', 'lettuce'];

const vegs = veggies.map(function(veg) {
  return `${veg} salad`;
});

console.log('vegs', vegs);

// arrow function version of the above:
const salads = veggies.map(e => `${e} salad`);

console.log('mapped salads:', salads); 
console.log('=> freshVeg');
 // ['fresh beet', 'fresh carrot', 'fresh celery', 'fresh cucumber', 'fresh broccoli', 'fresh cauliflower', 'fresh lettuce'];
 
// challenge F: Use **filter()**, make a new array containing only the veggies that start with the letter 'c':
const cVeggies = veggies.filter(e => e.startsWith('c'));
console.log('cVeggies', cVeggies); 

//  ['carrot', 'celery', 'cucumber', 'cauliflower']

// challenge G: Using filter-into-map chaining, get just the veggies that start with 'c', but with the word 'crunchy' before each veggie:
const crunchy = veggies.filter( e => e.startsWith('c')).map(e => `Crunchy ${e}`);
console.log('crunchy',crunchy);

console.log('=> crunchVeg');
 //  ['crunchy carrot', 'crunchy celery', 'crunchy cucumber', 'crunchy cauliflower']

// challenge H: Given two arrays, **furniture** and **woods**, use map to generate a new **woodFurniture** array, having all ten pieces of furniture, each with a random wood types:
const furniture = ["Desk", "Chair", "Bed", "Table", "Sofa", "Card Table", "Tea Table", "Chest", "Dresser", "Sideboard"];
const woods = ["Oak", "Walnut", "Mahogany", "Maple"];

const WoodFurn = furniture.map(e=> `${woods[~~(Math.random()*woods.length)]} ${e}`);
console.log('WoodFurn', WoodFurn);
// HINT: inside the function, generate a random number in the range of the woodTypes array and use that number to get a random wood


// **assigning apartment numbers**
// **using map to make a 2D array from a 1D array**
// challenge J: An apartment building has four apartments on each of six floors. The floors and apt letters are provided:
const floors = [1,2,3,4,5,6];
const letters = ['A', 'B', 'C', 'D'];
// Using map, generate all 24 apartment units and save them to a nested array, 
// consisting of 6 items, each an array of 4 items.
const apts = floors.map(function(fl) {
  return letters.map(function(ltr) {
      return `${fl}${ltr}`;
  });
});

console.log(apts);

// arrow function version of the above:
const apartments = floors.map(flr => letters.map(ltr => `${flr}${ltr}`));
console.log('apartments',apartments);

// const aptUnits
// console.log(aptUnits);
// Desired output:
// [ ['1A', '1B', '1C', '1D'], ['2A', '2B', '2C', '2D'], ['3A', '3B', '3C', '3D'], ['4A', '4B', '4C', '4D'], ['4A', '4B', '4C', '4D'], ['6A', '6B', '6C', '6D']]

// CHALLENGE: last thing for this lesson:
// using filter().map() chaining and =>
// and given this array:
const mixedBag = ["apple", 3, "2", "baNaNa", 5, "7", 8, "cherry", "4", 9, "grape"];
// from mixedBag, make an array of just the numbers squared; any item that CAN be converted to an actual number should be used to make the result:
// expected result: [9,4,25,49,64,16,81]

const numsSq = mixedBag.filter(e => Number(e)).map(n => n ** 2);

console.log(numsSq);

// END Lesson 07.02 
// NEXT Lesson 07.03
