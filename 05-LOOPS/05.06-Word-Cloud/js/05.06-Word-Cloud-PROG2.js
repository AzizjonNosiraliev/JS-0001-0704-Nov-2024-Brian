/* Lesson 05.08 - FINAL

Word Frequency Map for a Word Cloud

A Word Cloud is a visual representation of the frequency of words in a string, 
such as found in a blog post or other article; in a word cloud, the most frequently 
occurring words appear in the largest font size in order to do this, the frequency of words // must be known. Therefore, before we can make a Word Cloud, we have to make what is called a Word Frequency Map from of the words. This takes the form of an Object, where the keys are unique words and the value of each key is the number of times the word occurs. To make the Word Frequency Map, we have to convert the text to an array, with each item a word. Then we loop through the array of words. every time a unique word is found, the object is assigned that word as a new key with an initial value of 1.
the next time the word is encounterd, no new key is made, but rather the value of the existing key is incremented by 1 the resulting Word Frequency Map can then be used to make a Word Cloud by setting the font size of each word based on the frequency, with most frequent words biggest also, since a Word Cloud only contains interesting, important keywords, there needs to be a filter that prevents what are known as stopwords from being included in the Word Frequency Map. Stopwords include such common words as 'the', 'and', 'of', 'on', 'with', etc.


// 1. Define a function with 3 params:
    - passageStr: a passage to make a word cloud from
    - stopwords: an array of common words, such as 'and' and 'the' which are NOT to be included in the word cloud
    - wordCloud: the element on the page where the word cloud is to appear
 */
function makeWordFreqMap(passage, stopwords) {

    console.log(passage); // the raw inputted text may include ’

    // 2. Get the word Cloud Tag elem
    const wordCloudDiv = document.getElementById('word-cloud');

    // 3. replace slanted apostrophes w straight up single quotes
    passage = passage.replaceAll("’","'");

    // 3B. Use RegEx to remove punctuation, special characters and digits, none of which we want included in the word cloud
    // ^A-Za-z-' is everything that is not an uppercase letter, a lowercase letter, a dash or a single quote 
    // ^\w keeps digits, which we don't want for word freq map / word cloud
    let cleanedText = passage.replace(/[^A-Za-z-'\s]/g, "").toLowerCase();
    console.log('cleanedText:', cleanedText);

    // 4. Make an array of the individual words of the passage
    const wordsArr = cleanedText.split(" ");
    console.log(wordsArr.slice(0,100));

    // 5. Declare a new object to hold the word frequency map:
    const wordFreqObj = {};

    // 6. Loop the array of words, word by word:
    for(word of wordsArr) {

        // 7. If the word is not included in stopwords array:
        if(!stopwords.includes(word)) {

            // 8. If the frequency / passage object 
            //.   already has a key for that word
            if(wordFreqObj[word]) {
                // 9. Increment the count for that word key by 1
                wordFreqObj[word]++;
            // 10. Else, the object does not already have 
            //.  a key for this word
            } else {
                // 11. Make a key and set its initial value to 1
                wordFreqObj[word] = 1;
            }      

        } // end if !stopwords includes

    } // end for of loop
    
    // log the object:
    console.log('wordFreqObj:', wordFreqObj);
       
    // 12. Declare a new obj to hold only key-value pairs where value is 5+
    const min5Obj = {};

    // 13. Loop the object by key and value, so that we have access to
    //.    each individually:
    for(const [key, val] of Object.entries(wordFreqObj)) {

        // 14. if the current word occurs at least 5 times:
        // if key val is 5+
        if(val >= 5) {

            console.log('key:', key, 'val:', val);

            // 16. Make div for that word for deployment to the word cloud
            const wordDiv = document.createElement('div');

            // 17. Assign the word text content for that dib
            wordDiv.textContent = key;

            // 18. Assign the pre-written class to the div with the word in it
            wordDiv.className = 'word-cloud-div';

            // 19. Set the font size as 3x the frequency of the word
            // so treehouse, which occurs 28 times will have a font size of 84px 
            let fontSz = val * 3;
            wordDiv.style.fontSize = `${fontSz}px`;

            // 20. Set the color of the word based on its font size
            const colors = ["white", "orange", "pink", "yellow", "tan", 
            "aqua", "forestgreen", "yellowgreen", "cornflowerblue", "lime"];
            let colr = "";
            if(fontSz < 16) { // min font size
                colr = colors[0];
            } else if(fontSz < 21) {
                colr = colors[1];
            } else if(fontSz < 27) {
                colr = colors[2];
            } else if(fontSz < 33) {
                colr = colors[3];
            } else if(fontSz < 39) {
                colr = colors[4];
            } else if(fontSz < 48) {
                colr = colors[5];
            } else if(fontSz < 54) {
                colr = colors[6];
            } else if(fontSz < 60) {
                colr = colors[7];
            } else if(fontSz < 70) {
                colr = colors[8];
            } else {
                colr = colors[9];
            }

            wordDiv.style.color = colr;

            // 21. Having all the words lying horizontally is boring for a word cloud, 
            //.    so calculate a random rotation within a narrow range of -10 to +10
            let r = ~~(Math.random() * 8 + 2); // 2-10
            // make r negative half the time
            if(Math.random() - 0.5 < 0) {
                r = -r;
            }

            // 22. Apply the rotation to the div:
            wordDiv.style.transform = `rotate(${r}deg)`;
          
            // 23. Output the div to the word cloud element
            wordCloudDiv.appendChild(wordDiv);

            // 24. Save that 5+ key-value to new object
            // this is not required to build the word cloud in the DOM
            // it's just to have as an obj to log in the console

        } // close if val <= 5

   } // close key loop of wordFreqObj

} // end function

// 25. Call the function, which will build the word cloud in the DOM
// and also output the frequency map to the Console
makeWordFreqMap(treehouse, STOPWORDS);

// END: Lesson 05.06
// NEXT: Lesson 06.01