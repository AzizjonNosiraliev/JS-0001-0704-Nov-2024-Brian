// Lesson 03.02 - START

// This page consists of several UI elements which call functions and produce output:

// Get the various DOM elements:

// 1. Get the output box:
const outBox = document.getElementById('out-box');

// 2. Get text input fields, where the enters their name:
const firstNameBox = document.getElementById('first-name');
const lastNameBox = document.getElementById('last-name');

// 3. Get the Greet World and Greet User buttons:
const greetWorldBtn = document.getElementById('greet-world-btn');
const greetUserBtn = document.getElementById('greet-user-btn');

// 4. Instruct the buttons to call their respective functions:
greetWorldBtn.addEventListener('click', greetWorld);
greetUserBtn.addEventListener('click', greetUser);

// 5. Get the "Pick a Fruit" menu
const fruitMenu = document.getElementById('fruit-menu');

// 6. Whenever the fruit menu is changed, call a function:
fruitMenu.addEventListener('change', pickFruit);

// 7. Get the numeric input fields:
const num1Box = document.getElementById('num1');
const num2Box = document.getElementById('num2');

// 8. Get the menu for choosing the math operator:
const mathMenu = document.getElementById('math-menu');

// 9. Whenever a number changes or a math operator is chosen call a function:
num1Box.addEventListener('change', calculate);
num2Box.addEventListener('change', calculate);
mathMenu.addEventListener('change', calculate);

// get the f and c boxes (for inputting degrees F and C)

const fBox = document.getElementById('f');
const cBox = document.getElementById('c');

fBox.addEventListener('change', tempConverter);
cBox.addEventListener('change', tempConverter);
// have f and c boxes call the convertTemperature func


// BONUS: add checkbox next to fruit menu
// only show data-food if checkbox is checked
const ckBox = document.getElementById('cb');
console.log('ckBox.checked:', ckBox.checked);


// Extra functions for running alternate code scenarios
// We want to try out some cool, new moves, so we'll need alternate versions of the pickFruit and calculateAnswer functions

// 10. Make calls to these alternate functions, but keep them commented out for the time being; these functions won't exist for a while, but we'll come back to them:


// Define the functions
// Whenever you mention a function in a listener, the function must actually exist or else you get an error. 

// Comment out all listeners except for the one that calls greetWorld.

// 11. Define the greetWorld function:
function greetWorld() {
    // 12. Output the greeting to the web console:
    console.log("Hello World!");
    // 13. Now output greeting to the DOM--the web page:
    outBox.textContent = "Hello World!";
}

// 14. Define the greetUser function:
// function greetUser(fname,lname) {
function greetUser() {
    // 15. Get the values from the name fields and save them to local variables:
    let firstName = firstNameBox.value;
    let lastName = lastNameBox.value;
    let dt = new Date();
    let hr = dt.getHours();
    // 16. Concatenate a greeting from the inputted names:
    let greeting = "";
    if (hr > 4 && hr < 12) {
        greeting = 'Good morning, ';
    } else if (hr < 17) {
        greeting = 'Good afternoon, ';
    } else if (hr < 22) {
        greeting = "Good evening, ";
    } else {
        greeting = "Hey night owl, ";
    }

    if (!firstName && !lastName) {
        greeting += 'pal!'
    } else if (!firstName){
        greeting += `${lastName}!`;
    } else if (!lastName) {
        greeting += `${firstName}!`;
    } else {
     greeting += `${firstName} ${lastName}!`;
    }
    outBox.textContent = greeting;

    

    // 17. If no names were inputted, we get a wonky-looking "Hello, !". 
    // Let's validate with if-else logic: if both names are blank, output "Hey, stranger!":
    // !firstName is falsey check way of saying firstName == ""
    
    // if both names are falsey empty strings

    // if at least one name is NOT an empty string, greet by name(s):

    // CHALLENGE: 

    // A.
    // Make it a Timely Greeting, so that instead of "Hey, you!", we get "Good morning!" or other appropriate greeting for the time of day. If at least one name field is NOT blank, output the timely greeing along with the name(s):

    // B.
    // If only first or last name is provided, just greet by that one name.
    // If NO name is provided -- if user clicked greet user button without entering any name -- greet as "Good morning, Buddy!" (or something generic)
}

// 18. Define the pickFruit function:
function pickFruit() {

    // this, fruitMenu and event.target all refer to the same thing: the object that called the function; in this case, that object is the fruit menu:

    // 19. Log the value of `this` -- the fruit menu -- in each of the three ways:
    console.log('this:', this); // // <select id="fruit-menu">
    console.log('this.value:', this.value); // apple
    console.log('fruitMenu.value:', fruitMenu.value); // apple
    // console.log('event:', event); // change
    // console.log('event.target:', event.target); // <select id="fruit-menu">
    // console.log('event.target.value:', event.target.value); // apple
    
    // 24. Save the value of the fruit menu to a variable:
    // or: this.value   or: event.target.value    or: fruitMenu.value;
    let chosenFruit = this.value;

    // 21. Output the chosen fruit in UPPERCASE:
    outBox.innerHTML = `You chose ${chosenFruit.toUpperCase()}`;

    // 22. if Add Snack checkbox is checked, add data-food value to output
    if(ckBox.checked) {
    
        // get the food from the data-food attribute of the selected option:
        // 25. Save selectedIndex to variable. This is index of selected option:
        let indx = fruitMenu.options.selectedIndex;
        console.log('indx:', indx);
        // this is an integer in range of options array
        // outBox.innerHTML += ` at index ${indx}..`; // You picked CHERRY at index

        // 26. Get selected option in options array and save it to object:
        const optn = fruitMenu.options[indx];
        console.log('optn:', optn);

        // 27. Save food property of option's dataset property to a variable:
        let food = optn.dataset.food; // via data-food="banana bread" attribute
        outBox.innerHTML += `<br>Do you like ${food}..?`; 
        
    } // end if checkbox.checked
    
} // end pickFruit() function

