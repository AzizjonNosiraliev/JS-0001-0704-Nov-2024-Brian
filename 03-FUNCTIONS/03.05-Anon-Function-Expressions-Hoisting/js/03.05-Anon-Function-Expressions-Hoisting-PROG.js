// Lesson 03.05 - START
/*
- Hoisting: Function Declarations vs. Expressions
- Anonymous Functions
- Inline Anonymous Callback Functions
- onclick property of DOM objects
*/

// hoisting
/*
- Hoisting refers to functions being lifted automitically to the top of their scope.
- Hoisting lets functions be called from lines above where they are declared.
- Hoisting does not apply to variables--only functions.
- To use a variable, it must have already been declared.
*/

// 1. Declare a "let variable", and try to access it from the line above:
// console.log('before let veg:', veg);
let veg = "lettuce";
// Error:  Cannot access 'veg' before initialization
console.log('after let veg:', veg);

// 2. "var" variables are different: you still can't access
//     them above where they are declared, but they don't throw an error:
//     instead, you get 'undefined'
console.log('above var varmint:', varmint); // undefined
var varmint = "possum";
console.log('below var varmint:', varmint); // possum

// 3. Declare a function, and then call it from above and below the declaration:
sayHey('down there Joe');

function sayHey(name) {
    console.log(`Hey, ${name}!`);
}

sayHey('up there Jane');

// Both function calls work, because the function itself has been hoisted.

// function expressions and anonymous functions**

/*
- A variable with a function for its value is known as a **function expression**.  
- As a variable, a **function expression** doesn't get hoisted.
- A **function expression** must be defined before it can be called or "listened for".
- To make a **function expression**, set a variable equal to an unnamed function.
- A function without a name is known as an **anonymous function**.
*/

// 4. Write a function expression, and then call it from above and below:
// welcomeUser('Xenon123');

const welcomeUser = function(username) {
    console.log(`Welcome, ${username}!`)
}

welcomeUser('Gladiator123');

// We get an error for the first attempt to call welcomeUser, because a function expression is first and foremost a variable--and variables don't get hoisted.

// callbacks: functions as arguments of other functions** 

/*
A function can take any kind of argument: string, number, boolean--even another function. A function passed to another function as its argument is known as a "callback function", or simply a "callback". We have already been working with callbacks without referring to them as such. The addEventListener method takes two arguments: an event, such as "click", and a callback to execute when said event occurs.
mybtn.addEventListener('click', doStuff);

5. Get the 7 buttons, each of which will call a different type of function:
- function declaration: starts with keyword "function" (btn1)
- function expression: variable set equal to anonymous function (btn2)
- inline function: an anonymous function as callback (btn3)
- onclick: a DOM object property set equal to an anonymous function (btn4)
*/
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');

// 6. Get the 7 span tags, each of which will hold output from one of the four functions:
// span tags for the output produced by btn click running func
const out1 = document.getElementById('out-1');
const out2 = document.getElementById('out-2');
const out3 = document.getElementById('out-3');
const out4 = document.getElementById('out-4');
const out5 = document.getElementById('out-5');
const out6 = document.getElementById('out-6');
const out7 = document.getElementById('out-7');

// Button 1: Calling Function Declaration/Definition

// 7. Instruct the first button to call a function when clicked. The function to call on click, that second argument, is a callback:
btn1.addEventListener('click', onBtn1Click);

// 8. Declare the onBtn1Click function, which outputs a message to the first span tag:
function onBtn1Click() {
    out1.textContent = "Function Declaration called by Button 1";
}
// 9. Reload the page, and click BTN 1 to get the message.

// Button 2: Calling Function Expression

// 10. Write a function expression by declaring a variable by the name of onBtn2Click and setting it equal to an anonymous function, which outputs a message to the second span tag:
// btn2.addEventListener('click', onBtn2Click);

const onBtn2Click = function() {
    out2.textContent = "Function Expression called by Button 2";
}

// 11. Instruct the second button to call the function when clicked. Notice that we had to do the listener AFTER the expression, since function expressions are variables--and variables cannot be refernced before they are declared.
btn2.addEventListener('click', onBtn2Click);
// 12. Reload the page, and click BTN 2 to get the message.


