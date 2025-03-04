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
let dt = new Date();
console.log('dt:', dt); // dt: Wed Nov 08 2023 Wed Nov 08 2023 11:12:47

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
// 'en-US'
timeIs = dt.toLocaleTimeString('en-us');
console.log('AM PM time:', timeIs); // 2:48:04 PM

// 5. Get the AM / PM time in 'short' format (without seconds):
timeIs = dt.toLocaleTimeString('en-us', {timeStyle: 'short'});
console.log('AM PM time, no sec:', timeIs); // 2:48 PM

// 6. Get the military time, with and without seconds:
// gb for Great Britain which uses mil time not AM-PM
let milTime = dt.toLocaleTimeString('en-gb');
console.log('gb/mil time, w sec:', milTime); // mil time w sec: 15:20:08

let milTimeNoSec = dt.toLocaleTimeString('en-gb', {timeStyle:'short'});
console.log('gb/mil time, no sec:', milTimeNoSec); // mil time w/o sec: 15:20

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
//    else the hour is NOT less than 17: "Good Evening!

// hr = 21; // testing hour

let greeting = "Good ";

if(hr < 12) {
    greeting += "Morning";
} else if(hr < 17) {
    greeting += "Afternoon";
} else {
    greeting += "Evening";
}

console.log('greeting:', greeting);

// challenge: write the ternary version of the above if-else if-else:
greeting = "Good " + (hr < 12 ? "Morning" : hr < 17 ? "Afternoon" : "Evening");

console.log('ternary greeting:', greeting);

// 9. Concatenate the  "Timely Greeting", in AM/PM format:
// The time is: 
let timelyGreeting = `${greeting}! Time is: ${timeIs}`;
console.log('timelyGreeting:', timelyGreeting);

// Get the Date, Day, Month and Year

// 10. Get the month as a number from 0-11 (Jan is 0 and Dec is 11):
let month = dt.getMonth();
console.log('month:', month);

// 11. Get the month as a string (January, February..). 
//     The month is available in both long and short forms:
let longMonth = dt.toLocaleString('default', {month:'long'});
console.log('longMonth:', longMonth);

// 'default' 'short'
let shortMonth = dt.toLocaleString('default', {month:'short'});
console.log('shortMonth:', shortMonth);

// 12. Get the date as a number from 1-31
let todaysDate = dt.getDate();
console.log('todaysDate:', todaysDate); // todaysDate: 7 (1-31)

// 13. Get the day of the week as a number from 0-6, with Sunday being 0
let dayOfWeekNum = dt.getDay();
console.log('dayOfWeekNum:', dayOfWeekNum); // dayOfWeekNum: 3

// 14. Get day of week by its actual name, in long and short format:
// long day format (Wednesday)
let dayOfWeek = dt.toLocaleString('en-us', {weekday:'long'});
// 'en-US' 'long'
console.log('dayOfWeek:', dayOfWeek);
// short day format (Wed
dayOfWeek = dt.toLocaleString('en-us', {weekday:'short'});
console.log('dayOfWeek:', dayOfWeek);

// 15. Get the full, four-digit year:
let year = dt.getFullYear();
console.log('year:', year); // 2024

// toLocaleDateString() for getting the full date
// toLocaleDateString takes an object of properties and
// returns the date in either word or numeric format

// 16. Get the full date in word format:
// 'en-US' 'long' 'numeric' 'long' 'numeric'
let fullDate = dt.toLocaleDateString('en-US', {weekday:'long', year:'numeric', month:'long', day:'numeric'});
console.log('fullDate:', fullDate); // Wednesday, November 8, 2023

// DONE: Lesson 02.02
// NEXT: Lab 02.02
// THEN: Lesson 02.03

// ___________________________________________________________

