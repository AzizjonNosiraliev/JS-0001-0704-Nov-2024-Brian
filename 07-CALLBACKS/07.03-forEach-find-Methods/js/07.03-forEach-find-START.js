// array.forEach(function(item))
// The forEach() method is called on an array. 
// It runs a function on each item in an array, one by one. 
// The current item is passed in as the argument of the function.
// The forEach method may be used instead of a for loop to perform an operation on each item of an array.

// 1. Start with an array of numbers, 
// and loop through it, logging each 
// item SQUARED to the console:
const nums = [3,4,5,6,7,8,9];
const squaredNums = [];
for(n of nums) {
  squaredNums.push(n ** 2);
}
console.log('for loop squaredNums',squaredNums);

// 2. Same as above using .map() no =>
const sqNums = nums.map(function(i) {
  return i ** 2;
});
console.log('.map() method sqNums: ', sqNums);

// 3. Now use same map method but with => No "function"
const sqNumbers = nums.map(e => e ** 2);
console.log('.map() method sqNumbers with =>: ', sqNumbers);

// 4. Same as #1 (for loop version)
//    BUT only square the odd numbers
//    expected array: [9, 25, 49, 81]
const oddSqNums = [];
for(no of nums) {
  if(no % 2 != 0){
    oddSqNums.push(no ** 2);
  };
}
console.log('For loop to square  only odd nums ', oddSqNums);

// 5. do the same loop with filter() and map() chained methods
const oddNums = nums.filter( function(e) {
  return e % 2 != 0;
}).map(function(n) {
  return n ** 2;
});

console.log('chained loop to square only odd nums ', oddNums);
 
// 6. Refactor the above using forEach. 
// The method is called on the array and 
// takes a callback that has the current
// array item as its argument
// like map and filter, forEach returns a new array
const forEachSquares = [];
nums.forEach(function(e) {
  if(e % 2 != 0) {
    forEachSquares.push(e ** 2);
  }
});
console.log('forEachSquares', forEachSquares);

// 7. save as 6, but use =>
const forEachSqs = [];
nums.forEach(e => {
  if(e % 2 != 0) {
    forEachSqs.push(e ** 2);
  }
});
console.log('forEachSqs', forEachSqs);

// 8. same as 7 but logic ternary
const forEaSqs = [];
nums.forEach(e => e % 2 != 0 ? forEaSqs.push(e ** 2) : 'hi');
console.log('forEaSqs', forEaSqs);
// nums.forEach(function(e) {
//   squaredNums.push(e ** 2);
// });
// arrow function version of the above

console.log('arrow func squaredNums:');

// add up the value of all numbers in nums array
let sumNums; // store the sum in th sumNums
// [3,4,5,6,7,8,9]

console.log('for loop: sumNums:', sumNums); // sumNums: 42

// reset var for a fresh count
// nums.forEach(function(e) {
//   sumNums += e;
// });


console.log('arrow func forEach: sumNums:'); 
// arrow func forEach: sumNums: 42

// find() method
// The find() method serves a narrowly specific role: it find the first item in an array that meets a condition, and it returns that item, only. It does not look for any more items that meet the condition.

// If NO item that satisfies the is found, the find() method returns undefined.
// First, let's emulate the "find" algorithm using a for loop.

// 24. Given this digits array, set up a for loop that iterates over the array:
// Each time through the loop, pass the current item to an if-statement that uses the modulus operator to see if the current number, digits[i], divided by 2 yields a remainder of 1:
// find the first odd number
// If the condition returns true, the number is odd, so return the odd number, which quits the function:
let digits = [30,54,72,89,110,137,189];
let bingoNums = [17,23,32,46,55,63,71];
let lotteryNums = [12,24,32,46,62,70];

// you do not have to write the boolean e % 2 != 0 to get the odd number you leave (number % 2)
// the o is already falsey so it will try to find truthy ans first 
let firstOddDigit = digits.find(e => e % 2); 
console.log("firstOddDigit:", firstOddDigit);

// CHALLENGE: => version of the above, so all in ONE line:
firstOddDigit = digits.find(item => item % 2); // 1 truthy, 0 falsey
console.log("firstOddDigit using find with =>: ", firstOddDigit);

