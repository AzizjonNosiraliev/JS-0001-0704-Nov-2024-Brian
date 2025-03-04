// Lesson 06.02 - FINAL
// Chinese Zodiac Animals, Part 2

// 1. Open **06.01-Creating-Elements-START.js** and get the **section** that serves as the parent wrapper of the interface:
const section = document.querySelector('section');

// 2. Make a div with **createElement()**:
// const divvy = document.createElement('div');

// 3. Apply the existing **.divvy** class to the div and Give the div some text content, as a test:
// divvy.className = 'divvy';
// divvy.textContent = 'Chinese Zodiac Animal';

// 4. Use **appendChild()** to output the div inside the section:
// section.appendChild(divvy);

// 5. Reload the page. In the top middle of the section there should be white box that says 'Chinese Zodiac Animal'

// making the set of 12 Chinese Zodiac Animals
// Now that we have that working, let's use a loop to make all 12 divs.

// 6. Comment out the code that made the div, and rewrite it in a for loop that iterates over the animals array:

// 7. Declare an audio object -- not in loop, so that there
// can only ever be one sound playing at a time
const sound = new Audio();

// 8. Start "Animal Div Maker Loop" :
for(let ani of animals) {

    // 9. Make a div to hold current animal
    const divvy = document.createElement('div');
    divvy.className = 'divvy'; // assign class
    section.appendChild(divvy); // output to section

    // 10. Make an image object
    const pic = new Image(); 

    // 11. Set the image source to the current animal jpg
    pic.src = `images/animals/${ani.eng}.jpg`; // chicken.jpg

    // 12. Assign the pic its class
    pic.className = 'animal-pic';

    // 13. Output the pic to the div
    divvy.appendChild(pic); 

    // 14. Make an input element to go under the animal pic:
    const inputBox = document.createElement('input');
    inputBox.placeholder = '?';

    // 15. Define function that runs whenever a change is made to input box; make the callback function inline
    inputBox.addEventListener('change', function() {

        // 16. Get the contents of the input box
        let word = inputBox.value;

        // 17. If the word matches one of 3 acceptable spellings:
        if(word == ani.eng || word == ani.also || word == ani.chi) {

            // 18. Set the input box bg color to green (for correct)
            this.style.backgroundColor = '#282';

            // 19. Correct spelling means show the hidden english and pinyin:
            english.style.display = 'inline';
            pinyin.style.display = 'inline';

        // 20. The input is not a correct spelling
        } else {

            // 21. Set input box bg color to red (for wrong)
            this.style.backgroundColor = '#A22'; 
        }

        // 22. Right or wrong, set the text color to white
        this.style.color = '#fff';

    });

    // 23. Output the input box to the div
    divvy.appendChild(inputBox); // output input div to div

    // 24. Make a sound icon and set its source to the sound icon
    const soundIcon = new Image();
    soundIcon.src = 'images/sound-icon.png';

    // 25. Assign the icon its class to position it at upper right
    soundIcon.className = 'sound-icon';

    // 26. Define listener for sound icon which runs a fucntion that plays an mp3 on click
    soundIcon.addEventListener('click', function() {

        // 27. Stop any sound which may already be playing
        sound.pause();

        // 28. Set the source fo the sound object to the correct mp3
        sound.src = `audio/${ani.eng}.mp3`; // chicken.mp3

        // 29. Play the sound
        sound.play();
    });

    // 30. Output the sound icon to the div
    divvy.appendChild(soundIcon);

    // 31. Make an image for the Chinese character and set its source
    const charPic = new Image();
    charPic.src = `images/chars/char-${ani.chi}.jpg`;

    // 32. Apply the class to the Chinese character
    charPic.className = 'chinese-char';

    // 33. Output the Chinese character image to the div
    divvy.appendChild(charPic);

    // Output the years along the right side as a single column
    // one year per "row"

    // 34. Make a p-tag for holding the years as a vertical strip, one year per line
    const pTagYrs = document.createElement('p');

    // 35. Assign the p tag that holds the years its class
    pTagYrs.className = 'zodiac-year';

    // 36. Output the p tag to divvy:
    divvy.appendChild(pTagYrs);

    // 37. Declare a start year variable and a string to hold all the years concatenated with spaces: "1880 1892 1904 1916 1928..."
    let startYr = ani.year - 156;
    let yearsStr = "";

    // 38. Run a for loop that starts 156 years before the current animal yaer and continues until the counter reaches the current animal year plus 12; counter goes up by 12 each time: 
    for(let y = startYr; y <= ani.year + 12; y += 12) {
        yearsStr += y + " ";
    }

    // 39. Output the yearsStr to the pTagYrs:
    pTagYrs.textContent = yearsStr;

    // 40. Make hidden elements that shows English spelling but only when spelling is correct
    const english = document.createElement('span');
    english.className = 'english';
    english.textContent = ani.eng;
    divvy.appendChild(english);

    // 41. Make hidden elements that shows Pinyin spelling but only when spelling is correct
    const pinyin = document.createElement('span');
    pinyin.className = 'pinyin';
    pinyin.innerHTML = ani.pin;
    divvy.appendChild(pinyin);


} // end "Animal Div Maker Loop"

// END: Lesson 06.02
// NEXT: Lesson 06.03