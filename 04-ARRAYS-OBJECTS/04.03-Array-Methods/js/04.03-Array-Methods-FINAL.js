/* Lesson 04.03 - START

Array Methods

REVIEW: 
push(), pop(), sort(), reverse(), flat()

NEW: 
unshift(), shift(), concat(), 
splice(), slice(), includes(), join()
indexOf(), lastIndexOf(), 

NEW for 2023:
toShifted(), toSorted(), toReversed()
________________________________________________________________________________

array.push(item)
push() adds the item argument(s) to the end of the array.
*/

// 1. Declare an array with a few items, and use push() to add items to the end.
//    The method changes the existing array--it does NOT return a new array.
const fruits = ['blueberry', 'cherry', 'banana'];
fruits.push('kiwi');
fruits.push('orange', 'grape', 'lime');
console.log(fruits);
// ['blueberry', 'cherry', 'banana', 'kiwi', 'orange', 'grape', 'lime']

// array.pop()
// pop() removes the last item from the end of the array, and returns it

// 2. Remove the last item using pop(). 
//    The method returns the popped item, so save that to a variable:
let popped = fruits.pop();
console.log('popped:', popped); // lime
console.log(fruits);
// ['blueberry', 'cherry', 'banana', 'kiwi', 'orange', 'grape']

// array.sort()
// sort() is called on an array of strings and puts them in alphabetical order.
// The method changes the existing array--it does NOT return a new array.

// 3. Arrange the items in alphabetical order with sort(). 
//    The method changes the existing array--it does not make a new one:
fruits.sort();
console.log('sorted fruits:', fruits);
// ['banana', 'blueberry', 'cherry', 'grape', 'kiwi', 'orange']

/*
array.reverse()
reverse() is called on an array and reverses the order.

4. Reverse the order of the array items. Since they are already 
   The method changes the existing array--it does NOT return a new array.
   sorted from A-Z, the result will be items from Z-A: */
fruits.reverse();
console.log('reversed fruits:', fruits);
// ['orange', 'kiwi', 'grape', 'cherry', 'blueberry', 'banana']

/*
array.unshift()
array.shift()

- unshift() adds an item to the beginning of an array.
- shift() removes the first item and returns it. 
  How to remember which is which:
     "unshift" is the longer word; it makes the array longer
     "shift" is the shorter word; it makes the array shorter

5. Use unshift() to add an item to the beginning of the fruits array: */
fruits.unshift('strawberry');
console.log(fruits);
// ['strawberry', 'orange', 'kiwi', 'grape', 'cherry', 'blueberry', 'banana']

// 6. Use shift() to remove and return the first item, saving that to a variable:
let shifted = fruits.shift(); // strawberry
console.log('shifted:', shifted);
console.log(fruits);
// ['orange', 'kiwi', 'grape', 'cherry', 'blueberry', 'banana']

/*
array1.concat(array2, array3)
  - The concat() method concatentates (combines) two or more arrays into one. 
  - Call concat() on an array, and pass other array(s) in as argument(s).

7. Declare three arrays of fruits: */
const tropicalFruits = ['mango', 'kiwi', 'banana', 'pineappple', 'papaya'];
console.log('\ntropicalFruits:\n', tropicalFruits);

const citrusFruits = ['grapefruit', 'lemon', 'lime', 'tangerine', 'orange'];
console.log('\ncitrusFruits:\n', citrusFruits);

const blossomFruits = ['apple', 'peach', 'cherry', 'plum', 'pear'];
console.log('\n\nblossomFruits:\n', blossomFruits);

// 8. Use the concat() method to concatenate the three arrays into one:
const fruitCocktail = tropicalFruits.concat(citrusFruits, blossomFruits);
console.log('\nfruitCocktail:\n', fruitCocktail);
// ['mango', 'kiwi', 'banana', 'pineappple', 'papaya', 'grapefruit', 'lemon', 
// 'lime', 'tangerine', 'orange', 'apple', 'peach', 'cherry', 'plum', 'pear']

// 9. Arrange the fruitCocktail array in alphabetical order:
fruitCocktail.sort();
console.log('\nfruitCocktail sorted:', fruitCocktail);
// ['apple', 'banana', 'cherry', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 
// 'orange', 'papaya', 'peach',  'pear', 'pineappple', 'plum', 'tangerine']

