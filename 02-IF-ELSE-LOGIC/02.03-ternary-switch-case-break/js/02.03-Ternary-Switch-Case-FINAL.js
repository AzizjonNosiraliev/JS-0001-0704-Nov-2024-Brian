/* Lesson 02.03 - PROG

In this lesson:
- ternary expression: concise alternative to if-else
- &&  ||  operators for evaluating multiple conditions 
- switch - case - break: alternative to if-else if-else

// ternary expression

// A ternary is a concise alternative to an "if else" statement. 
// That which takes an "if else" 5 lines, a ternary does in one.
*/

// 1. Declare three number variables:
let x = 15;
let y = 8;
let z = 0;

// 2. If x < y, find their sum (+); otherwise find their product (*).
// Save the answer to z;  
if(x < y) {
    z = x + y;
} else {
    z = x * y;
}

console.log('z:', z); // 13 (because x is less than y)

// 3. Change a value so that we get the else part

/* Ternary Syntax

To convert an if-else, like this..

if(x < y) {
    z = x + y;
} else {
    z = x * y;
}

..into a ternary expression, like this..

x < y ? z = x + y : z = x * y;

..follow these A-B-C steps:

A. delete:  curly braces {}
            parentheses ()
            if, else
            first semi-colon ;
B. add:     ? in front of the "if line"
            : in front of the "else line"

C. roll everything up onto one line

Now, to convert the above "if else" to a ternary:

4. Get rid of the "if", the "else", the parentheses ( ), 
   the curly braces { } and the first semi-colon ; :

    x < y
        z = x + y
        z = x * y;

5. ? goes in front of the "if line"; 
   : goes in front of the "else line":

   x < y
        ? z = x + y
        : z = x * y;
*/

// 6. Roll everything up on one line (this part is actually optional):

// condition ? do_if_true : do_if_false
x < y ? z = x + y : z = x * y;

console.log("z ternary:", z);

// 7. To make it even more concise, instead of having "z =" twice, 
//    put "z =" at the beginning to capture the return value:
// return_value = condition ? do_if_true : do_if_false
z = x < y ? x + y : x * y;
console.log("z = ternary:"); // 13

// ternary nested inside "normal outer if else"
let weather = 'sunny';
let windy = true;
let plans = "";

if(weather == 'sunny') {
    plans = 'Go to Beach';
    if(windy) {
        plans += 'Try Windsurfing';
    } else {
        plans += 'Lie on Towel';
    }
} else { // not rainy, not sunny (anything else goes)
    plans = 'Go to Park';
    // we're at the park: now what?
    if(windy) {
        plans = 'Fly a Kite';
    } else {
        plans = 'Have a Picnic';
    }
}

// refactor the inner "windy if else blocks" as ternaries:
if(weather == 'sunny') {
    plans = 'Go to Beach, ';
    plans += windy ? 'Try Windsurfing' : 'Lie on Towel';
} else { // not rainy, not sunny (anything else goes)
    plans = 'Go to Park, ';
    plans += windy ? 'Fly a Kite' : 'Have a Picnic';
}

console.log("ternaries nested in if-else:\n", plans);

// adding a second condition to a ternary to make
// the ternary version of an if-else if-else:

// 8. Write an if-else if-else
let price = 20;
let tag = ""; 
// do if-else if-else that sets tag variable to "Luxury", "Regular" or Economy"
// based on these criteria:
//  "Luxury" if price is 500+
//  "Regular" if price if in 100-499 range
//  "Economy" if price is below 100
if(price >= 500) {
    tag = "Luxury";
} else if(price >= 100) {
    tag = "Regular";
} else {
    tag = "Economy";
}

console.log("if-else if-else price:\n", price, "tag:", tag);

// 9. Convert the above to a ternary; the syntax is:
//    return_value = first_condition 
//    ? value_if_first_condition_is_true 
//    : second_condition 
//    ? value_if_second_condition_is_true 
//    : value_if_both_conditions_are_false

// "Luxury" "Regular" "Economy"
price = 300;
tag = price >= 500 ? "Luxury" : price >= 100 ? "Regular" : "Economy";

console.log("ternary with 2 condtions: price:\n", price, "tag:", tag);


// && (AND), || (OR) operators

