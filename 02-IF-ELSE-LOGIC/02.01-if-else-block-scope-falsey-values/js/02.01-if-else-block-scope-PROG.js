/* Lesson 02.01 - START

In this lesson:
 logic operators: 
   check for equality: ==   ===  <=  >=  
   check for inequality:  != !==  <  >  
 string length and index
 conditional logic: if - else if - else
 variable scope let & const vs var in { code block}
 truthy / falsey values

 logical operators: ==, <, >, <=, >=, ===, !=, !== 

single (=) vs. double (==) vs. triple (===) equal signs

=   Assignment Operator:
    - sets (changes) a value
    - value at right gets assigned to variable at left

==  Comparison Operator:
    - compares 2 values without changing any value
    - returns a boolean:
      - returns true if the 2 values are equal
      - returns false if the 2 values are not equal
      - does not consider datatype: 
        1 == '1' returns true ('kinda, sorta equal')

=== Strict Comparison Operator:
      - same as == but DOES consider datatype: 
        1 === '1' returns false ('not exactly equal')
*/

// 1. Compare a number to its string version:
// == vs ===
console.log("1 == 1:", 1 == 1); // true
// == ignores the data type when compring
console.log("1 == '1':", 1 == '1'); // true
// === considers the data type when compring
console.log("1 === '1':", 1 === '1'); // false
// != vs !==
// != ignores the data type when compring
console.log("1 != '1':", 1 != '1'); // false
// !== considers the data type when compring
console.log("1 !== '1':", 1 !== '1'); // true

// 2. Compare a numeric variable to other numbers:
let x = 5;
console.log('x == 5:', x == 5); // true
console.log('x == 6:', x == 6); // false

/*
writing JS directly in the console

Sometimes you just want to write JS without a file. This is convenient as far as getting going, but the disadvantage for learning is it doesn't save any of your work for future study.
*/

// 3. Open the console and type these comparisons, hitting enter each time:
// 8 // true
// 8 // false
// 8 // false
// 8 // true
// 8 // true
// 8 // false
// 8 // true
// 8 // true


// comparing strings 

// 3. Compare two nearly identical strings: JS is case-sensitive:
console.log("'Hello' === 'hello':");  // false

/*
string length and index

Strings have a length property which returns the number of characters (spaces count).
String characters can be gotten individually, by position number or index, with
the first character at index 0:
*/

// 4. Declare a string and then get its length and various character:
let greeting = "";
console.log(greeting); // 11
console.log(greeting); // H
console.log(greeting); // W
console.log(greeting); // d

// 5. Compare the length and first character:
console.log(greeting); // true
console.log(greeting); // false
console.log(greeting); // true
console.log(greeting); // false
console.log(greeting); // false

/*
comparing individual charactsers:

For comparison purposes, characters rank in "size" as follows:
- least are stringy digits: "0123456789"
- next come uppercase letters: "ABCDEFGHIJKLMNOPQRESUVWZYZ"
- greatest are lowercase letters: "abcdefghijklmnopqurstuvwxyz"
*/

// 6. Still in the Console, type these comparisons:
console.log(1000 > 50); // true
console.log("1000" < "50"); // true
console.log("10" > "5"); // false

/*
conditional logic with "if"
an "if statement" compares two values in parentheses and returns 
a boolean (true / false)
the comparison is called the condition
if the condition is true, the code inside the curly braces runs
*/

// 7. Write an if statement that checks if x equals 5. 
//    The code in the curly braces runs, because its true:
x = 4;

if(x == 5) {
    console.log('x is 5'); // runs because if condition returns true
}

// If the condition is false, the code inside the { } does not run:
if(x != 5) {
    console.log('x is not 5'); // does NOT run because if condition returns false
}

// if an if statement is only running ONE line of code, you can omit the curly braces and just put it all on the same line:
if(x != 5) console.log('L@@k! All in one line! x is not 5');

// 8. Try another if statement that checks if x equals 3. 
//     It doesn't run, because the comparison is false:

// 8. Try an if statement that checks a string length:
let word = "";

/*
if else

Often, we will want to run one piece of code if a condition is true, and some other piece of code if the condition is false. 
The "other part" is handled by "else". 
"else" does not evaluate a condition, so no parentheses. 
*/

// 9. Add else parts to the above if statements. Include the variables
//    in the output using backticks:
x = 8;
let y = 9;
if(x > y) { // false
    console.log(`${x} is more than y`); // does not run
} else {
    console.log(`y is equal to or more than ${x}`); // does run
}

let fru = 'apple';
console.log(`"${fru}" starts with "${fru[0]}"`); // a

