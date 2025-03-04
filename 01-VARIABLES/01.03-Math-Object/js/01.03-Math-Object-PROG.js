// Lesson 01.03 - START

/* In this lesson:
- Math Shorthand Operators: ++, --, +=, -=, *=, /=
- Math.random(), Math.round()
- mutable vs immutable
- Math.floor(), Math.ceil()
- ~~ shorthand for Math.floor
- Math.max(), Math.min(), Math.abs() 
- Math.pow(), Math.sqrt(), Math.PI   
- Spread Operator ...
- toFixed() for rounding a number to n digits
- Order of Operations of Mathematical Expressions
    - Do * and / before + and -
    - Do * and / from left to right
    - Do + and - from left to right
    - Do exponents ** before * or /
    - Do anything inside () first

__________________________________________________________

Math Shorthand Operators: ++, --, +=, -=, *=, /=
*/

// 1. Compare math operators to shorthand operators:
let x = 40;

// addition: + vs. +=
x = x + 13;
console.log('x:', x); // 53
x += 17;
console.log('x:', x); // 70

// multiplication: * vs. *=
x = x * 3;
console.log('x:', x); // 210
x *= 2;
console.log('x:', x); // 420

// subtraction: - vs. -=
x = x - 80;
console.log('x:', x); // 340
x -= 100;
console.log('x:', x); // 240

// division: / vs. /=
x = x / 2; 
console.log('x:', x); // 120
x /= 3;
console.log('x:', x); // 40

// 2. Declare 3 number variables, and then do some calculations
//    showing the order of operations of mathematical expessions:
let n1;
let n2;
let n3;
let tot; // 4 + 40
console.log('tot:'); // 44
tot; // 9 * 8
console.log('tot:', tot); // 72

/* __________________________________________________________

Math Object
JS has a built-in Math Object, which comes with many useful methods:
Math.round(3.5) rounds off 3.5 to 4
Math.floor(3.99) rounds down 3.99 to 3
Math.ceil(3.01) rounds up 3.01 to 4
Math.random() generates a random float from 0-1 with 17 decimal places
Math.max(1,2,3) returns the maximum of a list of numbers (3) 
Math.min(1,2,3) returns the minimum of a list of numbers (1)
Math.pow(x,2) squares x but x ** 2 is the preferred way 
Math.abs(-3) returns the absolute value of -3, which is 3
Math.sqrt(9) returns the square root of 9, which is 3
Math.PI returns 3.141592653589793

__________________________________________________________

Math.round() rounds off its argument to the nearest integer 
*/

// 3. Round off some numbers:
x = 3.5012;
x = Math.round(x);
console.log(x); // 4
let y = 4.499;
y = Math.round(y);
console.log(y); // 4

// 4. Round down y and round up z:
// Math.floor() always rounds down
// Math.ceil() always rounds up
y = 4.0000001; 
y = Math.ceil(y);
console.log(y); // 5
let z = 4.9999999; 
z = Math.floor(z);
console.log(z); // 4

// strings and numbers are immuatable (cannot be changed)
// Math.floor(y) does not change y, actually.

// 5. Log y and z to see that they have not been changed.
console.log(y); // 2.99
console.log(z); // 2.01

// 6. Floor y again, but this time save the result back to y:
y; 
console.log(y); // 2

// __________________________________________________________

// Math.random() generates a random float from 0-1, 
// so to get a larger number, just multiply by some value:

// 7. Generate a random number and log it:
let r = Math.random();
console.log('r:', r); // 0.7492906781140873

// 8. Generate a random float from 0-100:
r = Math.random() * 100;
console.log('r:', r); // 74.92906781140873

// To get an integer, round, floor or ceil the random value:

// 9. Floor a random number multiplied by 100 to get an integer from 0-99
r = Math.floor(Math.random()*100);
console.log('r:', r); // some integer from 0-99

// getting a random integer in a range

// To get a random integer in a range, multiply by the range span, 
// and add the minimum value:

// 10. Generate a number integer in the 50-100 range:
let randIntFrom50to100 = Math.floor(Math.random()*51) + 50;
console.log('randIntFrom50to100:', randIntFrom50to100); // some value between 50-100

// __________________________________________________________

// ~~ shorthand for Math.floor
// ~~ can be used in place of Math.floor to round down a number

