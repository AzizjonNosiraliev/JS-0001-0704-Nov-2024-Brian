// Lesson 04.04 - START
// string methods

// string methods that double as array methods:
// includes(), indexOf(), lastIndexOf(), slice(),
// other string methods:
// toUpperCase(), toLowerCase(), replace(), replaceAll(), charAt(), split()

/* 
String are kind of like arrays of characters; both structures have:
- index position, with the first item (or character) at index 0
- length property, which returns the number of items (or characters)
- includes(X) method, which checks if X exists in the array or string 
- slice(A,B) method, which copies from index A to B (not including B)
- indexOf(X) method, which gets the index of the first instance of X
- lastIndexOf(X) method gets the index of the last instance of X

Naturally, there are also many differences between strings and arrays:
- strings can only store one value at a time ( pet = 'cat' ), whereas
  arrays can store many values at a time ( pets = ['cat', 'dog'] )
- const strings cannot be changed, whereas the items of const arrays 
  can be changed; the const part being "once an array, always an array"
- strings have methods not found in arrays, and vice-versa
*/

// string[index]

// 1. Declare a string, and then get the first and fourth characters:
let car = 'Corvette C3';
console.log(car[0]); // C
console.log(car[3]); // v
// string.length

// 2. Get the number of characters in car; spaces count:
console.log('car.length:', car.length); // 11

// 3. Get the last character of car, the same way you would get the last item of an array: slice(-1)
console.log(car.slice(-1)); // 3

// 4. Check if this 'Vette is a "C2" or "C3" model:
console.log('C2:', car.includes('C2')); // false
console.log('C3:', car.includes('C3')); // true

// 5. Get the index of the first and last "C":
console.log('first C:', car.indexOf('C')); // 0
console.log('last C:', car.lastIndexOf('C')); // 9

// slice(start_index, end_index_exclusive)
// CHALLENGE: using slice(), get the 'vette' in 'Corvette':
// assume "Corvette" is the start of the string
console.log('"vette" in "Corvette":', car.slice(3,8)); // 9
// BONUSE: get the "vette" without knowing where "Corvette" is in the string
let p1 = "Introducing the new 2025 Corvette Stingray";
console.log('"vette":', p1.slice(p1.indexOf('Corvette')+3,p1.indexOf('Corvette')+8)); // vette
let p2 = "The very fast 2025 Corvette Stingray";
console.log('"vette"', p2.slice(p2.indexOf('Corvette')+3,p2.indexOf('Corvette')+8)); // vette

// const array = string.split()
// split car into array of letters
const carChars = car.split();
// if no delimiter is passed to split() you get a one-item array of the whole string
// which is probably not what you had in mind:
console.log('carChars:', carChars); // ['Corvette C3']

// split the car string into an array of individual chars
// pass in an empty string to split("") method:
const carCharsArr = car.split("");
console.log('carCharsArr:', carCharsArr); // ['C', 'o', 'r', 'v', 'e', 't', 't', 'e', ' ', 'C', '3']

// split the car string into array of individual words
const carWordsArr = car.split(" ");
// pass in an empty space to split(" ") method:
console.log('carWordsArr:', carWordsArr); // ['Corvette', 'C3']

// split().join() are often chained together
// use case: reverse a string:
// array.reverse() reverses array items
// there is no reverse method for strings, 
// so how could you reverse a string?
let veggie = "cauliflower";
// how can we reverse the veggie to get "rewolfiluac"
// console.log(veggie.reverse()); // NO!
// How to reverse a string:

// 1.) split string into array of chars
const veggieChars = veggie.split("");
console.log('veggieChars:', veggieChars); 
// ['c', 'a', 'u', 'l', 'i', 'f', 'l', 'o', 'w', 'e', 'r']

// 2.) reverse the array of chars
veggieChars.reverse();
console.log('veggieChars:', veggieChars); 
// ['r', 'e', 'w', 'o', 'l', 'f', 'i', 'l', 'u', 'a', 'c']

// 3.) join reversed array back into a reversedstring
let backwardsVeggie = veggieChars.join("");
console.log('backwardsVeggie:', backwardsVeggie); // rewolfiluac