/*
array.splice()

- splice() removes items at a specified index or range of indices. 
- spliced items may optionally be replaced with new items
- splice() requires two arguments: start_index, and number_of_items to remove. 
- splice() returns the removed item(s) as a new array.
- splice() optionally takes additional arguments of replacement item(s).
*/

// 10. Remove the item at index 7, which is 'mango':
// let splicedFruit = fruitCocktail.splice(7,1); // remove item at index 7
// console.log('splicedFruit:', splicedFruit); // ['mango']

// Splicing one item returns array of 1 item -- BUT what if you just
// want the item itself, without array wrapper

// 10B. Comment out the 'mango' splice, and do it again, but 
// this time grabbing item append [0] to the end of the expression:
let splicedIndex7 = fruitCocktail.splice(7,1)[0]; // remove item at index 7
console.log('splicedIndex7:', splicedIndex7); // mango

// 10C: use pop() or shift() instead of [0]
// you can also pop() or shift() the one item from the array:
// let splicedIndex7;
console.log('splicedIndex7:'); // mango

// 11. Starting at index 2, splice out four consecutive items, 
//     saving the result to a new array:
const spliced4Arr = fruitCocktail.splice(2,4);
console.log('spliced4Arr:', spliced4Arr); // ['cherry', 'grapefruit', 'kiwi', 'lemon']
console.log('\sfruitCocktail post-splicing:', fruitCocktail);
// ['apple', 'banana', 'lime', 'orange', 'papaya', 'peach',  'pear', 
// 'pineappple', 'plum', 'tangerine']

// To swap item(s) with splice, pass in new item(s) as additional argument(s): 

// 12. Replace 'lime' at index 2 with 'lemon':
fruitCocktail.splice(2,1,'lemon');
console.log('\nfruitCocktail post-lemon-lime-swap:', fruitCocktail);
// ['apple', 'banana', 'lemon', 'orange', 'papaya', 'peach',  'pear', 
// 'pineappple', 'plum', 'tangerine']

//  To swap more than one item with `splice()`, just add more arguments. 

// 13. Replace 'apple' and 'banana' with 'apricot' and 'blueberry':
fruitCocktail.splice(0,2,'apricot','blueberrry');
console.log('\nfruitCocktail post-more-swaps:', fruitCocktail);
// ['apricot', 'blueberry', 'lemon', 'orange', 'papaya', 'peach',  
// 'pear', 'pineappple', 'plum', 'tangerine']

// adding item(s) at index, without removing any items

// To add one or more items without removing any, specify the start index, 
// and put 0 as the second argument to splice out 0 items.

// 14. Insert 'grape' and 'grapefruit' in its correct A-Z position, 
// without removing any items:
fruitCocktail.splice(2,0,'grape','grapefruit');
console.log('\nfruitCocktail post-grape:', fruitCocktail);
// ['apricot', 'blueberry', 'grape', 'grapefruit', 'lemon', 'orange', 
// 'papaya', 'peach',  'pear', 'pineappple', 'plum', 'tangerine']

// splicing items at random

// If we choose items, again and again, at random, from an array, 
// we will sooner or later get repeats. To avoid repeats, splice out  
// each item as it is chosen.

// 15. Pick 5 random fruits, one at a time, from fruitCocktail. 
//     Keep refreshing the console until you get repeats:
// for(counter; condition; incrementor)
// loop keeps repeating as long as condition is true
// incrementor keeps going up until condition becomes false
for(let i = 0; i < 5; i++) {
    let r = ~~(Math.random() * fruitCocktail.length);
    console.log(`rand fruit ${i+1}: ${fruitCocktail[r]}`);
    console.log('fruitCocktail.length:', fruitCocktail.length);
    // before the re-running the loop and picking another random fruit
    // splice() out the just-picked fruit so that it cannot be repeated
    fruitCocktail.splice(r,1);
}

// infinite loop: 1 is always less than 5 no matter what value of i is
// for(let i = 0; 1<5; i++) {
//     let r = ~~(Math.random() * fruitCocktail.length);
//     console.log(`rand fruit ${i+1}: ${fruitCocktail[r]}`)
// }

