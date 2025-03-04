// Lesson 07.01 - START

// array.map()

// 4. Declare an array so that we can try out the **map()** method:
const fruits = ['apple', 'blueberry', 'cherry'];

// comparing map() to a for-loop

// 5. Declare a new empty array called **fruitPies**. 
const fruitPies = [];

// 6. Set up a for-loop that runs once for each item in the array:
for(fru of fruits) {
  // 7. Each time the loop runs, declare a variable **pie** and set the value to the current fruit, followed by the word "pie":
  let pie = fru + ' pie';

  // 8. Also each time through the loop, push the new pie into the array:
  fruitPies.push(pie);

} // end fruit loop

// 9. Below the loop, log **fruitPies** to the console:
console.log('fruitPies via for loop:', fruitPies);

// 10. Call the map() method on the **fruits** array, setting it equal to a new array, piesArr, which will receive the return value of the map() method:

// 11. Pass a callback function to the **map()** method. The callback takes an argument of its own, **e**, which represents the current array item ('apple', 'blueberry', 'cherry'):

// 12. Inside the curly braces, concatenate and **return** the pie, all in one line. The **return** pushes the result into the new array.
const piesArr = fruits.map(function(e) {
    return e + ' pie';
});

// 13. Log the new array to verify that it worked:
console.log('piesArr via map():', piesArr); 
// ['apple pie', 'blueberry pie', 'cherry pie']

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
console.log('numberedPies via map(e,i):', numberedPies); 
// ['1. apple pie', '2. blueberry pie', '3. cherry pie']

