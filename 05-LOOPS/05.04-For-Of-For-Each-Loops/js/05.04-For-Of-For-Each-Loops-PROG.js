// Lesson 05.04 - START

// for loop vs. "for of" loop:

let carMsg = "Is the Chevrolet Corvette a good sportscar?\nGood? Heck, it's GREAT!";
console.log(carMsg);

/*
challenge: count up all the capital letters 
(there are 10: I, C, C, G, H, G, R, E, A, T)
algo logic: loop the the string, char by char
compare the letter to the lowercase version of itself
if the lowercase version does NOT equal the original, 
then the original letter is uppercase
*/

// loop the string, char by char:
let UCs = ""; 
// strip out punctuation and spaces
carMsg = carMsg.replace(/[^\w]/g, "");
console.log("carMsg:", carMsg);

for(char of carMsg) {
    // check if char.toUpperCase() changes the char:
    if(char.toUpperCase() == char) {
        UCs += char; // concat another uppercase char
    }
}

console.log('UC:', UCs, "num chars:", UCs.length); // ICCGHGREAT 10

/*
array.forEach(callback)
forEach(item, func) method runs a "callback" function on each item in array,
with the current array item being the input of the function:
first, make an array from the string, since forEach can only be called on arrays
array needs to be of individual letters
may as well get rid of the spaces first, otherwise they will go into array:
*/

// write a loop that iterates in an array of first names and passes each item to a function:
const firstNames = ['Amy', 'Bob', 'Cal', 'Dan', 'Eva', 'Fay', 'Guo'];

for(fname of firstNames) {
    greetByName(fname);
}

function greetByName(firstName) {
    console.log(`Hi, ${firstName}!`);
}

// array.forEach(function(e) {
//  console.log(`Hi, ${e}`)
// });

firstNames.forEach(function(fName) {
    console.log(`Howdy, ${fName}!`)
});


// cities: refactored using forEach
const cities = ['NY', 'MIA', 'LA', 'CHI', 'ABQ', 'MPLS', 'CINC', 'DET'];

// for loop vs. forEach()
for(cit of cities) {
    console.log("City Abbr: " + cit);
}

cities.forEach(function(cit) {
    console.log("City Abbr: " + cit);
});

// nested loop vs nested forEach
for(cit of cities) {
    for(cit2 of cities) {
        if(cit != cit2) {
            console.log(`for of: ${cit}-${cit2}`);
        }
    }
}

cities.forEach(function(cit) {
    cities.forEach(function(cit2) {
        console.log(`forEach: ${cit}-${cit2}`);
    });
});

/*
Limitation of forEach 🚫

1. break in forEach
A key limitation of forEach is the inability to stop or break the loop using traditional control statements like break or continue. If you try to use break inside a forEach, you'll encounter a syntax error because break is not applicable within a callback function.

Attempting to Break forEach

Typically, a break statement is used to exit a loop prematurely when a certain condition is met.
*/

// END: Lesson 05.04
// NEXT: Lesson 05.05
