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


    // 2. Get the wordCloudTag elem


    // 3. Use RegEx to remove punctuation, special characters and digits,
    // none of which we want included in the word cloud


    // 4. Make an array of the individual words of the passage


    // 5. Declare a new object to hold the word frequency map:


    // 6. Loop the array of words, word by word:
    

        // 7. If the word is not a stopword:
     

            // 8. If the frequency / passage object already has a key for that word
       

                // 9. Increment the count for that word key by 1
              

            // 10. Else, the object does not already have a key for this word"
       

                // 11. Make a key and set its initial value to 1
               
       
    // 12. Declare a new obj to hold only key-value pairs where value is 5+


    // 13. Loop the object keys:
   

        // 14. if the current word occurs at least 5 times:
        // if key val is 5+

            // 16. Make div for that word for deployment to the word cloud
            

            // 17. Assign the word text content for that dib


            // 18. Assign the pre-written class to the div with the word in it
      

            // 19. Set the font size as 3x the frequency of the word
            // so treehouse, which occurs 28 times will have a font size of 84px 


            // 20. Set the color of the word based on its font size
            const colors = ["white", "tan", "pink", "yellow", "orange", "aqua","forestgreen", "yellowgreen",  "cornflowerblue", "lime"];

            // 21. Having all the words lying horizontally is boring for a word cloud, so calculate a random rotation within a narrow range of -10 to +10
            // 0-10
            // make r negative half the time


            // 22. Apply the rotation to the div:
          
            
            // 23. Output the div to the word cloud element


            // 24. Save that 5+ key-value to new object
            // this is not required to build the word cloud in the DOM
            // it's just to have as an obj to log in the console

// 25. Call the function, which will build the word cloud in the DOM
// and also output the frequency map to the Console

// END: Lesson 05.06
// NEXT: Lesson 06.01