// Lesson 04.04 - PROG
// string methods

// string methods that double as array methods:
// includes(), indexOf(), lastIndexOf(), slice()

// other string methods:
// toUpperCase(), toLowerCase(), replace(), replaceAll(), 
// charAt(), split(), startsWith(), endsWith()

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

fruits = ['apple', 'banana', 'cherry'];
// replace the first 'n' in 'banana' with 't' to get 'batana' -- 
// you can not directly do this, so must set equal to return value
let exBanana = fruits[1].replace('n', 't');
console.log('exBanana:', exBanana); // batana ??
console.log(fruits); // ['apple', 'banana', 'cherry']

// replace 'banana' with 'batana' ..?
fruits.splice(1,1,'batana');
console.log(fruits); // ['apple', 'batana', 'cherry']

fruits.splice(1,1,'booberry');
console.log(fruits); ['apple', 'booberry', 'cherry'];

// string[index]

// 1. Declare a string, and then get the first and fourth characters:
let car = 'Corvette C3';
console.log('car:', car); // Corvette C3
console.log(car[0]); // C
console.log(car[3]); // v
console.log(car.charAt(0)); // C
console.log(car.charAt(3)); // v

// 2. Get the number of characters in car; spaces count:
console.log('car.length:', car.length); // 11

// 3. Get the last character of car, the same way you would get the last item of an array: slice(-1)
console.log('last char:', car.slice(-1)); // 3

// 4. Check if this 'Vette is a "C2" or "C3" model:
console.log('Corvette includes 2:', car.includes('2')); // false
console.log('Corvette includes 3:', car.includes('3')); // true

// 4B. Another way to check if it's a C2 or C3 is with endsWith(), since 
//     the distinguishing character is the last one:
console.log('Corvette ends with 2:', car.endsWith('2')); // false
console.log('Corvette ends with 3:', car.endsWith('3')); // true

// 5. Get the index of the first and last "C":
console.log('first C:', car.indexOf('C')); // 0
console.log('last C:', car.lastIndexOf('C')); // 9

// slice(start_index, end_index)
// split()

// split().join() are often chained together
// use case: reverse a string:
// array.reverse() reverses array items
// there is no reverse method for strings, 
// so how could you reverse a string?

// reverse the word 'Corvette' ..

// a. first, split the string 'Corvette C3' into an array of chars
const corvArr = car.split(' ');
console.log('corvArr:', corvArr); // ['Corvette', 'C3']

// b. get just the 'Corvette' part:
let carName = corvArr[0]; // Corvette
console.log('carName:', carName);

// c. split the string 'Corvette' into an array of individual chars:
const charsArr = carName.split(''); // Corvette
console.log('charsArr:', charsArr);
// ['C', 'o', 'r', 'v', 'e', 't', 't', 'e']

// d. then, reverse the array of chars:
charsArr.reverse();
console.log('charsArr reversed:', charsArr);
// ['e', 't', 't', 'e', 'v', 'r', 'o', 'C']

// e. finally, join the array back into a string
let carReversed = charsArr.join("");
console.log('carReversed:', carReversed); // ettevroC

// CHALLENGE: Make a password for yourself
// password equals: your last name reversed + the length of your first name squared

// a. declare your full name as a string
let fullName = "Brian McClain";

// b. split full name into an array of 2 names:
let namesArr = fullName.split(' ');
console.log('namesArr:', namesArr); // ['Brian', 'McClain']

// c. save both names to individual strings
let fName = namesArr[0];
let lName = namesArr[1];
console.log('fName:', fName); // Brian
console.log('lName:', lName); // McClain

// d. reverse the last name; cannot directly reverse a string, so split string 
//    to array of individual letters:
let lNameCharsArr = lName.split('');
console.log('lNameCharsArr:', lNameCharsArr); // ['M', 'c', 'C', 'l', 'a', 'i', 'n']

// e. next reverse the array of letters to get the last name backwards:
lNameCharsArr.reverse();
console.log('lNameCharsArr:', lNameCharsArr); // ['n', 'i', 'a', 'l', 'C', 'c', 'M']

