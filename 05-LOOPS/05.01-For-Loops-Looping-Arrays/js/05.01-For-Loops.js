// Lesson 05.01 - START

// for loops

// 1. Write a for loop which:
/*
- has a counter: `let i = 0`
- goes increases by one each time: `i++`
    - `i--` decreases by 1
- repeats until `i < 10` is false
*/
// for(let i = 0; i<10; i++) {
//     console.log(i);
// }

// 2. Try to access `i` outside the loop. We get an error: "i is not defined":
// console.log(i); // ERROR: i is not defined

// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `i` still exists after the loop is done:
// for(var n = 0; n<10; n ++) {
//     console.log('n:', n);
// };

console.log('var n outside loop:'); // i outside loop: 11

// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.
// for(let i = 0; i<=10; i++) {
//     console.log('i:', i);
// }
// 5. Write a loop with a counter that decrements (counts backwards): d
// for(let i = 10; i>=0; i--) {
//     console.log('i:', i);
// }
// 6. Change `i` to `j` and see that `j` ceases to exist once the loop ends:
// 'countdown j:'

// console.log('j outside loop:', j); // i outside loop: 10


// infinite loop: condition always true
// for(let j = 10; j > 0; j++) {
//     console.log('countdown j:', j);
// }

// 7. Write but then comment out and do not run these infinite loops. Just look at it and understand. Running it may freeze your browser--or your entire computer.
// for(let i = 0; i <= 100; i +5) {
//     console.log(i);
// }
// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):
// 0, 5, 10, 15 ... 90, 95, 100
// 'count to 100 by 5:'

// challenge: use for loop to produce the following output: 1900, 1920, 1940, 1960, 1980, 2000, 2020
// for(let i = 1900; i <= 2020; i +20) {
//     console.log(i);
// }

// bonus challenge: use Date() to get current year, 
// which is a leap year, then use loop to log this and
// last 10 leap years (2020, 2016, 2012, 2008, etc.)


// `continue` keyword for skipping loop iteration

// 9. Starting with 1900, output each decade (1900, 1910, 1920, etc.) stopping at 2020, but skipping 1960:

    // skip to next iteration
    console.log('y:');

// 1900, 1920, 1940, 1980, 2000, 2020

// iterating (looping) arrays

// 10. Declare an array:
let fruits = ['apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum'];
// 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum'

// 11. Push a few items into the end of the array:
fruits.push('apricot', 'papaya', 'grape');
// 'apricot', 'papaya', 'grape'

// 12. Add a few items to the beginning of the array:
fruits.unshift('grapefruit', 'watermelon', 'tangerine');

// 13. Output the array and its length:
console.log('fruits:', fruits);
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 13

// review of splice() method
let indxOfCherry = fruits.indexOf("cherry");
fruits.splice(indxOfCherry, 3,'lemon','pear');
console.log('fruits:', fruits);

// 14. Starting with 'cherry', and assuming you don't know its index, replace 'cherry' along with the next two items with 'lemon' and 'pear':
// 'cherry', "lemon", "pear"

// 15. Without removing any items, add 'raspberry' and 'mango' right before 'apricot', without assuming to know the index of 'apricot':
// "apricot", "raspberry", "mango"

let indxOfApricot = fruits.indexOf("apricot");
fruits.splice(indxOfApricot, 0,"raspberry", "mango");
console.log('fruits:', fruits);

// 16. Iterate the array with a for loop.
/*
- Each time through the loop, make a jellybean.
- Number the output from 1-14
*/
for(let i = 0; i < fruits.length; i++) {
    console.log(i + " jellybean");
    console.log(fruits[i] + ' jellybean');
}
// ' jellybean'

/*
- Each time through the loop, make a jellybean.
- Number the output from 1-14
*/

// alternate (more modern ES6 syntax):
// you can reference the array directly in the loop:
// for(current_item of array) {
    // do stuff w current_item
// }
console.log('\nfor of loop:')

for(fru of fruits){
    console.log(fru + ' jellybean');
}
   

// grapefruit jellybean
// .. etc. ..
// tangerine jellybean, etc.

// 17. Push in three more fruits; then sort and output the array:
// 'banana', 'pineapple', 'peach'
fruits.push('banana', 'blueberry', 'peach');
fruits.sort();
// ['apple', 'apricot', 'banana', 'blueberry'
// ..etc. .. 'plum', 'raspberry', 'tangerine', 'watermelon'] 17

// loops with conditional logic

// Loops that iterate arrays often include conditional logic to evaluate the individual items. Let's give this a try.

// Let's make jellybeans again, but this time only if the fruit has five or fewer characters. To check how many letters the fruit is, use the string.length property.

// 20. Make jellybeans, but only if the fruit is five letters or less:
// jellybeans: 'apple', 'grape', 'lemon', 'mango', 'peach', 'pear', 'plum'
// ' jellybean (5 char max)'

/* Challenge: 
21. Make different fruit treats, depending on the number of letters
// - if the fruit is 5 or fewer letters, make jellybeans
// - if the fruit has 6-8 letters,
// make popsicles: "orange popsicle"
// if the fruit is 9 or more letters, make lollipops: "tangerine lollipop"
// log each time in loop
*/
let newArr = [];
for(fru of fruits) {
    if (fru.length <= 5 ) {
        newArr.push(fru + ' Jellybeans');
    } else if(fru.length <= 8 ) {
        newArr.push(fru + ' Popsicles');
    } else {
        newArr.push(fru + ' Lollipops');
    }
}
console.log("\nMake jellybeans, popsicles or lollipops:\n", newArr);

    // apple jellybean
    // apricot popsicle 
    // ... etc. ...
    // watermelon lollipop