let randInt = ~~(Math.random()*601) + 200;
console.log('~~ randInt:', randInt); // random integer between 200-800

// __________________________________________________________

// Math.max() returns the greatest of the multiple values passed to it:

// 11. Find the maximum of a set of numbers. Save the result to a variable and log it:
let maxi = Math.max(3, 6, 8, 2, 12, 4, 10);
console.log('maxi:', maxi); // 12

// 12. Pass nums to the Math.max() method, saving the result to a variable, 
//     numsMax. Then log numsMax, which we expect to be 12:
let nums = [3, 6, 8, 2, 12, 4, 10]; 
maxi = Math.max(nums);
console.log('maxi:', maxi); // NaN

// We get NaN because Math.max() expects comma-separated numbers, 
// but not as an array.

// __________________________________________________________

// Spread Operator ...  

// The spread operator is three dots that "destructures" (gets rid of) the array, 
// while leaving the individual array items.

// 13. Find the max value of nums by destructuring the array:
maxi = Math.max(...nums);
console.log('maxi:', maxi); // 12

// Saving Array Items to Individual Vars
// 13B. Declare a new array of just variable names set equal to an array of same length
const fruits = ['apple', 'banana', 'cherry'];
const [f1, f2, f3] = fruits;
console.log('f1:',f1);
console.log('f2:',f2);
console.log('f3:',f3);
console.log('fruits:',fruits);

// Make a new string from existing string:
let fruit = 'kumquat';
// a string or number variable set equal to another variable is independent -- if you change original, the copy does NOT update/change along w original
let froot = fruit;
console.log('froot:', froot); // kumquat
fruit = 'kiwi';
console.log('froot:', froot); // still kumquat

// Shallow Copy (new object is connected to original object) vs. Deep Copy (new object is NOT connected to original object)

// HOWEVER, if you set a new object, such as an array, equal to an existing array, the copy is connected to the original; 
// const fruits = ['apple', 'banana', 'cherry'];
const froots = fruits; // Shallow Copy (new object is connected to original object)
console.log('froots:', froots); //  ['apple', 'banana', 'cherry']
// change the original, and the copy changes along with it
fruits.push('grape');
console.log('fruits:', fruits); // ['apple', 'banana', 'cherry', 'grape']
// but what about copy? Did froots pick up the change too?
console.log('froots:', froots); //  ['apple', 'banana', 'cherry', 'grape']
// Sooo.. the challenge is to be able to make a new array that is a copy of an existing array, and yet have the new array be its own independent entity w NO connection back to the original
// to do this we use ... (destructuring)
const frootyArr = [...fruits]; // Deep Copy (new object is NOT connected to original object)
console.log('frootyArr:', frootyArr);
// as a test, add a new item to fruits and see if it also got added to the new frootyArr or did not:
fruits.push('kiwi');
console.log('fruits:', fruits); // has kiwi
console.log('frootyArr:', frootyArr); // no kiwi because it is not connected to original fruits due to having been made as [...fruits]

// __________________________________________________________

// Math.min() returns the smallest of the multiple values passed to it. 
const myNums = [-5, 4, 1, -22, 9];
// 14. Get the min value of the nums array. Use the spread operator:
let mini = Math.min(myNums);
console.log('mini:', mini, typeof(mini)); // NaN number
mini = Math.min(...myNums);
console.log('mini:', mini, typeof(mini)); // -22 number

// 15. Raise 5 to the 4th power using the Math.pow() method: 
let pwr = Math.pow(5,4);
console.log('5 to 4th power:', pwr); // 625
pwr = Math.pow(5,3);
console.log('5 cubed:', pwr);
pwr = Math.pow(5,2);
console.log('5 sqaured:', pwr);
// but you can just use **
pwr = 5**3; 
console.log('5 ** 3 (5 cubed):', pwr);// 125

// __________________________________________________________

// Math.abs() returns the absolute value of its argument, 
// meaning it makes it positive:

// 16. Use Math.abs() to get the absolute value of a negative number:
let absNum = Math.abs(-7);
console.log(absNum); // 7

// __________________________________________________________

// Math.sqrt() returns the square root of its argument

// 17. Find the square root of a number:
console.log(Math.sqrt(36)); // 6