/*
array.sort(function) 

Another way to get unique random items from array without repeats
it to pass a callback to the sort() method

shuffle (randomize) the array and then just pop
pop removes items, which are already randomized

RECAP: what is the sort() callback we already know ?

HINT: it's for sorting array of nums in asc / desc order

17. Sort the nums array of numbers in ascending order:
*/
const nums = [14,33,25,23,39];
nums.sort(function(a,b) {
    return a - b; // sorted ascending order
});
console.log('sorted nums:', nums);

// LOTTERY PICK GENERATOR
// 17B. Declare a new empty array to hold lottery nums
const lotteryNums = [];

// 17C. Using a for loop, generate random non-repeating lottery numbers from 1-69:
for(let i = 0; i < 10; i++) {
    let lotNum = Math.ceil(Math.random() * 69); // 1-69
    // 17D. if lotteryNums array does NOT include ! the new rand lotNum, push it in
    if(!lotteryNums.includes(lotNum)) {
        // 17E. Push lotNum into array
        lotteryNums.push(lotNum);
        // 17E. if the lotteryNums array has 5 items, ticket is complete, so 
        // use break to exit the loop
        if(lotteryNums.length == 5) {
            break; // end the loop when we get 5 nums
        }
    }
}

// and then sort them in ascencing order, with leading 0 for single digits: '05' :
lotteryNums.sort(function(a,b) {
    return a - b;
});
console.log('5 lotteryNums, no repeats:', lotteryNums); 

// Then add at the end a random Powerball num from 1-26
let powerballNum = Math.ceil(Math.random() * 26);
lotteryNums.push(powerballNum);
console.log('6-number Powerball Ticket:', lotteryNums); 


// Math.random() - 0.5. Half the time, the return value will be positive;
// the other 50% of the time, it will be negative. 
// The result will be a randomized array:

// 18. Re-make a fresh fruit cocktail array from the 3 smaller arrays of fruits.
//     use ... to destructure each array so that we get just loose items, and then
//     bundle all the loose items into a new array with the []
const freshFruitCocktail = [...tropicalFruits, ...citrusFruits, ...blossomFruits];
console.log('freshFruitCocktail:', freshFruitCocktail);

// 18B. Sort (alphabetize) the fruits:
freshFruitCocktail.sort();
console.log('sorted freshFruitCocktail:', freshFruitCocktail);

// 18C. Call sort on the array, passing in a callback that returns Math.random() - 0.5
//      this will hack the a - b neg/pos logic and just scramble everything
freshFruitCocktail.sort(function(a,b) {
    return Math.random() - 0.5; // half the time result will be pos, the other half neg
});

console.log('scrambled freshFruitCocktail:', freshFruitCocktail);

// 18D. Now, to get 5 random, non-repeating fruits, no loop is required, no more rand nums
//      required -- just splice off the last 5
//      splice() method allows negative indexing, so splice(-5) starts from the 5th from the end
//      omitting the 2nd argument means go all the way to the end
const last5Fruits = freshFruitCocktail.splice(-5);
console.log('last5Fruits:', last5Fruits); // ['peach', 'banana', 'plum', 'grapefruit', 'mango']
// ['kiwi', 'plum', 'lime', 'tangerine', 'pineappple']

/* 
array.slice(start_index, end_index_exclusive)
- slice() is called on an array, and takes two arguments: 
  start_index and end_index_exclusive (NOT included)
- items are copied (not cut), so original array is unchanged. 
*/

// 21. Make a 2-fruit tropical smoothie from the 3rd 
//     and 4th fruits of the tropicalFruits array:
const twoFruitSmoothie = tropicalFruits.slice(2,4);
console.log('tropicalFruits:', twoFruitSmoothie); // ['banana', 'pineappple']

// If the second argument is omitted, it slices from the start 
// index all the way to the end:

// tropicalFruits = ['mango', 'kiwi', 'banana', 'pineappple', 'papaya']

// 22. Take a slice of tropicalFruits from the 3rd item to the to last:
const slicedToEnd = tropicalFruits.slice(2);
console.log('slicedToEnd:', slicedToEnd); // ['banana', 'pineappple', 'papaya']

