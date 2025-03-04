// Lesson 03.08 - START

// Keyboard Events
/*
- The pressing of a key is a <span>keydown</span> event.
- The release of a key is a <span>keyup</span> event.
- As with any event, a keyboard event can call a function.
- Keyboard events are listened for by the document.
- Syntax: document.addEventListener('keyup', getKey)
- The event.key property returns the name of the key
- If the key is the one we are listening for, run some function
*/

// 1. Get the DOM elements: the body, the container, the two boxes in the upper corners for displaying output, and the spaceship 
const body = document.querySelector('body');
const container = document.querySelector('.container');
const keyBox = document.querySelector('#key-box');
const pinBox = document.getElementById('pin-box');
const spaceship = document.getElementById('space-ship');

// 2. Set left position of spaceship to 1/2 window width, minus 1/2 width of spaceship. 
// This puts the 256px wide spaceship smack dab in the middle of the screen to start:
let leftPos = window.innerWidth / 2 - 128;
// set the spaceship's left position to star
spaceship.style.left = leftPos + 'px';
console.log('leftPos:', leftPos);
console.log('window.innerWidth:', window.innerWidth);

// 4. Set the speed of the spaceship. Each time the left or right arrow is pressed, the spaceship will move that direction by the speed in pixels:
let speed = 10;

// 5. Have the document listen for the keyup event. On keyup, run a function that outputs the key and code to the keyBox. Since the event object is used by the function, pass the event object into the function as its argument. Since the function is so short, write it as an inline anonymous function, as opposed to an external, named function:

// document.addEventListener('keyup', function(event) {
//     keyBox.innerHTML = `Key: ${event.key}<br>Code: ${event.code}`;
// });

// 6. Have document listen for the keyup event. When the event takes place -- which is when ANY key is pressed -- call the onKeyPress function.
document.addEventListener('keyup', onKeyUp);

