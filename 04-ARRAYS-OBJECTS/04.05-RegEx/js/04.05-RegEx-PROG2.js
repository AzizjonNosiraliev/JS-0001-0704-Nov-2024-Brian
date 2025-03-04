/*  Lesson 04.05 - PROG

Some Regex Syntax:
      / /     means there is a regex expression inside the / /
      \s      means "one space"
      \s+     means "one or more consecutive spaces"
      /\s/    means FIND "one space"
      /\s+/   means FIND "one or more consecutive spaces"
      g       means global (all instances)
      /\s/g   means find all spaces
*/

// RegEx expressions to replace substring:

let str = `  A B  C   D EF `;
// use string method replaceAll() to replace all spaces with #
str = str.replaceAll(" ", "#");
console.log('str:', str); // "##A#B##C###D#EF#"

// try the regex version of same: replace all spaces with #
str = `  A B  C   D EF `;
str = str.replace(/\s/g, "#");
console.log('str:', str); // "##A#B##C###D#EF#"

// same as above, but only ever 1 hash tag in a row:
str = `  A B  C   D EF `;
str = str.replace(/\s+/g, "#");
console.log('str:', str); // #A#B#C#D#EF#

// replace only the first space w hash tag:
str = `  A B  C   D EF `;
str = str.replace(/\s/, "#");
console.log('/\s/ replace 1st space:', str);  // "# A B  C   D EF " 

str = `  A B  C   D EF `;
str = str.replace(/\s+/, "#");
console.log('/\s+/  replace 1st instance of consecutive spaces:', str); 
// "#A B  C   D EF "

// remove all spaces using replaceAll()
str = `  A B  C   D EF `;
str = str.replaceAll(" ", "");
console.log('remove all spaces w replaceAll():', str); // "ABCDEF"

str = `  A B  C   D EF `;
str = str.replace(/\s+/g, "");
console.log('/\s/g regex remove all spaces:', str); // "ABCDEF"

// given this string:
let direc = 'west';
// capitalize it
direc = direc[0].toUpperCase() + direc.slice(1); 
console.log(direc); // West
// uppercase it:
direc = direc.toUpperCase();
console.log(direc); // WEST

// LAB CHALLENGE: title case: capitalize all words
let bdwyPlay = 'west side story'; // West Side Story
let movie = "wolf of wall street"; // Wolf of Wall Street
let novel = "the old man and the sea"; // The Old Man and the Sea
// refactor this code so that it's in a function that takes in 
// a movie or book or play name that is lower case and it
// capitalizes all the words and returns the result BUT
// it does NOT capitalize any junk words (see array)
// UNLESS the junk word is the first word of the array
// test on the 3 examples
let junkWords = ["a", "an", "and", "at", "for", "of", "the", "with"];
const bdwyPlayWordsArr = bdwyPlay.split(' '); 
console.log(bdwyPlayWordsArr); // ['west', 'side', 'story']
let titleCase = "";
// loop the array:
for(word of bdwyPlayWordsArr) {
    // capitalize word
    word = word[0].toUpperCase() + word.slice(1);
    console.log('loop word:', word);
    titleCase += word + ' ';
}
// get rid of trailing space:
titleCase = titleCase.slice(0,-1);
console.log(titleCase);

// replaceAll() is one way to replace all instances of a substring with another substring:
let statement = "I am a cat person, because cats are the best!";
console.log(statement);
// replaceAll(substring_to_replace, new_substring) 
// replaceAll() replaces all occurrences of the substring. 
// replaceAll() is an ES7 feature, so fairly newish (circa 2019)
statement = statement.replaceAll('cat', 'dog');
console.log(statement); // I am a dog person, because dogs are the best!

// now back to cat with another way of replacing all instances
// RegEx alternative to replaceAll (g means 'globally'):
// statement = statement.replace(RegEx, 'cat');
statement = statement.replace(/dog/g, 'cat');
console.log(statement); // I am a cat person, because cats are the best!

/* 
More Regex Syntax:

\s            first space
\s+           first group of spaces
\d	          first digit (0-9)
\d\d          two consecutive digits
\d+           all consecutive digits
file_\d\d	  "file_" followed by any two digits
file_\d+	  "file_" followed by all consecutive digit(s) 
*/
let fileName = 'car_file_8074467657567567568.jpg';
console.log('fileName:', fileName); 
// replace w new naming standard:
// fileName = fileName.replace(RegEx, 'pic');
fileName = fileName.replace(/file_\d+/, 'pic');
console.log('fileName:', fileName); // car_pic.jpg

/*
\w	        word character: letter, digit (0-9) or underscore  

\s	        whitespace character: space, tab, newline, carriage return, vertical tab	

^           not
^\w         not a word character (could be punctuation or special char)

^\w\s       everything NOT word chars (incl digits) and spaces

RegEx Recipe:
Removing punctuation from a string using ReGex
The following text contains lots of punctuation and special characters: 
: - ! ? " " , . ' ^ # $ % & @ + = * / \ { } [ ] ( )
*/
let nycHistory = `New York: Key Player in American Revolutionary War Boston and Philadelphia garner most of the credit for being the birthplaces of American independence, but did you know that New York -- named after King George's brother! -- played no small role itself? The "Sons of Liberty" campaigned against British authority in New York City, and the Stamp Act Congress of representatives from throughout the Thirteen Colonies met in the city in 1765 to organize resistance to Crown policies. The city's strategic location and status as a major seaport made it the prime target for British seizure in 1776. General George Washington lost a series of battles from which he narrowly escaped (with the notable exception of the Battle of Harlem Heights, his first victory of the war), and the British Army occupied New York and made it their base on the continent until late 1783, attracting Loyalist { } [ ] ( ) + = * / \ | refugees. The city served as the national capital under the Articles of Confederation from 1785 to 1789, and briefly served as the new nation's capital in 1789-90 under the United States Constitution. [adapted from Wikipedia; headline and lead question added] ^ # $ % & @ York, York. York; York:`;

console.log('nycHistory:\n', nycHistory);

/* 
Regex Expression: remove all punctuation (replace w empty string):

replace() works as well as replaceAll(), due to the "g flag" for "global" (all instances)
^\w        not a word char (word chars include digits)
^\s        not a space or whitespace
^\w\s      not word char, not space
[^\w\s]g   not word char, not space, globally (all)

remove all non-word chars and all non-spaces
digits 0-9 are word chars, so digits NOT removed
this will remove all punctuation and special chars:
*/
// let nycNoPunctNoSpecChars = nycHistory.replace(RegEx, '');
let nycNoPunctNoSpecChars = nycHistory.replace(/[^\w\s][0-9]/g, '');
console.log('nycNoPunctNoSpecChars:\n', nycNoPunctNoSpecChars); 
// no punc, no special chars, but has extra spaces

// clean up text by removing extra spaces
// replace space and multi-space sequences w one space
let nycNoPunctNoSpecCharsTrim = nycNoPunctNoSpecChars.replace(/\s+/g, ' ');

console.log('nycNoPunctNoSpecCharsTrim:\n', nycNoPunctNoSpecCharsTrim); 
// no punc, no special chars, no extra spaces

// remove all digits
// (replace w empty string):
let nyc = nycNoPunctNoSpecCharsTrim.replace(/[0-9]/g, '');
// removing digits leaves extra space where year used to be: ' 1778 '
// so remove the extra spaces left by digit removal:
console.log('nyc:\n', nyc);

/*
RegEx links:
https://www.rexegg.com/
https://www.rexegg.com/regex-quickstart.html
https://www.rexegg.com/regex-uses.html
*/

// END: Lesson 04.05
// NEXT: Lesson 04.06