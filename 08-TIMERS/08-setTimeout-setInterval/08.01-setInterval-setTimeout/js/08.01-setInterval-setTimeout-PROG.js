// Lesson 08.01 - PROG

/*
- The setTimeout() method takes two arguments:
  - an inline, anonymous callback function
  - a delay in milliseconds before the function runs
- As a global **window** method, it can optionally be invoked as **window.setTimeout()**
*/

// // 1. Call setTimeout() method (optionally on window obj)
// // 2. Pass in the first argument: an anonymous, inline callback function:
// // 3. Write some code for the function. We'll just console.log a greeting:
// // 4. Pass in the second argument: 
// //    a five-second delay (5000 ms) before the function runs:
// // setTimeout(callback,delay)
// window.setTimeout(function() {
//   console.log('Hello World!');
// },3000);
// // 5. Refresh the browser. The greeting should appear after five seconds.

// // 6. Run another setTimeout, but with the more concise arrow function syntax. Increase the delay, and change the message:
// setTimeout(() => console.log('=> Hello World!'),4000);

// // 7. The callback can also call a function. Write a function, 
// // and then call it from inside the setTimeout callback. 
// // Again, increase the delay and change the message:
// function greetWorld() {
//   console.log("Delayed Greetings from greetWorld() function!");
// }

// setTimeout(() => greetWorld(),5000);

// // 7B. 
// setTimeout(function () {
//   greetWorld();
// },6000);

// // 8. Write another function to call from the setTimeout callback, 
// // only this time give the function a parameter:
// function greetUser(username) {
//   console.log(`Welcome back: ${username}!`);
// }
// // 8B.
// setTimeout(function () {
//   greetUser('ZackBoom');
// },7000);

// // 8C.
// setTimeout(() => greetUser('ZB009'),8000);

// // CHALLENGE A:
// // 9. On 5-second delay using setTimeout, output "Hello User!" 
// // to the web page, instead of a console log. Get the h2 tag: <h2 id="output">output</h2>
// const h2Output = document.getElementById('output');

// function greetingUser (user, score) {
//   h2Output.innerHTML = `Hello <b>${user}</b>! <br> Your score is <b>${score}</b>`;
// }

// // let r = Math.ceil(Math.random() * 100);
// // setTimeout(() => greetingUser('Azizjon8808', r), 5000);
// // CHALLENGE B:
// // 10. On a 7-second delay, output a random integer from 1-100:
// //     Also in the output box. Add the number to whaterver



// // setInterval(function(),ms): calls a function repeatedly on a timer
// // The setInterval() method executes a callback function repeatedly on a time delay.
// /*
// - the **setInterval()** method takes two arguments:
//   - a callback function (either named or anonymous)
//   - a delay in milliseconds between function calls
// - as a global window method, it can optionally be invoked as window.setInterval()
// - the setInterval() runs repeatedly
// - to stop the setInterval() use clearInterval()
// */

// // 11. Call the setInterval() method, and pass it its callback function:
// // 12. Have the callback output to the DOM a random integer from 0-99 
// // every 1.5 seconds:
// // 13. Above the **setInterval()**, declare a counter variable, i:
// let i = 0;
// h2Output.innerHTML = "";
// // 14. Inside the callback, increment the counter with **i++**:
// // setInterval(function() {
// //   h2Output.innerHTML += ~~(Math.random()*100) + " ";
// // },1500);

// // => one line version of the above:
// // setInterval(() => h2Output.innerHTML += ~~(Math.random()*100) + " ",1925);

// // 15. Wrap the output line in an if-statement that only runs 
// const myInterval = setInterval(() => {
//   h2Output.innerHTML += ~~(Math.random()*99) + " ";
//   i++;
//   if(i == 5) {
//     clearInterval(myInterval);
//     h2Output.innerHTML += "-- Th-th-that's all!";
//   }
// },1500);


// // IF the if-statement just stops the output, but not the callback,
// // the interval will keep running behind the scenes invisibly.
// // Therefore you MUST clearInterval

// // setInverval() for choosing items from an array at random on a timer

// // In this next example, we start with an array of 13 animals. 
// // The setInterva() callback function will run 13 times, 
// // choosing an animal at random from the array each time

// // CHALLENGE:
// // output a different animal at random to the <h2 id="animals"></h2>
// // every 1 second until 13 animals are out.. display all animals..
// // don't just replace them each time. At the end, clear the interval
// // output a random, unique animal each time until 13 animals are out on the DOM:

// // 18. Given: array of animals and a counter variable:
// const animals = ['aardvark', 'beaver', 'cheetah', 'deer', 'elephant',
//   'frog', 'giraffe', 'hyena', 'iguana', 'jaguar', 'kangaroo', 'lion',
//   'moose', 'nutria', 'ostrich', 'penguin', 'quail', 'rabbit',
//   'snake', 'turtle', 'urial', 'vulture', 'wapiti', 'xerus', 'yak', 'zebra'];
// let counter = 0;

// // 19. Get the animals h2 for the output
// const animalsH2 = document.getElementById('animals');

// // 20. Shuffle the animals like a deck of cards and
// //     then just pop 'em off one at a time
// // 21. Set up the setInterval() method with a callback that runs every 1 sec
// // 22. Each time the callback function runs, pop another animal and output it
// // 23. Also inside the callback, increment the counter by 1 each time
// // 24. When the counter reaches 13, clear (stop) the interval
// animals.sort(() => Math.random() - 0.5);

// const randomAnimals = setInterval(() => {
//   counter ++;
//   animalsH2.innerHTML += animals.pop() + " ";
//   if(counter == 13) {
//     clearInterval(randomAnimals);
//   } 
 
// }, 1000);

// // CHALLANGE B:
// // redo the random above using splice
// const interval = setInterval(() => {
//   let r = ~~(Math.random()* animals.length);
//   let randAnimals = animals.splice(r,1)[0];
//   animalsH2.innerHTML += randAnimals + " "; 
//   counter ++;
//   if(counter == 13) {
//     clearInterval(interval);
//   } 
// }, 1000);

// // END: Lesson 08.01
// // NEXT: Lab 08.01
// // Then: Lesson 08.02


/* Lab 08.01

Challenge A: Find Factorial
The factorial of a number N is product of all integers 
from 1-N multiplied by the next integer, in succession .
For example "5 factorial" is:
1 * 2 * 3 * 4 * 5
Write a function called findFactorial(N)
Function takes a positive integer, N, as its input and 
returns the factorial
*/
let n = 6; // find factorial of 6
const outputH2 = document.getElementById('output');
outputH2.innerHTML = '';
let tot = 1;
let i = 1;
const factorialNums = setInterval(() => {
  outputH2.innerHTML += `${tot} * ${i} = ${tot*i}<br>`;
  tot*=i;
  if(i == n) {
    clearInterval(factorialNums);
  }
  i++;
},1000);
console.log(factorialNums);

// let product = 1;
// for(let i = 1; i<=n; i++) {
//   outputH2.innerHTML += `${product} * ${i} = ${product*i}<br>`;
//   product*=i;
// }
// console.log(product);

// function runs on 'change' to input box

  
  // output the first step in the find-factorial process:
  // the answer factorial
  // counter for going from 1 to num
  // set interval runs as if on loop -- each interval calculates and
  // outputs the next step in the find-factorial process:
  // setInterval set equal to a variable so that it can be cleared

    // keep going as long as i is less than target num
 
      // factorial is updated by multiplying it by i
      // increment i each time
      // update the output for the newest step: 5040 * 8 = 40,320
    // i equals num, the target number, so we're done
      // clear the interval
      // finish the output
    
      // run every 500 milliseconds


/*
Challenge C: Find Digital Root

The Digital Root of a number is the single-digit sum of its digits. 
If the sum of the digits is 10 or more, the digits must be added 
together again — until the result is one digit.

Write a function called findDigitalRoot(n), which 
takes in a number, n, and returns the digital root.

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


Challenge D: Find Digital Root - DOM
Make a Find Digital Root input box. 
User enters a number to get its digital root. 
The result is displayed, along with the 
"rounds of addition", step by step.
Hint: setInterval()

*/

//Digital root challenge

let num = 3599;
let digiRt = 0;
let digiStr = num.toString();
let digiArr = digiStr.split("");
for(digi of digiArr) {
  digiRt += +digi;
  //digiRt = digiRt + Number(digi);
}
console.log('digiRt1 :', digiRt);
if(digiRt >= 10) {
  digiStr =  digiRt.toString();
  digiArr = digiStr.split("");
  digiRt = 0;
  for(digi of digiArr) {
    digiRt += +digi;
    //digiRt = digiRt + Number(digi);
  }
}
console.log('digiRt2 :', digiRt);