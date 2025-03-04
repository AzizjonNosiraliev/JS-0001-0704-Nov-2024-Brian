// Lesson 06.03 - FINAL

// Chinese Zodiac Animals - Part 3

// 1. Get the DOM elements
const arr = [...animals]; // copy array of animal obj, so as not to change original
const section = document.querySelector('section'); // get section that holds animals
const menu = document.querySelector('select'); // get menu for choosing sort order
menu.addEventListener('change', sortAnimals); // call function on menu change
const descCB = document.querySelector('input'); // get Descending checkbox

// 2. Have the checkbox call a function on change; this function is short, so we can just write it as an anonymous inline callback function:
descCB.addEventListener('change', () => {

    // 3. Reverse the order of the animals
    arr.reverse();

    // 4. Re-render the animals
    renderAnimals();
});

// 5. Define the renderAnimals function that makes and outputs the 12 animal divs
function renderAnimals() { // output the 12 animals to the section

    // 6. clear section to make way for fresh output
    section.innerHTML = "";

    // 7. Loop the array of animal objects
    arr.forEach(animal => { 

        // 8. Make a div
        const divvy = document.createElement('div'); 

        // 9. Assign class to div
        divvy.className = 'divvy'; 

        // 10. Output div to section
        section.appendChild(divvy);

        // 11. make an image to hold the animal pic
        const animalImg = new Image();

        // 12. Concat path to jpg
        animalImg.src = `images/animals/${animal.eng}.jpg`;

        // 13. Assign class to animal img
        animalImg.className = 'animal-pic'; 

        // 14. Output the animal image to the div
        divvy.appendChild(animalImg); 

        // 15. Make image to hold Chinese character
        const charImg = new Image(); 

        // 16. Set the source by concatenating the path to the character jpg
        charImg.src = `images/chars/char-${animal.chr}.jpg`;

        // 17. Sssign class to character img
        charImg.className = 'chinese-char'; 

        // 18. Give divvy an eng property
        divvy.eng = animal.eng;

        // 19. Output the character image to the div
        divvy.appendChild(charImg); 

        // 20. Make a span tag to hold the english name of the animal
        const engSpan = document.createElement('span'); 
        engSpan.className = 'english'; // assign class to span tag
        engSpan.textContent = animal.eng; // output Pinyin text to span (HTML entities require innerHTML)
        // engSpan.i = i; // output English name text to span tag
        divvy.appendChild(engSpan); // output span tag to divvy


        // 21. Make a span tag to hold Pinyin name of animal
        const pinSpan = document.createElement('span'); // make a span tag
        pinSpan.className = 'pinyin'; // assign class to span tag
        pinSpan.innerHTML = animal.pin; // output Pinyin text to span (HTML entities require innerHTML)
        divvy.appendChild(pinSpan); // output Pinyin span name to divvy

        // 22. Make a p tag to hold a string of animal years in 12 year intervals
        const yearsP = document.createElement('p'); // make a p tag
        yearsP.className = 'zodiac-year'; // assign class to p tag
        divvy.appendChild(yearsP); // append p tag to divvy

        // 23. Run a loop that starts w current year, and concats
        // years backwards in time, in increments of 12 years 
        let yearsStr = `<span> ${animal.yr} </span><br><br>`; // string of years begins w current year
        for(let y = 12; y <= 120; y += 12) { // loop from 12-168 in increments of 12
            yearsStr += (animal.yr - y) + "<br>"; // concat next year in the cycle
        }
        yearsP.innerHTML = yearsStr; // output animal yr string to p-tag

        // 24. Make info div, which sits on top of divvy and appears-disappears on click
        const infoDiv = document.createElement('div');
        infoDiv.addEventListener('click', showHideInfo);
        infoDiv.addEventListener('dblclick', showHideInfo);
        infoDiv.innerHTML = `<p class="animal-name">${animal.eng}</p>
        <p>Partners:<br>${animal.partners}</p>
        <p>Characteristics:<br>${animal.traits}</p>`;
        infoDiv.className = 'divvy animal-info';
        divvy.appendChild(infoDiv);

        // SOUND HINTS:
        // Make an img and set the src to the sound icon in images folder.
        // every divvy needs the sound icon, same icon each time.
        // have the sound icon call a playSound() function when clicked.
        // assign 'sound-icon' class; this positions icon in lower corner of divvy
        // make the icon small enough so as not to crowd other elements, but big enough
        // so user can still tell it's a sound icon
        // each icon img needs an eng property assigned to it so that the function
        // can know which animal the icon belongs to

    }); // end forEach()
} // end renderAnimals() function

// 25. Call the renderAnimals function
renderAnimals(); // render animals on page load; default order is by Eng, asc

// 26. Define the sortAnimals() which runs on change to select menu:
function sortAnimals() {

    // 27. Clear the animal divs to make way  for fresh output
    section.innerHTML = "";

    // 28. Get sort menu value: "eng", "chi" or "yr"
    let k = menu.value;

    // 29. Do a big ternary:
    // if sort key is "yr" (year), do a number sort in ascending order
    // if sort key is "eng" or "chi", do a string sort in ascending order
    // use dynamic obj key accessor, where a[k] is either "eng" or "chi":
    k == "yr" ? arr.sort((a,b) => a.yr - b.yr) : arr.sort((a,b) => a[k] > b[k] ? 1 : -1);

    // 30. If checkbox is checked, reverse the sort
    if(descCB.checked) arr.reverse(); // if Descending is checked; reverse sort

    // 31. Re-render the freshly sorted animals
    renderAnimals(); // re-render the sorted animals
    // orderWheelSlices();
}

// 32. Define a function that shows-hides content
let infoShowing = false;
function showHideInfo() {
    let infoOpacity;
    infoShowing ? infoOpacity = 0 : infoOpacity = 1;
    this.style.opacity = infoOpacity;
    infoShowing = !infoShowing; // flip boolean
}

// END: Lesson 06.03
// NEXT: Lesson 06.04