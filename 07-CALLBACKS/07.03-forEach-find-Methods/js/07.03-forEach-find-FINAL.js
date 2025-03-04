// Lesson 07.03 - forEach()

// array.forEach((e,i,a) => // do stuff)
// forEach() does not return anything automatically
// so you are not setting forEach() equal to a variable
// What can forEach() do?
// - Same stuff a loop can do.
// - Same stuff array methods
// map(), filter(), reduce() can do:
// 1. make new array (map, filter)
// 2. calculate a value (reduce)
// 3. DOM stuff (createElement)
// forEach() instead filter().map()
// can refactor nested loops:
// - make playing cards
//. - make flight pairs
//. - make unique fruit smoothies
// DOM challenge: => and array callbacks
// refactor Sortable Movies
// using => and forEach()
// lottery ticket generator:
//. - use => functions
//. - use array callbacks
// - // array.forEach(function(item))
// The forEach() method is called on an array. 
// It runs a function on each item in an array, one by one. 
// The current item is passed in as the argument of the function.
// The forEach method may be used instead of a for loop to perform an operation on each item of an array.

// 1. Start with an array of numbers, 
// and loop through it, logging each 
// item SQUARED to the console:
const sqNums = [];
const nums = [3,4,5,6,7,8,9];
for(let n of nums) {
    sqNums.push(n**2);
}
console.log('sqNums:', sqNums);
// [9, 16, 25, 36, 49, 64, 81]

// 2. Refactor the above using map()
const sqs = nums.map(e => e**2);
console.log('map => sqs:', sqs);
// [9, 16, 25, 36, 49, 64, 81]

// 2B. Make a new array of just the squares of the odd numbers: use filter().map() chaining e % 2 == 0 is falsey for odd nums
const sqOdds = nums.filter(e => e % 2).map(e => e**2);
console.log('map => sqOdds:', sqOdds);
// expected result: [9, 25, 49, 81]

// forEach. 
// The method is called on the array and 
// takes a callback that has the current
// array item as its argument
// like map and filter, forEach returns a new array
const oddSqs = [];
nums.forEach(function(e) {
  // if(e % 2 == 1) {
  //   oddSqs.push(e**2);
  // }
  e % 2 ? oddSqs.push(e**2) : null
});
console.log('forEach => oddSqs:', oddSqs);

// arrow function version of the above:
const odds = [];
nums.forEach(e => e % 2 ? odds.push(e**2) : null);
console.log('forEach => odds:', odds);

// add up the value of all numbers in nums array
let sumNums; // store the sum in th sumNums
// [3,4,5,6,7,8,9]

console.log('for loop: sumNums:', sumNums); // sumNums: 42

const movies = [ 
  { name: "The Wizard of Oz", year: 1939, mins: 101 },
  { name: "Casablanca", year: 1942, mins: 102 },
  { name: "Roman Holiday", year: 1953, mins: 118 },
  { name: "Lawrence of Arabia", year: 1962, mins: 227 },
  { name: "Lilies of the Field", year: 1963, mins: 94 },
  { name: "The Godfather, Part II", year: 1974, mins: 202},
  { name: "The Shining", year: 1980, mins: 144 },
  { name: "Beverly Hills Cop", year: 1984, mins: 105},
  { name: "Ghost", year: 1990, mins: 127 },
  { name: "Forrest Gump", year: 1994, mins: 142 },
  { name: "Ali", year: 2001, mins: 157 },
  { name: "Due Date", year: 2010, mins: 95 },
  { name: "Black Panther", year: 2018, mins: 134 },
  { name: "Avengers: Endgame", year: 2019, mins: 181 },
]; 

// add imdb time (143 min --> 2h 23m) to movies using forEach =>
// for(let moovee of movies) {
movies.forEach(e => {
  let mins = e.mins; // get the current movie's mins prop
  let h = ~~(e.mins/60); // 2.345 --> 2
  let m = mins%60; // 103 --> 43  (remainder of 103 / 60)
  e.imdbTime = `${h}h ${m}m`;
}); // end forEach
// } // end loop

console.log(movies);
// one line:
movies.forEach(e => e.imdb = `${~~(e.mins/60)}h ${e.mins%60}m`);
console.log('one line:', movies);

// cities example: make flight pairs (round trip; cities must be different)
// round trips good: 'ATL-MIA' and 'MIA-ATL'
// same city bad:    'CHI-CHI' 
// save results to a new array
// why can we NOT use map() for this? BECAUSE map() must return a new array w SAME
// number of items as found in original array, and here our result will have MANY more items
const cities = ['ATL', 'BOS', 'CHI', 'DET', 'JAX', 'JFK', 'LA', 'MIA', 'PHI', 'SEA', 'SF'];

// a.) first with a for loop (no callback function)
const flights = [];
for(let i = 0; i < cities.length; i++) { 
  for(let j = 0; j < cities.length; j++) { 
    if(cities[i] !== cities[j]) {
      flights.push(cities[i] + '-' + cities[j]);
    }
  }
}
console.log('nested for loop: flights:', flights);

// b.) for of loop: 
const flightCities = [];
for(from of cities) {
  for(to of cities) {
    if(from != to) {
      flightCities.push(`${from}-${to}`)
    }
  }
}
console.log('nested for of loop: flightCities:', flightCities);

// c.) use forEach and => 
const cityFlights = [];
cities.forEach(from => { 
  cities.forEach(to => { 
    if(from !== to) {
      cityFlights.push(`${from}-${to}`);
    }
  });
});
console.log('nested forEach cityFlights:', cityFlights);

// d.) bonus: use nested map() to make array of 11 arrays, one per city, each city arr having all 
// flight combos (so 10 items each); log that result
const mappedFlights = cities.map(from => {
  return cities.map(to => {
    if(from != to) {
      return `${from}-${to}`;
    }})
  // e.) then flatten array produced by step d. w flat() AND
  //     filter to get rid of undefined (anything false from if)
}).flat().filter(e => e); // will not return undefined (falsey)
console.log('nested map() mappedFlights:', mappedFlights);




// find() method
// The find() method serves a narrowly specific role: it finds the first item in an array that meets a condition, and it returns that item, only. It does not look for any more items that meet the condition.

// If NO item that satisfies the condition is found, the find() method returns undefined.
// First, let's emulate the "find" algorithm using a for loop.

// 24. Given this digits array, set up a for loop that iterates over the array:
// Each time through the loop, pass the current item to an if-statement that uses the modulus operator to see if the current number, digits[i], divided by 2 yields a remainder of 1:
// find the first odd number
// If the condition returns true, the number is odd, so return the odd number, which quits the function:
let digits = [30,54,72,89,110,137,189];
let firstOddDigi = 0;
for(digi of digits) {
  if(digi % 2 == 1) {
    firstOddDigi = digi;
    break; // target found, so stop looking
  }
}
console.log('for loop find firstOddDigi in digits arr:', firstOddDigi); // 89

// find last odd digit using loop;
let lastOddDigi = 0;
for(digi of digits) {
  if(digi % 2 == 1) {
    lastOddDigi = digi;
  }
}
console.log('for loop find lastOddDigi in digits arr:', lastOddDigi); // 189

// find() method returns the first item in array that meets a condition (kind of like filter, except you only get one thing) 
let firstOddNum = digits.find(e => e % 2 == 1);
console.log('find() firstOddNum in digits arr:', firstOddNum); // 89

// findLast() method returns the last item in array that meets a condition (kind of like filter, except you only get one thing) 
let lastOddNum = digits.findLast(e => e % 2 == 1);
console.log('find() lastOddNum in digits arr:', lastOddNum); // 189

// find ALL odd nums, use filter:
let allOddNums = digits.filter(e => e % 2 == 1);
console.log('filter() allOddNums in digits arr:', allOddNums);
// [89, 137, 189]

// indexOf() and lastIndexOf()

// indexOf() returns the index of the first instance of a target value
const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Mango", "Apple"];
// find index of first apple:
let indexOfFirstApple = fruits.indexOf('Apple');
console.log('indexOfFirstApple:', indexOfFirstApple); // 1

// lastIndexOf() returns the index of the last instance of a target value
let indexOfLastApple = fruits.lastIndexOf('Apple');
console.log('indexOfLastApple:', indexOfLastApple); // 5

// findIndex()
// find first index of item that meets a condition: Use findIndex() to find index of the first 'Mango'
let indexOfFirstMango = fruits.findIndex(e => e == 'Mango');
console.log('indexOfFirstMango:', indexOfFirstMango); // 2

// Use findIndex() to find index of first fruit that ends w 'o'
let firstFruitEndsWithO = fruits.findIndex(e => e.endsWith('o'));
console.log('firstFruitEndsWithO:', firstFruitEndsWithO); // 2

// findLastIndex()
// find last index of item that meets a condition:
// Use findIndex() to find index of the first 'Mango'
let indexOfLastMango = fruits.findLastIndex(e => e == 'Mango');
console.log('indexOfLastMango:', indexOfLastMango); // 5

// Use findIndex() to find index of first fruit that ends w 'o'
let lastFruitEndsWithO = fruits.findLastIndex(e => e.endsWith('o'));
console.log('lastFruitEndsWithO:', lastFruitEndsWithO); // 5

// Make sure that the findIndex() method returns -1 by changing the digits array values so that there are no odd numbers.

// LAB: 07.03 - you can just paste this to end of 07.03, keep going in same file:
// Shortest Lines Algo: Given lines of customers of varying lengths 
// Write a function with two parameters, both arrays:
// 1. the array of existing lines
// 2. the array of new people to add to existing lines
// RULES:
// a.) Add new customers to the lines, one customer at a time
// b.) Each customer must be added to the shortest line. 
// c.) If two or more lines are tied for shortest, add new customer to line at lowest index
// d.) return the lines with the new customers
//     Do NOT make any new lines -- just add new customers to the existing lines, per the rules
// You have two sets of each arrays to test your function 

// lines of Costco shoppers and lots of people wanting to join shortest line:
const costcoLines = [  ['Amy','Jay','Zed'],
		                        ['Ali','July'], 
                            ['Bob','Guo','Eva','Leo','Kit']  
                          ];
const costcoShoppers = ['Finn', 'Jules', 'Vince', 'Kate', 'Guy', 'Teri', 'Sam', 'Pat', 'Ada',
                                'Bell', 'Dell', 'Mel', 'Nell', 'Zippy'];

// lines of Theater goes and lots of people wanting to join shortest line:
const theaterLines = [  ['Beck','Eli','Guo'],
		                        ['Aziz','Jake'],
		                        ['Max','Mae','Stu','Gabe','JT'],
			                      ['Bee', 'Dee','Lee','Eve','Jim','Oba'],
			                      ['Rog'] 
                         ];
const theaterGoers = ['Finn', 'Jules', 'Vince', 'Kate', 'Ben', 'Dan',
'Stan', 'Maia', 'Hal', 'Hadi', 'Ezra', 'Mika', 'Moe', 'Joe', 'Bo',
'Ann', 'Cat', 'Dan', 'Ella', 'Fay', 'Gao', 'Hi', 'Jill', 'Jack',
'Ibo', 'Jovi', 'Juan', 'Dao', 'Bev', 'Cy'];

function addToShortestLine(linesArr, newPpl) {
  newPpl.forEach(person => {
        let shortestLine = linesArr[0]; // start w first line as shortest
        linesArr.forEach(line => {
            if(line.length < shortestLine.length) {
              shortestLine = line; // set new shortest line
            }
        });
        shortestLine.push(person); // add person to shortest line
    });
}

addToShortestLine(costcoLines, costcoShoppers)
console.log(costcoLines);

addToShortestLine(theaterLines, theaterGoers)
console.log(theaterLines);