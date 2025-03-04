// Lesson 05.01 - FINAL

// for loops

// 1. Write a for loop which:
/*
- has a counter: `let i = 0`
- goes increases by one each time: `i++`
    - `i--` decreases by 1
- repeats until `i < 10` is false
*/
for(let i = 0; i < 10; i++) {
    console.log('let i:', i);
}

// 2. Try to access `i` outside the loop. We get an error: "i is not defined":
// console.log(i); // ERROR: i is not defined

// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `i` still exists after the loop is done:
for(var i = 0; i < 10; i++) {
    console.log('var i:', i);
}

console.log('var i outside loop:', i); // i outside loop: 11

// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.

// 5. Write a loop with a counter that decrements (counts backwards): d

// 6. Change `i` to `j` and see that `j` ceases to exist once the loop ends:
for(let j = 10; j > 0; j--) {
    console.log('countdown j:', j);
}

// console.log('j outside loop:', j); // i outside loop: 10


// infinite loop: condition always true
// for(let j = 10; j > 0; j++) {
//     console.log('countdown j:', j);
// }

// 7. Write but then comment out and do not run these infinite loops. Just look at it and understand. Running it may freeze your browser--or your entire computer.

// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):
// 0, 5, 10, 15 ... 90, 95, 100
for(let j = 0; j <= 100; j+=5) {
    console.log('count to 100 by 5:', j);
}

// challenge: use for loop to produce the following output: 1900, 1920, 1940, 1960, 1980, 2000, 2020
for(let i = 1900; i <= 2020; i += 20) {
    console.log(i);
}

// bonus challenge: use Date() to get current year, 
// which is a leap year, then use loop to log this and
// last 10 leap years (2020, 2016, 2012, 2008, etc.)
const dt = new Date();
const year = dt.getFullYear();
console.log('year: ', year);
for (let yr = year; yr >= 1990; yr-=4){
    console.log('year: ', yr);
}

// `continue` keyword for skipping loop iteration

// 9. Starting with 1900, output each decade (1900, 1910, 1920, etc.) stopping at 2020, but skipping 1960:
for(let y = 1900; y <= 2020; y += 20) {
    if(y == 1960) {
        continue; // skip to next iteration
    }
    console.log('y:', y);
}
// 1900, 1920, 1940, 1980, 2000, 2020

// iterating (looping) arrays

// 10. Declare an array:
const fruits = ['apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum'];

// 11. Push a few items into the end of the array:
fruits.push('apricot', 'papaya', 'grape');

// 12. Add a few items to the beginning of the array:
fruits.unshift('grapefruit', 'watermelon', 'tangerine');

// 13. Output the array and its length:
console.log('fruits:', fruits);
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 13

// review of splice() method

// 14. Starting with 'cherry', and assuming you don't know its index, replace 'cherry' along with the next two items with 'lemon' and 'pear':
fruits.splice(fruits.indexOf('cherry'), 3, "lemon", "pear");

// 15. Without removing any items, add 'raspberry' and 'mango' right before 'apricot', without assuming to know the index of 'apricot':
fruits.splice(fruits.indexOf("apricot"), 0, "raspberry", "mango");

console.log('fruits:', fruits);

// 16. Iterate the array with a for loop.
/*
- Each time through the loop, make a jellybean.
- Number the output from 1-14
*/
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i] + ' jellybean');
}
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
for(fru of fruits) {
    console.log(fru + ' jellybean');
}

// grapefruit jellybean
// .. etc. ..
// tangerine jellybean, etc.

// 17. Push in three more fruits; then sort and output the array:
// 'banana', 'pineapple', 'peach'

// ['apple', 'apricot', 'banana', 'blueberry'
// ..etc. .. 'plum', 'raspberry', 'tangerine', 'watermelon'] 17

// 18. Run the loop again:
    // apple jellybean
    // ... etc. ...
    // plum jellybean

// The last three fruits ('raspberry', 'tangerine', 'watermelon') weren't outputted, because we are running the loop only 14 times for 17 array items. 

// array.length for loop condition

// To make a loop dynamically respond to changes in the size of the array, don't hard-code the number of iterations. Use array.length, instead.

// 19. Change the loop condition so that it will always run as many times as there are items in the array. Dispense with the bean variable and the item numbering, and just log the jellybean directly:
    /* apple jellybean
    ... etc. ...
    watermelon jellybean */

// Now, we get all 17 jellybeans.

// loops with conditional logic

// Loops that iterate arrays often include conditional logic to evaluate the individual items. Let's give this a try.

