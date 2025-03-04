// Lesson 09.01 Cat Facts API
// API (Application Programming Interface) involves an app requesting data from a server
// data is returned to the app in JSON (JavaScript Object Notation)
// JSON is basically a JS object where all the keys are in double quotes
// The stringified object can travel over a network better, cuz it's just a string
// The app parses the string back into its JS object format which gives access
// to the individual properties
// go to https://catfact.ninja/fact and you will see a random cat fact in JSON format

// `{
//   "fact": "Cats can be right-pawed or left-pawed.",
//   "length": 38
// }
// random cat fact served by API

// JSON vs. "regular JS object"
// JSON.stringify(obj);
// 1. Declare a "normal" object
const pet = { 
    type: "bunny", 
    name: "Thumper", 
    age: 3, 
    herbivore: true, 
    faveFoods: ['carrots', 'blueberries', 'parsley'] 
};

// 2. convert the object to JSON for transmission over a network
//    JSON.stringify(obj) takes an obj w properties as its arg
//    and returns the JSON version, where the keys are in double 
//    quotes so save the returned JSOn to a variable
let petJSON = JSON.stringify(pet);

console.log('pet:', pet);
// with the regular object, you have access to the properties
console.log('pet.name:', pet.name);
console.log('pet.faveFoods[1]:', pet.faveFoods[1]); // blueberries
console.log('typeof(pet):', typeof(pet)); // object

// with the JSON, you do NOT yet have access to the properties
// because they are stringified
console.log('petJSON:', petJSON); // {"type":"bunny","name":"Thumper","age":3,"herbivore":true,"faveFoods":["carrots","blueberries","parsley"]}
console.log('petJSON.name:', petJSON.name); // undefined
console.log('typeof(petJSON):', typeof(petJSON)); // string

// JSON.parse(JSONstring) works in the opposite direction of JSON.stringify(obj)
// you pass the parse() method a JSON string and get back a "regular" JS obj
// with properties that you can now access.  So, do the pet in reverse now:
const petObj = JSON.parse(petJSON);

console.log('petObj:', petObj); // { type:"bunny", name:"Thumper", age:3, herbivore: true, faveFoods":["carrots","blueberries","parsley"] }

console.log('petObj.name:', petObj.name); // Thumper
console.log('petObj.faveFoods[1]:', petObj.faveFoods[1]); // blueberries

// Get the DOM objects:
const infoDiv = document.getElementById('pet-info');

const catBtn = document.querySelector('#cat-btn');
catBtn.addEventListener('click', fetchCatFact);

const dogBtn = document.querySelector('#dog-btn');
dogBtn.addEventListener('click', fetchDogPic);

// "GET" specifies how is the data to be sent from the 
// server -- GET means the data rides along on the URL
// fetch(url, method) and it returns a so-called Promise

// GET URL example from Craigslist:
// https://newyork.craigslist.org/search/ata?max_price=200&min_price=100#search=1~gallery~0~0

// File Path URL:
// https://newyork.craigslist.org/search/ata
// Querystring:
// ? max_price=200 & min_price=100 #search=1~gallery~0~0

// fetch() global method
// The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// JS is asynchronous programming language, meaning that if a task takes some to do, JS can carry on down the code and keep doing stuff
// coffee shop analogy: Starbucks takes your order, gives you a 
// receipt / claim ticket and proceeds to take next customer's order
// when your order is done, you are notified and you come, present
// your ticket/receipt and take your coffee
// this is an aysnchronous coffee shop order handling process
// by contrast, synchronous would be that annoying shop where everyone
// is ignored until the customer at the counter is fully served

function fetchCatFact() {
    // fetch(api_url_string, method_obj) and returns a Promise (receipt)
    fetch( "https://catfact.ninja/fact", { method: "GET" })
    // once the promise is fulfilled (actual data has finally arrived)
    // the first of 2 thens is invoked:
    // .then() runs once the Promise is fulfilled / data is here
    // .then(callback) takes a callback as its argument
    // the argument of the callback is the returned JSON data, as jsonResponse
    // the argument name can be anything you like, as long as they make some sense
    // response (res for short), json, jsonData, jsonResponse, payload, etc.
    // .then(JSON) the first .then() receives the JSON as the arg of its callback
    // .json() method parses the json response string into a usable object
    // .json() method also handles passing of object to the next .then()
    .then(jsonResponse => jsonResponse.json())
    // the second .then() receives the parsed object -- the "regular JS obj"
    // the second and final then takes in the parsed json data and
    // passes it to its own callback as its argument
    // it is here where we actually "do stuff" w the data:
    .then(catObj => infoDiv.textContent = catObj.fact);
    // Cat Fact API Random Result:
    // {"fact":"Contrary to popular belief, the cat is a social animal. 
    // A pet cat will respond and answer to speech , and seems to enjoy 
    // human companionship.","length":141}
} // end fetchCatFact() function

// LAB CHALLENGE: Make the "Get Dog Pic" button work
// clicking btn should display a diff random dog pic each time

// Dog Pic API Random Result:
// sample of random result from Dog API :
// {"message":"https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_4005.jpg","status":"success"}

// function fetchDogPic() {
//     fetch("https://dog.ceo/api/breeds/image/random", { method: "GET" })
//     .then(jsonData => jsonData.json())
//     .then(obj => {
//         const dogPic = new Image();
//         dogPic.src = obj.message;
//         infoDiv.innerHTML = "";
//         infoDiv.appendChild(dogPic);
//     });
// }

function fetchDogPic () {
    fetch("https://dog.ceo/api/breeds/image/random", {'method':'GET'})
    .then(dogJSON => dogJSON.json())
    .then(dogPic => infoDiv.innerHTML = `<img src=${dogPic.message}>`);
}
