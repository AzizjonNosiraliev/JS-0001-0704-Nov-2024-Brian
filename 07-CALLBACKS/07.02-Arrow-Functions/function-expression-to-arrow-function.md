// Function Expression
// Like the “regular function” a function expression uses the function keyword, but as an
// anonymous function, with no name occurring between the word function and the
// parentheses: function(). A Function Expression is written as a variable, whose value is a
// function. Function Expressions return a value, giving the variable something to store:

const greet = function(name) {
    return “Hello “ + name
}
console.log(greet(“Jane”)) // Hello Jane

// • Function Expressions help us transition to using the Fat-Arrow
// • Fat-Arrow functions use => instead of the function keyword
// • Fat-Arrow functions implicitly return a value
// • Fat-Arrow functions are new for ES6. They are favored for their concise syntax
// !21
// • If the Fat-Arrow function only has one line of logic, the curly braces and return keyword may
// be omitted, making the function even more concise

// Anonymous Functions
// The function expression function does not need a name, because it is declared as a variable,
// typically a const. Therefore, the value of the const is the function. To invoke the function, put the
// variable name, followed by equals, followed by function keyword, followed by the parens:
// Anonymous functions as the value of a variable (or const):

const calculateQuotient = function(num1, num2) {
return num1 / num2;
}
// Call the function by writing the variable, followed by parens:
console.log(calculateQuotient(15, 5)); // 3

// Anonymous functions as the “value” of an event property:
// An anonymous function can also be attached to an event property, called on an object, as in this button onclick.

myButton.onclick = function() {
	alert('you clicked me');
}

myImg.onmouseover = function() {
	myImg.style.filter = “brightness(2)”;
}

//Please read this carefully and complete the exercises

//mac command + option + i
//window Shift + CTRL + i

//1. create a function called minus that accepts 3 parameters
//2. return the sum of all 3 parameters
function add(param1, param2, param3) {
    return param1 + param2 + param3;
  }
  
  //3. create a function called multiply that accepts 3 parameters
  //4. return the multiplied of all 3 parameters
  function multiply(param1, param2, param3) {
    return param1 * param2 * param3;
  }
  
  //4. create a function called divide that accepts 3 parameters
  //5. add all the parameters and divide the sum by 2
  function divide(param1, param2, param3) {
    return (param1 + param2 + param3) / 2;
  }
  


◦ anonymous function attached to an event:

    btn.onclick = function() { 
        alert('You clicked the button!') 
    }

• built in libraries (date, random)

One reason a function may not need a parameter is because it is doing something so narrowly specific every time that it does not require any additional information. For example, it may be targeting the exact same DOM element each time, such as the X -button which the user clicks to hide a modal (pop-up), such as a log-in form. We will start with a few DOM manipulation examples:
How to write a function:

Then when the function is called, the parameter’s value is set by the argument
passed into the function.
Input / Output of Functions
Parameters are input and return values are output, so it is natural to see these IO pairs
occurring together in functions. When functions take inputs and return outputs without affecting
any other variables outside the function, we have what is often called a pure function, or a
function that produces no “side-effects”:

EXERCISE:

Declare a function with two parameters, `num1` and `num2`.
   The function call passes in two arguments, both numbers.
   The function does the following math:
    - If the `num1` is greater than `num2`, subtract the `num2` number from `num1`
    - If `num2` is greater, add the numbers together.
    Return the answer.
    Run the function twice, once with the numbers being subtracted, the other with the numbers being added.
