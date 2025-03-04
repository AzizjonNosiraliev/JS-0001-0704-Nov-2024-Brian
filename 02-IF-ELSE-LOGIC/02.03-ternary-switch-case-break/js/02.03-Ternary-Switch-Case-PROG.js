/* Lesson 02.03 - START

In this lesson:
- ternary expression: concise alternative to if-else
- &&  ||  operators for evaluating multiple conditions 
- switch - case - break: alternative to if-else if-else

// ternary expression

// A ternary is a concise alternative to an "if else" statement. 
// That which takes an "if else" 5 lines, a ternary does in one.
*/

// 1. Declare three number variables:
let x = 15, y = 8, z = 0;

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
B. add:     ? right after the "if condition"
            : in front of the "else part"
C. roll everything up onto one line
*/
x < y ? z = x + y : z = x * y;

/*
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


console.log("z ternary:", z);

// 7. To make it even more concise, instead of having "z =" twice, 
//    put "z =" at the beginning to capture the return value:
x = 5;
z = x<y ? x+y : x*y;
console.log("z = ternary:", z); // 13

// adding a second condition to a ternary to make
// the ternary version of an if-else if-else:

// 8. Write an if-else if-else
let price = 1000;
let brand = "";
price = 59;

if(price >= 1000) {
    brand = "Luxury";
} else if(price >= 100) {
    brand = "Regular";
} else {
    brand = "Economy";
}

console.log(`Price of ${brand} item: $${price}.`);

// 9. Convert the above to a ternary; the syntax is:
//    value = first_condition 
//          ? value_if_true 
//          : secondt_condition 
//          ? value_if_true 
//          : value_if_false
price = 235;
brand = price>=1000 ? "Luxury" : price>=100 ? "Regular" : "Economy";
// "Luxury" "Regular" "Economy"

console.log("ternary with 2 condtions: price:", price, "brand:", brand);


// && (AND), || (OR) operators

// Two or more conditions can be evaluated in an if statement:
// && (AND) operator requires both conditions to be true
// || (OR) operator requires either condition to be true


// && (AND) operator

// Let's try an if statement with &&, where both conditions must be true.

// 10. Declare a string, number and boolean:
let weather = "sunny";
let degrees = 75; // Fahr
let windy = false;

// 11. Write an && statement that checks if the weather is "sunny" AND 
//     if the temperature is at least 70 degrees
//     if BOTH conditions are true, go to the beach:
if(weather=="sunny" && degrees>=70) {
    console.log('Go to the beach!');
} else if(weather=="rainy") {
    console.log('Go to the musuem!');
} else {
    console.log('Go to the park!');
}

if(weather=="sunny" && degrees>=70) {
    console.log('Go to the beach!');
} else if(weather=="rainy" || windy) {
    console.log('Go to the musuem!');
} else {
    console.log('Go to the park!');
}

// 12. Write the ternary version by putting the double condition 
//     between after the = and before the ? :
//     rather than just logging text, save to variable and then log that at the very end; this approach is more adaptable to a ternary
let activity = "";
if(weather=="sunny" && degrees>=70) {
    activity = 'Go to the beach!';
} else if(weather=="rainy") {
    activity = 'Go to the musuem!';
} else {
    activity = 'Go to the park!';
}

console.log('activity:', activity);

// ternary version of the above:
// degrees = 62;
// windy = !windy;
// weather = "rainy";
activity = weather=="sunny" && degrees>=70 ? 'beach' : weather=="rainy" ? 'musuem' : 'park';
console.log(`ternary: Let's go to the ${activity}.`);

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

// 14. Declare a couple of numbers and an undefined that we will
//     set later to be a boolean:
let cashOnHand = 50;
let storeCredit = 200;
let buyStuff; // boolean

// 14. Write an if statement where we'll buy stuff if either our
//     cash or credit is at least 100:
if(cashOnHand>=100 || storeCredit>=100) {
    buyStuff = true;
} else {
    buyStuff = false;
}

console.log('|| buyStuff:', buyStuff); // buy stuff: true


// Change one of the numbers to be less than 100, and run it again.
// buyStuff still gets set to true, because only one of the two 
// conditions needs to be true.

// 15. Write the ternary version of the above:
// buyStuff
// CHALLENGE: write the ternary version of the above:
storeCredit = 40;
buyStuff = (cashOnHand>=100 || storeCredit>=100) ? true : false;
console.log('ternary || buyStuff:', buyStuff); 

// Set both numbers to below 100, so that neither conditions is true. 
// Now, even for the || version, the else part runs.

// combining && and || in one if statement

// 20. Declare a few variables:
let meal = "dinner";
let potato = "baked";
let orderSteak; // boolean


// 21. if the meal is dinner AND (&&) the potato is baked, order steak:
// "dinner" "baked"
if(meal=="dinner" && potato=="baked") {
    orderSteak = true;
} else {
    orderSteak = false;
}

console.log("orderSteak:", orderSteak); // orderSteak: true

// 22. Write the ternary version of the above:
// "dinner" "baked"
orderSteak = (meal=="dinner" && potato=="baked") ? true : false;

console.log("ternary orderSteak:", orderSteak); // ternary orderSteak: true

// 22. Change potato to mashed and run it again, as if-else and ternary:
//     We no longer order the steak, because only one condtion is true:
potato = "mashed";
orderSteak = (meal=="dinner" && potato=="baked") ? true : false;
console.log("ternary orderSteak:", orderSteak); 

// To combine && and || in the same if statement, 
// use parentheses to group the logic.

// 23. Add an || part, so that we order steak if the meal is dinner 
//     AND the potato is baked OR mashed. The two potatos must be 
//     wrapped in parenthese:
potato = "French fries";
orderSteak = meal=="dinner" && (potato=="baked" || potato=="mashed") ? true : false;
console.log("ternary orderSteak:", orderSteak); 

// in an && or ||, if same var is being evaluated twice, you can just put the var once:
orderSteak = meal=="dinner" && (potato=="baked" || potato=="mashed") ? true : false;
console.log("ternary orderSteak:", orderSteak); 

// CHALLENGE: 
// A. be flexible with the meal: also order steak for lunch
// B. add a condition where you only order steak if price is less than 50
// C. change the new condition such that you order steak if price is less 
//    than 50 or you have a groupon
// HINT: you need to declare 2 new variables: price (number) and hasGroupon (boolean)
meal = "lunch";
potato = "baked";

// declare the 2 new variables:
let steakPrice = 65;
let hasGroupon = true;

orderSteak = (meal=="dinner" || meal=="lunch") && 
             (potato=="baked" || potato=="mashed") &&
             (steakPrice<50 || hasGroupon) ? true : false;

console.log("price-groupon ternary orderSteak:", orderSteak); 

// switch - case - break - default:
// an alternative to "if-else if-else".

// Given: two variables:
let abbr = "GBP";
let currency = "";

// Write an if-else if-else that sets currency based on abbr:
if(abbr=="USD") {
    currency = "US Dollar";
} else if(abbr=="JPY") {
    currency = "Japanese Yen";
} else if(abbr=="GBP") {
    currency = "British Pound";
} else {
    currency = "Unknown";
}
console.log('currency:', currency, "abbr:", abbr);

// then convert to ternary
currency = abbr=="USD" ? "US Dollar" : abbr=="JPY" ? "Japanese Yen" : abbr=="GBP" ? "British Pound" : "Unknown";

console.log('ternary currency:', currency, "abbr:", abbr);

// How to convert an "if-else if-else" to a "switch-case-break":
// the switch(value) is compared to the case(value):
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

// inside switch(var_name) method pass the variable to be checked (this variable is not the one to be set, which is currency)
switch(abbr) {
    case "USD": // if statement
        // if abbr=="USD" is true:
        currency = "US Dollar";
        break; // exit the switch block
    case "GBP":
        currency = "British Pound";
        break;
    case "JPY":
        currency = "Japanese Yen";
        break;
    default:
        currency = "Unknown";
}
    // "GBP"

// sw
    // "USD"
    //     "US Dollar"
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
