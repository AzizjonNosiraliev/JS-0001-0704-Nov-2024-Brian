// Lesson 04.02 - START

// Objects

// 1. Open 04.02-Objects.html, and preview it in the browser. 

// 2. Click the Get Car Info button to display car object property values.

// 3. Choose an animal from the menu; we get animal object property values.

// 4. In 04.02-Objects.html, switch from importing FINAL.js to PROG.js.

// 5. Switch to 04.02-Objects.js.

// 6. Declare a const called sportscar, and set it equal to a pair of curly braces.
const sportscar = {};

// We use const to protect the data type from being mutated to, say, a string. 

// 7. Try to change sportscar to a string. We get an error:
// sportscar = "Porsche"; // ERROR: assignment to constant variable.
// sportscar = "Porsche";

// An object declared with const cannot be mutated, but its properties can be added, removed and changed as we see fit.

// 8. Declare another object, this time assigning it properties as key-value pairs. The key and its value are separated by a colon. Properties are separated one from the other by a comma. Values can be any data type: strings, numbers and booleans. 
const car = {
    category: "sports car",
    make: "Ford",
    model: "Mustang GT",
    year: 1998,
    color: "red",
    condition: "excellent",
    miles: 123456,
    onRoad: true,
    forSale: false,
}

// 9. Log the object and open it up in the Console to check the properties, which have been alphabetized:
console.log('car:', car);

// dot-syntax

// Properties are available only to their object. 
// To reference a property, use the dot-sytnax: 
console.log('car.model:', car.model); // Mustang GT
console.log('car.year:', car.year); // 1998
// car.year returns the value 1998

// 10. Get some car properties, which returns these value:
console.log('car.category:', car.category); // sports car
console.log('car.miles:', car.miles); // 123456
console.log('car.onRoad:', car.onRoad); // true
console.log(`For Sale: ${car.make} ${car.model}`); 
// "For Sale: 1998 Ford Mustang GT"

// setting a property value

// To set a value, get the property and set it to a new value: 
car.year = 1999;
// car.year = 1999 changes the year to 1999. Inside the curly braces, key-value pairs are separated by a colon, but when a value is changed later, an equal sign is used instead:

// 11. Set some car properties; this changes the value. 
car.category = "muscle car";
car.condition = "very good";

// 12. Log the whole object to see the changed values:
console.log('car:', car);

// adding properties

// Properties are added to an existing object the same way a property value is changed: object.key = value

// 13. Add three more properties to the car object: a string, a number and a boolean:
car.transmission = "manual";
console.log('car:', car);

// arrays and objects as properties

// Properties can be of any data type, including arrays and even other objects.

// 14. Add two more properties: an array and an object:

// object property with array as its value:
car.options = ['sun roof', 'CD player', 'leather seats'];

// object property with child object as its value:
car.mileage = {city: 18, hwy: 24};

// 15. Access array items using square bracket syntax:
console.log(car.options[2]); // leather seats

// 16. Access child objects using "dot-dot" syntax:
console.log(car.mileage.city); // 18
console.log(car.mileage.hwy); // 24

// bundling related properties into one

// 17. Add three properties having to do with the engine:
car.cylinders = 8;
car.liters = 4.6;
car.horsepower = 260;
console.log('car:', car);

// It works, but since these properties all pertain to the engine, better might be to make an engine property and assign it an object having the three properties:

// 18. Bundle cylinders, liters and horsepower into an engine property. Since "engine" will be included in any reference to these properties, we can abbreviate the names without causing any confusion: 
car.engine = {cyl: 8, ltr: 4.6, hp: 260};
console.log(car.engine.cyl, car.engine.ltr, car.engine.hp);

// 19. Access the engine properties using "dot-dot" syntax:
console.log(car.engine.cyl, car.engine.ltr, car.engine.hp);
console.log('car:', car);

// deleting properties

// The delete keyword, preceding a property reference, removes that property. Now that car has an engine property, we can delete horsepower, cylinders and liters.

// 20. Delete the horsepower, cylinders and liters properties:
delete car.cylinders;
delete car.liters;
delete car.horsepower;
console.log('car:', car);

// square bracket syntax for keys

// you can also access properties without a dot, by putting key in quotes, inside square brackets 
console.log(car.category);
console.log(car["category"]); // this way is longer but works, too

// but if car["category"] syntax is longer, why not just always use the shorter version w the dot: car.category

// keys with spaces

// Keys are essentially variable names, but unlike "regular" variables, keys can have spaces. This may be a good option for a two-word key that we prefer to keep readable as such, as opposed to using camelCase. The space means we cannot use dot-syntax. Instead, the keys go in quotes, inside square brackets:

