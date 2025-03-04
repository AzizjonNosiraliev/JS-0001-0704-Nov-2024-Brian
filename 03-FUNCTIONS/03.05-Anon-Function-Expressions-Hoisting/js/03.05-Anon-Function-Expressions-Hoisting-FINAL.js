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
let veggie = 'lettuce';
console.log('before let veggie:', veggie);
// let veggie = 'lettuce'; 
// Error:  Cannot access 'lettuce' before initialization
// 'Romaine'
// We get an error, because "let" variables are not hoisted.
// Comment out the error, and log lettuce after it is declared. 
// 'after let lettuce:' // no error

// 2. "var" variables are different: you still can't access
//     them above where they are declared, but they don't throw an error:
//     instead, you get 'undefined'
console.log('var v varmint:', v); // undefined
var v = "varmint";
console.log('var varmint:', v); // varmint

// 3. Declare a function, and then call it from above and below the declaration:

console.log(sayHey("Amy"));

function sayHey(name) {
    return `Hey, ${name}`;
}

console.log(sayHey("Ben"));
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
// console.log(welcomeUser('Joe1'));

// function welcomeUser(username) {
//     return `Welcome back, ${username}!`;
// }

// function expression version of the above commmented out function definition:
const welcomeUser = function(username) {
    return `Welcome back, ${username}!`;
}

console.log(welcomeUser('Jane1')); 

// ReferenceError: Cannot access 'welcomeUser' before initialization

// `Welcome back !`

// 'Jane2' // works

// We get an error for the first attempt to call welcomeUser, because a function expression is first and foremost a variable--and variables don't get hoisted.

// callbacks: functions as arguments of other functions** 

/*
A function can take any kind of argument: string, number, boolean--even another function. A function passed to another function as its argument is known as a "callback function", or simply a "callback". We have already been working with callbacks without referring to them as such. The addEventListener method takes two arguments: an event, such as "click", and a callback to execute when said event occurs.

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

// 6. Get the 5 span tags, each of which will hold output from one of the four functions:
// span tags for the output produced by btn click running func
const out1 = document.getElementById('out-1');
const out2 = document.getElementById('out-2');
const out3 = document.getElementById('out-3');
const out4 = document.getElementById('out-4');
const out5 = document.getElementById('out-5');
const out6 = document.getElementById('out-6');
const out7 = document.getElementById('out-7');

// Button 1: Calling Function Declaration

// 7. Instruct the first button to call a function when clicked. The function to call on click, that second argument, is a callback:
btn1.addEventListener('click', onBtn1Click);

// 8. Declare the onBtn1Click function, which outputs a message to the first span tag:
// "Function Declaration called by Button 1"
function onBtn1Click() {
    out1.textContent = "function onBtn1Click() called by btn1.addEventListener('click', onBtn1Click)"; 
}
// 9. Reload the page, and click BTN 1 to get the message.

// Button 2: Calling Function Expression

// 10. Write a function expression by declaring a variable by the name of onBtn2Click and setting it equal to an anonymous function, which outputs a message to the second span tag:
const onBtn2Click = function() {
    out2.textContent = `Hello from onBtn2Click Function Expression!`;
}

btn2.addEventListener('click', onBtn2Click);

// "Function Expression called by Button 2"

// 'Function Expression says "Hola!"';

// 11. Instruct the second button to call the function when clicked. Notice that we had to do the listener AFTER the expression, since function expressions are variables--and variables cannot be refernced before they are declared.

// 'click'

// 12. Reload the page, and click BTN 2 to get the message.

// Inline Anonymous Callback Functions

/*
In a function expression, a variable is set equal to a function. Since the variable provides the name, the function value itself is anonymous. An anonymous function can also be a callback, that is, the argument of another function. The addEventListener method takes a callback as its second argument.

We will instruct the third button to run an anonymous function inline, that is, right there inside the addEVentListener method. This is in contrast to our usual practice of having the addEVentListener call an external function by name.
*/

// Button 3: Running an Inline Anonymous Function

// 13. Have the third button listen for a click. When the click occurs, run an inline anonymous function right there on the spot:
btn3.addEventListener('click', function() {
    out3.textContent = "Inline Anon Callback Function run by btn3 click";
});

// function onBtn3Click() {
//     out3.textContent = "onBtn3Click called by btn3";
// }

// "Inline Anon Callback Func run by btn3";

// 'Inline anon function says "Hi!"';

// 14. Reload the page, and click BTN 3 to get the message.

// onclick property

// Any event that can be called on a DOM object co-exists as a property of that object. A button can run a function on "click", and therefore has an onclick property. If you set the onclick property equal to an anonymous function, when you click the button, the function will run.

// Button 4: onclick property = anonymous function

// 15. Set the fourth button's onclick property equal to an anonymous function:
btn4.onclick = function() {
    out4.textContent = "btn4.onclick set equal to anon function says Yo!";
};

// 16. Reload the page, and click BTN 4 to get the message.

// Passing params to listener function
// the listener functions we have written so far do NOT
// ever have any params, because to assign params to a 
// function, the function needs parentheses
// to assign params to listener function w/o it running 
// immediately, wrap the call in an anon func that is 
// just declared -- not called. Now, it will wait for the
// 'click' even instead of running immediately
btn5.addEventListener('click', function() {
    onBtn5Click('Brian');
});

function onBtn5Click(name) {
    out5.textContent = `Hello ${name} from onBtn5Click function called by clicking btn5!`;
}

// Calling function another function and passing param
// `Hi! This is calling you back from callMeBack function`
// if you set onclick equal to function w arg, the ()
// calls the function immediately, overriding the
// wait for button click
// btn5.onclick = greetUser('Brian123');

// the workaround is to nest the function call inside
// another function: that is, a function that calls the
// function; the outer function is only being declared -- 
// not called, so it does not run immediately; it waits
// for the button click; then when it does run on click,
// it calls the greetUser function, passing it the 
// expected argument


// Callback: function passed to other function as its argument
// declare a function that takes an argument callback; this is
// a function, which we know because on the next line, we call
// the callback by adding ()


  
// declare a function that we can pass to exectuteCallback,
// which expects a function argument
// "Hello from the outputMessage function callback"
// }

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
let num;





// btn7.onclick = function() {
//     out7.textContent = returnAFunction(addNums, 8);
// }

// btn7.

// real world use case for callback would be make server request
// do sthg w returned result

    // go get API data and return it



    // loop results and output to DOM


