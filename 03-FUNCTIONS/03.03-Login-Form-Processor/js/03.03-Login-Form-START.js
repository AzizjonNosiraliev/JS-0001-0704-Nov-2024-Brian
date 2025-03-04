// Lesson 03.03 - START
// - forms and form elements 
// - event.preventDefault()
// - form action and method attributes: "GET" vs. "POST" 

/*
We have a Login form for which the html and css are all ready.
We will look at two different ways to process the form:
- on the page where the form itself is located
- on a separate processor page; this is the default
*/

// We don't have a database, so we can't compare the username and password typed into the form to any actual credentials in a database. Instead, we will just use local variables.

// 1. Open the html page in the browser; it's a typical login form, where the user enters their username and password. The html page is currently using FINAL.js, so the form should work.

// 2. Fill out the form. The correct username is "Amy". The password is "abc". 

// 3. Click the Log In button. This calls a function that compares what you entered 
// to the correct username and password. If they match, you get a "Welcome" message; 
// else the message is "Login failed". 

/*
4. In the html, notice that :
- <form> tag has no attributes. This is fine for now, but later,  we will  attributes to it.
- <input> tags have id's for JS to get them.
- <button> inside a form submits the form by default on click. 
*/

// 5. Switch to using PROG.js, so that we can code all the functionality from scratch.

// 6. Declare variables for the username and password. Use any values you 
// like. We'll use uppercase consts, since these values will not be changed:


// 7. Get the DOM elements: button, username and password inputs, and the h2:


// 8. Have the button call the login function on Log In button click and on hitting enter from pswd
// password.addEventListener('change', login);
// loginBtn.addEventListener('click', login);

// event object
// The event object is a default parameter passed to all functions. 
// It is there even if not explicitly added as a parameter. 
// The default name is **event**, but you can call the event object anything you like. 
// Common aliases are **evt** and **e**, but renaming the event object requires 
// that it be explicitly passed in as an argument of the function. 

// event.preventDefault()  
// When a button inside a form is clicked, it submits the form by default. 
// This causes the page to redirect to the url specified by the form tag's 
// action attribute, where a processor script is expected. If there is no action 
// attribute, the page will reload in place. which resets the form and clears 
// all its elements. We want to process the form on this page, so we need to 
// prevent the default behavior which reload the page and erase the 
// username and password. To prevent the default, use the
// event.preventDefault() inside the login function

// "Real passwords are":
// const USER = 'amy';
// const PSWD = 'abc';

// 9. Define the **login()** function, passing in the event argument and 
// calling the **event.preventDefault()** method:

    // event.preventDefault(); // prevent btn click from refreshing pg and resetting input boxes
    // "Login Button Clicked"

    // 10. Get the username and password from the form input fields. 
    // These are the values of the input objects:
    let user;

    // 11. Compare username and password from form to correct username 
    // and password. There are two conditions to evaluate, so use the && operator. 
    // If credentials match, output "Welcome" and hide input elements 
    // if
        `Welcome, `; // output Welcome
        // "none"; // hide username field
        // hide password field
        // hide Log In button
    // els // else output "Login Failed":
        // "Login Failed!";
    
// end login function

// leaving out event.preventDefault()

// 12. Comment out the event.preventDefault() line, 
// and fill out the form again. It doesn't work, because the page reloads, 
// which clears the username and password fields before JS has a chance to 
// compare the values to the correct credentials.

// form action attribute
// sending form variables to a processor page
// A form action attribute:
// - has as its value a page where the form variables are sent
// - enables the button to submit the form, so the button no 
//   longer needs a listener that calls a function

// 13. Comment out the listener for the button 
//     so that it no longer calls the login function

// 14. In the form tag, add an action attribute pointing to "form-processor.html":
//     <form action="login-processor.html">

// form method attribute
// 15. Also add a method, "GET" or "get". This means that the form variables
//      will "travel along on the URL" to the processor page.
//     <form action="login-processor.html" method="GET">

// 16. Fill out the form and submit it again. We are redirected to
//     the processor page.

// 17. Check the URL: notice that at the end of the url there is a "?" 
//     followed by the username and password: "?username=amy&password=abc"
//     This part of the url, where the form variables are found, is called
//     the querystring

// The code for accessing these querystring variables involves arrays and loops--
// topics we have not covered yet--so instead we will use another way: 

// sessionStorage for saving Session Variables
// Variables can be stored in the browser, as oppposed to the current script. 
// This makes them available to all the pages in the application. 
// Over in the form page, we will save the username and password as session variables.
// This way, we will be able to access them on the processor page.

// mouseover event
// 18. Below the commented-out listener that calls the login function on click, 
//     add a listener that invokes a function called setSessionVars and runs on 
//     mouseover; the reason we want mouseover and not click is because click 
//     automatically submits the form. With mouseover, the setSessionVars function
//     will run right before the user clicks the button, and the form values will 
//     be there


// 19. Define the function: 
// func
    // 20. Call the setItem() method on the sessionStorage property, 
    // passing it two arguments: a variable name and a value, with the 
    // values being the username and password from the input boxes:



// 20. The JS for checking the login credentials is now going to be in the processor page, where we are redirected on submit. Switch to that page.