// 22B. To explicitly slice last 3, use negative indexing:
const last3 = tropicalFruits.slice(-3);
console.log('last3:', last3); // ['banana', 'pineappple', 'papaya']

// 23. Get the pineapple as a one item array:
const justPineappleArr = tropicalFruits.slice(3,4);
console.log('justPineappleArr:', justPineappleArr); // ['pineapple']

// 24. Do that again, but tack on [0] to return just the
// item at index 0, this being the only item in the array:
let justPineappleStr = tropicalFruits.slice(3,4)[0];
console.log('justPineappleStr:', justPineappleStr); // pineapple

/* 
negative indexing
slice() allows negative indexing, with the last item at -1
*/

// 25. Slice the last item:   
let lastItem = tropicalFruits.slice(-1)[0];
console.log('lastItem neg 1 slice:', lastItem); // papaya

// 26. One way to copy an array is to slice(0)
const tropicalFruitsCopy = tropicalFruits.slice(0);
console.log('tropicalFruitsCopy:', tropicalFruitsCopy); 

// 26B. Another way to copy an array is with arrCopy = [...arr]
const deepTropFruitsCopy = [...tropicalFruits];
console.log('deepTropFruitsCopy:', deepTropFruitsCopy);

// 26C. Adding a new item to deep copy does NOT affect original:
deepTropFruitsCopy.push('mangosteen');
console.log('deepTropFruitsCopy:', deepTropFruitsCopy); // has mangosteen
console.log('original tropicalFruits:', tropicalFruits); // no mangosteen

// 26D. Why go through these fancy moves to copy an array, why not just say:
const shallowTropFruitCopy = tropicalFruits;
shallowTropFruitCopy.push('mangosteen');
console.log('shallowTropFruitCopy:', shallowTropFruitCopy); // has mangosteen
console.log('original tropicalFruits:', tropicalFruits); // also has mangosteen

// So, the takeaway do not just copy objects by direct assignment, because
// if'n you do, all you get is a shallow copy (a reference to the original)

// 27. Slice all but the last item:
const allButLastItems = tropicalFruits.slice(0,-1);
console.log('all but last item:', allButLastItems); 

// 28. Slice all but the first and last items:
const allButFirstAndLastItems = tropicalFruits.slice(1,-1);
console.log('all but the first and last items:', allButFirstAndLastItems);

/*
array.includes(item)
includes() method is called on an array or string 
returns true if the array or string contains the item argument
returns false if the array or string does NOT contains the item
*/

// 29. Call the includes() method twice, so that we get one true and one false:
console.log("tropicalFruits includes 'kiwi':", tropicalFruits.includes('kiwi')); 
console.log("tropicalFruits includes 'kangaroo':", tropicalFruits.includes('kangaroo')); 

// 30. Try includes on a string:
let vowels = 'aeiou';
console.log("vowels includes 'e':", vowels.includes('e')); // true
console.log("vowels includes 'f':", vowels.includes('f')); // false

/*
indexOf() and lastIndexOf()

indexOf() is called on an array or string and returns the index 
of the first instance of the argument. If it is not found, it returns -1.

lastIndexOf() method is called on an array and returns the 
index of the last instance of the argument. If it is not found, it returns -1.
*/

// 31. Look up the index of the "papaya" in the tropicalFruits array:
console.log("index of 'papaya' in tropicalFruits:", tropicalFruits.indexOf('papaya')); // 1

// 31B. Look up the index and last index of letter "i" in "kiwi"
console.log("index of 'i' in 'kiwi':", 'kiwi'.indexOf('i')); // 1
console.log("lastIndex of 'i' 'kiwi':", 'kiwi'.lastIndexOf('i')); // 3

// 32. Look up the index of an item that is NOT in the tropicalFruits array. You get -1:
console.log("tropicalFruits index of 'penguin':", tropicalFruits.indexOf('penguin')); // -1

// Given this array of pets, which includes three cats:
const pets = ['bunny', 'tarantula', 'gerbil', 'cat', 'dog', 'goldfish', 'cat', 'iguana', 'cat', 'hamster'];

// 33. Get the index of the first cat:
let indexOfFirstCat = pets.indexOf('cat');
console.log("index of 1st 'cat':", indexOfFirstCat); // 3

