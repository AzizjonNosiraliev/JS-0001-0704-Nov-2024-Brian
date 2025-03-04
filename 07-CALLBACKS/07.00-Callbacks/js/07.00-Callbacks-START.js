// Lesson 07.00 
// Callbacks
// A callback is a function passed to another funcdtion as its argument.
// Many JS methods take callbacks: 

// A listener that calls a function takes the function it's calling
// as its callback:
// object.addEventListener(event, callback);

// 1. Get the buttons:


// 2. Click btn 1 to call a function. That function is a callback:


// Passing the callback an argument would require () which would
// call the function, so we need to wrap greetUser() in an anonymous function
// which is now the callback -- a callback that calls a function: 

// 3. Click btn2 to call an anonymous inline function that calls a function:

    // console.log('Greetings from Anon Inline Function!');


// 4. Click btn3 to call a function that takes an argument. Since this requires (), which calls the func, wrap func in outer funct
// The resulting structure is a callback that itself calls a function

    // console.log(`Greetings, ${username}!`);


// In addition to addEventListener, we have worked with the sort() callbacks for sorting arrays of numbers and objects (as well as for randomizing array)

// 5. Sort the nums array in ascending order. We need to pass sort() a callback, or otherwise we just get a "stringy sort":
// 34,5,56,31,44,21,78,10,7,56,36

// console.log(nums); // [5, 7, 10, 21, 31, 34, 36, 44, 56, 56, 78]

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

console.log('furnitureAtoZ:');

// toSorted() works the same way except it returns a new array, without changing the array it is called upon.

// 7. Use toSorted() to sort by price in descending order (priciest first):

console.log('furnitureByPrice:');

// 7. Use toSorted() again to sort by lbs in asscending order (lightest to heaviest):

console.log('sortedByLbs:');

// 8. toSorted() to randomize
// randomize the furniture objects, returning a new array:

console.log('randomizedFurniture:');

// So these are the callbacks that we have been working with so far, 
// but there are a lot more. This unit covers the many other 
// array callbacks, besides sort.


// Writing a Custom Callback Function
// Let's try making our own function that takes a callback.
// Declare 4 functions that do basic math.
// Just as a reminder of the difference between function definitions 
// and function expressions, make two of each:ß

// 8. Write function defintiions/declaration to add and subtract numbers:


// 9. Write function expressions to multiply and divide numbers:
// In a function expression, a variable is set equal to an anonymous function:


// 10. Call the functions, saving their return values to variables,
// and then logging the result:

console.log('sum:'); // 20

console.log('diff:'); // 15

console.log('prod:'); // 75

console.log('quot:'); // 3

// 11. Rather than call the functions separately, make another function
// that takes one of the 4 mathy functions as its input. It also will need the numbers, a, b to operate on. The function returns a call to the callback function. The callback returns a value, which then needs to be returned:


// 12. Call the calculate function, and pass in the expected arguments:
// the two numbers to operate on (a,b) and the mathy callback function:

console.log('callback sum:'); // 15


console.log('callback diff:'); // -5

console.log('callback prod:'); // 50

console.log('callback quot:'); // 0.5
