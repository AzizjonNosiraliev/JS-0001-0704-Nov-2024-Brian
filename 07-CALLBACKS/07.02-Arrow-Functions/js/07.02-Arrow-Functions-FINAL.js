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
// function greetUser(user) {
//     return `Welcome back, ${user}`;
// }

// hoising
// Function definitions are hoisted, meaning that they are lifted to the top of their scope, regardless of where they occur in the lines of code.

// 2. Call the function, supplying the expected argument. Since the function returns a value, set the call equal to a variable. This captures the return value; log the variable to see the greeting:
let greeting = greetUser('Brian123');
console.log('function declaration (hoisted) greetUser:\n', greeting); // Welcome back, Brian123!

function greetUser(user) {
    return `Welcome back, ${user}`;
}

// 3. To verify that the function definition has been hoisted, call the function above the function definition; it still works:


// converting the function definition into an arrow function
// step 1: is to convert function def to function expression

// 4. Replace the word function with const or let. This turns greetUser into a variable declaration, so put an equal sign right after the name of the variable:
const greetPal = function(user) {
    return `Welcome back, ${user}`;
}

greeting = greetPal('Bub');
console.log('function expression (NOT hoisted) greetPal:\n', greeting); // Welcome back, Bub!

// 5.
// converting the function expression into an arrow function
// step 2 is to convert expression to arrow function
// Starting w a function expression:
// A.) delete the word 'function'
// B.) put "fat arrow" => after parentheses:
const greetBuddy = (user) => {
    return `Welcome back, ${user}`;
}

greeting = greetBuddy('Bud');
console.log('arrow => function (NOT hoisted) greetBuddy:\n', greeting); // Welcome back, Bub!

// 5B.
// make the arrow function even more concise:
// A.) delete the word 'function'
// B.) put "fat arrow" => after parentheses:
// C.) if there is only one line of logic, the curly braces { } and return keyword may be omitted
// D.) if there is only one argument, the argument ( ) may be omitted.
const greetFriend = user => `Welcome back, ${user}`;

greeting = greetBuddy('Amigo');
console.log('=> super-concise:\n', greeting); // Welcome back, Amigo!

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
const entreeName = entrees.map(e => e.name);
console.log('=> entrees.map(e => e.name):', entreeName);
// ['Chicken with Waffles', 'Tofuburger', 'T-Bone Steak', 'Quinoa Casserole', 'Lobster', 'Sauteed Vegetable Medley', 'NY Strip Steak', 'Banon Cheeseburger', 'Shrimp Scampi', 'Quinoa Burger Deluxe', 'Chicken Salad Supreme', 'Salmon Steak', 'Pork Chop', 'Impossible GMO Burger']

// challenge B: user filter into map chaining to get just the vegetarian items but with each item prices 20% off for lunch special and with each item having a new property called 'sides', the value of which is a random side dish from an array of 3 sides: 
const sides = ['salad', 'soup', 'potato'];

let vegLunchSpecial = entrees.filter(e => e.vegetarian).map(e => {
    e.side = sides[~~(Math.random()*3)];
    e.lunchPrice = e.price * .8;
    return e;
});
console.log('vegLunchSpecial', vegLunchSpecial);

// We will use filter() to save to a new array all **non-vegetarian** entrees with a minimum **price** of 15.
// challenge C: use filter() to sav]e to a new array all **non-vegetarian** entrees with a minimum **price** of 15.
const meatPricyEntrees = entrees.filter(function(e) {
    return !e.vegetarian && e.price > 15;
});
console.log('meatPricyEntrees', meatPricyEntrees);

// arrow function version of the above:
const nonVegEntreesMin15 = entrees.filter(e => !e.vegetarian && e.price >= 15);
console.log('=> nonVegEntreesMin15', nonVegEntreesMin15);

// challenge D: Use filter() to save to a new array all non-vegetarian items under 1000 calories:
let meat1000Cal = entrees.filter(function(e) {
    return !e.vegetarian && e.cals < 1000;
})
;
console.log('meat1000Cal', meat1000Cal);

// arrow function version of the above:
const meat999cal = entrees.filter(e => !e.vegetarian && e.cals < 1000);
console.log('=> meat999cal', meat999cal);

// challenge E: Given an array of vegetables, use **map()** to make new array of fresh veggies: ['fresh beet', 'fresh carrot', etc]
const veggies = ['beet', 'carrot', 'celery', 'cucumber', 'broccoli', 'cauliflower', 'lettuce'];

let freshVeggies = veggies.map(function(e) {
    return `fresh ${e}`;
});

console.log('freshVeggies', freshVeggies);

// arrow function version of the above:
const freshVeg = veggies.map(e => `fresh ${e}`);

console.log('=> freshVeg', freshVeg);
 // ['fresh beet', 'fresh carrot', 'fresh celery', 'fresh cucumber', 'fresh broccoli', 'fresh cauliflower', 'fresh lettuce'];
 
// challenge F: Use **filter()**, make a new array containing only the veggies that start with the letter 'c':
const C_veggies = veggies.filter(function(e) {
    return e[0] == 'c';
});

console.log('C_veggies', C_veggies); 

// arrow function version of the above:
const C_veg = veggies.filter(e => e[0] == 'c');

console.log('=> C_veg', C_veg);
//  ['carrot', 'celery', 'cucumber', 'cauliflower']

// challenge G: Using filter-into-map chaining, get just the veggies that start with 'c', but with the word 'crunchy' before each veggie:
const crunchyVeg = veggies.filter(function(e){
    return e.startsWith('c');
}).map(function(e){
    return `crunch ${e}`;
});