// f. then join the reversed array of letters back to string, which is name backwards
let lNameBackwards = lNameCharsArr.join('');
console.log('lNameBackwards:', lNameBackwards); // nialCcM

// g. square the length of the first name
let fNameLenSq = fName.length ** 2;

// h. concat num onto backwards name to form the password
let password = lNameBackwards + fNameLenSq;
console.log('password:', password); // nialCcM25

// OR: all in one step (b. - h. in one go):
password = fullName.split(' ')[1].split('').reverse().join('') + (fullName.split(' ')[0].length ** 2);
console.log('password all in one line:', password); // nialCcM25
// Expected Result:
// nialCcM25

// Challenge in lesson 04.04 - String Methods
/* CHALLENGE write a function checkForAnagramOrPalindrome() 
// anagram is two words that share all same letters: 'peach' and 'cheap'
// palindrome is a word spelled the same forwards and backwards: 'racecar', 'kayak'
your solution will require various JavaScript array and string methods:
string.split(), array.join(), string.replaceAll(), array.sort(), array.reverse()

function checkForAnagramOrPalindrome(str1, str2)
  - has 2 parameters
  - takes 1 OR 2 strings as arguments
.    -- if 2 words (both arguments) are passed in, check for anagram
.    -- if only 1 word argument is passed in, check for palindrome
  - checks if the words are anagrams, palindromes or neither
        anagram ex: 'cheap', 'peach' | 'silent' and 'listen'
        palindrome ex: 'kayak' | 'racecar' | 'taco cat' | 'a man a plan a canal panama'
        in the case of multi-word palindromes, you must delete the space(s), 
        which requires using replaceAll(' ', '')
function return values:
- if nothing is passed in, return: 'please input ONE or TWO strings'
- if same word is passed in twice, return: 'please input 2 DIFFERENT words'
- if words are not same length, they cannot be anagram: 'words must be same length!'
- if 2 words are anagram: return '"peach" and "cheap" are anagrams'
- if 2 words are NOT anagram, return '"bait" and "ball" are not anagram'
- if 1 word is passed in and it IS a palindrome: return '"kayak" is a palindrome'
- if 1 word passed in is NOT a palindrome: return '"apple" is not a palindrome'
*/

function checkForAnagramOrPalindrome(word1, word2) {
    // if not even one word was passed in, word1 is undefined, which is falsey:
    if(!word1) {
      return 'please provide ONE or TWO string'
    }
    // if 2 words were passed in
    if(word1 && word2) {
      // if 2 words of unequal length were passed in
      if(word1.length != word2.length){
        return 'invalid input - words not same length'
      }
      // if same word was passed in twice
      if(word1 == word2){
        return 'invalid input - same words'
      }
      // if not-same 2 words of same length were passed 
      // in, check for anagram
      // split each word into an array of letters
      let word1Arr = word1.split('');
      let word2Arr = word2.split('');
      // sort the array of letters
      word1Arr.sort();
      word2Arr.sort();
      // join arrays of sorted letters back to strings
      let word1Sorted = word1Arr.join('');
      let word2Sorted = word2Arr.join('');
      // compare the sorted strings to see if they match
      if(word1Sorted == word2Sorted){
          return `${word1} and ${word2} are anagrams`;
      } else{
        return `${word1} and ${word2} are not anagrams`;
      }
    }
    // if just one word
    if (word1) {
      // check for palindrome - racecar
      // split word into array of letters
      let word1CharsArr = word1.split('');
      // reverse the array
      word1CharsArr.reverse();
      // join the reversed array back into string
      let word1Backwards = word1CharsArr.join('');
      // compare reversed word to original word
      if(word1Backwards == word1) {
        return `${word1} is palindrome`
      } else {
        return `${word1} is not a palindrome`
      }
    }
  }
  
  console.log('checkForAnagramOrPalindrome:', checkForAnagramOrPalindrome());
  console.log('checkForAnagramOrPalindrome:', checkForAnagramOrPalindrome('peac', 'cheap'));
  console.log('checkForAnagramOrPalindrome:', checkForAnagramOrPalindrome('peach', 'peach'));
  console.log('checkForAnagramOrPalindrome:', checkForAnagramOrPalindrome('peach', 'cheap'));
  console.log('checkForAnagramOrPalindrome:', checkForAnagramOrPalindrome('peach'));
  console.log('checkForAnagramOrPalindrome:', checkForAnagramOrPalindrome('racecar'));

    // if // if str2 is empty, only 1 word passed in, so check for palindrome
      // let str1 // 'taco cat' => 'tacocat'
      // let rev
      // if //'acehp'
         //`is a palindrome`
      // els
        // `s NOT a palindrome`
    // els //if str2 is NOT empty, so 2 words passed in, so check for anagram
        // if
            // `and are not anagrams`
        // els // the  2 words ARE the same length, so check for anagram
            let s // 'peach' => 'acehp'
            let st // 'cheap' => 'acehp'
            // if
            //    `and is anagram`;
            // el
                // ` and is NOT anagram`
  
  console.log('cheap', 'hello');
  console.log('cheap', 'peach');
  console.log("kayak");
  console.log("hello");

  // this version does not use replaceAll(' ', '') to get rid of space(s), because split(' ') removes space when making array