// 7. Define the onKeyPress function, passing in the event object:
function onKeyUp(event) {
    
    // Check if the key is 'c', 'd', 'p', 'f', or the left or right arrow.  
    // If it is NOT report "Not a Hot Key" and return (exit)
    // declare an array of hot keys, each hot key a string:
    const hotKeys = ['c', 'd', 'f', 'p', 'ArrowLeft', 'ArrowRight'];

    // array.includes(item) checks if item is in array and returns bool
    if(!hotKeys.includes(event.key)) {
        keyBox.textContent = `"${event.key}" is NOT a hot key!`;
        return; // exit func so that the rest of the code doesn't run
    }
    // this next line will only run if the if above is false 
    keyBox.textContent = `"${event.key}" IS a hot key!`;

    // if we got this far, it's a hot key, so check which one and
    // take appropriate action:
    let hotkey = event.key;

    // if the hotkey is 'c', change page bg color to random color
    if(hotkey == 'c') {
      // generate 3 rand ints from 0-255, one each for R, G and B
      // total number of RGB colors = 256 x 256 x 256 = 16,777,216
      // let r = ~~(Math.random() * 256);
      // let g = ~~(Math.random() * 256);
      // let b = ~~(Math.random() * 256);
      // body.style.backgroundColor = `rgb(${r},${g},${b})`;
      // one-liner version: 
      // let randInt = ~~(Math.random() * (256**3));
      // hexadecimal version of a number is that num toString(16)
      // num.toString(16) converts num to a base-16 (hex) version
      let randHex = '#' + (~~(Math.random() * 256**3)).toString(16);
      // set body bg to rand hex color
      body.style.backgroundColor = randHex;
      // or all in one line:
      // body.style.backgroundColor = '#'+(~~(Math.random()*(256**3))).toString(16);
      pinBox.textContent = randHex; // output hex value to pin box
    }

    if(hotkey == 'd') {
      container.classList.toggle('dark-mode');
      return;
    }

    // CHALLENGE: if 'f' was pressed: toggle the font (serif <--> sans-serif)
    // HINT: to use toggle() method, you need to make a CSS class to toggle

    if(hotkey == 'f') {
      container.classList.toggle('serif-mode');
      return;
    }

    // if 'p' was pressed generate a random 4-digit pin
    // and output to pin box BUT must be 4 digits so
    // any rand int less than 1000 needs leading zero(es)

    if(hotkey == 'p') {
      // generate rand int from 0-9999 
      // and leading zero(es) if need be
      // cuz pin must always be 4 digits
      // num.toString().padStart(len, char)
      let randInt = ~~(Math.random() * 10000);
      let pinNum = randInt.toString().padStart(4, '0');
      pinBox.innerHTML = "Pin num:<br>" + pinNum;
      return;
    }

    if(hotkey == 'ArrowLeft') {
      // if the spaceship is not yet all the way left of window
      // move it left.. but if spaceship is already at far left, 
      // don't keep moving it
      if(leftPos >= -30) {
        leftPos -= speed; // reduce the left pos by speed amt
        // update the spaceship left position:
        spaceship.style.left = leftPos + 'px';
      }
      return;
    }

    // CHALLENGE: Move the spaceship right when right arrow is pressed
    // BUT do not let spaceship leave the screen
    if(hotkey == 'ArrowRight') {
      if(leftPos <= window.innerWidth - 226) {
        leftPos += speed;
        spaceship.style.left = leftPos + 'px';
      }
      return;
    }

}

    // 8. Output the key and code that was pressed:

  

  // setting random background color 

  // 9. Check if the key is "c" for "color", or if the spacebar was pressed:

    // 10. Generate three integers in the 0-255 range
    let R;

    // 11. Concatenate the numbers into the rgb() method:
    let randRGB;

    // 12. Set the body background color to the random RGB color:
    // document.body.style.backgroundColor = randRGB;

    // Alternatively, we ca generate the random color as a hex value, in which case we only need one random number.

    // 13. Comment out steps 10-12, and make a new random integer in the 0 - 16777215 range (256 x 256 x 256):
    // let r = Math.floor(Math.random() * (256 ** 3));

    // 14. Convert the random number to a base-16 (0-9, A-F) hexadecimal value by calling the toString(16) method on the number.
    // let randHex = "#" + r.toString(16); // hexify the number
    let randHex;

    // 15. Set the body background color to the random hex color:
    // document.body.style.backgroundColor = randHex;

    // 16. Set the pinBox text and color to the random color:
    // pinBox.style.color = randHex; 

    // pinBox.textContent = randHex;

  // toggling between Dark Mode and Light Mode for the container

  // 17. Check if the key is "d" for "dark":


    // 18. If dark boolean is currently false:


      // 19. Switch to dark mode by adding and removing classes: 


    // 20. Else, dark mode is already true 


      // 21. Switch to light mode:

    // 22. Flip the dark boolean:


  // 23. Check if the key is "f" for "font":


    // 24. If serif boolean is currently false:


      // 25. Set the body font family to 'serif':


    // 26. Else, serif boolean is already true:


      // 27. Set the body font family to 'sans-serif':


    // 28. Flip the serif boolean:


  // 29. Check if the key is "p" for "pin" or "n" for "number":


    // 30. Generate a random number in the 0-9999 range:
    let r;

    // All pin numbers need to be four digits, so we need to add leading zero(es) to numbers in the 0-999 range.

    // 31. Declare a variable to store the pin as a string:
    let pin;    

    // 32. If r is 0, set pin to be four zeroes:
  

    // 33. else if r is less than 10, add three leading zeroes:


    // 34. else if r is less than 100, add two leading zeroes:


    // 35. else if r is less than 1000, add one leading zero:


    // 36. else r is a four-digit number, so use r as the pin:
    

    // 37. Output the pin to the "pin box":

 
  // 38. If the Left Arrow was pressed:
        // OR: event.key == "ArrowLeft"

    // 39. If the spaceship isn't already all the way left:


      // 40. Reduce the leftPos value by the speed (default is 20):


      // 41. Move the spaceship left by the speed value:


  // 42. If the Right Arrow was pressed:
        // OR: event.key == "ArrowRight"

    // 43. If the spaceship isn't already all the way to the right (250px from the right end of the window):


      // 44. Increase the leftPos value by the speed (default is 20):

      // 45. Move the spaceship right by the speed value:


  // 46. If the key pressed is NOT 'c', 'd', 'p', 'n', left arrow or right arrow


   // 47. Output a message to the pin box, so at least something happens:


/*
* Random Hex Color
- A base 10 number uses the digits 0123456789 only
- A base-16 value uses the digits 0123456789ABCDEF only
- A hexadecimal color is a base 16 value
- toString() method converts a number to a string 
- toString(16) converts a base 10 number to a base 16 string 
- there exist 16,777216 RGB colors (256 x 256 x 256)
- call toString(16) on an int from 0-16777215 to get a hex color
- Put '#' before the number to complete the hex color
*/

// 48. Declare a function that does ONE thing: makes a random hex color:


    // 49. Generate a random 16-digit float from 0-16777215
 
 
    // 50. Make a base-16 hexadecimal color from the random number and return it


    // 51. return the hexadecimal color value



 // Switch to using the getRandHexColor function:

 // 52. Comment out steps 10-13.

 // 53. In step 14, set randHex = getRandHexColor()

 // 54. In steps 15 and 16, set all three values to randHex.
