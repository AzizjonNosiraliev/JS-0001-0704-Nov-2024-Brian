// Lesson 07.03 - PROG

// array.forEach(function(item))
// The forEach() method is called on an array. 
// It runs a function on each item in an array, one by one. 
// The current item is passed in as the argument of the function.
// The forEach method may be used instead of a for loop to perform an operation on each item of an array.

// 1. Start with an array of numbers, 
// and loop through it, logging each 
// item SQUARED to the console:
const nums = [3,4,5,6,7,8,9];
const numsSq = [];

for(n of nums) {
    numsSq.push(n**2);
}

console.log('for loop numsSq:', numsSq);
// [9, 16, 25, 36, 49, 64, 81]

// Refactor the above using forEach. 
// The method is called on the array and 
// takes a callback that has the current
// array item as its argument
// unlike map and filter, forEach does NOT return a new array -- to build a new array, you have to push()
const sqNums = [];
nums.forEach(e => sqNums.push(e**2));

console.log('forEach sqNums:', sqNums);
// [9, 16, 25, 36, 49, 64, 81]

// map() version of the above
const mapSqs = nums.map(e => e**2);

console.log('map mapSqs:', mapSqs);
// [9, 16, 25, 36, 49, 64, 81]

// add up the value of all numbers in nums array
let sumNums; // store the sum in th sumNums
// [3,4,5,6,7,8,9]

// for loop: make squares of only the odd numbers:
const oddSq = [];
for(n of nums) {
    if(n % 2 == 1) {
        oddSq.push(n**2);
    }
}
console.log('for loop oddSq:', oddSq);
// [9, 25, 49, 81]

// forEach() make squares of only the odd numbers:
const sqOdds = [];
nums.forEach(e => {
    if(e % 2 == 1) {
        sqOdds.push(e**2);
    }
});
console.log('forEach sqOdds:', sqOdds);

// filter() into map() chaining version of the above
const oddSqu = nums.filter(e => e%2).map(e => e*e);
console.log('filter() into map() chaining oddSqu:', oddSqu);
// [9, 25, 49, 81]

// find() method
// The find() method serves a narrowly specific role: it finds the first item in an array that meets a condition, and it returns that item, only. It does not look for any more items that meet the condition.

// If NO item that satisfies the condition is found, the find() method returns undefined.

// First, let's emulate the "find" algorithm using a for loop.

// 24. Given this digits array, set up a for loop that iterates over the array:
// Each time through the loop, pass the current item to an if-statement that uses the modulus operator to see if the current number, digits[i], divided by 2 yields a remainder of 1:
// find the first odd number
// If the condition returns true, the number is odd, so return the odd number, which quits the function:
let digits = [30,54,72,89,110,137,189];
let bingoNums = [12,24,32,46,62,70];

let firstOdd;
for(d of digits) {
    if(d % 2 == 1) {
        firstOdd = d;
        break; // exit loop upon finding first odd
    }
}
console.log('first odd digit in digits:', firstOdd); // 89

let oddBingoNum;
for(b of bingoNums) {
    if(b % 2 == 1) {
        oddBingoNum = b;
        break; // exit loop upon finding first odd
    }
}
console.log('oddBingoNum:', oddBingoNum); // undefined


// use find() method instead of for loop to find first odd number in arr:

let fistOddNum = digits.find(e => e%2);
console.log('fistOddNum:', fistOddNum); // 89

let fistOddBingoNum = bingoNums.find(e => e%2);
console.log('fistOddBingoNum:', fistOddBingoNum); // undefined

const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple", "Pear"];
// array.indexOf() returns index of first item that fits the condition:
let indexOfFirstApple = fruits.indexOf("Apple");
console.log('indexOfFirstApple:', indexOfFirstApple); // 1

// lastIndexOf() returns index of LAST item that fits the condition:
let indexOfLastApple = fruits.lastIndexOf("Apple");
console.log('indexOfLastApple:', indexOfLastApple); // 5

// if item cannot be found in array, indexOf() and lastIndexOf() return -1
let indexOfLastZebra = fruits.lastIndexOf("zebra");
console.log('indexOfLastZebra:', indexOfLastZebra); // -1

// some() and every() return booleans
// some() returns true if ANY items meet condition
// every() returns true if ALL items meet condition
let isApples = fruits.some(e => e == "Apple");
console.log('isApples:', isApples); // true

let allApples = fruits.every(e => e == "Apple");
console.log('allApples:', allApples); // false

// fill(fill_value, start_index) takes 2 args: a fill-to-end-value and an index
const numz = [15,21,33,14,65,14,37,14];
numz.fill(99,3);
console.log(numz);

// Array(n) returns empty array of length n; logs: [empty × 69]
// Array(69).fill(0) returns an array of 79 zeroes: [0,0,0]
// use fill to make an array of all ints from 1-69
// Array(69).fill().map((e,i) => i+1) 
// it maps over the array of 69 zeroes and returns a new 
// array of same length (which is what map always does)
// each value of new array is index of array of zeroes, plus 1
const lottery_nums = Array(69).fill().map((e,i) => i+1); 
console.log(lottery_nums); // [1,2,3,4,...67,68,69]

// CHALLENGE: 
// PART A: use lottery_nums array of consec ints from 1-69 to make a lottery_ticket array containing 5 non-repeating nums in ascending order; numbers must be chosen from lottery_nums

// PART B: make a function generate_lottery_tickets that takes in a number, n, of lottery tickets and returns an array, lottery_tickets, of n arrays of 5 nums each:
// example output where n=2: 
// [ [3,9,24,25,45], [8,9,33,36,67] ]
// NOTE: within 1 ticket, the 5 nums may NOT repeat, BUT any ticket can reuse any num used by any other ticket

// PART C: add a random Powerball number from 1-26 to each 
// Powerball can repeat one of the 5 "regular numbers"
// example output where n=2: 
// [ [3,9,24,25,45,5], [8,9,33,36,67,9] ]

// HINT 1: to make one ticket of 5 rand nums, first randomize lottery_nums and then just slice off 5 consecutive items without removing them from array (you can also use toSpliced() for this)
// HINT 2: every time you make another ticket, re-shuffle the lottery_nums array

function generate_lottery_tickets(n) {
    const ticketsArr = []; // to hold final output
    for (let i = 0; i < n; i++) { // loop once per ticket
        // randomize the array of 1-69
        lottery_nums.sort((a,b) => Math.random() - 0.5);
        // make a ticket of the last 5 randomized nums
        const ticket = lottery_nums.slice(-5);
        // sort the 5 number ticket in ascending order
        ticket.sort((a,b) => a - b);
        // add Powerball num from 1-26
        ticket.push(Math.ceil(Math.random() * 26));
        // push ticket of 6 nums into array of tickets
        ticketsArr.push(ticket);
    }
    return ticketsArr; // return the final output
}

console.log(generate_lottery_tickets(5));
console.log(generate_lottery_tickets(11));