/* 02.04 LAB

1. Continuing with the "timely greeting" if-else if-else, 
   refactor the logic so that:
    - if the time is 6:00 pm - 10:59 pm, greeting is "Good Evening"
    - if the time is 11:00 pm - 3:59 am, greeting is "Hey, Night Owl!"
    - if the time is 4:00 am - 11:59 am, greeting is "Good Morning!"
    - if the time is 12:00 noon - 5:59 pm, greeting is "Good Afternoon!"

    Do everything inside ONE if-else if-else:
    - concat the timely greeting 
    - output timely greeting to DOM
    - output Activities link href to DOM
    - output correct cup image to DOM

    Output the timely greeting (including time in AM-PM format) 
    to the tag on the web page with an id="greeting"

2. Make a "Activities" link for each greeting
    - Each activity should link to the provided URL 
    - The a-tag is already on the thml page
    
    - If the greeting is "Hey, Night Owl!", the link should say:
      "Night Owl Activities" and should link to:
      https://newyorksimply.com/nyc-things-to-do-in-new-york-city-at-night
    
    - If the greeting is "Good Morning!", the link should say:
      "Morning Activities" and should link to:
      https://nymag.com/guides/everything/early-morning-2014-1/

    - If the greeting is "Good Afternoon!", the link should say:
      "Afternoon Activities" and should link to:
      https://www.theinfatuation.com/new-york/guides/best-afternoon-tea-nyc

    - If the greeting is "Good Evening!", the link should say:
      "Evening Activities" and should link to:
      https://websterhall.com/shows/

3. Output the correct coffee cup to the img tag, already on pg

4. Output today's date to the "todays-date" tag on web page

Test the output by hard-coding hr values. 
Sample hr values and their expected output:
    - When hr = 0, greeting is "Good Evening!"
    - When hr = 3, greeting is "Hey, Night Owl!"
    - When hr = 5, greeting is "Good Morning!"
    - When hr = 15, greeting is "Good Afternoon!"
    - When hr = 23, greeting is "Hey, Night Owl!"

5. OPTIONAL SUPER-BONUS: Add a text input box for user to input    
   first name. Include first name in the timely greeting.
   Don't display timely greeting, cup or nuthin' until name 
   is inputted. So, you can make input box the main thing on the 
   page to start. When greeting appears, get rid of input box.
   HINT: You gotta write a function for this.. All the output
   (timely greeting, activities link, cup picture) only happen
   AFTER the user inputs their name. 
*/

// get the DOM elems: greeting, a tag, img tag, date tag
const greetingTag = document.getElementById('greeting');
const aTag = document.querySelector('a');
const cupImg = document.querySelector('img');
const todaysDateH2 = document.getElementById("todays-date");
todaysDateH2.textContent = fullDate;

// the hrefs for the activities:
let nightOwlURL = "https://newyorksimply.com/nyc-things-to-do-in-new-york-city-at-night";
let morningURL = "https://nymag.com/guides/everything/early-morning-2014-1/";
let afternoonURL = "https://www.theinfatuation.com/new-york/guides/best-afternoon-tea-nyc";
let eveningURL = "https://websterhall.com/shows/";

let timePeriod = "";

// hr = 3;

if(hr < 4) {
    greeting = "Hey, Night Owl!";
    aTag.href = nightOwlURL;
    timePeriod = "Night-Owl";
} else if(hr < 12) {
    greeting = "Good Morning!";
    aTag.href = morningURL;
    timePeriod = "Morning";
} else if(hr < 18) {
    greeting = "Good Afternoon!";
    aTag.href = afternoonURL;
    timePeriod = "Afternoon";
} else if(hr < 22) {
    greeting = "Good Evening!";
    aTag.href = eveningURL;
    timePeriod = "Evening";
} else { // hr is 23 (11:00-11:59pm)
    greeting = "Hey, Night Owl!";
    aTag.href = nightOwlURL;
    timePeriod = "Night-Owl";
}

// output greeting w timeIs to the greetingTag
greetingTag.textContent = `${greeting}! Time is: ${timeIs}`;

// output the cup:
if(timePeriod == "Night-Owl") {
    cupImg.src = `images/hey-night-owl-coffee-cup.jpg`;
} else {
    cupImg.src = `images/good-${timePeriod}-coffee-cup.jpg`;
}

// output the text of the Activities a-tag:
aTag.textContent = timePeriod + " Activities in NYC";

