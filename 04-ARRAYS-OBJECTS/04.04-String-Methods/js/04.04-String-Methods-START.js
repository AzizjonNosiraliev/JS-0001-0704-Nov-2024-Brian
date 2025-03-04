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
// 'Corvette C3'
let car = 'Corvette C3';
console.log(car[0]); // C
console.log(car[3]); // v
// string.length

// 2. Get the number of characters in car; spaces count:
console.log(car.length); //11

// 3. Get the last character of car, the same way you would get the last item of an array: slice(-1)
console.log(car.slice(-1)); // 3

// 4. Check if this 'Vette is a "C2" or "C3" model:
console.log('C2:', car.includes('C2')); // false
console.log('C3:', car.includes('C3')); // true
let isC3;
if(car.includes('C3')) {
  isC3 = true;
} else {
  isC3 = false;
}
//ternary version
isC3 = car.includes('C3') ? true : false;
// 5. Get the index of the first and last "C":
console.log('first C:', car.indexOf('C')); // 0
console.log('last C:', car.lastIndexOf('C')); // 9

// slice(start_index, end_index)
// split()
let index_of_space = car.indexOf(' ');
let firstWord = car.slice(0,index_of_space);
// split().join() are often chained together
// use case: reverse a string:
// array.reverse() reverses array items
// there is no reverse method for strings, 
// so how could you reverse a string?

// first, split the string into an array of chars
// ['C', 'o',]
const carWordsArr1 = car.split();
console.log('carWordsArr1:', carWordsArr1);
// let make = cArr[0]; // Corvette
// ['C', 'o', 'r', 'v', 'e', 't', 't', 'e', ' ', 'C', '3']
const carWordsArr2 = car.split('');
console.log('carWordsArr2:', carWordsArr2);

const carWordsArr3 = car.split(' ');
console.log('carWordsArr3:', carWordsArr3);

firstWord = car.split(' ')[0];
console.log('firstWord:', firstWord);
// then, reverse the array of chars
let firstWordCharsArr = firstWord.split('');
console.log('firstWordCharsArr:', firstWordCharsArr);


firstWordCharsArr.reverse();
console.log('firstWordCharsArr:', firstWordCharsArr);
// ['3', 'C', ' ', 'e', 't', 't', 'e', 'v', 'r', 'o', 'C']

// then join the array back into a string
let carBackwards = firstWordCharsArr.join('');
console.log('carBackwards:', carBackwards); // 3C ettevroC

carBackwards.toLowerCase();

console.log('carBackwards toLowerCase:', carBackwards.toLowerCase());
console.log('carBackwards toLowerCase:', carBackwards);

carBackwards = carBackwards.toLowerCase();
console.log('carBackwards toLowerCase:', carBackwards);

let firstCharUC = carBackwards[0].toUpperCase();
console.log('firstCharUC:', firstCharUC); 

let carBackwardsCapitalized = firstCharUC + carBackwards.slice(1);
console.log('carBackwardsCapitalized', carBackwardsCapitalized);

//str.replace(find, replace) replace first occurrence of find w replace
let americanSpelling = "favorite flavor and color";
console.log('americanSpelling:', americanSpelling);

let britishSpelling = americanSpelling.replace('or', 'our');
console.log('britishSpelling:', britishSpelling);


britishSpelling = americanSpelling.replaceAll('or', 'our');
console.log('britishSpelling:', britishSpelling);

// Challenge in lesson 04.04 - String Methods
/* CHALLENGE write a function checkForAnagramOrPalindrome() 
your solution will require various JavaScript array and string methods:
string.split(), array.join(), string.replaceAll(), array.sort(), array.reverse()
function checkForAnagramOrPalindrome(str1, str2)
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
function checkForAnagramOrPalindrome(str1, str2) {
  let answer = "";

  if(!str1) return "Provide one or two strings!";
 

  if(str2) {

    if(str1 == str2) return "Both words are the same!";
    if(str1.length != str2.length) return 'Both words must equal length!';
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    arr1.sort();
    arr2.sort();
    let str1Abc = arr1.join('').toLowerCase();
    let str2Abc = arr2.join('').toLowerCase();

    if(str1Abc == str2Abc) return `"${str1}" and "${str2}" are anagrams`;
    else return `"${str1}" and "${str2}" are not anagrams`;
  } else {
    let str1rev = str1.split('').reverse('');
    str1rev = str1rev.join('');
    if(str1 == str1rev) {
      return `"${str1}" is a palindrome`;
    } else {
      return `"${str1}" is not a palindrome`;
    }
  }

}
  console.log(checkForAnagramOrPalindrome("hello", "hello"));
  console.log(checkForAnagramOrPalindrome('cheap', 'hello'));
  console.log(checkForAnagramOrPalindrome('cheap', 'peach'));
  console.log(checkForAnagramOrPalindrome("kayak"));
  console.log(checkForAnagramOrPalindrome("hello"));
  console.log(checkForAnagramOrPalindrome(""));
  console.log(checkForAnagramOrPalindrome());
 
// END: Lesson 04.04
// NEXT: Lab 04.04
// THEN: Lesson 04.05

