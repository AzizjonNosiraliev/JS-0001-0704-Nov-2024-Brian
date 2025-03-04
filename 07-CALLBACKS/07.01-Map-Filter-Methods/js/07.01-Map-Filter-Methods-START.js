// Lesson 07.01 - START

// array.map()

// 4. Declare an array so that we can try out the **map()** method:
const fruits = ['apple','banana','blueberry','cherry','lemon','peach'];

// comparing map() to a for-loop

// 5. Declare a new empty array called **pies**
const pies = []; 

// CHALLENGE: fill pies array w fruit pies:
// result: ['apple pie','banana pie','blueberry pie','cherry pie','lemon pie','peach pie']

// 6. Set up a for-loop that runs once for each item in the array:
for(i = 0; i < fruits.length; i++) {
    pies.push(fruits[i] + " pie");
}
console.log('for of loop pies:', pies);

// OR: use a for of loop:
const piez = [];
for(fru of fruits) {
    piez.push(fru + " pie");
}
console.log('for of loop piez:', piez);

// 7. Each time the loop runs, concatenate and push the new pie into the array:
// 9. Below the loop, log **pies** to the console:

// 10. Call the map() method on the **fruits** array, setting it equal to a 
//     new array, muffins, which will receive the return value of the map() method:
// 11. Pass a callback function to the **map()** method. The callback takes an 
//     argument of its own, fru, which represents the current array item ('apple', etc.):
// 12. Inside the function curly braces, concatenate and return the muffin, all in one line. 
//     The return statement accumulates the results into the new array.
//     The result is a new array of same length as the original, but with transformed items.

// 13. Log the new array to verify that it worked:
const muffins = fruits.map(function(fru) {
    return `${fru} muffin`;
});

console.log('mapped muffins:', muffins); 
// ['apple muffin', 'banana muffin', 'blueberry muffin', 'cherry muffin', 'lemon muffin', 'peach muffin']

// calling the argument something besides e
// The callback function argument is e by default, but we could call it anything. 

// 14. Run map() again, saving the return value to a new variable and with fruit as the callback argument, instead of e. It works exactly the same as before:

// ['apple pie', 'blueberry pie', 'cherry pie']

// two arguments: e and i
// In addition to the current item as **e**, the current array item's **index** is available as **i**. 

// 15. Run map() again, saving the return value to a new variable and with the fruit pies numbered. The concatenation is getting longer, so switch to string interpolation. Start numbering at 1 by adding 1 to the index:
const numberedPies = fruits.map(function(e,i) {
    return `${i+1}. ${e} pie`;
});
console.log('numberedPies (e,i):', numberedPies); 
// ['1. apple pie', '2. blueberry pie', '3. cherry pie']

// array.filter()

// Let's save to the new array only the five-letter fruits. First, we'll do it with a loop:

// 16. Declare a new array called fruitsArr that includes several five-letter items. Also declare a new, empty array to hold the output:
const fruitsArr = ['apple', 'banana', 'cherry', 'grape', 'lemon', 'lime', 'mango', 'papaya', 'peach', 'orange'];
const fiveLetterFruits = [];

// 17. CHALLENGE: iterate the fruitsArr with a for loop, saving to the fiveLetterFruits array only those items with length of 5:

// Loop the array:
for(fru of fruitsArr) {
    // 18. With each iteration, check if the length of the current string equals 5:
    if(fru.length <= 5) {
    // 19. If the condition is true, push the fruit into the **fiveLetterFruits** array:
        fiveLetterFruits.push(fru);
    }
}

// 20. Log the **fiveLetterFruits** array:
console.log(fiveLetterFruits);
// ['apple', 'grape', 'lemon', 'lime', 'mango', 'peach'];

// Now to get five-character items using **filter()**, instead of a for loop:

// 21. Call filter() on fruitsArr, set equal to a variable to "catch" the return value: 

const filtered5Fruits = fruitsArr.filter(function(e) {
    return e.length <= 5; // only kept if it's true
})

console.log('filtered5Fruits:', filtered5Fruits);

// 22. Log the result:

// chaining methods: filter() into map()

// Suppose we want jellies of only five-letter fruits. This requires filter() to save the five-letter fruits, and then map() to add "jelly" to the string. We can run the two methods one right after another, with the second method called diretly on the first. This technique is called "chaining".

// 24. Declare an array called fiveLetterJellies and set it equal to the filter part:
// 25. Chain the map() method onto the end of the filter() method:
const fiveLetterJellies = fruitsArr.filter(function(e) {
    return e.length == 5;
}).map(function(e) {
    return `${e} jelly`;
});