// "data dash" attribute: data=*

// Additional data may be attached to any html element by means of the "data-" attribute, where "data-myVar" means that a myVar variable is associated with this tag and will be available to JS as the dataset.myVar property.

// selectObj.options
// The select object has an options property, which stores all the options as an array. We will get deeper into arrays later on, but we already know that an array is a variable which stores multiple items. 

// index
// The items in an array are stored by numeric position called index, with the first item at index 0. 

// menu.selectedIndex
// The select object has a selectedIndex property, which is the index of the selected item. So, if the 10th menu item is selected, the selectedIndex is 9. 

// menu.options[menu.selectedIndex] 
// The selected option can be gotten from the options array by looking it up by its index. 

// menu.option.dataset
// Once we have the selected option, we can get any data contained in the "data-" attribute via the option's dataset property. Most tags won't have a "data-" attribute, but the fruit menu options all have a "data-food" attribute, the value of which is accessible as menu.option.dataset.food

//  menu.option.dataset.food as obtained from the option tag:
// <option value="mango" data-food="mango salsa">Mango</option>
// - menu : the select menu as a whole
// - option : the selected menu option
// - dataset : property of an element option that has a "data-" attribute
// - food : the property of dataset via the "data-food" attribute
// Let's define a new function for tapping into the "data-food" attribute




// calculator
/*
The calculator works as follows:
- calculate() does the math
- the function is called by a **change** event
- the change event occurs whenever: 
  - the user enters number and hits Enter
  - the user increases or decreases numbers (w arrows)
  - the user chooses a math operator from the menu
- calculate() function does the following:
  - gets the values from the number input boxes
  - converts these "number like strings" to actual numbers
  - gets the operator from the math menu
  - does the math in accordance with the math operator
We have two ways of doing the math, which is why we have two calculate functions (the second one is MUCH shorter).
*/

 // switch-case-break revisited

// We need to run a big chunk of logic that does the math based on that operator. We could use a long if-else if-else, but instead, let's take the opportunity to get in a little more practice with switch-case-break:

// 29. Define the calculate function:
function calculate() {

    // 30. Get values from number boxes and convert them to actual numbers
    //     +var makes number from stringy number
    let num1 = +num1Box.value;
    let num2 = +num2Box.value;

    // 31. Get math operator, which is the value of the math menu: +, -, *, /, **, %
    let op = mathMenu.value;
    console.log(num1, op, num2);

    // 32. Declare a variable to hold the answer:
    let ans = 0;

    // 33. Start with switch, which takes value to be compared to case:
    switch(op) {
        // 34. Write case to compare to math operator:
        case "+":
            // 35. If this is the case, run code (add num1 + num2):
            ans = num1 + num2;
            // 36. After case code, break before going on to next case:
            break;
        // 37. Repeat the above for all the other math operators:
        case "-":
            ans = num1 - num2;
            break;
        case "*":
            ans = num1 * num2;
            break;
        case "/":
            ans = num1 / num2;
            break;
        case "%":
            ans = num1 % num2;
            break;
        default: // "**"
            ans = num1 ** num2;
            break;
    }

    // 38. output the answer to the outbox:
    // outBox.textContent = ans;
    // answer will update every time function is called, and it is called by both num boxes and by the math op menu

    // eval() seems to have trouble w ** for negative numbers
    // ** is the newest of all the math operators (ES7)
    // so if the op is **, use old Math.pow()

    // 39. calculate the answer using eval() instead of switch-case
    let answer = eval(`${num1} ${op} ${num2}`);
    outBox.textContent = answer;

    // 40. Make it ALL one line of code:
    let result = eval(`${num1Box.value} ${mathMenu.value} ${num2Box.value}`);
    outBox.textContent = result;

} // end calculate() function

// eval() 
// The eval() method takes a string as its argument and considers it as a math operation. If it can detect numbers with a math operator in between, it will perform the calculation. 
console.log("5 ** 2"); // 5 ** 2
console.log(eval("5 ** 2")); // 25
// - We will get the chosen operator as the mathMenu value
// - Then, we will concatenate a string from the numbers and the mathMenu operator
// - Then we will pass the string to eval(), which will perform the calculation.

// CHALLENGE: 
// Complete 03.02 on your own: 
// finish Lesson 03.02 by doing Fahr-Cels Converter
// formulas for converting Fahr to Cels and vice-versa
// F = C * 9/5 + 32;
// C = (F - 32) * 5/9

    // if cBox is calling func, convert C to F

        // ans is deg Fahr

        // ans is deg Cels
function tempConverter(){
    let F = +fBox.value;
    let C = +cBox.value;
    let answer = 0;

    if (this.id == 'c'){
        answer = C * 9/5 + 32;
        outBox.innerHTML = `${C}&deg;C = ${answer.toFixed(1)}&deg;F`;
        fBox.value = answer.toFixed(1)
    } else {
        answer = (F - 32) * 5/9;
        outBox.innerHTML = `${F}&deg;F = ${answer.toFixed(1)}&deg;C`;
        cBox.value = answer.toFixed(1)
    }
}