// Two or more conditions can be evaluated in an if statement:
// && (AND) operator requires both conditions to be true
// || (OR) operator requires either condition to be true


// && (AND) operator

// Let's try an if statement with &&, where both conditions must be true.

// 10. Declare a string, number and boolean:
weather = "sunny";
let degrees = 78;
let goToBeach;

// 11. Write an && statement that checks if the weather is "sunny" AND 
//     if the temperature is at least 70 degrees
//     if BOTH conditions are true, go to the beach:
if(weather == "sunny" && degrees >= 70) {
    goToBeach = true;
} else {
    goToBeach = false;
}

console.log('&& goToBeach:', goToBeach);

// 12. Write the ternary version: double condition goes in front of ?
goToBeach = weather == "sunny" && degrees >= 70 ? true : false;

console.log('ternary && goToBeach:', goToBeach);

// 13. Add an "else part"; it will run if EITHER or BOTH 
//     conditions are false:
// "sunny" 70
    // true;

    // false;

// Changing the values of weather and degrees, and 
// run until you get all four possible outcomes.

// The logic means that there is only one "true" scenario:
// the weather is sunny AND it is at least 70 degrees.
// BUT there are three "no beach" scenarios:
//   - It's NOT sunny AND its below 70 degrees.
//   - It's sunny, BUT it's below 70 degrees.
//   - It's 70-plus degrees, BUT it's not sunny.


// || (OR) operator

// Let's try an if statement with || (OR), where only one 
// condition must be true.
if(weather == "sunny" || degrees >= 40) {
    goToBeach = true;
} else {
    goToBeach = false;
}

console.log('|| goToBeach:', goToBeach);

// 12. Write the ternary version: double condition goes in front of ?
goToBeach = weather == "sunny" || degrees >= 70 ? true : false;

console.log('ternary && goToBeach:', goToBeach);

// 14. Declare a couple of numbers and an undefined that we will
//     set later to be a boolean:
let cashOnHand = 200;
let storeCredit = 20;
let buyStuff; // set later as boolean

// 14. Write an if statement with 2 condtions using || where:
//     we'll buy stuff if either our cash or credit is at least 100
//     only ONE of the two conditions needs to be true
if(cashOnHand >= 100 || storeCredit >= 100) {
    buyStuff = true;
} else {
    buyStuff = false;
}

console.log('|| buyStuff:', buyStuff); // buyStuff: true

// Change one of the numbers to be less than 100, and run it again.
// buyStuff still gets set to true, because only one of the two 
// conditions needs to be true.

// 15. Write the ternary version of the above:
buyStuff = cashOnHand >= 100 || storeCredit >= 100 ? true : false;
console.log('|| ternary buyStuff:'); // buy stuff: false

// Set both numbers to below 100, so that neither conditions is true. 
// Now, even for the || version, the else part runs.


// combining && and || in one if statement
cashOnHand = 200;
storeCredit = 240;
let car = true;
car = !car;
buyStuff; // set later as boolean

// 14. Write an if statement with 2 condtions using || where:
//     we'll buy stuff if either our cash or credit is at least 100; only ONE of the two conditions needs to be true
// the || needs to be bundled in its own parentheses
if((cashOnHand >= 100 || storeCredit >= 100) && car) {
    buyStuff = true;
} else {
    buyStuff = false;
}

console.log('|| car buyStuff:', buyStuff); // buyStuff: true

// Change one of the numbers to be less than 100, and run it again.
// buyStuff still gets set to true, because only one of the two 
// conditions needs to be true.

// 15. Write the ternary version of the above:
buyStuff = cashOnHand >= 100 || storeCredit >= 100 ? true : false;
console.log('|| ternary buyStuff:'); // buy stuff: false


// 20. Declare a few variables:
let meal = "dinner";
let potato = "mashed";
let orderSteak = false;

// 21. if the meal is dinner && AND the potato is baked, order steak:
// "dinner" "baked"
if(meal == "dinner" && potato == "baked") {
    orderSteak = true;
}

console.log("orderSteak:", orderSteak); // orderSteak: true

// 22. Write the ternary version of the above:
// "dinner" "baked"
orderSteak = meal == "dinner" && potato == "baked" ? true : false;