// 26. Log the resulting **fiveLetterJellies** array. It should be just 5-letter fruits:
console.log('fiveLetterJellies:', fiveLetterJellies);
// ['apple jelly', 'grape jelly', 'lemon jelly', 'mango jelly', 'peach jelly']


// CHALLENGES => Homework
// map(), filter() and map().filter() challenges

const nums = [12,15,18,20,25,27,28,34,37,41,45,48];
// 1. nums.map()
// do a map that stores the squares of each number
// in a new array called numsSq
// to warm up and get the logic working, you may first
// do this with a for loop
const numsSqWLoop = [];
for(num of nums) {
  numsSqWLoop.push(num ** 2);
}
console.log("The new array:", numsSqWLoop);

const numsSq = nums.map(function(n) {
  return n ** 2;
});

console.log('New array with map method:', numsSq);

// 2. nums.map() with index
// do a map that stores the product of each number times its index
// in a new array called numsSq
// to warm up and get the logic working, you may first
// do this with a for loop
const numsSq2 = nums.map(function(n,i) {
  return n * i;
});

console.log('array with map method:', numsSq2);

// 3. nums.filter()
// do a filter that saves all the odd numbers to a new array 
// called oddNums (hint: %)
const oddNums = nums.filter(function(e) {
  return e % 2 !=0;
});

// 4. nums.filter().map()
// do a filter into map chaining that saves the square of all the 
// odd numbers into a new array called oddSquares
const oddSquares = nums.filter(function(n) {
  return n % 2!= 0;
}).map(function(e) {
  return e ** 2;
});

console.log(oddSquares);

// three arguments: e, i and a

// In addition to the current item e and the current index i, there is a third argument available, and that is a, the array itself. 

// In this next example, we will use **map()** with all three arguments to make strings of consecutive items joined by a hyphen ('apple-banana', etc.). These will be saved to a new **smoothies** array.

// 27. Call map() on the array, setting it equal to a new array, smoothies
// 28. Pass in the callback function with all three arguments: **(e, i, a)**:

// 29. Inside the map function, concatenate and return the hyphenated, consecutive words combos
const smoothies = fruits.map(function(e,i,a) {
  return `${e}-${a[i+1]}`;
});

console.log(smoothies);
// 30. Console log the result:

// ['apple-banana', 'banana-kiwi', 'kiwi-mango', 'mango-orange', 'orange-papaya', 'papaya-peach', 'peach-undefined']

// filter() by object property

// Given an array of objects, each a food menu item:
const entrees = [
    { name: 'Chicken with Waffles', vegetarian: false, price: 18, cals: 1200 },
    { name: 'Tofuburger', vegetarian: true, price: 8, cals: 480 },
    { name: 'T-Bone Steak', vegetarian: false, price: 24, cals: 1180 },
    { name: 'Quinoa Casserole', vegetarian: true, price: 14, cals: 560 },
    { name: 'Lobster', vegetarian: false, price: 36, cals: 750 },
    { name: 'NY Strip Steak', vegetarian: false, price: 42, cals: 1320 },
    { name: 'Banon Cheeseburger', vegetarian: false, price: 14, cals: 1400 },
    { name: 'Shrimp Scampi', vegetarian: false, price: 23, cals: 1060 },
    { name: 'Quinoa Burger Deluxe', vegetarian: true, price: 16, cals: 630 },
    { name: 'Chicken Salad Supreme', vegetarian: false, price: 13, cals: 710},
    { name: 'Salmon Steak', vegetarian: false, price: 22, cals: 680 },
    { name: 'Pork Chop', vegetarian: false, price: 18, cals: 800 },
  ];

// We will use filter() to save to a new array all **non-vegetarian** entrees with a minimum **price** of 15.

// 31. Call filter() with its callback on arrays and set that equal to a new array:

  // && (AND) operator for filtering with two conditions**
  // 32. Use the && operator with filter() to return non-vegetarian items with a minimum price of 15:
const nonVegMin15 = entrees.filter(function(e) {
  return !e.vegetarian && e.price >=15;
});

console.log(nonVegMin15);

// 32. Use the && operator with filter() to return non-vegetarian items under 1000 calories:
const nonVegMinCal = entrees.filter(function(e) {
  return !e.vegetarian && e.cals < 1000;
});

console.log(nonVegMinCal);

// 33. UBER CHALLENGE: filter().map() chaining:
// continuing from 32 filter challenge, chain on a map()
// where you add a new propery called ppCal, the value of which is the calories divided by the price / 100
const nonVegMin15ppCal = entrees.filter(function(e) {
  return !e.vegetarian && e.cals < 1000;
}).map(function(e) {
  e.ppCal = +((e.price / e.cals).toFixed(2));
  return e
});

console.log(nonVegMin15ppCal);


// END: Lesson 07.02
// NEXT: Lesson 07.03