// 34. Get the index of the last cat:
let indexOfLastCat = pets.lastIndexOf('cat');
console.log("index of last 'cat':", indexOfLastCat); // 8

// 34B. Slice (copy) to a new array the first cat and dog, but without having to hard-code a 3 for the index of the cat; use indexOf as in the previous step; all you know is first cat and dog are consecutive -- but you don't know index of first cat
const catAndDogArr = pets.slice(indexOfFirstCat,indexOfFirstCat+2);
console.log("catAndDogArr:", catAndDogArr); // ['cat', 'dog']

/*
But what about the other cat -- that second cat. How can we find its index?
We need to use indexOf, but we also need to start looking after the first cat.
To do ths, provide a second argument: start_index
The starting point is one after the first cat, which we get dynamically as
pets.indexOf('cat')+1 
*/

// 35. Get the second cat, using indexOf with a second argument: start_index:
let indexOfSecondCat = pets.indexOf('cat',indexOfFirstCat+1);
console.log("indexOfSecondCat:", indexOfSecondCat); // 6

/* 
join()
- join() method is called on an array and returns a string 
- join() returns a string made from joined together array items
- join() takes an argument called the 'delimiter'

- join() with no delimiter, returns a string of comma-separated items:
  ['bunny','cat','dog'].join()         'bunny,cat,dog'

- join('') with an empty string delimiter returns a string with no spaces:
  ['bunny','cat','dog'].join('')       'bunnycatdog'

- join(' ') with space delimiter returns a string of individual words:
  ['bunny','cat','dog'].join(' ')      'bunny cat dog'
*/

// 36. Use join() to make a string from citrusFruits. 
//     For this first try, don't provide a delimiter:
let fruitStr1 = citrusFruits.join();
console.log("\nfruitStr1 from join():\n", fruitStr1); 
// grapefruit,lemon,lime,tangerine,orange

// 37. Repeat, but with an empty string delimiter:
let fruitStr2 = citrusFruits.join('');
console.log("\nfruitStr2 from join(''):\n", fruitStr2); 
// grapefruitlemonlimetangerineorange

// 38. Again, but with an space delimiter argument:
let fruitStr3 = citrusFruits.join(' ');
console.log("\nfruitStr3 from join(' '):\n", fruitStr3); 
// grapefruit lemon lime tangerine orange

// 39. And again, but with '-' delimiter argument:
let fruitStr4 = citrusFruits.join('-');
console.log("\nfruitStr4 from join('-'):\n", fruitStr4); 
// grapefruit-lemon-lime-tangerine-orange

// 40. Once more, but with ' * ' delimiter argument:
let fruitStr5 = citrusFruits.join(' * ');
console.log("\nfruitStr5 from join(' * '):\n", fruitStr5); 
// grapefruit * lemon * lime * tangerine * orange

// 41. CHALLENGE: 
// Given this array of strings:
// 'Mets', 'Win', 'World', 'Series'
// make this headline: 'Mets Win World Series'
// make this file name: 'mets-win-world-series.jpg'

/*
str.toLowerCase() str.toUpperCase()

str.toLowerCase() is called on a string and returns a 
lowercase string: 'Mets'.toLowerCase() returns 'mets'
the original string is unchanged

str.toUpperCase() is called on a string and returns string 
in ALL caps; the original string is NOT changed
*/

// 42. Declare a string and make it all lowercase:
// "World Series"
console.log('str.toLowerCase():'); // world series
console.log('str:'); // World Series
// to make the change "stick" save var back to itself (or to some other var)

console.log('str:');

// 43. From baseballArr, make the headline: 'Mets Win World Series'
let headline;
console.log("headline:"); // 'Mets Win World Series'

// 44. From baseballArr, the file name mets-win-world-series.jpg:
// let fil
console.log('filename:'); // mets-win-world-series.jpg

// array.flat() 
// The flat() method is called on a matrix (2D) array and returns a new, flat, 1D array

// 45. Declare a 3x3 (2D) matrix array:
// 'X', 'O', null, null, 'X', 'O', 'O', null, 'X'

console.log('ticTacToe: ='); // X wins!

// 46. Flatten the array:

console.log('flatTacToe: ='); 
// ['X', 'O', null, null, 'X', 'O', 'O', null, 'X']
// X still wins, but it's hard to tell

// Given these 12 numbers: 189,28,33,43,11,22,32,42,161,322,392,402
// 47. Make a matrix array of 3 arrays of 4 items each: 
// 189,28,33,43, 11,22,32,42, 161,322,392,402
console.log('numsMatrix:');

// 48. Using double square brackets, get the 32 from numsMatrix:
console.log(); // 32

// 49. Flatten numsMatrix into a 1D vector (line):

console.log('flatnumsFlattenedNums:');

// 50. Get the 32 from numsFlat (only one [] required):
console.log(); // 32

/* Shallow Copy vs. Deep Copy
primitives (strings, numbers) can be copied by assignment (=)
if you change the copy, the original does NOT also change
This kind of "independent" copy is called a Deep Copy
*/

// 51. Declare a string and then copy it by direct assignment:
// 'apple'
// let deepC

// 52. Make a change to the copy:
// 'pineapple'

// 53. Log both; the original is unchanged, because we made a deep copy:
console.log('originalStr:', 'deepCopy:');
// originalStr: apple, deepCopy: pineapple

/* 
objects, on the other hand, copied by assignment result in 
a Shallow Copy, that is a copy that is still "connected to"
the original object. 
Change the copy and the original changes too.
... use case: Making a Deep Copy of an Array or Object
that is, changes to new arr affect original, as well
*/

// 54. Copy an array by direct assignment:
// const cit

// 55. Make a change to the copy:
// citrusArr.push('pomelo');
console.log('citrusArr:\n'); 
// ['grapefruit', 'lemon', 'lime', 'tangerine', 'orange', 'pomelo']

// 56. Check the original. It also picked up the pomelo
// This demonstrates that citrusArr is a Shallow Copy:
console.log('citrusFruits:\n');

/*
... Destructuring Operator: Dot-Dot-Dot
...array destructures the array, that is "strips" the [] 
   while keeping the actual array items intact
// a string made from another string by assignment is a Deep Copy
*/

// 57. Log citrusFruits; then log the destructured version, which is
// all the items but not as an array:
console.log('citrusFruits:'); 
// ['grapefruit', 'lemon', 'lime', 'tangerine', 'orange']
console.log('...citrusFruits:\n'); 
// grapefruit lemon lime tangerine orange

// 58. Using ... make a Deep Copy of an array:
// const fres
/*
...arr strips the array of its [], so it's not an array anymore -- just loose items
[...arr] "rebundles" items into a fresh array, which is assigned to the new const
this results in a Deep Copy; 
*/

// 59. Modify new array and then check if original array also changed:
// 'yuzu', 'tangelos'
console.log('freshCitrus:\n'); 
// ['grapefruit', 'lemon', 'lime', 'tangerine', 'orange', 'pomelo', 'yuzu', 'tangelos']
console.log('citrusFruits:\n'); 
// ['grapefruit', 'lemon', 'lime', 'tangerine', 'orange', 'pomelo']
// the original did NOT pick up 'yuzu', 'tangelos' because freshCitrus is a Deep Copy

// ... instead of concat() 
// Let's say you have a fruit card game which requires a deck with 4 of each fruit 

// 60. Use ... to make your deck of four sets of the same array:

console.log('fruitCardDeck:\n',);

// 61. Shuffle (randomize) the fruit card deck:
// half neg, half pos


// ... destructuring objects 
// same Deep Copy vs. Shallow Copy issue
// Given this object:
// 'rabbit',
// 'Bunny',
// 'blueberry', 'carrot', 'kale', 'parsley', 'peach'

// 62. Make a shallow copy of pet, and modify the copy
// Shallow Copy
// 'apple')
console.log('shallowCopyPet:');
console.log('pet:'); 
// original pet obj picked up the changes to Shallow Copy

// 63. Make a deep copy of pet, and modify the copy
// const de; // Deep Dopy
// separatedly destructure the obj arr
// 'strawberry'

console.log('deepCopyPet:');
console.log('pet:'); 
// original pet obj picked up the changes to Shallow Copy

// other use cases for ... destructuring
// Some methods for finding values in an array only work if the array is flat. 