// challenge: 
const fruitsArr = ['apple', 'banana', 'blueberry', 'boysenberry', 'cherry', 'grape', 'grapefruit', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum','peach', 'pear', 'raspberry', 'strawberry'];

// three arguments: e, i and a

// In addition to the current item e and the current index i, there is a third argument available, and that is a, the array itself. 

// In this next example, we will use **map()** with all three arguments to make strings of consecutive items joined by a hyphen ('apple-banana', etc.). These will be saved to a new **smoothies** array.

// 27. Call map() on the array, setting it equal to a new array, smoothies
// 28. Pass in the callback function with all three arguments: **(e, i, a)**:

  // 29. Inside the map function, concatenate and return the hyphenated, consecutive words combos

// 30. Console log the result:

// ['apple-banana', 'banana-kiwi', 'kiwi-mango', 'mango-orange', 'orange-papaya', 'papaya-peach', 'peach-undefined']

// map callback provides 3 args: 
// - e (current item/element)
// - i (current index)
// - a (the whole array itself)
// using map with function(e,i,a), 
// make a new array called twoFruitSmoothies, that consists
// of consecutive fruits. Expected output:
// ['apple-banana', 'banana-cherry', 'cherry-grape', 'grape-lemon', 'lemon-lime', 'lime-mango', 'mango-papaya', 'papaya-peach', 'peach-orange']
// map produces a new array containing the same number of items as in the original array, put notice that the twoFruitSmoothies array has one less item (9 instead of 10) -- this is achieved by simply popping off the last item after map has finished (you do not want to keep the last item produced by map)
const twoFruitSmoothies = fruitsArr.map(function(e,i,a) {
    return `${e}-${a[i+1]} smoothie`;
});
twoFruitSmoothies.pop(); // get rid of: 'orange-undefined smoothie'
console.log('twoFruitSmoothies via map(e,i):', twoFruitSmoothies); 
// ['apple-banana smoothie', 'banana-cherry smoothie', 'cherry-grape smoothie', 'grape-lemon smoothie', 'lemon-lime smoothie', 'lime-mango smoothie', 'mango-papaya smoothie', 'papaya-peach smoothie', 'peach-orange smoothie']

/* Challenge A: 
calling map() on fruitsArr, and using all 3 callback args (e,i,a), make a new array of fruityTreats, where:
- if the fruit starts with a vowel, make a 2-fruit smoothie of current plus next fruit: 'apple-banana'
- if the fruit is a berry, make 'jam'
- if the fruit starts with 'p', make a 'popsicle'
- if none of the above apply, make a 'jellybean'
*/
const fruityTreats = fruitsArr.map(function(e,i,a) {
    let vowels = 'aeiou';
    if (vowels.includes(e[0])) {
        return `${e}-${a[i+1]}`;
    } else if (e.includes('berry')) {
        return `${e} jam`;
    } else if (e[0] == 'p') {
        return `${e} popsicle`;
    } else {
        return `${e} jellybean`;
    }
});
console.log('fruityTreats via map(e,i,a):', fruityTreats); 

/* Challenge B: 
do another map() move on fruitsArr, but this time
pluralize the fruits, according to these rules:
- if fruit ends in 'o' or 'h', add 'es'
- if fruit ends in 'y', drop the 'y' and add 'ies'
else just add 's'
map() should return a new array called fruitsPlural
hint: the map() callback only needs the one arg: (e)
str.slice(-1) returns the last char of a string
'mango'.slice(-1) returns 'o'
'peach'.slice(-1) returns 'h'
str.slice(0,-1) returns all but the last char of a string
'boysenberry'.slice(0,-1) returns 'boysenberr'
*/
const fruitsPlural = fruitsArr.map(function(e) {
    if (e.slice(-1) == 'o' || e.slice(-1) == 'h') {
        return `${e}es`;
    } else if (e.slice(-1) == 'y') {
        return `${e.slice(0,-1)}ies`;
    } else {
        return `${e}s`;
    }
});
console.log('fruitsPlural via map(e):', fruitsPlural); 


// array.filter()

// Let's save to the new array only the five-letter fruits. First, we'll do it with a loop:

// 16. Declare a new array called fruitsArr that includes several five-letter items. Also declare a new, empty array to hold the output:

const fiveLetterFruits = [];
// 17. Loop the array:
for(fru of fruitsArr) {
  // 18. With each iteration, check if the length of the current string equals 5:
  if(fru.length == 5) {
    // 19. If the condition is true, push the fruit into the **fiveLetterFruits** array:
    fiveLetterFruits.push(fru);
  }
}

// 20. Log the **fiveLetterFruits** array:
console.log('for loop fiveLetterFruits:', fiveLetterFruits);
// ['apple', 'grape', 'lemon', 'mango', 'peach'];

// Now to get five-character items using **filter()**, instead of a loop:

// 21. Call filter() on fruitsArr, set equal to a variable to "catch" the return value, which is the element that returns true in the boolean comparison:
const fiveCharFruits = fruitsArr.filter(function(e) {
    if(e.length == 5) {
        return e;
    }
});

// 22. Log the result:
console.log('filter() if fiveCharFruits:', fiveCharFruits);

// 23. It worked, but we can simplify this. The filter method returns true comparisons, so remove the if() part and just return the comparison itself:
const fiveCharFroots = fruitsArr.filter(function(e) {
    return e.length == 5;
});

// 22. Log the result:
console.log('filter() no-if fiveCharFroots:', fiveCharFroots);

// challenge:
// using filter(function(e)) get the fruits that end w vowel
// 'y' is not a vowel for this example
// use e.slice(-1) not e[e.index-1] to get last char of 'e'
const endVowelFruits = fruitsArr.filter(function(e) {
    return 'aeiou'.includes(e.slice(-1));
});
console.log('filter() endVowelFruits:', endVowelFruits);
// ['apple', 'banana', 'grape', 'lime', 'mango', 'orange', 'papaya', 'pineapple']


// chaining methods: filter() into map()

// Suppose we want jellies of only five-letter fruits. This requires filter() to save the five-letter fruits, and then map() to add "jelly" to the string. We can run the two methods one right after another, with the second method called diretly on the first. This technique is called "chaining".

// 24. Declare an array called fiveCharFruitellies and set it equal to the filter part:
const fiveCharFruitJellies = fruitsArr.filter(function(e) {
    return e.length == 5;
}).map(function(e) {
    return e + ' jelly';
});
// 25. Chain the map() method onto the end of the filter() method:

// 26. Log the resulting **fiveLetterJellies** array. It should be just 5-letter fruits:
console.log('filter().map() chaining jellymaker:', fiveCharFruitJellies);
// ['apple jelly', 'grape jelly', 'lemon jelly', 'mango jelly', 'peach jelly', 'peach jelly']


// LAB - 07.01
// map() filter() challenges, including
// working with arrays of objects

// filter() by object property
// Given an array of objects, each a food menu item:
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
let entreeName = entrees.map(function(e){
    return e.name;
})
console.log('entreeName', entreeName);
// challenge B: user filter into map chaining to get just the vegetarian items but with each item prices 20% off for lunch special and with each item having a new property called 'sides', the value of which is a random side dish from an array of 3 sides: 
const sides = ['salad', 'soup', 'potato'];
// const vegLunchSpecials = 
// example result:
// { name: 'Impossible GMO Burger', vegetarian: true, price: 14.40, cals: 680, side: 'salad' },
let vegLunchSpecial = entrees.filter(function(e) {
    return e.vegetarian;
}).map(function(e) {
    e.side = sides[~~(Math.random() * sides.length)];
    e.lunchPrice = '$' + (e.price - (e.price * .2)).toFixed(2);
    return e;
})
console.log('vegLunchSpecial', vegLunchSpecial);
// We will use filter() to save to a new array all **non-vegetarian** entrees with a minimum **price** of 15.
// challenge C: use filter() to save to a new array all **non-vegetarian** entrees with a minimum **price** of 15.
let meatPricyEntrees = entrees.filter(function(e) {
    return !e.vegetarian && e.price > 15;
})
console.log('meatPricyEntrees', meatPricyEntrees);
  
// challenge D: Use filter() to save io a new array all non-vegetarian items under 1000 calories:
let meat1000Cal = entrees.filter(function(e) {
    return !e.vegetarian && e.cals < 1000;
})
console.log('meat1000Cal', meat1000Cal);
// challenge E: Given an array of vegetables, use **map()** to make new array of fresh veggies: ['fresh beet', 'fresh carrot', etc]
const veggies = ['beet', 'carrot', 'celery', 'cucumber', 'broccoli', 'cauliflower', 'lettuce'];
let freshVeggies = veggies.map(function(e){
    return `fresh ${e}`;
})
console.log('freshVeggies', freshVeggies);
 // ['fresh beet', 'fresh carrot', 'fresh celery', 'fresh cucumber', 'fresh broccoli', 'fresh cauliflower', 'fresh lettuce'];
// const freshVeggies
// challenge F: Use **filter()**, make a new array containing only the veggies that start with the letter 'c':
const C_veggies = veggies.filter(function(e){
    return e[0] == 'c';
})
console.log('C_veggies', C_veggies); 
//  ['carrot', 'celery', 'cucumber', 'cauliflower']
// challenge G: Using filter-into-map chaining, get just the veggies that start with 'c', but with the word 'crunchy' before each veggie:
const crunchyVeg = veggies.filter(function(e){
    return e[0] == 'c';
}).map(function(e){
    return `crunch ${e}`;
})
console.log('crunchyVeg', crunchyVeg);
 //  ['crunchy carrot', 'crunchy celery', 'crunchy cucumber', 'crunchy cauliflower']
// challenge H: Given two arrays, **furniture** and **woods**, use map to generate a new **woodFurniture** array, having all ten pieces of furniture, each with a random wood types:
const furniture = ["Desk", "Chair", "Bed", "Table", "Sofa", "Card Table", "Tea Table", "Chest", "Dresser", "Sideboard"];
const woods = ["Oak", "Walnut", "Mahogany", "Maple"];
let woodFurniture = furniture.map(function(e){
    return `${woods[~~(Math.random() * woods.length)]} ${e}`;
})
console.log('woodFurniture', woodFurniture);
// HINT: inside the function, generate a random number in the range of the woodTypes array and use that number to get a random wood
// **assigning apartment numbers**
// **using map to make a 2D array from a 1D array**
// challenge J: An apartment building has four apartments on each of six floors. The floors and apt letters are provided:
const floors = [1,2,3,4,5,6];
const letters = ['A', 'B', 'C', 'D'];
// Using map, generate all 24 apartment units and save them to a nested array, consisting of 6 items, each an array of 4 items.
let aptUnits = floors.map(function(flr){
    return letters.map(function(ltr){
        return `${flr}${ltr}`
    });
})
console.log('aptUnits', aptUnits);
// const aptUnits
// console.log(aptUnits);
// Desired output:
// [ ['1A', '1B', '1C', '1D'], ['2A', '2B', '2C', '2D'], ['3A', '3B', '3C', '3D'], ['4A', '4B', '4C', '4D'], ['4A', '4B', '4C', '4D'], ['6A', '6B', '6C', '6D']]

// END: Lesson 07.01
// NEXT: Lesson 07.02