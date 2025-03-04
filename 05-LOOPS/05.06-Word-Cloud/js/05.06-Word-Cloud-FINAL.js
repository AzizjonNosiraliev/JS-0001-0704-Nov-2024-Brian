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
function makeWordCloud(passageStr, stopwords, wordCloud) {

    // 2. Get the wordCloudTag elem
    const wordCloudTag = document.getElementById(wordCloud);

    // 3. Use RegEx to remove punctuation, special characters and digits,
    // none of which we want included in the word cloud
    passageStr = passageStr.replace(/[^\w\s]/g, '');
    passageStr = passageStr.replace(/[0-9]/g, '');

    // 4. Make an array of the individual words of the passage
    const passageArr = passageStr.toLowerCase().split(' ');

    // 5. Declare a new object to hold the word frequency map:
    const passageObj = {};

    // 6. Loop the array of words, word by word:
    for(word of passageArr) { 

        // 7. If the word is not a stopword:
        if(!stopwords.includes(word)) {

            // 8. If the frequency / passage object already has a key for that word
            if(passageObj[word]) {

                // 9. Increment the count for that word key by 1
                passageObj[word]++;

            // 10. Else, the object does not already have a key for this word"
            } else {

                // 11. Make a key and set its initial value to 1
                passageObj[word] = 1;
       
            }
        } 
    }

    // 12. Declare a new obj to hold only key-value pairs where value is 5+
    const passObjMin5 = {};

    // 13. Loop the object keys:
    for (key in passageObj) {

        // 14. if the current word occurs at least 5 times:
        if(passageObj[key] >= 5) { // if key val is 5+

            // 16. Make div for that word for deployment to the word cloud
            const wordDiv = document.createElement('div');

            // 17. Assign the word text content for that dib
            wordDiv.textContent = key;

            // 18. Assign the pre-written class to the div with the word in it
            wordDiv.className = 'word-cloud-div';

            // 19. Set the font size as 3x the frequency of the word
            // so treehouse, which occurs 28 times will have a font size of 84px 
            let fontSz = passageObj[key] * 3;
            wordDiv.style.fontSize = fontSz + 'px';

            // 20. Set the color of the word based on its font size
            const colors = ["white", "tan", "pink", "yellow", "orange", "aqua","forestgreen", "yellowgreen",  "cornflowerblue", "lime"];

            if(fontSz < 16) { // smallest size
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
            } else { // biggest font size
                colr = colors[9];
            }
    
            wordDiv.style.color = colr;

            // 21. Having all the words lying horizontally is boring for a word cloud, so calculate a random rotation within a narrow range of -10 to +10
            let r = ~~(Math.random() * 11); // 0-10
            if(Math.random() - 0.5 < 0) {
                r = -r; // make r negative half the time
            }

            // 22. Apply the rotation to the div:
            wordDiv.style.transform = `rotate(${r}deg)`;
            
            // 23. Output the div to the word cloud element
            wordCloudTag.appendChild(wordDiv);

            // 24. Save that 5+ key-value to new object
            // this is not required to build the word cloud in the DOM
            // it's just to have as an obj to log in the console
            passObjMin5[key] = passageObj[key]; 

        }
    }

}

// 25. Call the function, which will build the word cloud in the DOM
// and also output the frequency map to the Console
let treehouseObj = makeWordCloud(treehouse, STOPWORDS, "word-cloud");
console.log(treehouseObj);

// END: Lesson 05.06
// NEXT: Lesson 06.01