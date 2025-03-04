// Lesson 06.03 - PROG
// Chinese Zodiac Animals - Part 3

// 1. Get the DOM elements
// copy array of animal obj, so as not to change original
let animalsCopy = [...animals];
// get section that holds animals
const section = document.querySelector('section');
// get menu for choosing sort order
const sortMenu = document.querySelector('select');
// call function on menu change
sortMenu.addEventListener('change', sortAnimals);
// get Descending checkbox
const ckbox = document.getElementById('cb');
// 2. Have the checkbox call a function on change; this function is short, so we can just write it as an anonymous inline callback function:
ckbox.addEventListener('change', function() {
    // 3. Reverse the order of the animals
    animalsCopy.reverse();
    // 4. Re-render the animals
    renderAnimals();
});

// 5. Define the renderAnimals function that makes and outputs the 12 animal divs
function renderAnimals() {
// output the 12 animals to the section

    // 6. clear section to make way for fresh output
    section.innerHTML = "";

    // 7. Using forEach, iterate array of animal objects
    animalsCopy.forEach(function(animal) {

        // 8. Make a div
        const divvy = document.createElement('div');

        // 9. Assign class to div
        divvy.className = 'divvy';

        // 10. Output div to section
        section.appendChild(divvy);

        // 11. make an image to hold the animal pic
        const animalPic = new Image();

        // 12. Concat path to jpg
        animalPic.src = `images/animals/${animal.eng}.jpg`;

        // 13. Assign class to animal img
        animalPic.className = 'animal-pic';

        // 14. Output the animal image to the div
        divvy.appendChild(animalPic);

        // 15. Make image to hold Chinese character
        const chineseChar = new Image();

        // 16. Set the source by concatenating the path to the character jpg
        chineseChar.src = `images/chars/char-${animal.chi}.jpg`;

        // 17. Sssign class to character img
        chineseChar.className = 'chinese-char';

        // 18. Give divvy an eng property
        divvy.eng = animal.eng;

        // 19. Output the character image to the div
        divvy.appendChild(chineseChar);

        // 20. Make a span tag to hold the english name of the animal
        const engSpan = document.createElement('span');
        engSpan.className = 'english'; // assign class to span tag
        engSpan.textContent = animal.eng;
        divvy.appendChild(engSpan); // output span tag to divvy

        // 21. Make a span tag to hold Pinyin name of animal
        const pinSpan = document.createElement('span');
        pinSpan.className = 'pinyin'; // assign class to span tag
        pinSpan.innerHTML = animal.pin;
        divvy.appendChild(pinSpan); // output span tag to divvy
        
        // output Pinyin text to span (HTML entities require innerHTML)
        // output Pinyin span name to divvy

        // 22. Make a p tag to hold a string of animal years in 12 year intervals
        // make a p tag
        const yearsP = document.createElement('p');
        yearsP.className = 'zodiac-year';
        divvy.appendChild(yearsP);
        // 'zodiac-year; // assign class to p tag
        // append p tag to divvy

        // 23. Run a loop that starts w current year, and concats
        // years backwards in time, in increments of 12 years 
        // `<span> </span><br><br>`; // string of years begins w current year
        let yr = animal.year;
        let yearsStr = "";
        // loop from 12-168 in increments of 12
        for(let y = 0; y <= 132; y += 12) {
            // concat next year in the cycle
            if(y == 0) {
                yearsStr += `<span>${yr - y}</span><br>`;
            } else {
                yearsStr += (yr - y) + " ";
            }
        }
        // output animal yr string to p-tag
        yearsP.innerHTML = yearsStr;

        // 24. Make info div, which sits on top of divvy and appears-disappears on click
        // `<p class="animal-name"></p>
        // <p>Partners:<br></p>
        // <p>Characteristics:<br></p>`;
        // 'divvy animal-info';
        
    }); // end forEach()
} // end renderAnimals() function

// 25. Call the renderAnimals function
// render animals on page load; default order is by Eng, asc
renderAnimals();

// 26. Define the sortAnimals() which runs on change to select menu:
function sortAnimals() {

    // 28. Get sort menu value: "eng", "chi" or "year"
    let sortKey = sortMenu.value;

    // 29. Do an if-else that sorts by string or year key:
    // if sort key is "year")", do a number sort in ascending order
    if(sortKey == "year") {
        animalsCopy.sort(function(a,b) {
            return a.year - b.year;
        });
    
    } else { // sort key is "eng" or "chi", so do a string sort
        animalsCopy.sort(function(a,b) {
            // use dynamic obj key accessor, where a[k] is either "eng" or "chi":
            return a[sortKey] > b[sortKey] ? 1 : -1;
        });
    }
    
    // 30. If Descending checkbox is checked, reverse the sort
    if(ckbox.checked) {
        animalsCopy.reverse();
    }
    
    // 31. Re-render the freshly sorted animals
    renderAnimals();

} // end sortAnimals()

// 32. Define a function that shows-hides content

// flip boolean


// END: Lesson 06.03
// NEXT: Lesson 06.04