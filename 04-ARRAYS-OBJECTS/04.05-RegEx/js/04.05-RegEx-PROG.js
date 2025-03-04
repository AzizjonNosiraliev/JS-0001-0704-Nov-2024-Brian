/*  Lesson 04.05 - START

Some Regex Syntax:
      / /     means there is a regex expression inside the / /
      \s      means "one space"
      \s+     means "one or more spaces" as group
      /\s/    means find space
      /\s+/   means find one or more consecutive spaces
      g       means global (all instances)
      /\s/g   means find all spaces
*/

// Regex works in conjunction with str.replace() and str.replaceAll() methods, with the gibberhishy Regex being the searched pattern to find

// str.replace(find,replace) takes two args: a substring to find and a substring to replace with
// str.replace only hits the first occurrence of the string
let animal = "elephant";
let misspelledAnimal = animal.replace("e","a");
console.log(misspelledAnimal); // alephant

// str.replaceAll(find,replace) takes two args: a substring to find and a substring to replace with
// str.replaceAll hits ALL occurrences of the string
misspelledAnimal = animal.replaceAll("e","a");

// convert array of words to news headline
const newsHeadlineArr = ["Mets", "Lose", "to", "Dodgers", "in", "2024", "NLCS"];
let newsHeadline = newsHeadlineArr.join(" ");
console.log(newsHeadline); // Mets Lose to Dodgers in 2024 NLCS

// also convert array to file name: "mets-lose-to-dodgers-in-2024-nlcs.html"
let newsHeadlineWebpage = newsHeadlineArr.join("-").toLowerCase() + ".html";
console.log(newsHeadlineWebpage); // mets-lose-to-dodgers-in-2024-nlcs.html

// same as above, except using replaceAll()
let sportsNews = "Baseball World Waits to See Who Will Sign Juan Soto";
let sportsWebpage = sportsNews.replaceAll(" ", "-").toLowerCase() + ".html";
console.log("sportsWebpage:", sportsWebpage); 
// baseball-world-waits-to-see-who-will-sign-juan-soto.html

// replace() and replaceAll() work fine for simple replacements of, say, one char with another
// but for complex replacements, such as removing all the punctuation (that is, replacing all punctuation symbols with empty strings), we need to use Regex for the "find" part -- we still use replace, but the find part can be tricky and require a Regex expression to get the job done

let str = `  A B  C   D EF `;
// replace all spaces with #
str = str.replaceAll(" ", "#");
console.log('str:', str); // "##A#B##C###D#EF#"

str = `  A B  C   D EF `;
// replace just the first spaces with #
str = str.replace(" ", "#");
console.log('str:', str); // # A B  C   D EF

// RegEx expressions to replace substring:
// regex version of the above replace of 1st space:
str = `  A B  C   D EF `;
str = str.replace(/\s/, "#");
console.log('/\s/ replace 1st space:\n', str); // # A B  C   D EF 

// regex version of replaceAll spaces with #:
str = `  A B  C   D EF `;
str = str.replace(/\s/g, "#");
console.log('/\s/g replace all spaces:\n', str); // ##A#B##C###D#EF#

str = `  A B  C   D EF `;
str = str.replace(/\s+/g, "#");
console.log('/\s+/g replace all space groups w ONE hashtag per group:\n', str);  // #A#B#C#D#EF#

// remove all spaces without regex:
// replace all spaces w empty strings
str = `  A B  C   D EF `;
str = str.replaceAll(" ", "");
console.log('replace all spaces w empty strings:', str); // "ABCDEF"

// remove all spaces with regex: replace spaces w empty strings
str = `  A B  C   D EF `;
str = str.replace(/\s/g, "");
console.log('/\s/g remove all spaces : ',str); // "ABCDEF"

// replaceAll() is one way to replace all instances of a substring with another substring:
let statement = "I am a cat person, because cats are the best!";
console.log(statement);
statement = statement.replaceAll("cat", "dog");
console.log(statement);
// replaceAll(substring_to_replace, new_substring) 
// replaceAll() replaces all occurrences of the substring. 

