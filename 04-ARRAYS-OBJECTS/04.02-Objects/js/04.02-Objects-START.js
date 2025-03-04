// Lesson 04.02 - START

// Objects

// 1. Open 04.02-Objects.html, and preview it in the browser. 

// 2. Click the Get Car Info button to display car object property values.

// 3. Choose an animal from the menu; we get animal object property values.

// 4. In 04.02-Objects.html, switch from importing FINAL.js to PROG.js.

// 5. Switch to 04.02-Objects.js.

// 6. Declare a const called sportscar, and set it equal to a pair of curly braces.
const sportscar = {
  make: 'Porche',
  year: 1964,
  model: "356C",
  color: "red"
};

console.log(sportscar.color);
console.log(sportscar.model);
console.log(sportscar.year);
console.log(sportscar.make);

console.log(sportscar[0]); // undefined
console.log(sportscar.make[0]); // P

const car = {
  category: "sports coupe",
  make: 'Ford',
  model: 'Mustang GT',
  year: 2003,
  color: 'red',
  condition: 'excellent',
  miles: 56789,
  onRoad: true,
  forSale: false
};
console.log(car);

// We use const to protect the data type from being mutated to, say, a string. 
console.log(car['year']);
console.log(car.year);
console.log(car.make);
console.log(car['make']);
// 7. Try to change sportscar to a string. We get an error:
// sportscar = "Porsche"; // ERROR: assignment to constant variable.
console.log(car['for sale']);
// An object declared with const cannot be mutated, but its properties can be added, removed and changed as we see fit.

// 8. Declare another object, this time assigning it properties as key-value pairs. The key and its value are separated by a colon. Properties are separated one from the other by a comma. Values can be any data type: strings, numbers and booleans. 


// 9. Log the object and open it up in the Console to check the properties, which have been alphabetized:


// dot-syntax

// Properties are available only to their object. 
// To reference a property, use the dot-sytnax: 
// car.year returns the value 1998

// 10. Get some car properties, which returns the value:
// sports car
// For Sale: 1999 Ford Mustang GT
// 1998
// 123456
// true

// setting a property value

// To set a value, get the property and set it to a new value: 
// car.year = 1999 changes the year to 1999. Inside the curly braces, key-value pairs are separated by a colon, but when a value is changed later, an equal sign is used instead:

// 11. Set some car properties; this changes the value. 
//  "muscle car";
// "very good";
car.category = "muscle car";
car.condition = 'good';
car.miles = 88950;

// 12. Log the whole object to see the changed values:
console.log(car);

// adding properties

// Properties are added to an existing object the same way a property value is changed: object.key = value

// 13. Add three more properties to the car object: a string, a number and a boolean:
// "manual";
car.transmission = 'automatic';
car.doors = 4;
car.carFax = true;

// arrays and objects as properties
console.log(car);
// Properties can be of any data type, including arrays and even other objects.

// 14. Add two more properties: an array and an object:
car.options = ['sun roof', 'CD player', 'leather seats'];
console.log(car.options[0]); //'sun roof'
console.log(car.options[1][3]); //p

car.mpg = {city: 18, hwy: 24};
// {city: 18, hwy: 24}
console.log(car.mpg.city); //18
console.log(car.mpg.hwy); //24
console.log(car['mpg'].city); //18
console.log(car.mpg['city']); //18
// 15. Access array items using square bracket syntax:

// leather seats

// 16. Access child objects using "dot-dot" syntax:
// 18
// 24
car.cylenders = 8;
car.horsepower = 250;
car.liters = 5.0;
// bundling related properties into one

// 17. Add three properties having to do with the engine:
car.engine = {cyl: 8, hp: 250, ltr: 5.0};

console.log(car.engine.cyl);
console.log(car.engine.hp);
console.log(car.engine.ltr);

delete car.cylenders;
delete car.horsepower;
delete car.liter; 

console.log(car);


// It works, but since these properties all pertain to the engine, better might be to make an engine property and assign it an object having the three properties:

// 18. Bundle cylinders, liters and horsepower into an engine property. Since "engine" will be included in any reference to these properties, we can abbreviate the names without causing any confusion: 


// object property with array as its value:


// 19. Access the engine properties using "dot-dot" syntax:
// 8
// 4.6
// 260

// deleting properties

// The delete keyword, preceding a property reference, removes that property. Now that car has an engine property, we can delete horsepower, cylinders and liters.

// 20. Delete the horsepower, cylinders and liters properties:

// square bracket syntax for keys

// keys with spaces

// Keys are essentially variable names, but unlike "regular" variables, keys can have spaces. This may be a good option for a two-word key that we prefer to keep readable as such, as opposed to using camelCase. The space means we cannot use dot-syntax. Instead, the keys go in quotes, inside square brackets:

// 21. Add a few properties of two words each:
// top speed
// consumer reviews
// stars rating
car['top speed'] = 151;
car['consumer reviews'] = 2678;
car['stars rating'] = 4.5;

let carKey = 'make';
console.log(car[carKey]);

// 22. Try to access "top speed" via dot syntax. With or without quotes, we get an error:
// car.top speed; // ERROR
// car."top speed"; // ERROR

// dynamic variable keys

