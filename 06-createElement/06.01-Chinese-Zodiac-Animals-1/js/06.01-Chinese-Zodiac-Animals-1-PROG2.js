// Lesson 06.01 - PROG

// Chinese Zodiac Animals, Part 1

// 9. Open **06.01-Creating-Elements-START.js** and get the **section** that serves as the parent wrapper of the interface:
const section = document.querySelector('section');

// 10. Make a div with **createElement()**:
// const divvy = document.createElement('div');

// 11. Apply the existing **.divvy** class to the div and Give the div some text content, as a test:
// divvy.className = 'divvy';

// 12. Use **appendChild()** to output the div inside the section:
// section.appendChild(divvy);

// 13. Reload the page. In the upper left corner of the section there should be one smallish box that says *dynamic div*.

// making the set of 12 Chinese Zodiac Animals
// Now that we have that working, let's use a loop to make all 12 divs.

// 14. Wrap the code that made the div in a for loop that runs 12 times. For text output, number the divs with the counter, **i**:
for(let i = 0; i < animals.length; i++) {
    const divvy = document.createElement('div');
    divvy.className = 'divvy';
    section.appendChild(divvy);

    // Reload the page. All 12 divs should appear, in two rows of six. The divvy class has *display: inline-block* to arrange the divs side-by-side.

    // 23. We will be using the **animals** array a lot, so to simplify property access, save the current animal **animals[i]** to a variable, **animal**. Update the concatenation to use the more streamlined **animal.eng**:
    const animal = animals[i];

    // 15. Output the animal name to its div:
    divvy.textContent = animal.eng;
    

    // 16. Still in the loop, make an image for each div, using*new Image():
    const pic = new Image();

    // 17. Set the source of the image to the current animal: 
    // 21. Change the source to be dynamic, so that we get all 12 animals--not just the cow. Concatenate the **eng** property into the file path. The current animal is available as **animals[i]** and its English name is **animals[i].eng**:
    pic.src = `images/animals/${animal.eng}.jpg`;

    // 22. Reload the page. We should have 12 divs, each with a different animal.

    // 18. Apply the **.animal-pic** class to the image:
    pic.className = 'animal-pic';

    // 19. Output the image inside the div. In terms of nesting, **divvy** goes inside **section** and **pic** goes inside **divvy**:
    divvy.appendChild(pic);

    // 24. Still in the loop, make the **input** box:
    const input = document.createElement('input');

    // 25. Assign the input box a type of **search**. This will give the box a little X to clear it, and it also provides a **search** event, which fires when the user hits Enter: 
    input.type = "search";

    // 26. Assign the box a **placeholder** to prompt the user to enter the animal name:
    input.placeholder = "?";
    
    // 27. Assign **eng**, **chi** and **aka** properties to the input box. These will be used by the **checkSpelling** function to see if the user input matches any of the two or three accepted spellings:
    input.eng = animal.eng; // chicken
    input.aka = animal.aka; // rooster
    input.chi = animal.chi; // ji

    // 28. Also save the current index as a property of the input box. This will come in handy down the road (next lesson):
    input.i = i;

    // 29. Have the input box call the function when its search event is fired:
    input.addEventListener('search', checkSpelling);

    // 30. Also have the input box call the function on **blur**. The blue event fires when the user hits **Tab** to leave an input box. Tab moves the cursor to the next input box, so it's a handy way to navigate from one animal div to the next. And it's also time to call the checkSpelling function
    input.addEventListener('blur', checkSpelling);

    // 31. Output the input box to the div. It will appear under the animal image:
    divvy.appendChild(input);

} // end loop

// 20. Reload the page. We should have 12 divs, each with the cow.

// We need to make the **checkSpelling** function before reloading the page in the browser. If the function referred to in the listener does not exist at that point, we'll get an error.

// this keyword

// Inside a function, the **this** keyword refers to the object that called the function. In the **checkSpelling** function, **this** is the input box:

// 32. Define the **checkSpelling** function and start by getting the **value** 
//.    of the input element--whatever the user typed into the box:
function checkSpelling() {

    // 33. Compare the user input to the English, pinyin and alternate (also) spelling. 
    //.    The user input needs to match *one* of the three correct spellings:
    console.log('this.eng:', this.eng);
    console.log('this.aka:', this.aka);
    console.log('this.chi:', this.chi);

    // 34. If the user input is correct (matches one of the accepted spellings), 
    //.    turn the input box green; else turn the box red:
    if(this.value == this.eng || this.aka.includes(this.value) || this.value == this.chi) {
        this.style.backgroundColor = '#292';
    } else {
        this.style.backgroundColor = '#922';
    }
    this.style.color = '#fff';
    
} // close function
 
// 35. Reload the page. Each box should have an animal pic and an input box.

// 36. Enter a spelling in a box and hit Enter. 
// - if the spelling is correct, the input box turns green. 
// - else, the spelling is incorret, so the box turns red.

// END: Lesson 06.01
// NEXT: Lesson 06.02