// CHALLENGE: find first even bingo num:
let evenBingoNum = bingoNums.find(e => e % 2 == 0) ; ;
console.log('evenBingoNum:', evenBingoNum); // 32

// CHALLENGE: find first odd lottery num:
let oddLotteryNum = lotteryNums.find(i => i % 2);;
console.log('oddLotteryNum:', oddLotteryNum); // undefined

// LUNCHTIME CHALLENGE (OPTIONAL):
// Add up the values of all 3 arrays: digits, bingoNums, lotteryNums
// and provide ONE number answer

const numsArr = digits.concat(bingoNums,lotteryNums);
console.log(numsArr);

let sum = 0;
for(n of numsArr) {
  sum += n;
}
console.log('The sum of numbers in array is:', sum);
// const allValues = digits.concat(bingoNums, lotteryNums);
// allValues.forEach((e,i) => total += allValues[i]);
// console.log("total sum:", total); 
// Use findIndex() to find the position of the first odd number in the digits array:
// Make sure that the findIndex() method returns -1 by changing the digits array values so that there are no odd numbers.
// lastIndexOf()
// To return the index of the first instance of a target value, use findIndex() rather than find().
let indexOfFirstMultipleOf7 = numsArr.findIndex(e => e % 7 == 0);
console.log('indexOfFirstMultipleOf7',indexOfFirstMultipleOf7);

// have findIndex() method return -1 by having boolean  false for all nums
let greaterThan1000 = numsArr.findIndex(e => e > 1000);
console.log('greaterThan1000',greaterThan1000);

// use the find() to find the first number that divisible 7
let firstMultipleOf7 = numsArr.find(e => e % 7 == 0);
console.log('firstMultipleOf7',firstMultipleOf7);

// use the filter() to find all numbers that divisible 7
let allMultipleOf7 = numsArr.filter(e => e % 7 == 0);
console.log('allMultipleOf7',allMultipleOf7);

// Call the find() method on the digits array. Since the method returns a value, set the call equal to a variable to store the return value:

// lastIndexOf()
// To return the index of the first instance of a target value, use findIndex() rather than find().

// finishing up array methods with one of each:
// lastIndexOf() returms the last index of target
// findIndex() returms the first index of target
// find() return the first instance of target
// filter() return all instances of a target as a new array (cannot change items)
// map()return a new array of equal length of array it operates on
// forEach() doesn't return anything, but doesn't have any restrictions: do whatevaah
const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple", "Cherry"];

// LAB CHALLENGES:

// lastIndexOf() returns the last index of targe: find index of last Apple
let lastAppleIndx = fruits.lastIndexOf('Apple');
console.log('lastAppleIndx:', lastAppleIndx);
// findIndex() returms the first index of target: find index of first Apple
let firstAppleIndx = fruits.findIndex(e => e == "Apple");
console.log('firstAppleIndx:',firstAppleIndx);
// findIndex() returms the first index of target: find index of first Grape
let firstGrapeIndx = fruits.findIndex(e => e == "Grape");
console.log('firstGrapeIndx:',firstGrapeIndx);
// find() returns the first instance of target: find first fruit that does NOT start with a vowel
let fru1NotStartsWVowel = fruits.find(f => !"aouie".includes(f[0].toLowerCase()));
console.log('fru1NotStartsWVowel:',fru1NotStartsWVowel);
// filter() - find all the six-letter fruits
let _6_letterFruit = fruits.filter(e => e.length == 6);
console.log('_6_letterFruit:', _6_letterFruit);
// map() - make jelly of the 5 letter fruits and jellybeans from the others
let makeJellybeans = fruits.map(e => e.length == 5 ? `${e} Jelly`: `${e} jellybeans`);
console.log("makeJellybeans:", makeJellybeans);
// filter().map() - make a new array of jellybeans from fruits w more than 5 letters
let fruitsJelly = fruits.filter(fru => fru.length > 5).map(f => `${f} jellybeans`);
console.log("fruitsJelly:", fruitsJelly);
// forEach() - make a new array of jellybeans from fruits w more than 5 letters
const forEachJellybean = [];
fruits.forEach(function(n) {
  if(n.length > 5) {
    forEachJellybean.push(`${n} jellybeans`);
  }
});
console.log("forEachJellybean:", forEachJellybean);


