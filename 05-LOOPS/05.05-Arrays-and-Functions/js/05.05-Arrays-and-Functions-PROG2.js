/* Lesson 05.05 - PROG

Passing Arrays to Functions 

1. Write a function that takes in an array of nouns and adds article 'a' or 'an' to the beginning, so: 'apple' => 'an apple' ; 'banana' => 'a banana'; The function returns a new array of all the items of the input array, but w article 
input: ['apple', 'apricot', 'banana', 'blueberry'] 
output: ['an apple', 'an apricot', 'a banana', 'a blueberry']
*/

// 'aeiou'
// 'umbrella'; // => 'an umbrella'
// 'T-Rex'; // => 'a T-Rex'
// 'Alfa Romeo';
// on your own AM Challenge -- solve this code challenge
// no function, no loop (not yet, anyway) -- just do those 2 words
// "u"
// check if word starts w vowel:
// if
  console.log("an "); // vowel article is "an" (not "a")
// el // first char is NOT a vowel; it's a consonant
  console.log("a "); // consonant article is "a" (not "an")


const fruits = ['apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cherry', 'cherimoya', 'cranberry', 'elderberry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'raspberry', 'strawberry', 'tangerine', 'watermelon'];

const cars = ['Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Chevrolet', 'Dodge', 'Edsel', 'Eagle', 'Fiat', 'Ford', 'Honda', 'Kia', 'Infiniti', 'Isuzu', 'Mazda', 'Nissan', 'Opel', 'Porsche', 'Rolls Royce', 'Tesla', 'Toyota', 'Volvo'];

/*
using a for loop, apply the above algo to the provided arrays, fruits and cars result for each array should be a new array of same words w 'a' or 'an' in front still no function -- just wrap the above code in a loop DO NOT console.log the answers .. but rather accumulate results in a new array loop only ONE array at a time -- your loop should only work on one array so to process both arrays, run the loop twice
*/
// Vowels are so we can use vowelsArr.includes(item[0])
// const vowelsArr = [‘a’, ‘e’, ‘i’, ‘o’, ‘u’];
// const VOWELS = ‘aeiou’;
function addArticle(nouns) {
  const arr = [];
  for(let e of nouns) {
      arr.push('aeiou'.includes(e[0].toLowerCase()) ? `an ${e}` : `a ${e}`);
  }
  return arr;
}

console.log(addArticle(fruits));
console.log(addArticle(cars));


// SUM-PRODUCT FUNCTION
const roomDimensions = [ [17,12], [18,15], [10,14], [16,10], [13,9], [14,10], [17,13] ];
const priceQuantities = [ [22.98,15], [25.75,14], [10.99,17], [16.49,12] ];

// 6. Write a function that takes in an array of 2-item arrays (numbers only) and 
//.   returns the sum product of all -- that is the sum of the products of all the 2-item arrays. example: if we pass in [ [1,2], [3,4], [5,6] ] it should calculate: 
// (1*2) + (3*4) + (5*6) = 2 + 12 + 30 = 44
function sumProduct(arrOfArrays) {
  let sum = 0;
  for(arr of arrOfArrays) {
      sum += arr[0] * arr[1];
  }
  return +(sum.toFixed(2));
}

console.log('sum product roomDimensions', sumProduct(roomDimensions)); // 
console.log('sum product priceQuantities:', sumProduct(priceQuantities)); // 

// END Lesson 05.05
// NEXT: Lesson 05.06