// 10. Check if fru starts with "b"
fru = "cherry";
if(fru[0] == "b") {
    console.log(`It's true! "${fru}" starts with "${fru[0]}"`);
} else {
    console.log(`It's false! "${fru}" starts with "${fru[0]}"`);
}

// use if else to check the length of array
const fruits = ['apple', 'banana', 'cherry', 'grape', 'kiwi'];
console.log('number of fruits in array:', fruits.length);
if(fruits.length < 5) {
    console.log("It's true! The fruits array has 5 items!");
} else {
    console.log("It's false! The fruits array does NOT have 5 items!");
}

// evaluating a boolean with if-else logic

// 11. Declare a boolean, and evaluate it in an if statment:
let isRaining = false;


// 12. Check if raining is false; the outputs need to be reversed:
if(isRaining) {
    console.log(`It's raining!`);
} else {
    console.log(`It's not raining!`);
}

// ! for not or false
if(!isRaining) {
    console.log(`It's NOT raining!`);
} else {
    console.log(`It's raining!`);
}

// falsey value is not false in strict boolean sense, but it will return false inside an if statement;
// falsey values include all your basic nothingburgers:
// null, NaN, undefined, 0 and ""
let veggiesArr = [];
if(veggiesArr.length == 0) {
    console.log("Hey! No veggies! Array is empty!");
} else {
    console.log(`There are ${veggiesArr.length} items in the veggies array`);
}

// same as above but without == 0, since 0 by itself is already falsey
if(veggiesArr.length) {
    console.log("Hey! No veggies! Array is empty!");
} else {
    console.log(`There are ${veggiesArr.length} items in the veggies array`);
}

// same as above but without == 0, since 0 by itself is already falsey
if(!veggiesArr.length) { // if veggies does not have length (which is true when array is empty)
    console.log("Hey! No veggies! Array is empty!");
}

// suppose you have a user input text box and you want to first check if it's empty
let userInput = "";
if(!userInput) { // if user input box is empty
    console.log("Hey! No user input! Input text box is empty!");
}

// btw, you can do math with booleans: true is 1 and false is 0
x = true + true;
console.log('x:', x); // 2
x *= false;
console.log('x:', x); // 0


/*
boolean comparisons don't need ==
Since booleans are already true or false, they don't need to be compared to true or false, and so we can omit the == part in the condition:
*/

// 13. Refactor the boolean comparisons, dispensing with the == part.
//     raining == true becomes just raining
//     raining == false becomes just !raining (reverses the value)

// `It's raining!` // runs
// `It's NOT raining!` // doesn't run

// `It is true that it is not raining!` // doesn't runs
// "It is false that it is not raining."; // runs

// ! operator is to be used sparingly, as it deals in "reverse logic", 
// such as: "It is false that it is not raining."

/*
if - else if - else

"else if" adds another condition to evaluate. 
I'ts like a logic sandwich, where "if" and "else" are the bread and 
"if else" are the inner ingredients

Try an "if - else if - else" comparing two numbers:
*/

// 14. Declare two number variables:
let myScore = 10000;
let highScore = 15000;

// 15. Check if my score is greater than the high score:
if(myScore > highScore) {
    console.log('Congrats! You beat the high score!');
} else {
    console.log('Sorry! You score is lower than the high score!');
}

// 16. Make the two scores equal and re-run. Now you get a false result.
//     myScore is NOT lower than highScore" -- it's a tie.
myScore = 15000;
if(myScore > highScore) {
    console.log('Congrats! You beat the high score!');
} else {
    console.log('Sorry! You score is lower than the high score!');
}

// 17. Add an else if condition in the middle that checks if the scores are equal:
if(myScore > highScore) {
    console.log('Congrats! You beat the high score!');
} else if(myScore < highScore) {
    console.log('Sorry! You score is lower than the high score!');
} else {
    console.log('Wow! You TIED the high score!');
}
// 'Congrats! You beat the high score!');
// 'Wow! You TIED the high score!');
// 'Sorry! You score is lower than the high score!');
if(myScore > highScore) {
    console.log('Congrats! You beat the high score!');
} else if(myScore == highScore) {
    console.log('Wow! You TIED the high score!');
} else {
    console.log('Sorry! You score is lower than the high score!');
}

// 18. Refactor it so that the tie is checked for last:
// 'Congrats! You beat the high score!');
// 'Sorry! You score is lower than the high score!');
// 'Wow! You TIED the high score!');