// __________________________________________________________

// Math.PI returns pi to 17 digits:

// 18. Save Math.PI as a constant and log it:
const PI = Math.PI;
console.log(PI); // 3.141592653589793

// __________________________________________________________

// toFixed() is a called on a float and takes a number as its argument 
// toFixed() returns a float with the number of decimal places specified 
// in the argument; the result is a string.

// 19. Round PI to 5 digits, and log its data type, which is 'string':
let pi5 = PI.toFixed(5);
console.log("pi5:", pi5, typeof(pi5)); // pi5 3.14159 string

// 20. Add pi5 to itself; pi5 is a string, so the plus sign concatenates. 
let twoPI = pi5 + pi5;
console.log("twoPI:", twoPI); // 3.141593.14159

// challenge: add pi5 + pi5 to get actual value 6.28 NOT 3.141593.14159
twoPI = +pi5 + +pi5;
console.log("twoPI:", twoPI); // 6.28318
// OR: the longwinded way:
twoPI = Number(pi5) +  Number(pi5);
console.log("twoPI:", twoPI);
twoPI =  parseFloat(pi5) + parseFloat(pi5);
console.log("twoPI:", twoPI);
// BUT does this work too?
twoPI =  parseInt(pi5) + parseInt(pi5);
console.log("twoPI:", twoPI); // 6

// Concatenation with += for strings on multiple lines:
// 21. Concatenate a greeting, line by line with +=
let firstName = "Brian";
let highTemp = 55;
let greeting = "Good Morning, " + firstName;
greeting += " How are you?"
greeting += " Today's high temp is " + highTemp + " degrees.";
console.log(greeting); // Good Morning, Brian! How are you! Today's high temp is 55 degrees/
// compare the above to concatenation all in one line which may be harder to do / read:
greeting = "Good Morning, " + firstName + " How are you? Today's high temp is " + highTemp + " degrees.";
console.log(greeting);
// challenge: redo/simplivy greeting using backticks:
greeting = `Good Morning, ${firstName} How are you? Today's high temp is ${highTemp} degrees.`;
console.log(greeting);

// ++ and -- increment and decrement a variable by 1

// 22. Declare a number variable, and then increment and decrement it by 1.
//     The changes "stick" without having to save the variable to itself:
let score = 10;
score++;
console.log('score:', score); // score: 11
score--;
console.log('score:', score); // score: 10

// add 5 at a time; multiply by 2:
score += 5; // 15
console.log('score:', score);
score *= 2; // 30
console.log('score:', score);
score -= 2; // 28
console.log('score:', score);
score /= 2; // 14
console.log('score:', score);

// DONE: Lesson 01.03

// NEXT: Lab 01.03

// __________________________________________________________

// LAB 01.03

// 1. Generate a random integer from 10-19;
let randomSquiggly = ~~(Math.random() * 10) + 10; // 10-19
console.log('r 10-19:', randomSquiggly)
// This way also works:
let randomFloor = Math.ceil(Math.random() * 10) + 9; // 10-19
console.log('r 10-19:', randomFloor);

// 2. Generate a random integer from 26-50;
// HINT: multiply and then add
r = ~~(Math.random() * 24) + 26;; // 26-50
                                // 0 - 24
console.log('r 26-50:', r); 
r; // 26-50
console.log('r 26-50:', r);

// 3. Find the maximum value from this array.
// HINT: dot dot dot
nums = [13, 35, 21, 57, 61, 39, 12, 16];
let numsMax = Math.max(...nums);
console.log('numsMax:', numsMax);

// 4. Find the square root of 144.
let squared = Math.sqrt(144);
console.log('sqrt of 144:', squared); // 12

// 5. Round down x: 9.9999
x = Math.floor(9.9999);
console.log('9.9999 rounded down:', x); // 9 

// 6. Supply values for x, y and expon to match the expected values:
x = 14;
y = 2;
let expon = Math.pow(x,y);
console.log('expon (used pow):', expon); 

expon = x ** y
console.log('expon (used **):', expon); // expon: 196

// 7. The area of a circle equals PI times the radius squared.
//    A = π r²
//    Given a circle of radius 4, find the area:
let radius = 4;
let area = Math.PI*(radius**2);
console.log('area:', area); // 50.26548245743669

