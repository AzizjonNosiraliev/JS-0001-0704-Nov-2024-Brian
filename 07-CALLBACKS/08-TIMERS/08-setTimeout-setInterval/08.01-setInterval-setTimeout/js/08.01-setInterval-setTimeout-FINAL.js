// Lesson 08.01 - START

/*
- The setTimeout() method takes two arguments:
  - an inline, anonymous callback function
  - a delay in milliseconds before the function runs
- As a global **window** method, it can optionally be invoked as **window.setTimeout()**
*/

// 1. Call the setTimeout() method:
// setTimeout();

// 2. Pass in the first argument: the anonymous, inline callback function:
// setTimeout(function() {

// });

// 3. Write some code for the function. We'll just console.log a greeting:
// setTimeout(function() {
//   console.log('Hello World!');
// });

// 4. Pass in the second argument: 
// a five-second delay (5000 ms) before the function runs:
setTimeout(function() {
  console.log('Hello World!');
}, 5000);

// 5. Refresh the browser. The greeting should appear after five seconds.

// 6. Run another setTimeout, but with the more concise arrow function syntax. 
// Increase the delay, and change the message:
setTimeout(() => console.log('Hello World from =>'), 7500);

// 7. The callback can also call a function. Write a function, 
// and then call it from inside the setTimeout callback. 
// Again, increase the delay and change the message:
function greetWorld() {
  console.log('Hello from greetWorld() function!')
}
setTimeout(() => greetWorld(), 10000);

// 8. Write another function to call from the setTimeout callback, 
// only this time give the function a parameter:
function greetUser(user) {
  console.log(`Greetings, ${user}!`);
}

setTimeout(() => greetUser('Brian'), 12500);

// 9. Try a set timeout with output to the web page. 
// Get the h2 tag: <h2 id="output">output</h2>
const h2 = document.querySelector('h2');

// 10. On a 15-second delay, output a random integer from 1-100:
// setTimeout(() => h2.textContent = Math.ceil(Math.random() * 100), 15000);

// setInterval(function()): calling a function repeatedly on a timer
// The setInterval() method executes a callback function repeatedly on a time delay.
/*
- the **setInterval()** method takes two arguments:
  - an inline, anonymous callback function
  - a delay in milliseconds between function calls
- as a global window method, it can optionally be invoked as window.setInterval()
- the setInterval() runs repeatedly
- to stop the setInterval() use clearInterval()
*/

// 11. Call the setInterval() method, and pass it its callback function:
// setInterval(function() {
  
// })

// 12. Have the callback output a random integer from 1-100 
// every 3 seconds:
// setInterval(function() {
//   h2.textContent += Math.ceil(Math.random() * 100) + " ";
// }, 1500);
// setInterval(() => h2.textContent += Math.ceil(Math.random() * 100) + " ", 500);

// 13. Above the **setInterval()**, declare a counter variable, i:
// let i = 0;
// 14. Inside the callback, increment the counter with **i++**:
// setInterval(() => {
//   let r = Math.ceil(Math.random() * 100)
//   if(i < 10) {
//     h2.textContent +=  r + " ";
//   }
//   i++;
//   console.log(i, r);
// }, 500);

// 15. Wrap the output line in an if-statement that only runs 
// if i is less than or equal to 10:

// The if-statement will stop the output, but not the callback, 
// which will keep running and incrementing the counter. To stop the 
// callback function, we need to call the clearInterval() method.

// 16. Set the **setInterval()** method equal to a variable:  
let i = 0;
let myInterval = setInterval(() => {
  h2.textContent += Math.ceil(Math.random() * 100) + " ";
  i++;
  if(i == 10) { // when i gets to 10, clear (stop) the interval
    clearInterval(myInterval);
    setTimeout(() => h2.innerHTML += "<br>-- Th-th-th-that's all, Folks!", 1000);
  }
}, 500);

// 17. Add an else part that calls myInterval(), passing it the intrvl object:

// setInverval() for choosing items from an array at random on a timer

