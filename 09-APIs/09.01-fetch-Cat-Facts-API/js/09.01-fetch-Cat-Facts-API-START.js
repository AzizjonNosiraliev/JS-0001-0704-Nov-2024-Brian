// Lesson 09.01 Cat Facts API
// API (Application Programming Interface)  involves an app requesting data from a server
// data is returned to the add in JSON (JavaScript Object Notation)
// JSON is basically a JS object where all the keys are in double quotes
// The stringified object can travel over a network better, cuz it's just a string
// The app parses the string back into its JS object format which gives access
// to the individual properties
// go to https://catfact.ninja/fact and you will see a random cat fact in JSON format
// {
//   "fact": "Cats can be right-pawed or left-pawed.",
//   "length": 38
// }
// hold random cat fact loaded from API

// JSON vs. "regular JS object"
// JSON.stringify(obj);
// 1. Declare a "normal" object


// 2. convert the object to JSON for transmission over a network
//    tJSON.stringify(obj) takes an obj w properties as its arg
//    and returns the JSON version, where the keys are in double quotes
//    so save the returned JSOn to a variable


console.log('pet:');
// with the regular object, you have access to the properties
console.log('pet.name:');

// with the JSON, you do NOT yet have access to the properties
// because they are stringified
console.log('petJSON:'); // {"type":"bunny","name":"Thumper","age":3,"herbivore":true,"faveFoods":["carrots","blueberries","parsley"]}
console.log('petJSON.name:'); // undefined

// JSON.parse(JSONstring) works in the opposite direction of JSON.strinify(obj)
// you pass the parse() method a JSON string and get back a "regular" JS obj
// with properties that you can now access.  So, do the pet in reverse now:

console.log('petObj:'); // { type:"bunny", name:"Thumper", age:3, herbivore: true, faveFoods":["carrots","blueberries","parsley"] }

console.log('petObj.name:'); // Thumper
console.log('petObj.faveFoods[1]:'); // blueberries

// #pet-info

// '#cat-btn'
// 'click'

// '#dog-btn'
// 'click'

// "GET" specifies how is the data to be sent from the 
// server -- GET means the data rides along on the URL
// fetch(url, method) and it returns a so-called Promise

// function

    // ""

    // "https://catfact.ninja/fact"

    // .then() runs once the Promise is fulfilled / data is here
    // .then(callback) takes a callback (func) as its argument
    // the argument of the callback is the returned JSON data)
    // the fetch() method has its own methods: then() and json()
    // .then(JSON) the first .then() receives the JSON as the arg of its callback
    
    // Cat Fact API Random Result:
    // {"fact":"Contrary to popular belief, the cat is a social animal. 
    // A pet cat will respond and answer to speech , and seems to enjoy 
    // human companionship.","length":141}
    
    // .t

    // parse the json into "regular JS object"
    // the second .then() receives the parsed object -- the "regular JS obj"
    // as the arg of its callback

    // .t


// LAB CHALLENGE: Make the "Get Dog Pic" button work
// clicking btn should display a diff random dog pic each time

// Dog Pic API Random Result:
// sample of random result from Dog API :
// {"message":"https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_4005.jpg","status":"success"}

// function

    // ""

    // "https://dog.ceo/api/breeds/image/random"
    
    // .t

    // .t
        

    // }

// }

