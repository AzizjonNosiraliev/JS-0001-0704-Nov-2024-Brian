// Lesson 05.01 - PROG

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
// console.log(i); 
// ERROR: i is not defined
// console.log('let i after loop ends:', i);

// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `j` still exists after the loop is done:
for(var j = 0; j < 10; j++) {
    console.log('var j:', j);
}

console.log('var j outside loop:', j); // j outside loop: 10

// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.
for(let i = 0; i <= 10; i++) {
    console.log('let i:', i);
}

// 5. Write a loop with a counter that decrements (counts backwards) from 10 to 0
for(let i = 10; i >= 0; i--) {
    // console.log('let i:', i);
    // challenge, how can we log "Blast Off!" at the end?
    if(i > 0) {
        console.log('let i:', i);
    } else {
        console.log('Blast Off!');
    }
}

// 6. Change `i` to `j` and see that `j` ceases to exist once the loop ends:
// 'countdown j:'

// console.log('j outside loop:', j); // i outside loop: 10


// infinite loop: condition always true
// for(let j = 10; j > 0; j++) {
//     console.log('countdown j:', j);
// }

// 7. Write but then comment out and do not run these infinite loops. Just look at it and understand. Running it may freeze your browser--or your entire computer.

// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):
for(let i = 0; i <= 100; i+=5) {
    console.log('count to 100 by 5:', i);
}
// 0, 5, 10, 15 ... 90, 95, 100

// challenge: use for loop to produce the following output: 
// 1900, 1920, 1940, 1960, 1980, 2000, 2020
for(let i = 1900; i <= 2020; i+=20) {
    console.log(i);
}

// bonus challenge: use Date() to get current year, 
// which is a leap year, then use loop to log this and
// last 10 leap years (2024, 2020, 2016, 2012, 2008, etc.)
let dt = new Date();
let currentYear = dt.getFullYear();

for(let i = 0; i < 10; i++) {
    console.log(currentYear - 4 * i);
}

for(let i = currentYear; i > currentYear-40; i-=4) {
    console.log(i);
}

// `continue` keyword for skipping one loop iteration w/o exiting
// `break` keyword exits a loop

// 9. Starting with 1900, output each decade (1900, 1910, 1920, etc.) stopping at 2020, but skipping 1960:
for(let i = 1900; i <= 2020; i+=20) {
    if(i == 1960) continue;
    console.log(i);
}

// 9B. Starting with 1900, output each decade (1900, 1910, 1920, etc.) stopping at 2020, but break at 1960:
for(let i = 1900; i <= 2020; i+=20) {
    if(i == 1960) break;
    console.log(i);
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
console.log('fruits:', fruits.length, fruits); // 13
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape']

// review of splice() method

// 14. Starting with 'cherry', and assuming you don't know its index, replace 'cherry' along with the next two items with 'lemon' and 'pear':
fruits.splice(fruits.indexOf('cherry'),3,'lemon','pear');
console.log('fruits:', fruits.length, fruits); // 12
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'lemon', 'pear', 'orange', 'plum', 'apricot', 'papaya', 'grape']

// 15. Without removing any items, add 'raspberry' and 'mango' right before 'apricot', without assuming you know the index of 'apricot':
// "apricot", "raspberry", "mango"
fruits.splice(fruits.indexOf('apricot'),0,'raspberry','mango');
console.log('fruits:', fruits.length, fruits); // 14

// 16. Iterate the array with a for loop. Using the 
//     for(counter, condition, incrementer) style
//     for the condition, do not hard-code the length of the array
/*
- Each time through the loop, make a jellybean.
- Number the output from 1-14
// 1. grapefruit jellybean
// 2. watermelon jellybean
// 3. tangerine jellybean
-- ETC. --
// 14. grape jellybean
*/
for(let i = 0; i < fruits.length; i++) {
    console.log(`${i+1}. ${fruits[i]} jellybean`);
}

// 16B. Do the alternate (more modern ES6 syntax):
// you can reference the array directly in the loop:
// for(current_item of array) {
    // do stuff w current_item
// }
// this way is cleaner and more modern, but does not include index:
for(fru of fruits) {
    console.log(`${fru} jellybean`);
}

// grapefruit jellybean
// .. etc. ..
// tangerine jellybean, etc.

// 17. Push in three more fruits; then sort and output the array:
fruits.push('banana', 'pineapple', 'peach');
fruits.sort();
console.log('fruits:', fruits.length, fruits);
// ['apple', 'apricot', 'banana', 'blueberry'
// ..etc. .. 'plum', 'raspberry', 'tangerine', 'watermelon'] 17

// 18. Run the loop again:
for(fru of fruits) {
    console.log(`${fru} jellybean`)
}

// loops with conditional logic

// Loops that iterate arrays often include conditional logic to evaluate the individual items. Let's give this a try.

// Let's make jellybeans again, but this time only if the fruit has five or fewer characters. To check how many letters the fruit is, use the string.length property.

// LAB 05.01: Loops, Arrays and Conditional Logic