// In this next example, we start with an array of 13 animals. 
// The setInterva() callback function will run 13 times, 
// choosing an animal at random from the array each time

const animals = ['aardvark', 'bunny', 'cheetah', 'deer', 'elephant', 'frog', 
'giraffe', 'hippo', 'iguana', 'jaguar', 'kangaroo', 'lion', 'moose'];

const animalsH2 = document.getElementById('animals');
// CHALLENGE: using setInteval, output each animal one by one at random 
// accumulate the output, one animal per line, so we can see all to know all are out
// until all have been outputted, do not repeat any animals,
// clear the interval when done and do the Th-th-that's all, Folks, message!
// HINT: we learned an array.sort(callback) for randomizing array items

animals.sort(() => Math.random() - 0.5); // result is 50% neg, 50% pos
console.log('randomized animals:', animals);

let animalInterval = setInterval(() => {
  animalsH2.innerHTML += animals.pop() + " ";
  // if animals array is empty, everything has been popped, so stop:
  if(!animals.length) {
    clearInterval(animalInterval);
    setTimeout(() => animalsH2.innerHTML += "<br>Th-th-that's all, Folks!", 1000);
  }
}, 1000);

// 18. Set up the **setInterval()** method with a callback that runs 
// every 2 seconds:

// 19. Generate a random integer from 0-12, which is in the range 
// of the 13-item **animals** array:

// 20. Get the other h2, the one with id of **animals**:

// 21. Output the animal whose index is the random number:  

// 22. Specify a timer delay of 2 seconds, and check the browser:  

// 23. It should work, but the interval has no way of stopping yet. 
// Set the method equal to a variable:  

// 24. Add a counter and increment it inside the callback function:  

// 25. Add an if-else-statement, so that the interval is cleared 
// after it has run 13 times, wthe length of the **animals** array:  

// avoiding repeats when choosing array items at random 
// The above should work, but better might be to not repeat animals. 
// The most efficent way to avoid repeats is to remove the item from 
// the array after it has been chosen. This is done with the splice() 
// method, which takes two arguments: a start index and the number 
// or items to remove:

// 26. Use the splice() method to remove the chosen item:  

// The animals are being removed, but the process ends prematurely, 
// when the incrmenting counter variable reaches the length of 
// the dwindling array. The answer is to pass animals.length to 
// the if-statement. Zero is a **falsey** value, so once 
// animals.length reaches 0, the else part will run, which clears 
// the interval.

// 26. Remove the counter everywhere, with animals.length 
// becoming the new condition to evaluate. 
// In the ouput, switch to +=, so that we see all the animals appear. 
// In this way we will know if our algorithm and code are working.
// Also, in the else part, output the word "done" to confirm that the 
// interval has been cleared--not merely that we have run out of animals.

// 27. Refresh the browser. 
// All 13 animals should output, one at a time, in random order.

// 28. To visualize how the random number is always within the range 
// of the dwindling array length, output the array length as well
// as the random number in the output for each animal.
// Add a <br> tag to separate each animal on its own line. 
// The inclusion of html in the string requires switching 
// from textContent to innerHTML.
// The output is too much for concatenation, so switch to backticks:

// 08.01 Lab

/*
Find Digital Root
The Digital Root of a number is the single-digit sum of its digits. 
If the sum of the digits is 10 or more, the digits must be added 
together again — until the result is one digit.

Examples involving one, two and three "rounds" of addition:

One round of addition:
Find Digital Root of 32
3+2 = 5
Answer: 5

Two rounds of addition:
Find Digital Root of 84
8+4 = 12
1+2 = 3
Answer: 3

Three rounds of addition:
Find Digital Root of 9,898,987
9+8+9+8+9+8+7 = 58
5+8 = 13
1+3 = 4
Answer: 4

Challenge:
Write a function called
findDigitalRoot(n)
which takes in a number, n,
and returns the digital root.

Bonus:
Make a Find Digital Root DOM demo, with input box. 
User enters a number to get its digital root. 
The result is displayed, along with the 
"rounds of addition", step by step.
Hint: setInterval()
*/
