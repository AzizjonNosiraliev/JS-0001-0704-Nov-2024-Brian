/* Lesson 01.01 - FINAL

In this lesson:
 Variables and their data types:
 string variables
 let vs. var for declaring variables
 numbers variables
 math operators (+, -, *, /, **)
 boolean variables
 ! operator for flipping a boolean (true/false)
 undefined variables
 typeof() method for checking a variable's datatype
 resolving string quote conflicts
   - escaping quotes
   - mixing and matching quotes
   - backticks

________________________________________________________________

Variables and their data types:
A variable is declared with `var` or `let`, altnough `let` is
the more modern syntax and should be used instead of `var`:

________________________________________________________________

string variables
a string is text enclosed in single or double quotes

________________________________________________________________

let vs. var for declaring variables
*/

// 1. Declare a variable with `var` and assign it a string in double quotes:
var pet = "cat";
console.log(pet);

// 2. Change the value to another string, this time in single quotes:
pet = 'dog';
console.log(pet);

// One difference between `var` and `let` is that a `var` can be redeclared. 

// 3. Redeclare `pet`:
var pet = 'bunny';
console.log(pet);

// A variable declared with `let` cannot be redeclared--it throws an error:

// 4. Declare a variable with `let` and then try to redeclare it:
let petSound = "Woof!";
console.log(petSound);

// let petSound = "Grrr!";  
// Error: Identifier 'petSound' has already been declared

// To change the value of an existing variable, don't redeclare it. Just set it equal to something else:

// 5. Comment out the second `let petSound`, and then change "Woof!" to "Grrr!" without redeclaring the variable:
petSound = 'Grrr!'  
console.log(petSound);

// Multiple values can be outputted in the same console.log:

// 6. Output both variables in one console.log:
console.log(pet, petSound); // dog  Grrr!

// 7. For added clarity, you can label the console output:
console.log('pet:', pet, 'petSound:', petSound);
// pet dog petSound Grrr!

// ________________________________________________________________

// number variables

// A number value can be an integer or a float (decimal). 
// There are no commas in numbers.

// 8. Declare an integer, a float, and a 4-digit number:
let price1 = 35;  // integer
let price2 =  3.5; // float
let price3 = 3500;  // no comma
console.log(price1, price2, price3);

/* ________________________________________________________________

math operators (+, -, *, /, **)

Naturally, number variables can be used to do math. 
 
   +   addition
   -   subtraction
   *   multiplication
   /   division
   **  exponentiation
   %   remainder (modulo)

You can save the result to a variable or just directly console log the answer.
*/

// 9. Take these basic math operators for a spin:
let sum = price1 + price2 + price3;
console.log('sum:', sum);
console.log(price1 + price2); // 35 + 3.5 = 38.5
console.log(price3 - price1); // 3500 - 35 = 3535
console.log(price1 * price2); // 35 * 3.5 = 122.5
console.log(price3 / price2); // 3500 / 3.5 = 10000
console.log(price2 ** 2); // 3.5 * 3.5 = 12.25
console.log(price1 % 2); // 35 % 2 = 1 (35/2 yields remainder of 1)

// ________________________________________________________________

// boolean variables

// A boolean is a variable the value of which can only be true or false. 
// Boolean variables may begin with 'is' to flag them as either-or values.

// 10. Declare two booleans:
let isOnline = true;
let premiumMember = false;

console.log(isOnline, premiumMember); // true, false

// ! (NOT) operator flips a boolean
// changing the value of a boolean is known as toggling or flipping it. 
// this can be done by direct assignment, or by setting the variable 
// equal to itself with ! in front.

// 11. Flip isOnline from true to false by direct assignment: 
isOnline = false;
console.log('isOnline:', isOnline); // false

// Flip it again, but this time by putting ! in front of itself:
isOnline = !isOnline;
console.log('isOnline:',isOnline); // false
console.log('isOnline:', isOnline); // true
// i
console.log('isOnline:', isOnline); // false

// ________________________________________________________________

// undefined variables

// A variable can be declared without a value being assigned. 
// The assumption is that a value will be assigned later. 
// Until then, both the value and datatype are `undefined`.

// 12. Declare a variable, but don't assign a value:
let player1;
console.log('player1:', player1); // player1 undefined

// ________________________________________________________________

//  typeof() method for checking a variable's datatype

// 13. Declare variables of each of the four major "primitive" types: 
// string, number, boolean and undefined. Then, log the variable name, 
// value and data type:
let ketchup = 'Heinz';
console.log('ketchup:', ketchup, typeof(ketchup)); 
// ketchup Heinz string

let varieties = 57;
console.log('varieties:', varieties, typeof(varieties)); 
// varieties 57 number

let isFresh = true;
console.log('isFresh:', isFresh, typeof(isFresh)); 
// isFresh true boolean

let total;
console.log('total:', total, typeof(total)); 
// total undefined undefined

// ________________________________________________________________

// Multiple variables can be delared in one line with a single keyword.

// 14. Declare three variables with just one instance of the `let` keyword:
let a = 1, b = 2, c = 3;
console.log(a + b * c); // 7
// instead of:
// let a = 1;
// let b = 2;
// let c = 3;

// If all vars have same initial value, just put the value once at the end.
// sc
// instead of:
let score1 = score2 = score3 = 0;
// let score1 = 0;
// let score2 = 0;
// let score3 = 0;
console.log(score1, score2, score3);

// Such "one-liner" declarations are common for variables that are not 
// assiged an initial value.

// 15. Declare four variables with just one instance of the `let` keyword, 
// leaving them all without an initial value, so undefined:
let day, date, month, year;
console.log(day, date, month, year); 
// undefined undefined undefined undefined

// To avoid undefined variables, you can assign a starter value of "" (empty string) 
// or 0. This at least reveals the data type. The value can wait.

// 16. Declare a string and a number with starter values of "" and 0:
let grade = "";
let score = 0;

// ________________________________________________________________

// changing a variable's datatype 
// JavaScript is "loosely typed", meaning you can change the datatype of a variable.

// 17. Declare a string and change it to a number:
let price = "$100";
price = 100;

// Just be sure to have a good reason for changing a datatype.

// ________________________________________________________________

// resolving conflicting nested quotes 

// Strings can be enclosed in either double or single quotes, 
// but nested quotes result in errors if the interior quotes 
// conflict with the string "wrapper quotes".

// 18. Declare a string with an apostrophe, enclosed in single quotes. 
// let song = 'Won't Get Fooled Again'; // Unexpected identifier 't'

// escaping quotes

// You can "escape quotes" with a backslash, 
// which causes that bit of punctuation to be ignored.

// 19. Copy paste the error line, and comment out the original. 
//     Resolve the quote conflict by escaping with a backslash:
// Won't Get Fooled Again
console.log(); // Won't Get Fooled Again

// mixing-and-matching quotes

// Another way to resolve a single quote conflict is to switch to double quotes. 
// Likewise you can do the reverse.

// 20. Remove the \ and resolve the quote conflict with double quotes:
// Won't Get Fooled Again
console.log(); // Won't Get Fooled Again

// 21. Wrap these strings in backticks. Now it doesn't matter
//     what quotes are inside:
// Won't Get Fooled Again
// Green means "GO!"

// ________________________________________________________________

// DONE: Lesson 01.01

// NEXT: Lab 01.01

// THEN: Lesson 01.02

// _______________________________________________________________

// 01.01 Lab - START
/* 
    - Debug these variable names, supplying values of indicated datatype.
    - Log the result, replacing 'VAR' with your variable.
*/

// Example:

// 0. Dubug this string variable:
// let first-name = Bob;
// solution:

let firstName = 'Bob';
console.log('0.', 'firstName', firstName, typeof(firstName));
// 0. firstName Bob string

// ON YOUR OWN: 
// Debug the variables, with values of the indicated datatype.
// In the console.log, replace VAR with your variable
let VAR;

// 1. Dubug this number variable:
let admissionFee = 10;
console.log('1.', 'admissionFee', admissionFee, typeof(admissionFee));

// 2. Dubug this string variable:
let sportsCar1 = "Porsche";
console.log('2.', 'sportsCar1', sportsCar1, typeof(sportsCar1));

// 3. Dubug this boolean variable:
let online = false; 
console.log('3.', 'online', online, typeof(online));

// 4. Dubug this number variable:
let pctDone = .225;
console.log('4.', 'pctDone', pctDone, typeof(pctDone));

// 5. Dubug this string variable:
let miles26 = "marathon";
console.log('5.', 'miles26', miles26, typeof(miles26));

// 6. Dubug this string variable:
let $100000Bar = "candy bar";
console.log('6.', '$100000Bar', $100000Bar, typeof($100000Bar));

// 7. Dubug this number variable:
let firstPrize = 7500;
console.log('7.', 'firstPrize', firstPrize, typeof(firstPrize));

// 8. Dubug this boolean variable:
let iWon = true;
console.log('8.', 'iWon', iWon, typeof(iWon));

// 9. Without changing the the value of x,
//    set the value of y in the following 
//    console.logs to get an answer of 10
//    or -10, as indicated.
let x = 20;
let y;

y = -10;
console.log(x + y); // 10

y = 30;
console.log(x - y); // -10

y = 0.5;
console.log(x * y); // 10

y = -2;
console.log(x / y); // -10

y = 3;
console.log(x ** y); // 8000

// 10. Calculate the total cost, as shown in the comment:
let unitCost = 50;
let numUnits = 12;
let shipping = 25;
let totalCost = unitCost * numUnits + shipping;
console.log('totalCost', totalCost); // 625

// THEN: Lesson 01.02