// making a new array while looping

// The loop is not saving the treats anywhere; they're just being dumped out onto the console. 

// 22. Refactor the loop so that the treats are saved to a new array, which we declared before the above the loop:

console.log("\nSave jellybeans, popsices and lollipops to the treats array:\n");

// ['apple jellybean', 'apricot popsicle' .. etc. .. 'watermelon lollipop']

// 23. Push in three more berries, and then sort the array:
newArr.push('strawberry', 'blackberry', 'boysenberry');
newArr.sort();
// 'strawberry', 'blackberry', 'boysenberry'
// Make different fruit treats, depending on the number of letters
// - if the fruit is a berry, make 'jam'
// - else if the fruit starts with 'p' make 'popsicle'
// - else if the fruit is 5 or fewer letters, make 'jellybean'
// - else make lollipop: "tangerine lollipop"
// save results to new array called fruitTreats
const fruitTreats = [];
for(fru of fruits) {
    if(fru.includes('berry')) {
        fruitTreats.push(fru + " Jam");
    } else if(fru.startsWith('p')) {
        fruitTreats.push(fru + " popsicle");
    } else if(fru.length <= 5) {
        fruitTreats.push(fru + " jellybean");
    } else {
        fruitTreats.push(fru + " lollipop");
    }
}
//    if else if else if else
//       concatenate treat and push to fruitTreats
console.log('fruitTreats:', fruitTreats);


// making arrays of objects with a loop

// It can be very useful to make arrays of objects on a loop. As objects, the resulting array items can have as many properties as you like:
// 25. Make a loop that goes through this array of full names, and makes objects consisting of three properites each: firstName, lastName, pin, the last being a random 4-digit PIN, with leading 0's, as needed.
const bballStars = ["LeBron James", "Micheal Jordan", "Larry Bird", "Julius Erving", "Wilt Chamberlain"];

for(str of bballStars) {
    let obj = {
        firstName: str.split(" ")[0],
        lastName: str.split(" ")[1],
        pinNum: ~~(Math.random() * 10000)
    }
    console.log();
}

console.log();

/*
34. Given this array of names, make passwords consisting or:
the first name, backwards, all lowercase
+ a special character:
    "#" if the first name has 4 letters or less
    "&" if the first name has exactly 5 letters
    "%" if the first name has more than 5 letters
+ the first three letters of the last name
+ a piece of punctuation:
    an exclamation point ("!") if the first name and last name have the same number of letters
    a question mark ("?") if the first name is longer than the last name
    an colon (":") if the last name is longer than the first name
+ the number of letters in the full name
+ if the first and last name start with the same letter:
    add an equal sign "=" to the end
    otherwise, add an asterisk "*"
+ finally, if the last name starts with a vowel:
    add "V" for vowel
    otherwise add "C" for consonant--unless the last name starts with "Y", in which case, add "X"
Save the passwords to an array of objects that include the names, divided into first and last name
*/
const namesOfArr = ["Hank Aaron", "Ernie Banks", "Carl Yastrzemski", "Mickey Mantle", "Tony Oliva", "Babe Ruth", "Willie Mays", "Nolan Ryan"];

// let firstNames = [];
// let lastNames = [];

// for(nam of namesOfArr) {
//     firstNames.push(nam.split(" ")[0]);
//     lastNames.push(nam.split(" ")[1]);
//     let revercedArr = [];
//     for(bacwards of firstNames){
//         revercedArr.push(bacwards.split('').join(''));
//         console.log('reverced:',revercedArr);
//     }

//     if(firstNames);
// }

// console.log(firstNames);
// console.log(lastNames);




const basebalPswds = [];
// fo
for(player of namesOfArr) {
    console.log(player);
    const obj = {};

    const namesArr = player.split(" ");
    console.log(namesArr);

    let firstName = namesArr[0];
    let lastName = namesArr[1];
    console.log(obj);

    obj.firstName = firstName;
    obj.lastName = lastName;
    
    const fNameArr = firstName.split("");
    fNameArr.reverse();
    let fNameRev = fNameArr.join("");
    fNameRev = fNameRev.toLowerCase();

    let pswd = fNameRev;

    if(firstName.length <= 4) {
        pswd += '#';
    } else if(firstName.length == 5) {
        pswd += '&';
    } else {
        pswd += '%';
    };
    pswd += lastName.slice(0,3);

    if(firstName.length == lastName.length) {
        pswd += '!';
    } else if(firstName.length > lastName.length) {
        pswd += '?';
    } else {
        pswd += ':';
    };

    pswd += (firstName.length + lastName.length);

    if(firstName[0] == lastName[0]) {
        pswd += '=';
    } else {
        pswd += '*';
    }

    const VOWELS = 'AEIOU';
    if(lastName.startsWith('Y')) {
        pswd +='X';
    } else if(VOWELS.includes(lastName[0])) {
        pswd += 'V';
    } else {
        pswd += 'C';
    }

    obj.password = pswd;

    basebalPswds.push(obj);
}
 console.log(basebalPswds);