// A key itself can be dynamic, that is a variable. For dynanmic keys, dot syntax won't work. Use square brackets, instead.

// 23. Declare a carKey variable, and set it equal to one of the keys, as a string:
// model

// 24. Using dot-syntax, try to get the car model as carKey. We get an error, because car has no carKey property:
// carKey // ERROR

// 25. To make car.carKey be understood as car.model, use square brackets: 
// Mustang GT

// 26. To set a multi-word key value, also use square brackets:
// 248
console.log(car.miles); //88950
console.log(car.miles.toLocaleString()); // make the number value to the string and puts , in it 88,950
// toLocaleString()

// The toLocaleString() method is called on a number and returns the number with commas, converting it to a string in the process.

// 27. Get the six-digit mileage, and output it with a comma:
// 123,567

// object methods

// - A method is a function that is scoped to -- belongs to -- an object
// - A method is a property of an object, where the value is a function
// - To make a method, set a key equal to an anonymous function
// - Inside a method, all other properties are available via the 'this' keyword
// - A method must return a value: call a method, gets the return value

// 28. Assign the car object a method, called listForSale. It returns a FOR SALE listing, concatenated from numerous properties referenced by 'this' syntax:

// 29. Log a call to the method. We get the classified listing
car.listForSale = function() {
  return `FOR SALE:  ${this.year} ${this.make} ${this.model} with ${this.color} color, is in ${this.condition} condition `;
}

// 30. Declare a variable, set equal to a call to the method, and then log it:
let listing = car.listForSale();
console.log(listing);

// outputting property values to the DOM

// 31. Get the elements where the car data is displayed:
const carTitleH2 = document.getElementById('car-title');
const carMpgH3 = document.getElementById('car-mpg');
const carEngineH3 = document.getElementById('car-engine');
const carOptionsH3 = document.getElementById('car-options');
const carReviewsH3 = document.getElementById('car-reviews-ratings');
const carListingH2 = document.getElementById('car-listing');
// car-mpg
// car-engine

// 32. Get the button, and have it call the showCarInfo function when clicked:
const carInfoBtn = document.querySelector('button');
carInfoBtn.addEventListener('click', showCarInfo);

// 33. Define the showCarInfo function:
function showCarInfo() {
  // 34. Hide the button, since it only gets clicked once:
  this.style.display = 'none';

  // 35. Output the title as "year make model":
  car.carTitleH2.textContent = `${car.year}${car.make}${car.model}`

  // 36. Output the properties of the mpg property:
  car.carMpgH3.textContent = `Mpg in City: ${this.mpg.city} Hwy: ${this.mpg.hwy}`;

  // 37. Output the properties of the engine property:

  // 38. Output the options, one array item at a time:


  // 39. Output the two-word properties, using square bracket syntax:


  // Output the FOR SALE listing, which is returned by the listForSale() method:

// end function showCarInfo()
}
/*
// arrays of objects

// In web applications, data is often stored as arrays of objects or objects with child objects for properties. For this animal menu part of the lesson, we will work with an extenal file, animals.js, which contains an array of animal objects.

40. Open animals.js. It contains two big variables, an object called animalsObj, and an array by the name of animalsArr.

- animalsObj consists of 20 properties:
  - Each key is an animal name, with 2-word names in quotes.
  - Each value is an object with 3 properties:
      - class (value is string)
      - herbivore (value is boolean)
      - continent (value is string)

- animalsArr has 20 items, each an object
  - The objects are not key-values
  - The animal name is a property--not a key
  - Each array item object has 4 properties:
      - name (value is string)
      - class (value is string)
      - herbivore (value is boolean)
      - continent (value is string)

// We will use animalsObj for this exercise:

// 41. Get the DOM elements for the animals:
*/


// 42. Have the menu call a function on 'change' (menu choice):

// 43. Define the function that runs when a menu choice is made:

    // 44. The menu value is an animal, such as "giraffe" or "panda". Save it to a variable, animal:
    let animal; // e.g. giraffe, panda

    // 45. Look up the animal in the animals object, using the string variable as the dynamic key. For this, we use square brackets--not dot-syntax:
    let animalObj;

    // 46. Output the property values to their respective tags:


    // 47. Set the souce of the animal image:


/*
CHALLENGE: 
Make another function that produces the same DOM output. 
BUT rather than get data from the animals object, uses animalsArr, which is the array of objects
animalsMenu.addEventListener('change', showAnimalInfo);
*/



  // 48. The menu animals are in the same order as the array animals, so get the index of the chosen animal:
  let indx;

  // 49. Look up the animal in the array. Subtract one from the index, since the second menu choice is the first animal:
  // {name: 'giraffe', class: 'mammal', herbivore: true, continent: 'Africa'}

  // 50. Output the name of the animal:
  // giraffe

  // 51. Output the class and continent:

  // 52. Output the animal image:

  // converting boolean to user-friendly output

  // For the Herbivore part, we don't want to literally output 'true' or 'false'. Better would be a more user-friendly "Yes" or "No". For this we need conditional logic that sets a string to "Yes" or "No", depending on the value of the boolean:

  // 53. Do a ternary that sets a variable to "Yes" or "No":
  let yesNo;

  // 54. Output Herbivore: Yes (for giraffe) or Herbivore: No (for lion: