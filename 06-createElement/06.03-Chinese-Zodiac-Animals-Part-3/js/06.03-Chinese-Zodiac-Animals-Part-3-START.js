// Lesson 06.03 - FINAL

// Chinese Zodiac Animals - Part 3

// 1. Get the DOM elements
// copy array of animal obj, so as not to change original
// get section that holds animals
// get menu for choosing sort order
// call function on menu change
// get Descending checkbox

// 2. Have the checkbox call a function on change; this function is short, so we can just write it as an anonymous inline callback function:


    // 3. Reverse the order of the animals


    // 4. Re-render the animals


// 5. Define the renderAnimals function that makes and outputs the 12 animal divs

// output the 12 animals to the section

    // 6. clear section to make way for fresh output


    // 7. Loop the array of animal objects


        // 8. Make a div


        // 9. Assign class to div
        // 'divvy'

        // 10. Output div to section


        // 11. make an image to hold the animal pic
  

        // 12. Concat path to jpg
        `images/animals/ .jpg`;

        // 13. Assign class to animal img
        // 'animal-pic'

        // 14. Output the animal image to the div


        // 15. Make image to hold Chinese character
   

        // 16. Set the source by concatenating the path to the character jpg
        // `images/chars/char- .jpg`;

        // 17. Sssign class to character img
        // 'chinese-char'

        // 18. Give divvy an eng property
     

        // 19. Output the character image to the div
    

        // 20. Make a span tag to hold the english name of the animal

        // 'english' // assign class to span tag
        
        // output Pinyin text to span (HTML entities require innerHTML)
        // engSpan.i = i; // output English name text to span tag
        // output span tag to divvy


        // 21. Make a span tag to hold Pinyin name of animal
        // make a span tag
        // 'pinyin' // assign class to span tag
        
        // output Pinyin text to span (HTML entities require innerHTML)
        // output Pinyin span name to divvy

        // 22. Make a p tag to hold a string of animal years in 12 year intervals
        // make a p tag
        // 'zodiac-year; // assign class to p tag
        // append p tag to divvy

        // 23. Run a loop that starts w current year, and concats
        // years backwards in time, in increments of 12 years 
        // `<span> </span><br><br>`; // string of years begins w current year
        // loop from 12-168 in increments of 12
            // concat next year in the cycle
    
        // output animal yr string to p-tag

        // 24. Make info div, which sits on top of divvy and appears-disappears on click
        // `<p class="animal-name"></p>
        // <p>Partners:<br></p>
        // <p>Characteristics:<br></p>`;
        // 'divvy animal-info';
        

    // end forEach()
// end renderAnimals() function

// 25. Call the renderAnimals function
// render animals on page load; default order is by Eng, asc

// 26. Define the sortAnimals() which runs on change to select menu:


    // 27. Clear the animal divs to make way  for fresh output


    // 28. Get sort menu value: "eng", "chi" or "yr"

    // 29. Do a big ternary:
    // if sort key is "yr" (year), do a number sort in ascending order
    // if sort key is "eng" or "chi", do a string sort in ascending order
    // use dynamic obj key accessor, where a[k] is either "eng" or "chi":
    

    // 30. If checkbox is checked, reverse the sort
    // if Descending is checked; reverse sort

    // 31. Re-render the freshly sorted animals
    // re-render the sorted animals
    // orderWheelSlices();


// 32. Define a function that shows-hides content

// flip boolean


// END: Lesson 06.03
// NEXT: Lesson 06.04