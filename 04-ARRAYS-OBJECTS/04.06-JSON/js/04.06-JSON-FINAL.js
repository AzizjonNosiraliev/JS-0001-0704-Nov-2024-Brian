/* 04.06-JSON - FINAL

JSON (JavaScript Object Notation)
is the syntax of a JS object that has been serialized (stringified) for the purposes of transmitting the data across a network, mostly notably, via an HTTP Request on the Internet.

An API (Application Programming Interface) typically returns the requested data (such as real-time weather, cryptocurrency prices, etc.) in JSON format.

Given this mini-array of two animal objects.
- access individual animals by array index. The Bison is at index 0.
- each individual animal object has 6 properties. 
- use "dot-syntax to "drill in" to get the individual properties 
*/

// array of objects 
const animalsArr = [
    { name: 'American bison', 
      class: 'mammal', 
      herbivore: true, 
      continent: 'North America',
      wildPop: 20000,
      captivity: 400000,
    },
    { name: 'Green Anaconda', 
      class: 'reptile', 
      herbivore: false, 
      continent: 'South America',
      wildPop: 3700000,
      captivity: 50000,
    },
    {
      name: 'giraffe',
      class: 'mammal', 
      herbivore: true, 
      continent: 'Africa',
      wildPop: 70000,
      captivity: 2000,
    },
    {
      name: 'penguin',
      class: 'bird', 
      herbivore: false, 
      continent: 'Antarctica',
      wildPop: 70000,
      captivity: 2000,
    },
];

// 1. Log 'mammal', 'Green Anaconda', 
//    the first object and the whole array:
console.log(animalsArr[0].class); // mammal
console.log(animalsArr[1].name); // Green Anaconda
console.log(animalsArr[0]); // first object (Bison obj)
console.log(animalsArr); // array object (whole thing)

// challenge: make animalsObj as one object -- no array
// keep all actual data values (can add/remove keys)

// animalsArr of 3 objects refactored as
// animalsObj of 3 properties (key-value pairs)
const animalsObj = {
  'American bison': {
    class: 'mammal', 
    herbivore: true, 
    continent: 'North America',
    wildPop: 20000,
    captivity: 400000,
  },
  'Green Anaconda': {
    class: 'reptile', 
    herbivore: false, 
    continent: 'South America',
    wildPop: 3700000,
    captivity: 50000,
  },
  giraffe: {
    class: 'mammal', 
    herbivore: true, 
    continent: 'Africa',
    wildPop: 70000,
    captivity: 2000,
  },
  penguin: {
    class: 'bird', 
    herbivore: false, 
    continent: 'Antarctica',
    wildPop: 70000,
    captivity: 2000,
  },
}

// 1B. from animalsObj, get 'mammal', 'Green Anaconda', the first property and the whole object
let animalKey = 'Green Anaconda';
console.log(animalsObj.giraffe.class); // mammal (bison or giraffe)
console.log(animalsObj[animalKey].key); // Green Anaconda
console.log(animalsObj['American bison'].continent); // North America
console.log(animalsObj['American bison']); // first property ('American Bison' {})
console.log(animalsObj); // whole object

// Making Array of Object Keys or Values:
// Object.keys(obj)   Object.values(obj)
// get a random animal name: American bison, 
// Green Anaconda, giraffe or penguin
// don't get the whole animal obj -- just the name
// first, put the animal keys into an array
// Object.keys(obj) returns an array of the keys of its obj argument:
const animalKeys = Object.keys(animalsObj);
console.log('animalKeys:', animalKeys);
// ['American bison', 'Green Anaconda', 'giraffe', 'penguin']
// get random integer in range of array (0-3)
let r = ~~(Math.random() * animalKeys.length)

// get the keys of indivual animal obj: class, herbivore, continent, etc.
const individualAnimalObjKeys = Object.keys(animalsObj.penguin);
console.log('individualAnimalObjKeys:', individualAnimalObjKeys);
// ['class', 'herbivore', 'continent', 'wildPop', 'captivity']

// Object.vaues(obj) returns an array of the values of its obj argument:
// get the values of an object (not the keys) into an array:
const giraffeObjValues = Object.values(animalsObj.giraffe);
console.log('giraffeObjValues:', giraffeObjValues);
// ['mammal', true, 'Africa', 70000, 2000]
// an array of mixed data types

/* JSON.stringify(obj) : Turning a JS Object into a String: 
If we wanted to transmit the animals array or object as the Response to an HTTP Request that is, to send it to a webpage across a network, we would have to "package" the data as a string ("serialized").
Think of mailing a letter (snail mail style). You can't just
drop a letter in a mailbox--you have to put it in an envelope.
Turning a data object into a string to get it ready to be transmitted 
is like putting a letter in an envelope.
To do this, we pass the object to the JSON.stringify(obj) method
JSON.stringify(obj) returns the stringified version
set the method call equal to a variable to store the JSON result
*/

// 2. Stringify the array of objects, saving the result to a variable:
const animalsJSON = JSON.stringify(animalsArr);
console.log(animalsJSON, typeof(animalsJSON)); // string