// 8. The hypotenuse (c) of a right triangle is obtained by the formula: 
//    a² + b² = c², where a and b are the other two sides. 
//    Find the hypotenuse of a triangle, where side a is 5 and side b is 12.
let a = 5;
let b = 12;
let cSquared = a**2 + b**2;
let sideC = Math.sqrt(cSquared);
console.log('sideC (hypotenuse):', sideC);

// 9. Generate two random floats in the 0-10 range.
//    Round these numbers off to 3 decimal places. 
//    Find the sum of these two numbers, also rounded to 3 decimal places.
//    HINT: Use Number() or +strNum and toFixed()
let r1 = Math.random()*10;
let r2 = Math.random()*10;
r1;
r2;
let sum = (r1 + r2).toFixed(3);
console.log('sum r1 + r2:', sum); // sum r1 + r2: 13.87

// 10. Given this baseball player and his statistics: 
/*

Player:     Vladimir Guerrero Jr.
Team:       Toronto Blue Jays
Year:       2021

Stats:
PA      AB      R       H       2B      3B      HR      RBI
698     604	    123	    188	    29	    1	    48	    111

A. Calculate the player's Batting Average (BA);
Batting Average equals hits (H) divided by at bats (AB). 
BONUS:
It is customary for BA to be rounded to 3 decimal places, 
and displayed without a leading zero, so .321 not 0.321.
// HINT: Review how we got rid of "$" in $120

B. Calculate the player's Total Bases (TB);
Total Bases equals the sum of a player's hits (H), plus their doubles (2B),
plus twice their triples (3B), plus three times their home runs (HR): 

C. Calculate the player's Slugging Percentage (SLG).
Slugging Percentage equals total bases (TB) divided by at bats (AB). 
It is customary for SLG to be rounded to 3 decimal places,
and displayed without a leading zero, so .521 not 0.521.
// HINT: Review how we got rid of "$" in $120
*/

// SPOLIER ALERT !!!!!!
// Solution:
// Declare variables for the numbers needed by the TB and SLG formulas:
// for TB formula:

// for SLG formula:

let H = 188;
let _2B = 29;
let _3B = 1;
let HR = 48;
let AB = 604;

// A. Calculate Batting Average (BA):
let BA = (H/AB).toFixed(3);
console.log('BA:', BA); // 0.311

// B. Calculate Total Bases (TB):
let TB = H + _2B + (_3B*2) + (HR*3);
console.log('TB:', TB); // 363

// C. Calculate Slugging Percentage (SLG):
let SLG = (TB/AB).toFixed(3);
console.log('SLG:', SLG); // 0.601

// RESEARCH BONUS: 
// Google / research how to get rid of the first character of a string.
// This will allow us to get rid of the leading zero in BA and SLG, 
// so that we have the desired format .311 and .601 (NOT 0.311, 0.601).
// Solution: 
// str.slice(start_index, end_index) copies a portion of a string, 
// from the start to end index. If only one argument is passed
// in, it slices (copies) all the way to the end of the string. 
// We want all but the first character (leading zero), so do slice(1).
// BA and SLG are already strings, since they have been rounded to 
// 3 digits with toFixed(3). 
BA = BA.slice(1);
console.log('BA, no leading 0:', BA); // .311

SLG = SLG.slice(1);
console.log('SLG, no leading 0:', SLG); // .601

// 11. Solve the Pizza Lovers Dilemma 
//      Figure out which pizza is cheaper by the square inch:
//       - The medium pizza for $14.99 has a diameter of 12".
//       - The large pizza for $19.99 has a diameter of 16".
//       - Find the price per square inch of each pizza.
//       - Answer should be in cents to the nearest cent: 13¢
//       - A = πr² is the formula to use to find the area, as we  
//         may assume that both pizzas are perfect circles.
//       - The diameter of a circle is equal to twice the radius.

let mediumArea = Math.PI * (6**2);
let largeArea = Math.PI * (8**2);

let ppsiMedium = (14.99/mediumArea).toFixed(2);
let ppsiLarge = (19.99/largeArea).toFixed(2);

console.log("ppsiMedium: ", ppsiMedium);
console.log("ppsiLarge: ", ppsiLarge);


// END: Lab 01.03

// NEXT: Lesson 02.01