// Inline Anonymous Callback Functions

/*
In a function expression, a variable is set equal to a function. Since the variable provides the name, the function value itself is anonymous. An anonymous function can also be a callback, that is, the argument of another function. The addEventListener method takes a callback as its second argument.

We will instruct the third button to run an anonymous function inline, that is, right there inside the addEVentListener method. This is in contrast to our usual practice of having the addEVentListener call an external function by name.
*/

// Button 3: Running an Inline Anonymous Function

// 13. Have the third button listen for a click. When the click occurs, run an inline anonymous function right there on the spot:
btn3.addEventListener('click', function () {
    out3.textContent = "Inline Anon Callback Func run by btn3";
});
// 14. Reload the page, and click BTN 3 to get the message.

// onclick property

// Any event that can be called on a DOM object co-exists as a property of that object. A button can run a function on "click", and therefore has an onclick property. If you set the onclick property equal to an anonymous function, when you click the button, the function will run.

// Button 4: onclick property = anonymous function

// 15. Set the fourth button's onclick property equal to an anonymous function:
// 'onclick anon function says "Yo!"';
// "btn4.onclick anon function says Yo!"
btn4.onclick = function () {
    out4.textContent = "btn4.onclick anon function says Yo!";
}
// 16. Reload the page, and click BTN 4 to get the message.

// Calling function another function and passing param
// `Hi! This is calling you back from callMeBack function`


// if you set onclick equal to function w arg, the ()
// calls the function immediately, overriding the
// wait for button click
// btn5.onclick = greetUser('Brian123');
// this is also the case if you pass a param to the 
// callback function inside addEventListener
// btn5.addEventListener('click', greetUser('Brian123'));

function greetUser(username) {
    out5.textContent = `Greetings, ${username}!`;
}

// the workaround so that the callback does not run automatically, but rather waits for the button click, 
// is to nest the function call inside
// another function: that is, a function that calls the
// function; the outer function is only being declared -- 
// not called, so it does not run immediately; it waits
// for the button click; then when it does run on click,
// it calls the greetUser function, passing it the 
// expected argument
btn5.addEventListener('click', function () {
    greetUser('Brian123');
});

// Callback: function passed to other function as its argument
// declare a function that takes an argument callback; this is
// a function, which we know because on the next line, we call
// the callback by adding ()

const employeeObj = {
    "firstName": "Joe",
    "lastName": "Smith",
    "age": 45,
    "email": "joe.smith@acme.com",
    "fullTimeEmp": true
};
// declare a function that we can pass to exectuteCallback,
// which expects a function argument
// "Hello from the outputMessage function callback"

// this function outputs the user's name and email
function displayUserInfo(user) {
    out6.innerHTML = `Name: ${user.firstName} ${user.lastName}<br>Email: ${user.email}`;
}
// CHALLENGE: complete these two functions, then test them by calling function(s) one by one and logging user obj; function reduces user's age by 10% (rounded up)
function rejuvenateUser(user) {
    let userAge = user.age;
    let newAge = Math.ceil(userAge - userAge * 0.1);
    user.age = newAge;
    console.log("rejuvenated user:", user);
    out6.innerHTML = `${user.firstName} ${user.lastName}'s age has been magically reduced from ${userAge} to ${newAge}`;
}
// this function adds a pet property to user object, from provided array of pets
function giveUserRandomPet(user) {
    const pets = ['bunny', 'cat', 'dog', 'gerbil', 'hamster', 'iguana', 'tarantula'];
    let r = Math.floor(Math.random() * pets.length);
    user.pet = pets[r];
    out6.innerHTML = `${user.firstName} ${user.lastName} has a new pet ${user.pet}..`;
    console.log('user now with pet:', user);
}

// function that takes a callback, that is another function as its argument, think of it as a relay station or hub for calling other functions
function processUserData(user, callback) {
    // call the function that was passed in as argument, as the value of callback parameter:
    callback(user);
}

// on button click, call processUserData function, 
// passing it its expected 2 arguments: a data object and a function; we will pass it the displayUserInfo function:
btn6.onclick = function () {
    // processUserData(employeeObj, displayUserInfo);
    // processUserData(employeeObj, rejuvenateUser);
    processUserData(employeeObj, giveUserRandomPet);
}