// 21. Add a few properties of two words each:
car["top speed"] = 154;
car["consumer reviews"] = 238;
car["star rating"] = 4.85;
console.log('car:', car);

// 22. Try to access "top speed" via dot syntax. With or without quotes, we get an error:
// car.top speed; // ERROR
// car[top speed]; // ERROR
console.log(car["top speed"]); 

// make a house object w at least 7 properties of your choosing.
const house = {
    year: 1885,
    style: "Victorian",
    color: "blue",
    size: "single-family",
    condition: "like new",
    renovated: true,
    forSale: false,
    "notable features": ["haunted", "gazebo", "fountain", "wine cellar", "spiral staircase", "dumb waiter"],
    rooms: {"bedrooms": 4, "bathrooms": 2.5, "other rooms": 8}
}
// get info about the house
console.log(house.style); // Victorian
console.log(house.renovated); // true
// first and last notable feature
console.log(house["notable features"][0]); // haunted
let numFeatures = house["notable features"].length;
console.log(house["notable features"][numFeatures-1]);
console.log(house.rooms.bathrooms); // num bathrooms

// dynamic variable keys

// A key itself can be dynamic, that is a variable. For dynanmic keys, dot syntax won't work. Use square brackets, instead.

// 23. Declare a carKey variable, and set it equal to one of the keys, as a string:
let carKey = "model";

// 24. Using dot-syntax, try to get the car model as carKey. We get an error, because car has no carKey property:
console.log('car.carKey:', car.carKey); // undefined

// 25. To make car.carKey be understood as car.model, use square brackets: car[carKey]
console.log('car[carKey]:', car[carKey]); // Mustang GT

// 26. To set a multi-word key value, also use square brackets:
car["consumer reviews"] = 248;
console.log('car:', car);

// toLocaleString()

// The toLocaleString() method is called on a number and returns the number with commas, converting it to a string in the process.

// 27. Set a new property for the miles with comma:
car.milesComma = car.miles.toLocaleString();
console.log('car:', car);

// CHALLENGE:
// For best practice, avoid hard coding: use Date obj to get year
const dt = new Date();

// Make properties for the car object called: age, milesPerYear and isClassic
// (if car is 25+ years old); 
// NOTE: the values for these properties need to be calculated

// age (in years)
car.age = dt.getFullYear() - car.year;

// milesPerYear (based on age and total miles)
car.avgMilesPerYear = car.miles / car.age; 

console.log(car.avgMilesPerYear);

// isClassic (true if car is at least 25 yrs old)
car.isClassic = car.age >= 25;
console.log(car);

// car.isClassic = function() {
//     // if(car.age >= 25) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return car.age >= 25 ? true : false;
// }
// console.log(car);
// let test = car.isClassic();
// console.log(test);

// also make a new property for the house called age -- value is number of years old
house.age = dt.getFullYear() - house.year;
console.log(house);

// object methods

// - A method is a function that is scoped to -- belongs to -- an object
// - A method is a property of an object, where the value is a function
// - To make a method, set a key equal to an anonymous function
// - Inside a method, all other properties are available via the 'this' keyword
// - A method must return a value: call a method, gets the return value

// 28. Assign the car object a method, called listForSale. It returns a FOR SALE listing, concatenated from numerous properties referenced by 'this' syntax:
car.listForSale = function() {
    // output if it's a classic (if not, say nothing):
    let classicCar = "";
    if(this.isClassic) {
        classicCar = "classic ";
    }
    return `${classicCar.toUpperCase()}CAR FOR SALE! ${this.year} ${this.make} ${this.model}. Odometer: ${this.milesComma}. Condition: ${this.condition}`;
}

// 29. Log a call to the method. We get the classified listing
console.log(car.listForSale());

// 30. Declare a variable, set equal to a call to the method, and then log it:
let listing;
console.log(listing);

// outputting property values to the DOM

// 31. Get the elements where the car data is displayed:
const carTitleH2 = document.getElementById('car-title');
const carMpgH3 = document.getElementById('car-mpg');
const carEngineH3 = document.getElementById('car-engine');
const carOptionsH3 = document.getElementById('car-options');
const carReviewRatingsH3 = document.getElementById('car-reviews-ratings');
const carListingP = document.getElementById('car-listing');

// 32. Get the button, and have it call the showCarInfo function when clicked:
const getCarInfoBtn = document.querySelector('button');
getCarInfoBtn.addEventListener('click', showCarInfo);

