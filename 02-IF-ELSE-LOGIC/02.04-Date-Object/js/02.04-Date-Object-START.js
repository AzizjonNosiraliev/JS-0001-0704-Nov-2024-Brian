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

console.log('dt:'); // dt: Wed Nov 08 2023 Wed Nov 08 2023 11:12:47

// Get the Hour, Minute and Second
// 2. Get the current hour, minute and second:

console.log('hr:'); // 0-23


console.log('min:'); // 0-59


console.log('sec:'); // 0-59

// 3. Concatentate the time in hour:minute:second formnat:

console.log('Time is:'); // 11:8:4

// toLocaleTimeString() method provides a conventient way to
// get the time in hour:min:sec or hour:min format
// This also includes converstion to AM / PM:

// 4. Using toLocaleTimeString(), get the time in AM / PM format.
// 'en-US'
console.log('AM PM time:'); // 2:48:04 PM

// 5. Get the AM / PM time in 'short' format (without seconds):
// 'short'
console.log('AM PM time, no sec:'); // 2:48 PM

// 6. Get the 'short' time in military format, where 3:20 PM is 15:20:
// false
console.log('mil time, no sec:'); // mil_time no seconds: 15:20

/*  Making a "Timely Greeting" based on the current hour.
    - if the hour is less than 12, say "Good morning!"
    - else if the hour is less than 18 (6:00pm), say "Good afternoon!"
    - else, say "Good Evening!"
*/

// 7. Declare greeting in the global scope as "Good ".
//    It will be concatenated onto by the "if else" logic.
// "Good "

// 8. Write the if-else logic to finish the greeting:
//    if the hour is less than 12 (noon): "Good Morning!":
//    else if the hour is less than 17 (5:00 PM): "Good Afternoon!":
//    if the hour is NOT less than 17: "Good Evening!

// "Mor
// "Aft
// "Eve

console.log('greeting:');

// 9. Concatenate the  "Timely Greeting", in AM/PM format:
// The time is: 

// Get the Date, Day, Month and Year

// 10. Get the month as a number from 0-11 (Jan is 0 and Dec is 11):
// mo
console.log('month:');

// 11. Get the month as a string (January, February..). 
//     The month is available in both long and short forms:
// 'default' 'long'
console.log('longMonth:');

// 'default' 'short'
console.log('shortMonth:');

// 12. Get the date as a number from 1-31
// tod
console.log('todaysDate:'); // todaysDate: 7

// 13. Get the day of the week as a number, with Sunday being 0
// dayOf
console.log('dayOfWeekNum:'); // dayOfWeekNum: 3

// 14. Get day of week by its actual name, in long and short format:
// 'en-US' 'long'
console.log('dayOfWeek:');
// 'en-US' 'short'
console.log('dayOfWeek:');

// 15. Get the full, four-digit year:
// yr
console.log('year:'); // 2024

// toLocaleDateString() for getting the full date
// toLocaleDateString takes an object of properties and
// returns the date in either word or numeric format

// 16. Get the full date in word format:
// 'en-US' 'long' 'numeric' 'long' 'numeric'
console.log('fullDate:'); // Wednesday, November 8, 2023

// 17. Get the full date in numeric format:
// 'long' 'numeric' 'long' 'numeric'
console.log('fullDate:'); // Wednesday, November 8, 2023

// DONE: Lesson 02.02
// NEXT: Lab 02.02
// THEN: Lesson 02.03