//   function checkPalAna(str1, str2) {
//     if (!str2) { //check if only 1 word in argument
//       let palindrome = str1.split(' ').join(''); //remove space
//       let reversed = palindrome.split("").reverse().join(''); //reverse word
//       if (reversed===palindrome){ //check equality
//         return (`${str1} is palindrome: ` + true);
//       } else return (`${str1} is palindrome: ` + false);
//     } else {
//       let firstW = str1.split('').sort().join(''); //sort word
//       let secondW = str2.split('').sort().join(''); //sort word
//       if (firstW === secondW) { //check if sorted words are equal
//         return (`${str1} & ${str2} is anagram: ` + true);
//       } else return (`${str1} & ${str2} is anagram: ` + false)
//     }
//   }
//   console.log(checkPalAna('cheap', 'peach'));
//   console.log(checkPalAna('bat', 'ball'));
//   console.log(checkPalAna('kayak'));
//   console.log(checkPalAna('apple'));
// replace()

// Copy the make ("Corvette") and model ("C3") to their own variables. 
// We will use the slice method for this, and then split()
// - slice takes a start and end index as its arguments
// - slice has negative indices: -1 is the last character, -2 is next to last
// - slice copies and returns a substring from the start to end range
// - the end index is exclusive, that is, not included in the substring
// - the slice operation does not modify the original string in any way
// 8
console.log('index of space:');
// slice(0,8)
console.log('firstWord via slice:');
// slice(9)
console.log('lastWord via slice:');

// split() is easier:


console.log('firstWord via split');

console.log('lastWord via split:');


// Given this string promoting the car:
let carPromo = "The 2023 Chevrolet Corvette furthers its reputation as a high-value everyday supercar. The Corvette provides blistering acceleration, phenomenal handling, a comfortable and well-trimmed cabin and usable cargo space. Chevrolet reintroduces the high-performance Corvette Z06 for the 2023 model year, features a new V8 engine with 670 horsepower. Chevrolet also adds a special appearance package that celebrates the Corvette's 70th anniversary.";

// 9. Get the first half of the promo, so from index 0 to 1/2 the length:
// let ind
// let fi
console.log('firstHalfOfPromoText:');

// Let's get the second sentence. This involves a little fancy slicing:

// 11. Get the start index of the second sentence. 
// This is the index of the first dot, plus 2:
// '.'
console.log('indexOfFirstDot:'); // 85

// 12. Get the index of the second dot.
// let ind
console.log('indexOfSecondDot:'); // 85

console.log('secondSentence:'); // 85

// indexOf() method for getting the second instance of a character 

// indexOf('.') gets the index of the first '.', but we want the second period. Pass in startIndex as a second argument. This tells it to start looking for the '.from the startIndex, not from the beginning of the string.

// 13. Get the second sentence slice. Add one to the end to include the period:
let sentence2;
console.log('sentence2:'); 
// The Corvette provides blistering acceleration, phenomenal handling, a comfortable and well-trimmed cabin and usable cargo space.

// Let's get the last sentence. 

// We need the index of the next-to-last period, as right after this is the starting point of the last sentence. Now, lastIndexOf('.') returns the index of the last period, so we want to tell the method to sample a carPromo that does not end in a period.