// Let's make jellybeans again, but this time only if the fruit has five or fewer characters. To check how many letters the fruit is, use the string.length property.

// 20. Make jellybeans, but only if the fruit is five letters or less:
// jellybeans: 'apple', 'grape', 'lemon', 'mango', 'peach', 'pear', 'plum'
for(fru of fruits) {
    if(fru.length <= 5) {
        console.log(fru + ' jellybean (5 char max)');
    }
}

/* Challenge: 
21. Make different fruit treats, depending on the number of letters
// - if the fruit is 5 or fewer letters, make jellybeans
// - if the fruit has 6-8 letters,
// make popsicles: "orange popsicle"
// if the fruit is 9 or more letters, make lollipops: "tangerine lollipop"
// better to make a new array and then log that rather than
// log each time in loop
*/
console.log("\nMake jellybeans, popsicles or lollipops:\n");

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
// 'strawberry', 'blackberry', 'boysenberry'

/* Challenge ALL THE WAY TO THE END:
21. Make different fruit treats, depending on the number of letters
// - if the fruit is 5 or fewer letters, make jellybeans
// - if the fruit has 6-8 letters,
// make popsicles: "orange popsicle"
// if the fruit is 9 or more letters, make lollipops: "tangerine lollipop"
*/
let froots = ['kiwi', 'grapefruit', 'apple', 'grape', "avacado", "tomato", 'lemon', 'mango', 'peach', 'pear', 'plum', 'raspberry', 'tangerine', 'watermelon', 'blueberry'];
froots.push('strawberry', 'blackberry', 'boysenberry');
froots.sort();

const treats = [];
// let r = ~~(Math.random * fruits.length);
for (fru of froots) {
    // for (let i = 0; i < fruits.length; i++){
    // if (fruits[i].lenght <= 5)
    if (fru.includes("berry")) {
        treats.push(fru+" jam");
    }
    else if (fru.length <= 5) {
        treats.push(fru+" jellybeans");
    }
    else if (fru.length <= 8) {
        treats.push(fru+" popsicle");
    }
    else {
        treats.push(fru+" lolipop");
    }
}
console.log(treats);
// making arrays of objects with a loop
// It can be very useful to make arrays of objects on a loop. As objects, the resulting array items can have as many properties as you like:
// 25. Make a loop that goes through this array of full names, and makes objects consisting of three properites each: firstName, lastName, pin, the last being a random 4-digit PIN, with leading 0's, as needed.
const basketballStarsArr = ["LeBron James", "Micheal Jordan", "Larry Bird", "Julius Erving", "Wilt Chamberlain"];
const basketballStarObjects = [];

for (player of basketballStarsArr) {

    let names = player.split(" ");
    let r = ~~(Math.random() * 10000);

    if (r < 10) {
        r = "000"+r;
    }
    else if (r < 100) {
        r = "00"+r;
    }
    else if (r < 1000){
        r = "0"+r;
    }

    let basketballStar = {
        firstName: names[0],
        lastName: names[1],
        pin : r+""
    }

    basketballStarObjects.push(basketballStar);
}
console.log(basketballStarObjects);
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
const ballplayersArr = ["Hank Aaron", "Ernie Banks", "Carl Yastrzemski", "Mickey Mantle", "Tony Oliva", "Babe Ruth", "Willie Mays", "Nolan Ryan"];

let ballplayerObjects = [];

for (guy of ballplayersArr) {

    let names = guy.split(" ");
    let fName = names[0]; //first name
    let lName = names[1];
    let pass = fName.split("").reverse().join("").toLowerCase();

    if (fName.length <= 4) {
        pass += "#";
    }
    else if (fName.length == 5) {
        pass += "&";
    }
    else {
        pass += "%";
    }

    pass += lName.slice(0, 3);

    if (fName.length == lName.length) {
        pass += "!";
    }
    else if (fName.length > lName.length) {
        pass += "?";
    }
    else {
        pass += ":";
    }

    pass += (fName.length + lName.length);
    pass += fName[0] == lName[0] ? "=" : "*";

    let vowels = "aeiou";

    if (vowels.includes(lName[0].toLowerCase()))
    {
        pass += "V";
    }
    else if (lName[0] == "Y"){
        pass += "X";
    }
    else {
        pass += "C";
    }

    const playerObject = {
        first: fName,
        last: lName,
        password: pass
    }

    ballplayerObjects.push(playerObject);

}

console.log(ballplayerObjects);


// END: Lesson 05.01
// NEXT: Lab 05.01
// THEN: Lesson 05.02