/* In the Console, compare the original array of objects 
   to the JSON version. The actual array has a length of 4,
   with individual objects and properties all itemized.
   The JSON is a string, although with some characteristics
   not found in typical strings
   In the JSON, all the keys and properties with string values 
   are in double quotes--even if, as in animals, the original 
   object string properties are in single quotes
   In JSON, number and boolean values are NOT in quotes
   There are wrapper quotes around the whole thing, which
   do not appear in the Console output

3. Copy the whole JSON string in the Console, and paste it
   inside of backticks as the value of a variable. Break it
   up into individual properties, one per line, for ease of reading.
   The lack of color coding indicates that this is all one big string:
*/
let json = `[
    {
      "name": "American bison",
      "class": "mammal",
      "herbivore": true,
      "continent": "North America",
      "wildPop": 20000,
      "captivity": 400000
    },
    {"name":"Green Anaconda","class":"reptile","herbivore":false,"continent":"South America","wildPop":3700000,"captivity":50000},{"name":"giraffe","class":"mammal","herbivore":true,"continent":"Africa","wildPop":70000,"captivity":2000},{"name":"penguin","class":"bird","herbivore":false,"continent":"Antarctica","wildPop":70000,"captivity":2000}
  ]`;

/* 
JSON.parse method takes a JSON string as its argument, parses it 
(breaks it up into its chunks of data) and returns it. In other words,
it perfroms the stringify process in reverse. With this, we can get 
back to our original array of objects;
parsing is what you do to data that comes into your app as Response to your API Request
*/

// 4. Pass the json string to the JSON.parse method, saving the result:
const animalsArrFromJSON = JSON.parse(animalsJSON);

// 5. Log the result and check the Console. We are back where we started:
console.log('animalsArrFromJSON:\n', animalsArrFromJSON);
console.log(animalsArrFromJSON[3].class); // bird (penguin)
console.log(animalsArr[2].name); // giraffe

/* 
Shallow Copying vs. Deep Copying of an Object
If you copy an object by direct assignment w = sign, the copy is not its own, independent entity. Rather, it remains "connected" to the original. If you make a change to the copy the original changes too.

Shallow Copying: Setting a New Object equal to an Existing Object; the new object will still be "connected to" the original any changes made to the new object will affect the original, too
*/

// 6. Make a Shallow Copy of the Anaconda object from animalsArr.
const shallowAnaconda = animalsArr[1];

// 7. Make a few changes to the Shallow anaconda object:
// "ambushing prey in shallow water";
shallowAnaconda.wildPop = shallowAnaconda.wildPop + 1; // increment by 1
shallowAnaconda.behaviors = ['ambusing prey in shallow water', 'crushing hapless victims', 'slithering', 'basking in sun'];

// 8. Log anaconda as well as animals:
console.log('shallowAnaconda:\n', shallowAnaconda);
// check if original anaconda object also changed:
console.log('animalsArr:\n', animalsArr);

/* Not only did anaconda pick up the changes, but so did the anaconda object in the 
original animals array, which was copied to make the "stand-alone" anaconda.
This is what is meant by a "Shallow Copy" -- so, it didn't really work (or it worked too well).
Ideally we would like the original to NOT pick up changes made to the copy

Deep Copying w Spread Operator ...

animalsArr[1] is NOT an array; it's an object:
{ name: 'Green Anaconda', class: 'reptile', 
  herbivore: false, continent: 'South America',
  wildPop: 3700000, captivity: 50000, } 

// 8B. Make a deep copy by destrucutring the original:
// make deep copy by destructuring animalsArr[1] anaconda object and then wrapping that in { } to restructure back to object
*/
const deepAnaconda = { ...animalsArr[1] };
console.log('{... deepAnaconda}:\n', deepAnaconda);

// 8C. Make a few changes to the Deep anaconda object:
deepAnaconda.name = "Denny the Deep Anaconda";
deepAnaconda.captivity = shallowAnaconda.captivity + 2; // increment by 2
deepAnaconda.behaviors = ['ambusing prey in deep water', 'crushing prey', 'napping to digest meal', 'slithering', 'climbing trees', 'basking in sun'];

// Did original anaconda pick up changes made to deepAnaconda?
// -- it should NOT have
console.log('... deepAnaconda:\n', deepAnaconda);
// check if original anaconda object also changed 
console.log('animalsArr[1]:\n', animalsArr[1]); // did NOT pick up changes

// make change to array inside deep copy; see if original picks up that change: add an item to behaviors array
deepAnaconda.behaviors.push('distracting prey w a joke');
console.log('... deepAnaconda:\n', deepAnaconda);
// check if newly added behavior got added to original:
console.log('animalsArr[1]:\n', animalsArr[1]); // did NOT pick up changes

/* 
Deep Copying: 
Use JSON.parse(JSON.stringify(obj))

If you pass an object to JSON.stringinfy, and then pass that result
to JSON.parse -- meaning, if you nest stringify inside of parse --
then the resulting object will have no "memory of where it came from"
any changes made to the new object will therefor NOT affect the original
*/

// 9. Make a Deep Copy of the anaconda object from animals 
//    using JSON.stringify(JSON.parse(obj) rather than { ... }
const deepAnacondaFromJSON = JSON.parse(JSON.stringify(animalsArr[1]));

// 9B. Make sure the nested JSON operation worked:
console.log('deepAnacondaFromJSON:\n', deepAnacondaFromJSON);

// 10. Make a few changes to deepAnacondaFromJSON to make sure it is
//     a Deep Copy (not "connected" to original object / NOT Shallow Copy):
deepAnacondaFromJSON.name = "Jason the Deep Anaconda";
console.log('deepAnacondaFromJSON:\n', deepAnacondaFromJSON);
console.log('animalsArr[1]:\n', animalsArr[1]);

/* The changes to deepAnaconda did NOT affect the original anaconda in animals--
which still has the changes imposed on it by shallowAnaconda
the takeaway is that straignt up copying an object by assignment only gives you
a Shallow Copy, but as a workaround, you can make a Deep Copy of an object by
nesing the object in JSON.parse(JSON.stringify(obj))

END:  Lesson 04.06
NEXT: Lesson 05.01

*/