// call executeCallback and pass it the function
// btn6.

// function passed in can be anonymous inline:
// btn6.onclick = function() {
//     executeCallback(function() {
//         out6.textContent = "Hello from the Anonymous Inline Function callback";
//     });
// }

// function takes a function and a number as its argument and returns another function
// that uses the number as one of its arguments and supplies the another argument
// "on its own":
function returnAFunction(callback, num) {
    let x = 6;
    return callback(x, num);
}

function addNums(num1, num2) {
    return num1 + num2;
}

function multiplyNums(num1, num2) {
    return num1 * num2;
}

function divideNums(num1, num2) {
    return num1 / num2;
}

btn7.onclick = function() {
    // out7.textContent = returnAFunction(addNums, 8);
    // out7.textContent = returnAFunction(multiplyNums, 8);
    out7.textContent = returnAFunction(divideNums, 8);
}

// btn7.

// real world use case for callback would be make server request
// do sthg w returned result

    // go get API data and return it



    // loop results and output to DOM



/*
Both addEventListener and onclick are valid ways to handle button clicks in JavaScript, but they have some key differences and trade-offs. Let's break down the pros and cons of each approach:

1. addEventListener Approach:

btn1.addEventListener('click', onBtnOneClick);

function onBtnOneClick() {
  out1.textContent = "Function called by Button 1 click using addEventListener";
}

Pros of addEventListener:
Multiple Event Listeners: You can attach multiple event listeners to the same event on the same element. This is something onclick doesn't support natively. For example:


btn1.addEventListener('click', function() { console.log('First handler'); });
btn1.addEventListener('click', function() { console.log('Second handler'); });

Both functions will be called when the button is clicked.
Event Removal: You can remove event listeners if needed using removeEventListener. This is useful when you need to dynamically add or remove event handlers, which is not possible with the onclick property.
javascript

btn1.removeEventListener('click', onBtn1Click);

More Flexibility: addEventListener allows you to specify additional options, such as whether the event should be captured during the bubbling phase or the capturing phase (using the third argument).
Cons of addEventListener:
Slightly more verbose syntax, as you need to provide the event type and a separate function handler.
Doesn't allow inline event handling (although this isn't typically recommended in modern development).

2. onclick Approach:
javascript

btn4.onclick = function () {
  out4.textContent = "btn4.onclick anonymous function says Hello!";
}

Pros of onclick:
Simplicity: It's concise and can be easier to read for simple cases, especially if you are only attaching a single event handler.
Familiar Syntax: It's a bit more intuitive for beginners because it's a direct property of the element, and it can feel more "natural" for small scripts or inline event handling.
Cons of onclick:
Single Event Listener: You can only assign one event listener per event type to an element. If you try to assign another handler, it will overwrite the existing one:
javascript

btn4.onclick = function() { console.log('First handler'); };
btn4.onclick = function() { console.log('Second handler'); };  

// Overwrites the first one
This is a limitation, and it means you can't add multiple handlers unless you manage it manually (like appending functions or using a custom solution).
No Easy Removal: While you can set btn4.onclick = null to remove the handler, it doesn't have the flexibility of removeEventListener, especially when dealing with named functions.
No Event Options: onclick is limited to just the most basic event-handling functionality, with no options for capturing, bubbling, etc.

When to Use Each Approach:
Use addEventListener:
When you need to attach multiple event handlers to the same element.
When you need to remove or manage event handlers dynamically.
When you want more control over event propagation (capturing vs. bubbling).
For modern JavaScript development, as it aligns better with best practices for event handling.
Use onclick:
For very simple cases where you only need to handle one event per element.
For quick prototypes or scripts where you don't need to worry about advanced event handling.
Conclusion:
In most cases, addEventListener is the preferred approach because it offers greater flexibility and scalability. It's especially beneficial for more complex applications where you might need to manage multiple event listeners or require finer control over event handling. However, onclick is fine for simple cases, where you don't need these additional features.
In summary, if you're writing production-level or more complex code, go with addEventListener. For smaller, simpler tasks, onclick is just fine.
*/