// 14. Copy carPromo to itself, minus the last character, that last '.':

// The last period now belongs to the next-to-last sentence.

// 15. Get the index of the last period:
let lastPeriod; 

// 16. The last sentence starts two characters after the last period, so slice from there to the end. Since we are going to the end, there is no second argument, but we do need to put back the period at the end:
let lastSentence; 

// 17. Take a slice of the middle 20 characters. The index of the mid-point is one-half the string length. So, start 10 characters before the mid-point and end 10 charcters after the mid-point:
let mid20Chars; 
// Chevy reintroduces

// Now that we've seen how arrays and strings both have index, length, includes(), indexOf() and lastIndexOf(), let's get into the methods that are unique to strings.

// toUpperCase(), toLowerCase()

// - toUpperCase() returns an uppercase version of the string
// - toLowerCase() returns a lowercase version of the string
// - the original string is unchanged

// 18. Make uppercase and lowercase versions of car:
let carUC;
console.log(carUC); // CORVETTE C3
let carLC;
console.log(carLC); // corvette c3

// replace(a,b), replaceAll(a,b)

// - replace() is called on a string and takes two arguments: a substring to replace and its replacement. 
// - replace() operates on the first instance of the target substring.
// - replaceAll() works like replace() but hits all instances of the target

// 'taco cat'
// ' '; // tacocat

// 19. Replace "Corv" with "'V". This gives us the car's nickname:
let nickname;
console.log(nickname); // 'Vette

// 20. Use replaceAll() to globally change "Covette" to "'Vette". The method returns a new string, so save it to a variable, either itself or a new var:
// 'Corvette' '\'Vette'
console.log('carPromo2:'); // 'Vette has replaced Corvette
// To modify the original string, save it to itself.
// To also keep the original string, save it to a new var, such as carPromo2.

// 21. Use replaceAll() again to globally change "Chevrolet" to "Chevy". Save carPromo to itself, so that both replacements accumulate in the same string:

console.log(); // 'Vette & Chevy have replaced Corvette & Chevrolet

// 22. On second thought, we should have one full "Chevrolet Corvette" before reverting to nicknames. Use replace() to restore the first instance of each:

// charAt()

// The charAt() method is called on a string:
// charAt(index) takes an index and returns the character found there. 
// If the index argument exceeds the max index, it returns undefined.
// charAt() is another way of getting characters by index with []

// 23. Get the 100th character of the car promo by index and with charAt()
// v
// v

// split()

// The split() method is called on a string and returns an array.
// It takes an argument (the delimiter) that specifies how the split is done.
// the split() method is often used in conjunction with join() to split a string into an array, perform some operations, and then join the array back into a string.

// 24. Declare a string (a movie quote about a Corvette C3):
let movieQuote = 'Start down low with a 350 cube, three and a quarter horsepower, 4-speed, 4:10 gears, ten coats of competition orange, hand-rubbed lacquer with a dual-plane manifold';

// 25. Call the split() method on the string, saving the result to this array:

console.log();
// Desired Result: 
// ['Start down low with a 350 cube', 'three and a quarter horsepower', '4-speed', '4:10 gears',
// 'ten coats of competition orange', 'hand-rubbed lacquer with a dual-plane manifold']

// Good Morning: 
// a function can return an object
// a function can take an object as argument

// Review this from Lab 04.03:
// function that returns an object:

//   let names
//   let fName

  // password is last name backwards, followed by length of first name, squared:
//   let pass
//   return {


console.log("Brian McClain");

// Write this:
// function w object parameter -- takes object argument:
// why would we need to do this? Why not just list out
// params, like so:
// 'Pal'
  // `Ok, ! Your bet is !`;

console.log();
console.log();
console.log(); // default to 10 (table minimum bet)
// What if player prefers to bet anonymously?
console.log(); // OOPS!
console.log(); // OOPS!

// CHALLENGE: make params an object

  // `Ok, ! Your bet is !`;

// when calling function that has object parameter,
// argument must be an object or key-value pair(s)
console.log(); // OOPS!

// END: Lesson 04.04
// NEXT: Lab 04.04
// THEN: Lesson 04.05