console.log('crunchyVeg', crunchyVeg);

// arrow function version of the above:
const crunchVeg = veggies.filter(e => e[0]=='c').map(e => `crunchy ${e}`);

console.log('=> crunchVeg', crunchVeg);
 //  ['crunchy carrot', 'crunchy celery', 'crunchy cucumber', 'crunchy cauliflower']

// challenge H: Given two arrays, **furniture** and **woods**, use map to generate a new **woodFurniture** array, having all ten pieces of furniture, each with a random wood types:
const furniture = ["Desk", "Chair", "Bed", "Table", "Sofa", "Card Table", "Tea Table", "Chest", "Dresser", "Sideboard"];
const woods = ["Oak", "Walnut", "Mahogany", "Maple"];

const woodFurniture = furniture.map(function(e){
    return `${woods[~~(Math.random() * woods.length)]} ${e}`;
})
console.log('woodFurniture', woodFurniture);

// arrow function version of the above:
const woodFurn = furniture.map(e => `${woods[~~(Math.random()*woods.length)]} ${e}`);
console.log('woodFurn', woodFurn);

// HINT: inside the function, generate a random number in the range of the woodTypes array and use that number to get a random wood
// **assigning apartment numbers**
// **using map to make a 2D array from a 1D array**
// challenge J: An apartment building has four apartments on each of six floors. The floors and apt letters are provided:
const floors = [1,2,3,4,5,6];
const letters = ['A', 'B', 'C', 'D'];
// Using map, generate all 24 apartment units and save them to a nested array, 
// consisting of 6 items, each an array of 4 items.
const aptUnits = floors.map(function(f){
    return letters.map(function(l){
        return `${f}${l}`
    });
})
console.log('aptUnits', aptUnits);

// arrow function version of the above:
const apts = floors.map(flr => letters.map(ltr => `${flr}${ltr}`));

console.log('apts', apts);

// const aptUnits
// console.log(aptUnits);
// Desired output:
// [ ['1A', '1B', '1C', '1D'], ['2A', '2B', '2C', '2D'], ['3A', '3B', '3C', '3D'], ['4A', '4B', '4C', '4D'], ['4A', '4B', '4C', '4D'], ['6A', '6B', '6C', '6D']]



// 6. Run the page. Now, the first function call--the one above the function--fails. This is because a fat-arrow function, set equal to a variable, is not hoisted. Comment out the first function call, so that it stops throwing the error.

// making the fat-arrow function even simpler

// 7. Since there's only the one line of logic, we can make the fat-arrow function syntax even more concise. Get rid of the curly braces, the _return_ keyword and the parentheses around the argument:



// It is even easier to convert a function expression into a fat-arrow function, since it a function expression is already set equal to a variable:

// 5. Start with a function expression:

const addNumbers = function(n1, n2) {
    return n1 + n2;
}

// console.log(addNums(135, 246)); // 381

// Convert the function expression to an arrow function:

// 6. Delete the word function:

// const addNums = (a, b) {
//     return a + b;
// }

// 7. Add => after the parentheses:

const addNums = (a, b) => {
    return a + b;
}

// 8. Since there is only one line of logic, delete {} and **return**. We have to leave the parentheses, because there is more than one argument

// when you cannot simplify the arrow syntax too much
// If there is more than one line of logic, as in this next fat-arrow function, you have to keep the {} and return keyword:

// 9. Declare a variable, set equal to a fat-arrow function. Have it peform a few lines of code, so that we must keep the {} and return keyword. However, since there is only one argument, omit the () around the argument:


// Elephant

// arrow functions with map() and filter()

// The concise syntax of the arrow function makes it well suited for deployment as the callback function of array methods, map() and filter()
// We will now do a map-filter chaining example, first as a "regular" function and then with arrow functons. The function specs are as follows:

// - the function will take an array of strings and numbers as its argument
// - the function will a new array, nums, containing just the numbers
// - "number-like strings" are to be converted to real numbers and included in nums
// - if the callback has only one callback argument, its parentheses can be omitted

// First, we'll do the map-filter chaining version with the **function** keyword.

// 9. Declare an array, mix, of strings and numbers, including a few "number-like strings":


// 10. Declare nums, set equal to mix with the map() method called on it and with its callback function with argument, e:

// const nums = mix.map(function(e) {
// });

// 11. Pass each item to the Number() method and return it:

// const nums = mix.map(function(e) {
//     return Number(e);
// });
/*
- if the item is already a number, passing it to the **Number()** method will have no effect.
- if the item is already a "number-like string", passing it to the **Number()** method return an actual number
- if the item is a string, such as "banana", passing it to the **Number()** method will return **NaN**, which is falsey.
- as we recall, falsey values return false in a boolean context, which means **NaN** will be filtered out by the **filter()** method
*/
// 12. Chain filter() onto the end of map() to weed out the NaN values produced by the Number() method. Just return is e, the current item. The **NaN** items will return false and therefore be filtered out:


// 13. Log nums to make sure it worked:

// [3, 21, 33, 55, 89, 63, 77];

// 14. Now, try that again, but with arrow functions for callbacks. Just remove the word function and replace it with => on the other side of the parentheses:

// [3, 21, 33, 55, 89, 63, 77];

// 15. Make the code more concise, as this is a hallmark of arrow functions:
/*
- get rid of the curly braces and return keyword
- omit the callback argument parentheses, since there's just the one argument
- it is customary when writing such lean code to also lose the semi-colons
- as a final nod to minimalism, you can even make the array just one character:
*/

// [3, 21, 33, 55, 89, 63, 77];

// END Lesson 07.02 
// NEXT Lesson 07.03
