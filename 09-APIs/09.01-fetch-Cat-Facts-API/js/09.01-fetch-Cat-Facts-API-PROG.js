// Lesson 09.01 Cat Facts API
// API (Application Programming Interface) involves an app requesting data from a server
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

// 0. Declare a var set equal to cat fact json:
let catFactJsonStr = `{"fact":"The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!","length":165}`;
console.log('typeof(catFactJsonStr):', typeof(catFactJsonStr)); // string
console.log('catFactJsonStr:', catFactJsonStr);

// JSON vs. "regular JS object"
// JSON.stringify(obj);
// 1. Convert catFact json string to "regular" js object:
const catFactObj = JSON.parse(catFactJsonStr);
console.log('typeof(catFactObj):', typeof(catFactObj)); // object
console.log('catFactObj:', catFactObj);
let catFact = catFactObj.fact;
console.log('catFact:', catFact); // The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!

// 2. convert the object to JSON for transmission over a network
//    JSON.stringify(obj) takes an obj w properties as its arg
//    and returns the JSON version, where the keys are in double quotes
//    so save the returned JSOn to a variable
catFactJsonStr = JSON.stringify(catFactObj);
console.log('typeof(catFactJsonStr):', typeof(catFactJsonStr)); // string
console.log('catFactJsonStr:', catFactJsonStr);

// grab the DOM elems: the 2 btns and the output div:
const petInfoDiv = document.getElementById('pet-info');
const catBtn = document.getElementById('cat-btn');
catBtn.addEventListener('click', fetchCatFact);
const dogBtn = document.getElementById('dog-btn');
dogBtn.addEventListener('click', fetchDogPicture);

function fetchCatFact() {
    // fetch(url, method) returns a Promise (not the actual data yet)
    // "GET" specifies how the data is sent from the 
    // server -- GET means the data rides along on the URL
    fetch("https://catfact.ninja/fact", { method: "GET" }) 
    // .then(callback) takes a callback (func) as its argument
    // the argument of the callback is the returned JSON data)
    // the fetch() method has its own methods: then() and json()
    // .then(JSON) receives the JSON as the arg of its callback
    // .then() runs once the Promise is fulfilled (data has arrived)
    // .then() parses json str and returns a usable JS object
    .then(catJson => catJson.json())
    // second .then() receives parsed object as arg of its callback
    .then(catObj => petInfoDiv.textContent = catObj.fact);
} // end fetchCatFact()

// LAB CHALLENGE: Make the "Get Dog Pic" button work
// clicking btn should display a diff random dog pic each time

// Dog Pic API Random Result:
// sample of random result from Dog API :
// {"message":"https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_4005.jpg","status":"success"}

function fetchDogPicture() {
    let dogUrl = "https://dog.ceo/api/breeds/image/random";
    petInfoDiv.innerHTML = "";
    fetch(dogUrl, {method: "GET"})
    .then(jsn => jsn.json())
    .then(obj => {
        let pic = new Image();
        pic.src = obj.message;
        petInfoDiv.appendChild(pic);
    });
}

