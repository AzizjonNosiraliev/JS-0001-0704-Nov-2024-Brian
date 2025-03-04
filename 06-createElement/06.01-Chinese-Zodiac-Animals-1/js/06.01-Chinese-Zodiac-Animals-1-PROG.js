// Lesson 06.01 - START

// Chinese Zodiac Animals, Part 1

// 9. Open **06.01-Creating-Elements-START.js** and get the **section** that serves as the parent wrapper of the interface:
const section = document.querySelector('section');

// 10. Instantiate an Audio object for playing sounds:
const sound = new Audio();

// 13. Reload the page. In the upper left corner of the section there should be one smallish box that says *dynamic div*.

// making the set of 12 Chinese Zodiac Animals
// Now that we have that working, let's use a loop to make all 12 divs.

// 14. Wrap the code that made the div in a for loop that runs 12 times. For text output, number the divs with the counter, **i**:
for(let obj of animals) {

    // 10. Make a div with **createElement()**:
    const divvy = document.createElement('div');

    // 11. Apply the existing **.divvy** class to the div and Give the div some text content, as a test:
    divvy.className = 'divvy';

    // 12. Use **appendChild()** to output the div inside the section:
    section.appendChild(divvy);

    // 16. Still in the loop, make an image for each div, using*new Image():
    const pic = new Image();

    // 17. Set the source of the image to **cow.jpg**. The result will be 12 cows: 
    // 21. Change the source to be dynamic, so that we get all 12 animals--not just the cow. Concatenate the **eng** property into the file path.
    pic.src = `images/animals/${obj.eng}.jpg`;

    // 18. Apply the **.animal-pic** class to the image:
    pic.className = 'animal-pic';

    // 19. Output the image inside the div. In terms of nesting, **divvy** goes inside **section** and **pic** goes inside **divvy**:
    divvy.appendChild(pic);

    // 24. Still in the loop, make the **input** box:
    const input = document.createElement('input');

    // 25. Assign the input box a type of **search**. This will give the box a little X to clear it, and it also provides a **change** event, which calls a function when the user hits Enter: 
    input.type = 'search';

    // 26. Assign the box a **placeholder** to prompt the user to enter the animal name:
    input.placeholder = '???';

    // 27. Assign **eng**, **chi** and **also** properties to the input box. These will be used by the **checkSpelling** function to see if the user input matches any of the three accepted spellings:


    // 28. Also save the current index as a property of the input box. This will come in handy down the road (next lesson):


    // 29. Have the input box call the function when its search event is fired:
    input.onchange = function() {
        let txt = input.value;
        console.log(obj);
        // is user entered an animal name found in any of the 3 properties:
        if(txt == obj.eng || txt == obj.chi || obj.aka.includes(txt)) {
            input.style.backgroundColor = '#373';
            // reveal the english and pinyin names
            engSpan.style.display = "block";
            pinSpan.style.display = "block";
        } else {
            input.style.backgroundColor = '#a33';
        }
        input.style.color = '#fff';
    }

    // 31. Output the input box to the div. It will appear under the animal image:
    divvy.appendChild(input);

    // 32. Make a p-tag to hold the years
    const yearsP = document.createElement('p');
    // 33. Assign the p-tag its class:
    yearsP.className = 'zodiac-year';
    // 34. Output the p-tag to divvy:
    divvy.appendChild(yearsP);
    // 35. Populate the p-tag with years by generating a string of years on a loop:
    let yr = obj.year; // 2024
    for(let y = yr-156; y <= yr+12; y+=12) {
        yearsP.textContent += y + " ";
    }

    // 36. Make a sound icon image:
    const soundIcon = new Image();
    // 37. Apply the class and set the src:
    soundIcon.className = 'sound-icon';
    soundIcon.src = 'images/sound-icon.png';
    // 38. Output the sound icon to divvy:
    divvy.appendChild(soundIcon);

    // 39. Have the sound icon call a function on click; function plays that animal's mp3 audio:
    soundIcon.onclick = function() {
        sound.pause(); // stop playing sound
        sound.src = `audio/${obj.eng}.mp3`;
        sound.play(); // play the new sound
    }

    // 40. Make the Chinese char image:
    const char = new Image();
    // 41. Set source of Chinese character
    char.src = `images/chars/char-${obj.chi}.jpg`;
    // 42. Apply the Chinese character class:
    char.className = 'chinese-char';
    // 43. Output Chinese character
    divvy.appendChild(char);

    // 44. Make a span to hold the English name
    const engSpan = document.createElement('span');
    engSpan.textContent = obj.eng;
    // 45. Apply the english class:
    engSpan.className = 'english';
    // 46. Output the english name span to divvy:
    divvy.appendChild(engSpan);

    // 47. Make a span to hold the Pinyin name
    const pinSpan = document.createElement('span');
    pinSpan.innerHTML = obj.pin; // must be innerHTML to render HTML Special Entities
    // 48. Apply the english class:
    pinSpan.className = 'pinyin';
    // 49. Output the english name span to divvy:
    divvy.appendChild(pinSpan);

} // end loop

// END: Lesson 06.01
// NEXT: Lesson 06.02