// replaceAll() is an ES7 feature, circa 2019
// 'cat', 'dog'
console.log(); // I am a dog person, because dogs are the best!

// now back to cat with another way of replacing all instances
// RegEx alternative to replaceAll (g means 'globally'):
statement = statement.replace(/dog/g, 'cat');
console.log(statement); // I am a cat person, because cats are the best!

/* 
More Regex Syntax:

\d	          one digit (0-9)
\d\d          two consecutive digits
file_\d\d	    "file_" followed by any two digits
file_\d+	    "file_" followed by all consecutive digit(s) 
*/
// 'car_file_807448.jpg'
// replace w new naming standard:
// 'pic'

let fileName1 = 'car_file_807448.jpg';
fileName1 = fileName1.replace(/_file_\d+/, "Pic1");
console.log('fileName1:', fileName1); // carPic1.jpg

let fileName2 = 'car_file_34.jpg';
fileName2 = fileName2.replace(/_file_\d+/, "Pic2");
console.log('fileName2:', fileName2); // carPic2.jpg

let fileName3 = 'car_file_845673456.jpg';
fileName3 = fileName3.replace(/_file_\d+/, "Pic3");
console.log('fileName3:',fileName3); // carPic3.jpg

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
let nycHistory = `
    New York: Key Player in American Revolutionary War Boston and Philadelphia garner most of the credit for being the birthplaces of American independence, but did you know that New York -- named after King George's brother! -- played no small role itself? The "Sons of Liberty" campaigned against British authority in New York City, and the Stamp Act Congress of representatives from throughout the Thirteen Colonies met in the city in 1765 to organize resistance to Crown policies. The city's strategic location and status as a major seaport made it the prime target for British seizure in 1776. General George Washington lost a series of battles from which he narrowly escaped (with the notable exception of the Battle of Harlem Heights, his first victory of the war), and the British Army occupied New York and made it their base on the continent until late 1783, attracting Loyalist { } [ ] ( ) + = * / \ | refugees. The city served as the national capital under the Articles of Confederation from 1785 to 1789, and briefly served as the new nation's capital in 1789-90 under the United States Constitution. [adapted from Wikipedia; headline and lead question added] ^ # $ % & @ York, York. York; York:`;

console.log('nycHistory:', nycHistory);

/* 
Regex Expression: remove all punctuation (replace w empty string):

replace() works as well as replaceAll(), due to the "g flag" for "global" (all instances)
^\w        not a word char (word chars include digits)
^\s        not a space or whitespace
^\w\s      not word char, not space
[^\w\s]/g   not word char, not space, globally (all)

remove all non-word chars and all non-spaces
digits 0-9 are word chars, so digits NOT removed
this will remove all punctuation and special chars:
*/
let nycNoPuncNoSpecChars = nycHistory.replace(/[^\w\s]/g, "");
console.log('nycNoPuncNoSpecChars:\n',nycNoPuncNoSpecChars); 
// no punc, no special chars, but has extra spaces

// clean up text by removing extra spaces
// replace space and multi-space sequences w one space
nycNoPuncNoSpecChars = nycNoPuncNoSpecChars.replace(/\s+/g, " ");
console.log('nycNoPuncNoSpecChars:\n',nycNoPuncNoSpecChars); 

// no punc, no special chars, no extra spaces

// remove all digits (replace w empty string): [0-9] or \d
// nycNoPuncNoSpecChars = nycNoPuncNoSpecChars.replace(/[0-9]/g, "");
nycNoPuncNoSpecChars = nycNoPuncNoSpecChars.replace(/\d/g, "");
console.log('nycNoPuncNoSpecChars:\n',nycNoPuncNoSpecChars); 
// removing digits leaves extra space where year used to be: ' 1778 '
// so remove the extra spaces left by digit removal:

/*
RegEx links:
https://www.rexegg.com/
https://www.rexegg.com/regex-quickstart.html
https://www.rexegg.com/regex-uses.html
*/

// END: Lesson 04.05
// NEXT: Lesson 04.06