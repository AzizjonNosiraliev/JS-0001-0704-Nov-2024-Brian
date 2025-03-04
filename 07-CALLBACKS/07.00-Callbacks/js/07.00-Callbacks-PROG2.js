// Lesson 07.00 
// Callbacks
// A callback is a function passed to another funcdtion as its argument.
// Many JS methods take callbacks: 

// A listener that calls a function takes the function it's calling
// as its callback:
// object.addEventListener(event, callback);

// 1. Get the buttons:
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

// 2. Click btn 1 to call a function. That function is a callback:
btn1.addEventListener('click', greet);

function greet() {
    console.log('Greetings!');
}

// Passing the callback an argument would require () which would
// call the function, so we need to wrap greetUser() in an anonymous function
// which is now the callback -- a callback that calls a function: 

// 3. Click btn2 to call an anonymous inline function that calls a function:
btn2.addEventListener('click', function() {
    console.log('Greetings from Anon Inline Function!');
});

// 4. Click btn3 to call a function that takes an argument. Since this requires (), which calls the func, wrap func in outer funct
// The resulting structure is a callback that itself calls a function
btn3.addEventListener('click', function() {
    greetPlayer('Brian');
});

function greetPlayer(username) {
    console.log(`Greetings, ${username}!`);
}

// In addition to addEventListener, we have worked with the sort() callbacks for sorting arrays of numbers and objects (as well as for randomizing array)

// 5. Sort the nums array in ascending order. We need to pass sort() a callback, or otherwise we just get a "stringy sort":
const nums = [34,5,56,31,44,21,78,10,7,56,36];

nums.sort(function(a,b) {
    return a - b;
});
console.log(nums); // [5, 7, 10, 21, 31, 34, 36, 44, 56, 56, 78]

// arrow func version of the above:
nums.sort((a,b) =>  a - b);
console.log('=>', nums); 


// Sorting by object key has two algos: 
// by numeric key and string key:
const furniture = [
    { name: 'bed', price: 1200, lbs: 100 },
    { name: 'sofa', price: 1800, lbs: 80 },
    { name: 'armoire', price: 2250, lbs: 70 },
    { name: 'chair', price: 375, lbs: 35 },
    { name: 'ottoman', price: 175, lbs: 25 },
    { name: 'desk', price: 1375, lbs: 135 },
    { name: 'dresser', price: 275, lbs: 85 },
];

// 6. Sort by string key (name):
// toSorted() to get new array
const furnitureAtoZ = furniture.toSorted(function(a,b) {
    // if(a.name > b.name) {
    //     return 1;
    // } else {
    //     return -1;
    // }
    return a.name > b.name ? 1 : -1;
});
console.log('furnitureAtoZ:', furnitureAtoZ);

// arrow func version of the above:
const furnAtoZ = furniture.sort((a,b) => a.name > b.name ? 1 : -1);
console.log('=> furnAtoZ:', furnAtoZ);

// toSorted() works the same way except it returns a new array, without changing the array it is called upon.

// 7. Use toSorted() to sort by price in descending order (priciest first):
const furnitureByPrice = furniture.toSorted(function(a,b) {
    return b.price - a.price;
});
console.log('furnitureByPrice, desc:', furnitureByPrice);

// arrow func version of the above:
const furnByPrice = furniture.toSorted((a,b) => b.price - a.price);
console.log('=> furnByPrice, desc:', furnByPrice);


// 7B. Use toSorted() again to sort by lbs in asscending order (lightest to heaviest):
const sortedByLbs = furniture.toSorted(function(a,b) {
    return a.lbs - b.lbs;
});
console.log('sortedByLbs, asc:', sortedByLbs);

// arrow func version of the above:
const furnByLbs = furniture.toSorted((a,b) => a.lbs - b.lbs);
console.log('=> furnByLbs, asc:', furnByLbs);

// 8. toSorted() to randomize
// randomize the furniture objects, returning a new array:
const randomizedFurniture = furniture.toSorted(function(a,b) {
    return Math.random() - 0.5;
});
console.log('randomizedFurniture:', randomizedFurniture);

// arrow func version of the above:
const randFurn = furniture.toSorted((a,b) => Math.random() - 0.5);
console.log('randFurn:', randFurn);

// So these are the callbacks that we have been working with so far, 
// but there are a lot more. This unit covers the many other 
// array callbacks, besides sort.


// Writing a Custom Callback Function
// Let's try making our own function that takes a callback.
// Declare 4 functions that do basic math.
// Just as a reminder of the difference between function definitions 
// and function expressions, make two of each:ß

// 8. Write function defintiions/declaration to add and subtract numbers:
function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}

// 9. Write function expressions to multiply and divide numbers:
// In a function expression, a variable is set equal to an anonymous function:
const multiply = function(a,b) {
    return a * b;
}
const divide = function(a,b) {
    return a / b;
}

// arrow func version of multiply and divide (call 'em mult and divd)
const mult = (a,b) => a * b;
const divd = (a,b) => a / b;

// 10. Call the functions, saving their return values to variables,
// and then logging the result:
let sum = add(15,5); 
console.log('sum:', sum); // 20
let diff = subtract(15,5); 
console.log('diff:', diff); // 15
let prod = multiply(15,5); 
console.log('prod:', prod); // 75
let quot = divide(15,5); 
console.log('quot:', quot); // 3

// 11. Rather than call the functions separately, make another function
// that takes one of the 4 mathy functions as its input. It also will need the numbers, a, b to operate on. The function returns a call to the callback function. The callback returns a value, which then needs to be returned:
function calculate(a,b, mathyCallback) {
    return mathyCallback(a,b);
}

// arrow func version of the above:
const calc = (a,b, mathyCallback) => mathyCallback(a,b);

// 12. Call the calculate function, and pass in the expected arguments:
// the two numbers to operate on (a,b) and the mathy callback function:
// sum = calculate(5,10,add);
sum = calc(5,10,add);
console.log('=> callback sum:', sum); // 15

// diff = calculate(5,10,subtract);
diff = calc(5,10,subtract);
console.log('=> callback diff:', diff); // -5

// prod = calculate(5,10,multiply);
prod = calc(5,10,mult);
console.log('=> callback prod:', prod); // 50

// quot = calculate(5,10,divide);
quot = calc(5,10,divd);
console.log('=> callback quot:', quot); // 0.5