// 33. Define the showCarInfo function:
function showCarInfo() {
  // 34. Hide the button, since it only gets clicked once:
  this.style.display = "none";
  // 35. Output the title as "year make model":
  carTitleH2.textContent = `${car.year} ${car.make} ${car.model}`; 
  // 36. Output the properties of the mpg property:
  carMpgH3.textContent = `MPG: City: ${car.mileage.city} Hwy: ${car.mileage.hwy}`; 
  // 37. Output the properties of the engine property:
  carEngineH3.textContent = `Engine: Cyl: ${car.engine.cyl} Ltr: ${car.engine.ltr} Hp: ${car.engine.hp}`;
  // 38. Output the options, one array item at a time:
  // convert options into a string arr.join() is called on an array and returns a string of array items connected by the delimiter, which in this case is a comma space
  carOptionsH3.textContent = "Options: " + car.options.join(', ');
  // 39. Output the two-word properties, using square bracket syntax:
  carReviewRatingsH3.textContent = `Consumer Reviews: ${car["consumer reviews"]} - Avg Star Rating: ${car["star rating"]}`;
  // Output the FOR SALE listing, which is returned by the listForSale() method:
  carListingP.textContent = car.listForSale();
} // end function showCarInfo()

/*
// arrays of objects

// In web applications, data is often stored as arrays of objects or objects with child objects for properties. For this cars menu part of the lesson, we will work with an extenal file, animals.js, which contains an array of animal objects.

40. Get the DOM elements for displaying the car2 data. Can just copy-paste from above:
*/
const carMenu = document.getElementById('car-menu');
const carPic2 = document.getElementById('car-pic2');
const carTitle2 = document.getElementById('car-title2');
const carMpg2 = document.getElementById('car-mpg2');
const carEngine2 = document.getElementById('car-engine2');
const carOptions2 = document.getElementById('car-options2');
const carListing2 = document.getElementById('car-listing2');

// 41. have the car menu call the getCarInfo() function on change:
carMenu.addEventListener('change', getCarInfo);

// 42. Define the getCarInfo() function:
function getCarInfo() {
    // 43. Save the menu value, which is the chosen car model to a var:
    let chosenModel = this.value; // 'Camry' or whatever
    console.log('chosenModel:', chosenModel);
    // 44. Loop the carsArr, the big array of car objects, looking for that model
    //     refer to the current item as carObj:
    for(carObj of carsArr) {
        // 45. Output the data for first car, then return to exit:
        console.log('frist carObj["model"]:', carObj["model"]);
        console.log('\nfirst carObj:', carObj);
        // 46. Compare the current car (carObj) model to chosenModel
        if(carObj["model"] == chosenModel) {
            // 47. Output the data from the carObj properties:
            carPic2.src = `images/cars/${carObj.image}`;
            carTitle2.textContent = `${carObj.year}, ${car.make}, ${carObj.model}`;
            carMpg2.textContent = `city: ${carObj.mpg.city}, hwy: ${carObj.mpg.hwy}`;
            carEngine2.textContent = `cyl: ${carObj.model.cyl}, L: ${carObj.model.ltr} hp: ${carObj.model.hp}`
            carOptions2.textContent = `<br> Optons: ${carObj.options[0]} ${carObj.options[1]} ${carObj.options[2]}`
            carListing2.textContent = carObj.listForSale();
            // 48. Return to exit the function, cuz we're done here
            return;
        } 
    }
}

/*
49. Open animals.js. It contains two big variables, an object called animalsObj, and an array by the name of animalsArr.

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

// 50. Get the DOM elements for the animals:
*/
const animalPic = document.getElementById('animal-pic');
const animalMenu = document.getElementById('animal-menu');
const animalName = document.getElementById('animal-name');
const animalClass = document.getElementById('animal-class');
const animalContinent = document.getElementById('animal-continent');
const animalDiet = document.getElementById('animal-diet');

// 51. Have the menu call a function on 'change' (menu choice):
animalMenu.addEventListener('change', showAnimal);

// 52. Define the function that runs when a menu choice is made:
function showAnimal() {

    // 53. The menu value is an animal, such as "giraffe" or "panda". Save it to a variable, animal:
    let animal = this.value; // e.g. "giraffe", "panda"

    // 54. Look up the animal in the animals object, using the chosenAnimal as the dynamic key. For this, we use square brackets--not dot-syntax:
    let animalObj = animalsObj[animal];

    // 55. Output the property values to their respective tags:
    animalName.textContent = animal;
    animalClass.textContent = `Class: ${obj.class}`;
    animalContinent.textContent = `Continent: ${obj.continent}`;
    animalDiet.textContent = `Herbivore: ${obj.herbivore}`;

    // 56. Set the souce of the animal image:
    animalPic.src = `images/${animal}.jpg`;
    
} // end function showAnimal()

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