console.log("ternary orderSteak:", orderSteak); // ternary orderSteak: true

// 22. Change potato to mashed and run it again, as if-else and ternary:
//     We no longer order the steak, because only one condtion is true:
// "mashed"

// "dinner" "baked"


console.log('orderSteak if meal == "dinner" && potato == "baked":'); 
// orderSteak if meal == "dinner" && potato == "baked":: false

// To combine && and || in the same if statement, 
// use parentheses to group the logic.

// 23. Add an || part, if the meal is dinner 
//     AND the potato is either baked OR mashed.
//     so that we order steak 
//     The two potatos must be wrapped in aluminum foil (parentheses):

// "French fries"
potato = "French fries";
meal = "dinner";
// "dinner" "baked" "mashed"

if(meal == "dinner" && (potato == "baked" || potato == "mashed")) {
    orderSteak = true;
}

console.log('meal == "dinner" && (potato == "baked" || potato == "mashed"\n', orderSteak); 
// meal == "dinner" && (potato == "baked" || potato == "mashed": true

// Ternary version:
// "dinner" "baked" "mashed"
orderSteak = meal == "dinner" && (potato == "baked" || potato == "mashed") ? true : false;
console.log("ternary Order steak baked or mashed both ok:", orderSteak);

// 23. Change the potato to "French fries", making the OR condition false. 
//     Since both meal and potato must be true, we don't order the steak:
console.log("Order steak:"); // Order steak: false

// switch - case - break - default:
// an alternative to "if-else if--else if-else".
// switch-case-break only works for conditions w ==
// Given: two variables:
let symbol = "RMB";
let currency = "";

// Given: if-else if-else that sets currency based on moneySymbol:
//      "USD"
//     "US Dollar"
//     "JPY"
//     "Japanese Yen"
//     "GBP"
//     "British Pound"
//     "RMB"
//     "Chinese Renminbi"
//     "Unknown"

if(symbol == "USD") {
    currency = "US Dollar";
} else if(symbol == "JPY") {
    currency = "Japanese Yen";
} else if(symbol == "GBP") {
    currency = "British Pound";
} else if(symbol == "RMB") {
    currency = "Chinese Renminbi";
} else {
    currency = "Unknown";
}

console.log("symbol:", symbol, "curency:", currency);


// console.log(`${moneySymbol}; ${currency}`);

// How to convert an "if-else if-else" to a "switch-case-break":
// the variable from the if becomes the only value of the switch 
// (no comparison inside switch -- just the variable being checked)
// after the switch part comes {}
// inside the {} go various case(value) checks
// this is where a value is compared to the switch(variable)
// the switch(value) is compared to the case(value):
// after case(value): comes colon, below which goes what to do
// if switch symbol matches case value

symbol = "HKD";
currency = "";

switch(symbol) {
    case "USD":
        currency = "US Dollar";
        break;
    case "JPY":
        currency = "Japanese Yen";
        break;
    case "GBP":
        currency = "British Pound";
        break;
    case "RMB":
        currency = "Chinese Renminbi";
        break;
    default: // default serves as the "else part"
        currency = "Unknown";
}

console.log("switch-case-break symbol:", symbol, "curency:", currency);

// below, switch("GBP") is compared to case: "USD";
// if they don't match, the next case is considered:
// switch("GBP") is first compared to case: "USD";
// if the switch "GBP" matches the case "USD", set the currency 
// but since "GBP" does not equal "USD", go on to the next case
// if the switch "GBP" matches the case "JPY", set the currency 
// but since "GBP" does not equal "JPY", go on to the next case,
// and so it goes until a match is made. The last case matches.
// if no switch-case match exists, run the default line.
// default is like the else part at the end of an "if else" 

"GBP"

// sw
    "USD"
        "US Dollar"
        // br
    // ca
        // "Japanese Yen"
        // br
    // "GBP"
        // "British Pound"
        // br
    // de
        // "Unknown"

// console.log(`switch-case-break-default: ${moneySymbol}; ${currency}`);

// Change the moneySymbol and run it again. Try something with no match,
// such as HKD ("Hong Kong Dollar"). This gives us the default "Unknown"

// DONE: Lesson 02.03
// NEXT: Lab 02.03
// THEN: Lesson 02.04
