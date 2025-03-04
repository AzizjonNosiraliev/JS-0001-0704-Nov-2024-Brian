// Lesson 02.04 - PROG

// In this lesson:
// The Date Object
/*
- The Date Object is instantiated using the new keyword: new Date().
- The Date Object returns the full date-time from the user's computer.
- The return value is saved as an instance (variable) of the Date Object.
- The instance is an object with all the Date Object's methods and properties.
*/

// 1. Instantiate the Date Object, saving the returned object as dt:
const dt = new Date();

console.log('dt:', dt); // dt: Wed Nov 20 2024 15:40:44 GMT-0500 (Eastern Standard Time)

// Get the Hour, Minute and Second
// 2. Get the current hour, minute and second:
let hr = dt.getHours();
console.log('hr:', hr); // 0-23

let min = dt.getMinutes();
console.log('min:', min); // 0-59

let sec = dt.getSeconds();
console.log('sec:', sec); // 0-59

// 3. Concatentate the time in hour:minute:second formnat:
let timeIs = `${hr}:${min}:${sec}`;
console.log('Time is:', timeIs); // 11:8:4

// toLocaleTimeString() method provides a conventient way to
// get the time in hour:min:sec or hour:min format
// This also includes converstion to AM / PM:

// 4. Using toLocaleTimeString(), get the time in AM / PM format.
timeIs = dt.toLocaleTimeString('en-US');
console.log('AM PM time:', timeIs); // 3:44:21 PM

// 5. Get the AM / PM time in 'short' format (without seconds):
timeIs = dt.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
console.log('AM PM time, no sec:', timeIs); // 2:48 PM

// 6. Get the 'short' time in military format, where 3:20 PM is 15:20:
timeIs = dt.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit", hour12: true });
console.log('mil time, no sec:', timeIs); // mil time no seconds: 15:20


/*  Making a "Timely Greeting" based on the current hour.
    - if the hour is less than 12, say "Good morning!"
    - else if the hour is less than 18 (6:00pm), say "Good afternoon!"
    - else, say "Good Evening!"
*/

// 7. Declare greeting in the global scope as empty string.
let greeting = "Good ";
//    It will be concatenated onto by the "if else" logic.
// "Good "

// 8. Write the if-else logic to finish the greeting:
//    if the hour is less than 12 (noon): "Good Morning!":
//    else if the hour is less than 17 (5:00 PM): "Good Afternoon!":
//    if the hour is NOT less than 17: "Good Evening!
if(hr < 12) {
    greeting += "Morning!";
} else if(hr < 17) {
    greeting += "Afternoon!";
} else {
    greeting += "Evening!";
}
console.log('greeting:', greeting);

// ternary version:
greeting = "Good ";
greeting += hr<12 ? "Morning" : hr<17 ? "Afternoon" : "Evening";

console.log('ternary greeting:', greeting);

// 9. Concatenate the  "Timely Greeting", in AM/PM format:
let timelyGreeting = `${greeting} The time is now ${timeIs}.`;
// The time is: 
console.log('timelyGreeting:', timelyGreeting);

// Get the Date, Day, Month and Year

// 10. Get the month as a number from 0-11 (Jan is 0 and Dec is 11):
let mo = dt.getMonth(); // 0-11
console.log('month:');

// 11. Get the month as a string (January, February..). 
//     The month is available in both long and short forms:
let longMonth = dt.toLocaleString('default',{month:'long'});
// 'default' 'long'
console.log('longMonth:',longMonth); // November

let shortMonth = dt.toLocaleString('default',{month:'short'});
console.log('shortMonth:',shortMonth); // Nov

// 12. Get the date as a number from 1-31
let todaysDate = dt.getDate();
console.log('todaysDate:',todaysDate); // todaysDate: 20

// 13. Get the day of the week as a number, with Sunday being 0
let dayOfWeekNum = dt.getDay(); // 0-6
console.log('dayOfWeekNum:',dayOfWeekNum); // dayOfWeekNum: 3

// 14. Get day of week by its actual name, in long and short format:
let dayofWeekLongStr = dt.toLocaleDateString('en-US', {weekday:'long'});
console.log('dayofWeekLongStr:', dayofWeekLongStr); // Wednesday

let dayofWeekShortStr = dt.toLocaleDateString('en-US', {weekday:'short'});
console.log('dayofWeekShortStr:', dayofWeekShortStr); // Wed

// 15. Get the full, four-digit year:
let yr = dt.getFullYear();
console.log('yr:',yr); // 2024

// toLocaleDateString() for getting the full date
// toLocaleDateString takes an object of properties and
// returns the date in either word or numeric format

// 16. Get the full date in word format:
// 'en-US' 'long' 'numeric' 'long' 'numeric'
let fulDate = dt.toLocaleDateString('en-US', {
    weekday:'long', year:'numeric', month:'long', day:'numeric'});
console.log('fullDate:',fulDate); // Wednesday, November 8, 2023
// short version:
let fullDateShortWords = dt.toLocaleDateString('en-US', {
    weekday:'short', year:'numeric', month:'short', day:'numeric'});
console.log('fullDateShortWords:', fullDateShortWords); 

// 17. Get the full date in numeric format: pass in no arguments:
let fullDateNumeric = dt.toLocaleDateString();
console.log('fullDateNumeric:', fullDateNumeric); // 11/20/2024

// DONE: Lesson 02.04
// NEXT: Lab 02.04
// THEN: Lesson 03.0