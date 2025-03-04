// Lesson 07.01 - PROG

// array.map()

// 4. Declare an array so that we can try out the **map()** method:
const fruits = ['apple', 'blueberry', 'cherry'];

// comparing map() to a for-loop

// 5. Declare a new empty array called **pies**. 
const pies = [];

// 6. Set up a for-loop that runs once for each item in the array:
// for(let i = 0; i < fruits.length; i++) {
for(fru of fruits) {

  // 7. Each time the loop runs, declare a variable **pie** and set the value to the current fruit, as **fruits[i]** followed by the word "pie":
//   let pie = fruits[i] + " pie";

  // 8. Also each time through the loop, push the new jellybean into the array:
 //pies.push(pie);
    pies.push(fru + " pie");
}

// 9. Below the loop, log **pies** to the console:
console.log('pies:', pies);
// ['apple pie', 'blueberry pie', 'cherry pie'];

// forEach() version of the above for loop
const fruitPies = [];
fruits.forEach(function(e) {
    fruitPies.push(e + " pie");
});
console.log('fruitPies:', fruitPies);

// 10. Call the map() method on the **fruits** array, setting it equal to a new array, piesArr, which will receive the return value of the map() method:

// 11. Pass a callback function to the **map()** method. The callback takes an argument of its own, **e**, which represents the current array item ('apple', 'blueberry', 'cherry'):
const piesArr = fruits.map(function(e) {
    // 12. Inside the curly braces, concatenate and **return** the pie, all in one line. The **return** pushes the result into the new array.
    return e + " pie";
});

// 13. Log the new array to verify that it worked:
console.log('piesArr:', piesArr);
// ['apple pie', 'blueberry pie', 'cherry pie']

// calling the argument something besides e
// The callback function argument is e by default, but we could call it anything. 

// 14. Run map() again, saving the return value to a new variable and with **fru** as the callback argument, instead of e. It works exactly the same as before:
const piesArray = fruits.map(function(fru) {
    // 12. Inside the curly braces, concatenate and **return** the pie, all in one line. 
    //     The **return** pushes the result into the new array.
    return fru + " pie";
});

// Log the new array to verify that it worked:
console.log('piesArray:', piesArray);
// ['apple pie', 'blueberry pie', 'cherry pie']

// two arguments: e and i
// In addition to the current item as **e**, the current array item's **index** is available as **i**. 

// 15. Run map() again, saving the return value to a new variable and with the fruit pies numbered. The concatenation is getting longer, so switch to string interpolation. Start numbering at 1 by adding 1 to the index:
const numberedPies = fruits.map(function(e,i) {
    return `${i+1}. ${e} pie`;
});

console.log('numberedPies:', numberedPies);
// ['1. apple pie', '2. blueberry pie', '3. cherry pie']

// array.filter()

// Let's save to the new array only the five-letter fruits. First, we'll do it with a loop:

// 16. Declare a new array called fruitsArr that includes several five-letter items. Also declare a new, empty array to hold the output:
const fruitsArr = ['apple', 'banana', 'cherry', 'grape', 'lemon', 'lime', 'mango', 'papaya', 'peach', 'orange'];

// 17. Declare a new empty array to hold the result:
const fivers = [];
// 17B. Loop the fruits array:
for(fru in fruitsArr) {
  // 18. With each iteration, check if current fruit length is 5:
  if(fru.length == 5) {
    // 19. If condition is true, push fruit into **fivers** array:
    fivers.push(fru);
  }
}

// 20. Log the **fivers** array:
console.log('fivers:', fivers);
// ['apple', 'grape', 'lemon', 'mango', 'peach'];

// Now to get five-character items using **filter()**, instead of a loop:

// 21. Call filter() on fruitsArr, set equal to a variable to "catch" the return value: 
const fiveLetterFruits = fruitsArr.filter(function(e) {
    // if(e.length == 5) {
    //     return e;
    // }
    // better than the above if statement: just return the boolean condition
    // 23. It worked, but we can simplify this. The filter method returns true comparisons, so remove the if() part and just return the comparison itself:
    return e.length == 5;
});