/*
multiple "if else" conditions

Just as a sandwich can have multiple ingredients between the bread, so too can there be mulitple "else if" blocks between the "if" and "else". 
Only ONE code block runs, regardless of the number of "else if" blocks 
*/

// Using multiple else if blocks, set the grade based on the score. Possible grades are: 
// - A (90+), B (80+), C (70+), D (60+), F (less than 60)

// 19. Declare a numeric variable between 40 and 100:
// let score = ~~(Math.random()*61) + 40; // 40-100
let score = -1;
let grade = "";

// BONUS: set grade to "Unknown" if score is out of bounds (not in 0-100 range)
if(score >= 101) {
    grade = "Unknown";
} else if(score < 0) {
    grade = "Unknown";
} else if(score >= 90) {
    grade = "A";
} else if(score >= 80) {
    grade = "B";
} else if(score >= 70) {
    grade = "C";
} else if(score >= 60) {
    grade = "D";
} else { // score is less than 0
    grade = "F";
}

// at the end, log the grade:
let reportCard = `Score: ${score} | Grade is ${grade}.`
console.log('reportCard:', reportCard);

/*
BE AWARE of VARIABLE SCOPE 
You CANNOT access a variable declared inside {}
anywhere but inside those same {}
such {} variables are known as "block-scoped"
In contrast: variables NOT declared inside any {} 
are global / in the "global scope"'
global variables are available everywhere in script
*/

// 20. Inside each if / else block, declare a letterGrade with appropriate value: 
if(score) {
    let letterGrade;
} 

// 21. Concatenate the score and grade into a report card and check the Console:
// console.log(`Report Card:\nYour score is: ${score}\nYour grade is: ${letterGrade}`);

/*
We get an error: grade is not defined. But why? Clearly, we declared the grade variable and assigned it a string value.
Comment out the reportCard line to get rid of the error.
This brings us to the important topic of variable scope

variable scope
Variable scope refers to where in the code it exists and is available. 
We need to consider global scope vs. block scope.
score is declared in the global scope and is therefore available everywhere in the script. By global scope we mean the variable score is not declared inside curly braces.
grade, however, is declared inside curly braces. The code inside curly braces is known as a code block. Variables declared inside a code block are "block-scoped", that is, only available inside the code block.
*/

// 21. Refactor the code to declare letterGrade outside of the { }. 
//     This puts the variable in the global scope, so we can access it
//     outside of the if-else if blocks.
let letterGrade;
if(score) {
}

// 22. Log letterGrade without getting an error:
console.log(`Report Card:\nYour score is: ${score}\nYour grade is: ${letterGrade}`); // no error

// var is not block scoped

// 23. Run it again with local variables declared inside the {}, but this time using var.
//     var is global, so it will be available outide the code blocks:
score;

if(score) {
    var myGrade;
} 

console.log(`Report Card:\nYour score is: ${score}\nYour grade is: ${myGrade}`); // works!

/*
truthy and falsey values

Truthy and falsey values are not literally true or false, 
but they return true or false in a boolean context: if(x==5)
that is in an "if statement"

falsey values
    - NaN (Not a Number)
    - undefined
    - null
    - 0
    - "", '' (empty string)

All other values are truthy. These include: 

    - non-empty strings: "Hi", "5"
    - non-zero numbers: 5, -5
    - objects and arrays, even empty ones: [], {}
*/

// non-zero numbers are truthy

// 24. Evaluate a non-zero number by itself in an if statement.
//     Positive or negative, it returns true:

// "non-zero numbers are truthy"

// truthy values are not literally true (as bool) BUT they RETURN true
// in a boolean CONTEXT, e.g. inside the parens of an if statement
// non-empty strings are truthy

// 25. Pass a string to an if statement. It returns true, 
//     because non-empty strings are truthy.

// "non-empty strings are truthy"

// falsey values are not literally false (as bool) 
// BUT they do return false in a boolean CONTEXT, 
// e.g. inside the parens of an if statement
// Examples:

// 0 is falsey

// 26. Evaluate 0 to an if statement:

// "0 (zero) is truthy"
// "0 (zero) is falsey"

// empty strings are falsey

// 27. Evaluate "" to an if statement:

// '" (empty strings) are truthy'
// '" (empty strings) are truthy'

// 28. Evaluate undefined to an if statement:

// "undefined is truthy"
// "undefined is falsey"

// 29. Evaluate NaN in an if statement:
// "bananas";
// "NaN is truthy"
// "NaN is falsey"

// 30. Evaluate null in an if statement:
let foo;
// "null is truthy"
// "null is falsey";


// DONE: Lesson 02.01
// NEXT: Lab 02.01
// THEN: Lesson 02.02