// Challenge in lesson 04.04 - String Methods
/* CHALLENGE write a function checkForAnagramOrPalindrome() 
your solution will require various JavaScript array and string methods:
string.split(), array.join(), string.replaceAll(), array.sort(), array.reverse()
function wordalyze(str1, str2)
  - has 2 parameters
  - takes 1 OR 2 strings as arguments
.    -- if 2 words (both arguments) is passed in, check for anagram
.    -- if only 1 word argument is passed in, check for palindrome
  - checks if the words are anagrams, palindromes or neither
        anagram ex: 'cheap', 'peach' | 'silent' and 'listen'
        palindrome ex: 'kayak' | 'racecar' | 'taco cat' | 'a man a plan a canal panama'
        in the case of multi-word palindromes, you must delete the space(s), 
        which requires using replaceAll(' ', '')
function return values:
if 2 words are anagram: return 'peach and cheap are anagram'
if 2 words are NOT anagram, return 'bat and ball are not anagram'
if 1 word is palindrome: return 'kayak is palindrome'
if 1 word is not palindrome: return 'apple is not a palindrome'
*/
function wordalyze(str1, str2) {
  // save original versions of str1 and str2 for output 
  // because both strings need to be lowercased and we want to preserve the original versions, inclu. case
  let str1Orig = str1;
  let str2Orig = str2;
  // if str1 is in fact a string, lowercase it (do NOT attempt to lowercase a non-string, as that throws an error, so first check if it's a string); same for str2
  if (typeof(str1) == "string") {
     str1.toLowerCase();
  } else {
    return `Invalid input! ${str1} is not a string!`;
  }
  if (typeof(str2) == "string") {
    str2 = str2.toLowerCase();
  } else {
    return `Invalid input! ${str2} is not a string!`;
  }
  // if there is no input, return with Invalid input msg
  if (!str1 && !str2) {
    return `Invalid input! Enter one or two strings!`;
  }
  // if the 2 strings are same, return with Invalid input msg
  if (str1 == str2) {
    return `Invalid input! Words are the same!`;
  }
  // if str1 and str2 exist and are actually strings:
  if (str1 && str2) { // if true check for anagrams
    // split both strings into arrays
    const str1Chars = str1.split("");
    const str2Chars = str2.split("");
    // sort the arrays from A-Z
    str1Chars.sort();
    str2Chars.sort();
    // join the alphabetized arrays back to strings
    let str1ABC = str1Chars.join("");
    let str2ABC = str2Chars.join("");
    // if the 2 alphabetized strings are the same:
    if (str1ABC === str2ABC) {
      return `${str1Orig} and ${str2Orig} are anagrams`
    // else the 2 alphabetized strings are NOT the same:
    } else {
      return `${str1Orig} and ${str2Orig} are NOT anagrams`
    }
  } else { // there is only 1 string, so check for palindrome
    // split str1 into array
    const str1Chars = str1.split("");
    // make a reversed copy of array
    const revStr1Arr = str1Chars.toReversed();
    // join both arrays back into strings
    let str1ABC = str1Chars.join("");
    let str1ABCRev = revStr1Arr.join("");
    // check if the strings match
    if (str1ABC === str1ABCRev) {
      return `${str1Orig} is a palindrome`;
    } else {
      return `${str1Orig} is NOT a palindrome`;
    }
  }
}

console.log(wordalyze());
console.log(wordalyze('apple', 'apple'));
// if function receives 2 arguments, check for ANAGRAM
console.log(wordalyze('bat', 'ball')); // bat and ball are not anagrams
console.log(wordalyze('cheap', 'peach')); // peach and cheap are anagrams
console.log(wordalyze('Cheap', 'peach'));

// if function receives pnly 1 argument, check for PALINDROME
console.log(wordalyze("kayak")); // kayak is a palindrome
console.log(wordalyze("hello")); // hello is not a palindrome

// END: Lesson 04.04
// NEXT: Lab 04.04
// THEN: Lesson 04.05