// 22. Log the result:
console.log('fiveLetterFruits:', fiveLetterFruits);
// ['apple', 'grape', 'lemon', 'mango', 'peach']

// chaining methods: filter() into map()
// Suppose we want jellies of only five-letter fruits. This requires filter() to save the five-letter fruits, and then map() to add "jelly" to the string. We can run the two methods one right after another, with the second method called diretly on the first. This technique is called "chaining".

// 24. Declare an array called fiveLetterJellies** and set it equal to filter():
const fiveLetterJellies = fruitsArr.filter(function(e) {
    return e.length == 5;
})
// 25. Chain the map() method onto the end of the filter() method:
.map(function(e) {
    return e + " jelly";
});

// 26. Log the fiveLetterJellies array. It should be just 5-letter fruit jellies:
console.log('fiveLetterJellies:', fiveLetterJellies);
// ['apple jelly', 'grape jelly', 'lemon jelly', 'mango jelly', 'peach jelly'];

// three arguments: e, i and a

// In addition to the current item e and the current index i, there is a third argument available, and that is a, the array itself. 

// In this next example, we will use **map()** with all three arguments to make strings of consecutive items joined by a hyphen ('apple-banana', etc.). These will be saved to a new **smoothies** array.

// 27. Call map() on the array, setting it equal to a new array, smoothies
// 28. Pass in the callback function with all three arguments: **(e, i, a)**:
const smoothies = fruitsArr.map(function(elem,indx,arry) {
    // 29. Inside the map function, concatenate and return the hyphenated, consecutive words combos
    return `${elem}-${arry[indx+1]}`;
});

// 30. Console log the result:
// pop() last item to get rid of undefined
smoothies.pop();
console.log('smoothies:', smoothies);
// ['apple-banana', 'banana-kiwi', 'kiwi-mango', 'mango-orange', 'orange-papaya', 'papaya-peach']

// filter() by object property

// Given an array of objects, each a food menu item:
const entrees = [
    { name: 'Chicken with Waffles', vegetarian: false, price: 18, cals: 1200 },
    { name: 'Tofuburger', vegetarian: true, price: 8, cals: 480 },
    { name: 'T-Bone Steak', vegetarian: false, price: 24, cals: 1180 },
    { name: 'Quinoa Casserole', vegetarian: true, price: 14, cals: 560 },
    { name: 'Lobster', vegetarian: false, price: 36, cals: 750 },
    { name: 'NY Strip Steak', vegetarian: false, price: 42, cals: 1320 },
    { name: 'Bacon Cheeseburger', vegetarian: false, price: 14, cals: 1400 },
    { name: 'Shrimp Scampi', vegetarian: false, price: 23, cals: 1060 },
    { name: 'Quinoa Burger Deluxe', vegetarian: true, price: 16, cals: 630 },
    { name: 'Chicken Salad Supreme', vegetarian: false, price: 13, cals: 710},
    { name: 'Salmon Steak', vegetarian: false, price: 22, cals: 680 },
    { name: 'Pork Chop', vegetarian: false, price: 18, cals: 800 },
  ];

// We will use filter() to save to a new array all **non-vegetarian** entrees with a minimum **price** of 15.

// 31. Call filter() with its callback on arrays and set that equal to a new array:
const nonVegMinPrice15 = entrees.filter(function(e) {
    // && (AND) operator for filtering with two conditions**
    // 32. Use the && operator with filter() to return non-vegetarian items with a minimum price of 15:
    return !e.vegetarian && e.price >= 15;
});

console.log('nonVegMinPrice15:', nonVegMinPrice15);

// 32. Use the && operator with filter() to return non-vegetarian items under 1000 calories:
const nonVegMaxCal999 = entrees.filter(function(e) {
    // && (AND) operator for filtering with two conditions**
    // 32. Use the && operator with filter() to return non-vegetarian items with a minimum price of 15:
    return !e.vegetarian && e.cals < 1000;
});

console.log('nonVegMaxCal999:', nonVegMaxCal999);

// END: Lesson 07.02
// NEXT: Lesson 07.03