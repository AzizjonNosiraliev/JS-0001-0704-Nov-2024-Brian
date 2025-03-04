/* Lesson 05.08 - FINAL

Word Frequency Map for a Word Cloud

A Word Cloud is a visual representation of the frequency of words in a string, 
such as found in a blog post or other article; in a word cloud, the most frequently 
occurring words appear in the largest font size in order to do this, the frequency of words // must be known. Therefore, before we can make a Word Cloud, we have to make what is called a Word Frequency Map from of the words. This takes the form of an Object, where the keys are unique words and the value of each key is the number of times the word occurs. To make the Word Frequency Map, we have to convert the text to an array, with each item a word. Then we loop through the array of words. every time a unique word is found, the object is assigned that word as a new key with an initial value of 1.
the next time the word is encounterd, no new key is made, but rather the value of the existing key is incremented by 1 the resulting Word Frequency Map can then be used to make a Word Cloud by setting the font size of each word based on the frequency, with most frequent words biggest also, since a Word Cloud only contains interesting, important keywords, there needs to be a filter that prevents what are known as stopwords from being included in the Word Frequency Map. Stopwords include such common words as 'the', 'and', 'of', 'on', 'with', etc.


// 1. Define a function called makeWordCloud() with 3 params:
    - passage: a passage of text to make a word cloud from
    - stopwords: an array of common words, such as 'and' and 'the' which are NOT to be included in the word cloud
    - container: the element on the page to contain the word cloud
 */
function makeWordCloud(passage,stopwords,container,minFreq=5) {
    const colors = ["tan", "pink", "orange", "dodgerblue", "forestgreen", "coral", "yellowgreen", "cornflowerblue", "lime"];
    // 2. Get word cloud container by id, as container argument
    const wcContainer = document.getElementById(container);
    // 3. Use RegEx to remove punctuation, special characters and digits, none of which we want included in the word cloud
    // passage = passage.replace(/[^\w\s][0-9]/g, "");
    passage = passage.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[0-9]/g, '').trim().toLowerCase();
    // 4. Make an array of the individual words of the passage
    const words = passage.split(" ");
    // 5. Declare a new object to hold the word frequency map:
    const obj = {};
    // 6. Loop the array of words, word by word:
    for(wd of words) {
        // 7. If the word is not a stopword:
        if(!stopwords.includes(wd)) {
            // 8. If the frequency / passage object already has a key for that word
            if(obj[wd]) {
                // 9. Increment the count for that word key by 1
                obj[wd]++;
            } else {
            // 10. Else, the object does not already have a key for this word"
                // 11. Make a key and set its initial value to 1
                obj[wd] = 1;
            }
        } // end if stopword check
    } // end loop that populates word freq obj
    // 12. Declare a new obj to hold only key-value pairs where value is 5+
    const min5Obj = {};
    // 13. Loop the object key by key:
    for(key in obj) {
        // 14. if the current word occurs at least 5 times: if key val is 5+
        if(obj[key] >= minFreq) {
            // 16. Make div for that word for deployment to the word cloud
            const wordBox = document.createElement('div');
            // 17. Assign the word text content for that div
            wordBox.textContent = key;
            // 18. Assign the pre-written class to the div with the word in it
            wordBox.className = 'word-box';
            // 19. Set the font size as 3x the frequency of the word so treehouse, which occurs 28 times will have a font size of 84px 
            let fz = (3 * obj[key]) + 5;
            wordBox.style.fontSize = fz + "px";
            // 20. Set the color of the word randomly:
            // 21. Generate a rand int in the range of the colors array (0-9):
            let r = ~~(Math.random()*colors.length);
            wordBox.style.color = colors[r];
            // 22. Apply the rotation to the div:
            r = ~~(Math.random() * -20 + 10);
            wordBox.style.transform = `rotate(${r}deg)`;
            // 23. Output the div to the word cloud container element
            wcContainer.appendChild(wordBox);
            // 24. Save that 5+ key-value to new object
            // this is not required to build the word cloud in the DOM
            // it's just to have as an obj to log in the console
            min5Obj[key] = obj[key];

        } // end if obj[key] >= 5

    } // end for key of obj looping of obj by key
    console.log('min5Obj:', min5Obj);

} // end makeWordCloud() function

// 25. Call the function, which will build the word cloud in the DOM
// and also output the frequency map to the Console
makeWordCloud(treehouse,STOPWORDS,"word-cloud");

// END: Lesson 05.06
// NEXT: Lesson 06.01