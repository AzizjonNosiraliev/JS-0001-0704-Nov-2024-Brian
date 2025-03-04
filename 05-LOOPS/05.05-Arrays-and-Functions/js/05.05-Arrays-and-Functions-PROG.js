/* Lesson 05.05 - START

Passing Arrays to Functions 

1. Write a function that takes in an array of nouns and adds article 'a' or 'an' to the beginning, so: 'apple' => 'an apple' ; 'banana' => 'a banana'; The function returns a new array of all the items of the input array, but w article 
input: ['apple', 'apricot', 'banana', 'blueberry'] 
output: ['an apple', 'an apricot', 'a banana', 'a blueberry']
*/
// 'aeiou'
// 'umbrella'; // => 'an umbrella'
// 'T-Rex'; // => 'a T-Rex'
// 'Alfa Romeo'; // => 'an Alfa Romeo'

const fruits = ['apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cherry', 'cherimoya', 'cranberry', 'elderberry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'raspberry', 'strawberry', 'tangerine', 'watermelon'];

const cars = ['Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Chevrolet', 'Dodge', 'Edsel', 'Eagle', 'Fiat', 'Ford', 'Honda', 'Kia', 'Infiniti', 'Isuzu', 'Mazda', 'Nissan', 'Opel', 'Porsche', 'Rolls Royce', 'Tesla', 'Toyota', 'Volvo'];

/*
using a for loop, apply the above algo to the provided arrays, fruits and cars result for each array should be a new array of same words w 'a' or 'an' in front still no function -- just wrap the above code in a loop DO NOT console.log the answers .. but rather accumulate results in a new array loop only ONE array at a time -- your loop should only work on one array so to process both arrays, run the loop twice
*/

// 2. Declare the function and assign it a parameter, **arr**:
function addArticle(words) {
  const articleWords = []; // new empty array to hold the results
  for(wd of words) {
    wd = 'aeiouAEIOU'.includes(wd[0]) ? `an ${wd}` : `a ${wd}`;
    articleWords.push(wd);
  } // end loop
  return articleWords;
} // end function

// 3. Call the function twice, passing in a different array of strings each time. Save the return values to variables and log them:
// console.log('articleWords:', articleWords); // ERROR: articleWords is not defined
// console.log('vowels:', vowels); // ERROR: vowels is not defined
console.log(addArticle(fruits));
console.log(addArticle(cars));

// a function is an input (parameter/argument) output (return value)
// if a function returns a value

// 4. Save the function call equal to a variable to capture the return value, which is the answer / result of the function 
const fruitsWithArticles = addArticle(fruits);
console.log('fruitsWithArticles:',fruitsWithArticles);

const carsWithArticles = addArticle(cars);
console.log('carsWithArticles:',carsWithArticles);


// 5. Write function to calculate area of all rooms of a house from input array of [L,W] rooms:
function findAreaOfHouse(rooms) {
    let area = 0;
    for(rm of rooms) {
        area += rm[0] * rm[1];
    }
    return area;
}

const rooms1 = [ [17,12], [18,15], [10,14], [16,10], [13,9], [14,10], [17,13] ];

const rooms2 = [ [22,15], [20,14], [10,17], [16,12] ];
 
let areaHouse1 = findAreaOfHouse(rooms1);
console.log('area of house1:', areaHouse1); // 1252

let areaHouse2 = findAreaOfHouse(rooms2);
console.log('area of house2:', areaHouse2); // 972

// END Lesson 05.05
// NEXT: Lesson 05.06

