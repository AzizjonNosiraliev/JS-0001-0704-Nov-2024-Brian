// Lesson 05.02 - START
// looping an array of objects
// making a video player interface

// 1. Open `05.02-Looping-Arrays-of-Objects.html` and preview it in the browser.

// 2. Click an animal picture to swap the video and description. 

// 3. Open `animals.js` and have a look. The file contains one variable, an array called `animalsArr`. 
/* 
Each array item is an object of six properties:
    - `name` ('giraffe', 'ostrich', etc.) 
    - `class` ('mammal', 'bird', 'reptile') 
    - `herbivore` (boolean: true or false)
    - `continent` ('Asia', 'Africa', etc.)
    - `youTube` (YouTube video embed code) 
    - `desc` (description of the animal)
*/

// 4. Switch to the lesson file's JS file, `05.02-Looping-Arrays-of-Objects-START.js`.

// To make the application, we will loop through the animals array:
/*
- Each time through the loop, we will concatenate an `img` tag.
- The `img` tag will have an `onclick` event that calls a function called `swapImage(i)`.
- The `i` argument is the index of the current item.
- The argument `i` tells the function which video and description it needs to load.
- The YouTube video is embedded with an `iframe` tag, which is the same for each video, except for an 11-character code specific to that particular video.
*/

// 5. First, get all the elements that we need for the output:

// get animals pic div to hold images
const animalPicsDiv = document.getElementById('animal-pics');
// get the iframe video player
const iframe = document.querySelector('iframe');
// get h2 for animal name
const nameH2 = document.querySelector('h2');
// get p tag for description
const descP = document.querySelector('p');

// 6. Output the name and description of the first animal immediately on page load.
const animal = animalsArr[0];
let diet = animal.herbivore ? "herbivore" : "carnivore";
nameH2.innerHTML = animal.name;
descP.innerHTML =`<b>${animal.class} - ${animal.region} - ${diet}</b><br>${animal.desc}`;


// Now, to output the animal images to the `animal-pics` div, the empty box at left. Each image needs to be clickable to call a function to swap the video and description.

// 9. Set up a loop that iterates `animalsArr`. First thing to do in the loop is to save the current object to a variable:

// 10. Open the `images` folder. Notice that the two-word file names are hyphenated, whereas the animal names in the data have spaces--not hyphens:
/*
- FILE: american-bison.jpg, andean-bear.jpg
- DATA: 'American bison', 'Andean bear'

 We will use object names ('American bison') to concatenate image file paths, so we need to replace the spaces with hyphens.
*/

for(let obj of animalsArr) {
    // 11. Make an image object dynamically:
    const pic = new Image();
    // 11B. Replace animal name space with hyphen
    let hyphenatedName = obj.name.replaceAll(" ", "-").toLowerCase();
    // 11C. Set pic src to the picFile path:
    pic.src = `images/${hyphenatedName}.jpg`;
    // 12. Tell pic to run inline anonymous function on click; function swaps image to current animal:
    pic.onclick = function() {
        nameH2.innerHTML = obj.name;
        let diet = obj.herbivore ? "herbivore" : "carnivore";
        descP.innerHTML =`<b>${obj.class} - ${obj.region} - ${diet}</b><br>${obj.desc}`;
        iframe.src = `https://www.youtube.com/embed/${obj.youTube}`;    
    };
    // 13. Append pic to "animals-pic" div
    animalPicsDiv.appendChild(pic);
} // close for loop

    // the way to pass a param to the listener callback function is to wrap the function
    // in another function: outer func is anonymous and not called until event (click) occurs; inner func is then called when outer func is called; therefore inner func can
    // have param () without calling func instantly -- the outer wrapper func "stops" inner 
    // func from just running immediately

    // pass animal object to var, so that it has scope to make it all the way into the inner-inner function of the listener callback;
    // obj

    // three ways to swap animal:
    // 1. assign data props to pic so that in the swapAnimal func we can
    // get the data as this.prop:
    // pic.animalName = animal.name;
    // pic.desc = animal.desc;
    // pic.youTube = animal.youTube;
    // call function w no params; this requires properties attached to img which are available as 'this' inside function:
    // pic.addEventListener('click', swapAnimal);

    // 2. 
    // OR: listener callback doesn't need to be a separate, named func
    // code is so short, just run it inline
    // 'animal' from for-of loop needs to be passed to var to give it scope inside func:
    // pic.addEventListener('click', function() {
    //     h2.textContent = obj.name;
    //     p.textContent = obj.desc;
    //     iframe.src = "https://www.youtube.com/embed/" + obj.youTube;
    // });

    // 3. 
    // OR: call a func from listener, but pass obj as arg
    // need outer wrapper func to pass param
    // 'animal' from for-of loop needs to be passed to var to give it scope inside func:
    // 'click'

    // 12B. Assign the animal properties to the img so that in the function calls   
    // when that the image clicked, we can get all the data for the animal
    // pic.animalName = animal.name;
    // pic.desc = animal.desc;
    // pic.youTube = animal.youTube;


// #2 is probably the best way to go, because: 
//     - doesn't require a new named func
//     - doesn't require animal be assigned properties in loop


// 13. The function needs to know which animal was clicked, so pass in the index, `i`, as the argument.

// 14. Output the `img` tag. Since this is an html tag, set the `innerHTML` rather than the `textContent`: 


// 15. Save and reload the page; the images should all be there although clicking them doesn't work since we have yet to write the `swapAnimal()` function. That's next.

// // 16. Define the function. It has a parameter `i` which comes in when the function is called as the index ) {
// function swapAnimal() {
//     // inside a function `this` is the obj that is calling the function, which here is the pic AND the pic has an id, which is the animal name
//     // console.log(this.obj); // { entire animal obj }

//     // Get the img properties as this. and output animal name and desc:
//     const obj = this.obj;
//     nameH2.innerHTML = obj.name;
//     let diet = obj.herbivore ? "herbivore" : "carnivore";
//     descP.innerHTML =`<b>${obj.class} - ${obj.region} - ${diet}</b><br>${obj.desc}`;

//     // concat the youTubeCode into the iframe for the embedded You Tube video:
//     iframe.src = `https://www.youtube.com/embed/${obj.youTube}`;


// } // end swapAnimal() function

// END: Lesson 05.02
// NEXT: Lesson 05.03