// Math.min() & Math.max() 

// 64. Pass some numbers to Math.min() and check the result:
// 12,5,7,9,4,23,6,10
console.log('minNum:'); // 4

// 65. Pass some numbers to Math.max() and check the result:
// 12,5,7,9,4,23,6,10
console.log('maxNum:'); // 23

// passing array of nums to Math.min() or Math.max() returns NaN
// cuz methods cannot read nums wrapped in an array

// 66. Pass the destructured array to Math.min() and Math.max()
// 12,5,7,9,4,23,6,10
// minN
console.log('... minNum:');

// maxN
console.log('... maxNum:');

// 67. Math.min and Math.max cannot handle nested arrays.
// They need flat arrays.
// Given a 3x3 array, flatten it and get the max value 
// using Math.max() and the spread operator ... :
// 5,6,7, 15,16,17, 2,9,8
// let fla
console.log('max nums2D:'); // NaN
console.log('max flatNums:'); // 17

const animalsTic = ['giraffe', 'zebra', 'elephant'];
console.log("animalsTic.includes('elephant'):", animalsTic.includes('elephant')); // true
console.log("animalsTic.includes('tiger'):", animalsTic.includes('tiger')); // false

// 68. Given this nested array of animals, check if there ia a panda in it:
const animalsTicTacToe = [ 
    ['giraffe', 'zebra', 'elephant'], 
    ['panda', 'koala', 'kangaroo'],
    ['zebra', 'hog', 'dingo']
];

console.log('animalsTicTacToe.includes("panda"):', animalsTicTacToe.includes("panda")); // false

// 69. Flatten the animals array and check for the panda again:
const animalsFlat = animalsTicTacToe.flat();
console.log('animalsFlat.includes("panda"):', animalsFlat.includes("panda")); // true

// indexOf()
//  returns index of first instance of argument; if not found, returns -1

// 70. Use indexOf() to find the index of the panda in the nested array:
console.log('animals2D.indexOf("panda")'); // -1
// The nestedAnimals returns false for includes() and -1 for indexOf(), 

// 71. Use indexOf() to find the index of the panda in the flat array. 
console.log('flatAnimals.indexOf("panda")'); // 3
// This time it works

/* 
NEW Array Methods for 2023
There are a few new versions of array methods that modify the existing array
These new versions return a new array, while leaving the original unchanged.

these array methods all modify the original array:
  - splice()
  - sort()
  - reverse()

these new array methods do not modify the original array;
instead, they return a new array:
  - toSpliced()
  - toSorted()
  - toReversed()
*/

// 72. Make a fresh fruit cocktail array. You can use concat() or ...
const freshFruits = [...tropicalFruits, ...citrusFruits, ...blossomFruits];
console.log('freshFruits:\n', freshFruits); 
// ['mango', 'kiwi', 'banana', 'pineappple', 'papaya', 'grapefruit', 'lemon', 'lime', 
// 'tangerine', 'orange', 'pomelo', 'apple', 'peach', 'cherry', 'plum', 'pear']

// 73. Use toSpliced() to add a new item at index to freshFruits
// the result will be a new array; the original array will not change:
// splice in coconut at index 5 BUT don't take out anything and DON'T CHANGE ORIGINAL
const fruitsWithCoconut = freshFruits.toSpliced(5,0,'coconut');
console.log('fruitsWithCoconut:\n', fruitsWithCoconut);
console.log('freshFruits no coconut:\n', freshFruits); 

// 75. Sort freshFruits without modifying it.
// Instead, save the sorted result to a new array:
const freshlySortedFruits = freshFruits.toSorted();
console.log('freshlySortedFruits:\n', freshlySortedFruits);
console.log('unsorted, unchanged freshFruits:\n', freshFruits);

// 76. Reverse the alphabetized array without modifying it.
// Instead, save the reverse-alphabetized result to a new array:
const reversedSortedFruits = freshlySortedFruits.toReversed();
console.log('Z-A reversedSortedFruits:\n', reversedSortedFruits);
console.log('A-Z freshlySortedFruits:\n', freshlySortedFruits);


// END: Lesson 04.03
// NEXT: Lab 04.03
// THEN: Lesson 04.04