// 20. Log jellybeans, but only if the fruit is five letters or less:
// jellybeans: 'apple', 'grape', 'lemon', 'mango', 'peach', 'pear', 'plum'
// ' jellybean (5 char max)'
for(fru of fruits) {
    if(fru.length <= 5) {
        console.log(`${fru} jellybean`);
    }
}

// 21. Make different fruit treats, depending on the number of letters
// - if the fruit is 5 or fewer letters, make jellybeans
// - if the fruit has 6-8 letters, make popsicles: "orange popsicle"
// if the fruit is 9 or more letters, make lollipops: "tangerine lollipop"
// better to make a new array and then log that rather than
for(fru of fruits) {
    if(fru.length <= 5) {
        console.log(`${fru} jellybean`);
    } else if(fru.length <= 8) {
        console.log(`${fru} popsicle`);
    } else {
        console.log(`${fru} lollipop`);
    }
}

// 22. Do another loop with same conditions as 21 but instead of logging results, save the fruits treats to a new array
const treatsArr = [];
for(fru of fruits) {
    if(fru.length <= 5) {
        treatsArr.push(`${fru} jellybean`);
    } else if(fru.length <= 8) {
        treatsArr.push(`${fru} popsicle`);
    } else {
        treatsArr.push(`${fru} lollipop`);
    }
}
console.log(treatsArr);

// 23. Do yet another loop with same conditions as 21 and 22 BUT instead of making an array of fruit treats, make an array of objects, where each object has the following 3 properties:
// {name: "lemon", treat: "lemon jellybean", isCitrus: true
// {name: "apple", treat: "apple jellybean", isCitrus: false}
// How does it know if a fruit is a citrus or not?
const fruitsObjsArr = [];
const citrus = ['grapefruit', 'lemon', 'lime', 'orange', 'tangerine'];
for(fru of fruits) {
    const obj = {
        name: fru,
        isCitrus: false,
    };
    if(fru.length <= 5) {
        obj.treat = `${fru} jellybean`;
    } else if(fru.length <= 8) {
        obj.treat = `${fru} popsicle`;
    } else {
        obj.treat = `${fru} lollipop`;
    }
    if(citrus.includes(fru)) {
        obj.isCitrus = true
    }
    fruitsObjsArr.push(obj);
}
console.log(fruitsObjsArr);

// 24. BONUS: Add three more properties to fruitsObjsArr: qty, price, total
// where:
//   - qty equals the length of the NEXT fruit, cubed
//   - price equals the length of the PREV fruit, squared, divided by 10
//   - total equals qty * price (rounded to 2 digits, so like money)
//   - in the case of the first fruit, PREV refers to the last fruit
//   - in the case of the last fruit, NEXT refers to the first fruit
// examples: 
// {name: "lemon", treat: "lemon jellybean", isCitrus: true, qty: 125, price: 10, total: 1250 }
// {name: "apple", treat: "apple jellybean", isCitrus: false, qty: 343, price: 10, total: 3430 }}
// {name: "watermelon", treat: "watermelon lollipop", isCitrus: false, qty: 10000, price: 2.5, total: 25000 }}
const fruitsObjectsArr = [];
for(let i = 0; i < fruits.length; i++) {
    let fru = fruits[i];
    const obj = { name: fru };
    obj.isCitrus = citrus.includes(fru) ? true : false;
    // if(fru.length <= 5) 
    //     obj.treat = `${fru} jellybean`;
    // } else if(fru.length <= 8) {
    //     obj.treat = `${fru} popsicle`;
    // } else {
    //     obj.treat = `${fru} lollipop`;
    // }
    // triple-ternary version of the above:
    obj.treat = fru.length <= 5 ? `${fru} jellybean` : fru.length <= 8 ? `${fru} popsicle` : `${fru} lollipop`;
    
    if(i == 0) {
        obj.qty = fruits[i+1].length ** 3;
        obj.price = fruits[fruits.length-1].length ** 2 / 10;
    } else if(i == fruits.length-1) {
        obj.qty = fruits[0].length ** 3;
        obj.price = fruits[fruits.length-2].length ** 2 / 10;
    } else {
        obj.qty = fruits[i+1].length ** 3;
        obj.price = fruits[i+1].length ** 2 / 100;
    }
    obj.total = +((obj.qty * obj.price).toFixed(2));
    fruitsObjectsArr.push(obj);
}
console.log(fruitsObjectsArr);


// making arrays of objects with a loop
// It can be very useful to make arrays of objects on a loop. As objects, the resulting array items can have as many properties as you like:
// 25. Make a loop that goes through this array of full names, and makes objects consisting of three properites each: firstName, lastName, pin, the last being a random 4-digit PIN, with leading 0's, as needed.
// "LeBron James", "Micheal Jordan", "Larry Bird", "Julius Erving", "Wilt Chamberlain"
// const baske

// fo

    let names;
    let r;

   
        // "000"
    
    // el
        // "00"
    
    // el
        // "0"
    

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
// "Hank Aaron", "Ernie Banks", "Carl Yastrzemski", "Mickey Mantle", "Tony Oliva", "Babe Ruth", "Willie Mays", "Nolan Ryan"

// let ball

// fo

    // let names
    // let fName; //first name
  

// END: Lesson 05.01
// NEXT: Lab 05.01
// THEN: Lesson 05.02









