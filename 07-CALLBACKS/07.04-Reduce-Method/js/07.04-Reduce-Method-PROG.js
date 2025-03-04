// Lesson 07.04 - PROG
// **array.reduce()**

// Array Method: Array.reduce()
// array.reduce() returns ONE value, which could be of any datatype

// reduce(), like map() and filter(), takes a function as its argument and runs that function on each element, e, in the array upon which it is called. Recall that map returns an array with the same number of items as in the original array, while filter returns an array with fewer items. But reduce returns only ONE value, which can be of any datatype: number, string or even array. That one value accumulates into the first argument of the function called by reduce, with the second argument
// being e. The return value is also initialized as the second argument of the reduce() method itself, passed in right after the function. 
// Confused? Not to worry--it will become clear as we write our

const costs = [89, 95, 99, 95, 19, 95, 39, 79];

// 1. Using a for loop, add up the costs:
let sum = 0;
for(c of costs) {
    sum += c;
}
console.log('for loop sum of nums in costs array:', sum); // 610

// 1B. Do a forEach() version of the above:
sum = 0;
costs.forEach(e => sum += e);
console.log('forEach() sum of nums in costs array:', sum); // 610

// reduce() version of the above:
// reduce((accumulator, current_item), accumulator_start_value_and_datatype)

// 2. Call reduce on costs array, setting it equal to a variable to hold the result, which will be the sum of all the numbers.

// 3. Pass the reduce method its second argument, a variable we'll call sum. 
// This is known as the "accumulator". We give it an initial value of 0.

// 4. As reduce iterates the array, add the current item to the accumulator

let tot = costs.reduce((acc,e) => acc += e, 0); // 0 is the start value and
// also the declaration of datatype (number)
console.log('reduce() accumulates tot of nums in costs array:', tot); // 610


const veggies = ['beet', 'carrot', 'bean', 'celery', 'cucumber', 'broccoli'];

// 5A. Using a for loop, add up the total number of chars in veggies array
let veggieCharCount = 0;
for(v of veggies) {
    // add the number of chars per word to charSum
    veggieCharCount += v.length; // add each to charSum
}
console.log("for loop total characters in veggies array: ", veggieCharCount);

// 5B. Using forEach() add up the tot num chars in veggies array
sum = 0;
veggies.forEach(e => sum += e.length);
console.log("forEach() total characters in veggies array:", sum);

// 6. Using reduce(), add up the total number of chars in veggies array
sum = veggies.reduce((acc,e) => acc += e.length, 0);
console.log("reduce() total characters in veggies array:", sum); // 36

// const vegArr = ['beet', 'carrot', 'bean', 'celery', 'cucumber', 'broccoli', 'tomato', 'kale', 'red bell pepper', 'lettuce', 'asparagus', 'Brussels sprout', 'zucchini', 'arugula', 'bok choy', 'cauliflower', 'tomato', 'pea', 'radish', 'cabbage', 'acorn squash', 'butternut squash', 'snow pea', 'shallot', 'onion', 'okra', 'kohlrabi', 'green bean', 'collard greens', 'corn', 'artichoke', 'Chinese cabbage'];

const vegArr = ["artichoke", "aubergine", "asparagus", "broccoflower", "broccoli", "Brussels sprouts", "kohlrabi", "Savoy cabbage", "red cabbage", "sour cabbage", "cauliflower", "celery", "cichory", "cilantro", "dillettuce", "dill coriander", "eggplant", "endive", "fiddle heads", "frisee", "fennel", "beet greens", "bok choy", "chard", "collard greens", "kale", "lettuce", "mustard greens", "spinach", "alfalfa sprouts", "azuki beans", "bean sprouts", "black beans", "black-eyed peas", "borlotti bean", "broad beans", "chickpeas", "green beans", "kidney beans", "lentils", "lima beans", "mung beans", "navy beans", "peanuts", "pinto beans", "runner beans", "split peas", "soy beans", "peas", "mange tout", "mushrooms", "nettles", "New Zealand spinach", "oca", "okra", "chives", "garlic", "leek", "onion", "shallot", "scallion", "bell pepper", "jalapeño", "habanero", "paprika", "tabasco pepper", "cayenne pepper", "radicchio", "rhubarb", "beetroot", "carrot", "celeriac", "corms", "eddoe", "konjac", "taro", "water chestnut", "ginger", "parsnip", "rutabaga", "wasabi", "horse radish", "daikon", "turnip", "jicama", "jerusalem artichoke", "kumara", "potato", "souryam", "sweet potato", "sweet yam", "yam", "salsify", "skirret", "succotash", "sweetcorn", "topinambur", "acorn squash", "bitter melon", "butternut squash", "banana squash", "courgette", "cucumber", "delicata", "gem squash", "hubbard squash", "marrow", "spaghetti squash", "tatsoi", "tomatillo", "tomato", "watercress"];

/* 6B. BONUS: use reduce() to make an object:
       HINT: accumulator starts as empty object
       // you may want to try it first with a for loop just to get the logic
       // cuz there's a lot going on w making this object
    { 
        a_veggies: ['asparagus', 'aruglua', 'acorn squash', 'artichoke', 'Chinese cabbage']
        b_veggies: ['beet', 'bean', 'broccoli', 'Brussels sprouts', 'bok choy', 'butternut squash'],
        g_veggies: ['green bean']
        c_veggies: ['carrot', 'celery', 'cucumber', 'cauliflower', 'cabbage', 'collard greens', 'corn'],
        k_veggies: ['kale', 'kohlrabi'],
        l_veggies: ['lettuce'],
        o_veggies: ['onion', 'okra'],
        p_veggies: ['peas'],
        r_veggies: ['red bell pepper', 'radish'],
        s_veggies: ['snow pea', 'shallot'],
        t_veggies: ['tomato'],
    }
*/

// 'b_veggies', etc.:
// if key exists
// push veg into that key's array
// no key yet exists for this first char
// make key and assign its initial value as one-item array
// sort the array as we go, every time
// return the updated version of the object

const vegObj = vegArr.reduce((acc, e) => {
    let char1 = e[0].toLowerCase();
    if (acc[`${char1}_veggies`]) {
        acc[`${char1}_veggies`].push(e);
    } else {
        acc[`${char1}_veggies`] = [e];
    }
    // sort each array by word length, ascending
    acc[`${char1}_veggies`].sort((a,b) => a.length > b.length ? 1 : -1);
    return acc;
}, {});

console.log("reduce() make vegObj from vegArr:", vegObj);

// better and more concise: passing long var name to key
// allows for ternary; sorting from the get go takes care 
// of how to sort object keys later
// we sort the array at start so we don't have to sort per key
let vegs = vegArr.sort().reduce((acc, e) => {
    let key = `${e[0].toLowerCase()}_veggies`;
    acc[key] ? acc[key].push(e) : acc[key] = [e];
    return acc;
}, {});

console.log("reduce() make vegs from vegs:", vegs);

// 'b_veggies', etc.:

// sort the array as we go, every time
// return the updated version of the object


console.log("reduce() w ternary, make vegObj from vegArr:");

// 07.04 - Lab - PART B

// CHALLENGE A: Reproduce the object below from the produce array; 
// BONUS for using reduce(), since the result is all ONE object
const produce = ['apple', 'apricot', 'blueberry', 'beet', 'carrot', 'celery', 'cucumber', 'broccoli', 'arugula', 'grape', 'papaya', 'kiwi', 'lime', 'peach', 'asparagus', 'radish', 'dragonfruit', 'mango', 'turnip', 'onion', 'daikon', 'parsley', 'parsnip', 'cilantro', 'spinach', 'orange', 'lettuce', 'cherry', 'tomato', 'banana', 'pineapple', 'strawberry', 'cranberry', 'lemon', 'grapefruit', 'kale', 'tangerine', 'plum', 'raspberry', 'breadfruit', 'Schlitz', 'Schnauzer', 'schlep'];

function wordalyze(wordsArr) {
    return {
        begins_with: wordsArr.reduce((obj, word) => {
            let chr1 = word[0].toUpperCase(); // "A"
            // if key for that letter already exists, push word in
            // else make new key w value as array of 1 word
            obj[chr1] ? obj[chr1].push(word) : obj[chr1] = [word];
            return obj;
        }, {}),
        consonant_blends: wordsArr.reduce((obj, word) => {
            const vowels = "aeiou";
            let blend = ""; // used as a holder for possible blends
            word = word.toLowerCase();
            // we loop through the letter of the word to look for blends
            // this works for n number of consonants at start
            const charsArr = word.split("");
            let i = 0;
            while(!vowels.includes(charsArr[i])) {
                blend += charsArr[i]; // making our blends
                i++;
            }
            if(blend.length > 1) { // if blend.length > 1 than that means at least 2 letters
                obj[blend] ? obj[blend].push(word) : obj[blend] = [word]; // adding to obj : making a new key
            };
            return obj;
        }, {})
    }
} // end function wordalyze

console.log('wordalyze(vegArr):', wordalyze(vegArr));
console.log('wordalyze(produce):', wordalyze(produce));
/* 
    { 
        starts_with: {
            A: ['apple', 'apricot', 'arugula', 'asparagus'],
            B: ['banana', 'beet', 'blueberry', 'broccoli'],
            C: ['carrot', 'celery', 'cherry', 'cilantro', 'cranberry', 'cucumber'],
            D: ['daikon', 'dragonfruit'],
            G: ['grape', 'grapefruit'],
            K: ['kale', 'kiwi'],
            L: ['lemon', 'lettuce', 'lime'],
            M: ['mango'],
            O: ['onion', 'orange'],
            P: ['papaya', 'parsley', 'parsnip', 'peach', 'pineapple', 'plum'],
            R: ['radish', 'raspberry'],
            S: ['spinach', 'strawberry'],
            T: ['tangerine', 'tomato', 'turnip']
        },
        consonant_blends: {
            bl: ['blueberry'],
            br: ['breadfruit', 'broccoli'],
            ch: ['cherry'],
            cr: ['cranberry'],
            dr: ['dragonfruit'],
            gr: ['grape', 'grapefruit'], 
            pl: ['plum'],
            sp: ['spinach'], 
            st: ['strawberry']
        }
    }
*/


// consonant_blends definintion: the first two or more letters are consonants

    // add key for that consonant blends if it doesnt exist yet to the consonant_blends array

    // key already exists so add the item to the consonant_blend array

console.log("produceObj:");

/* CHALLENGE C:
Write a function that takes in an array of words and returns an array of 12-letter, camel-cased "variable names" comprised of consecutive items from the inputted array
Example of camel-cased "variable names": ["forkliftBale", "baleRaindrop", "raindropMule"]
Store the results in a new array. You have 3 arrays provided for testing your function.
*/

const words1 = ["forklift", "bale", "raindrop", "mule", "code", "friendly", "java", "fedora", "radio", "factoid", "raspberry", "fluke", "curveball", "fang", "boot", "fastball", "trap", "paperclip", "pin", "food", "gondola", "fist", "bulldog", "zebra", "fort", "kindling", "fur", "banana", "parrot", "bandana", "peach", "ostrich", "elephant", "iron", "skillet", "steel", "touchdown", "pen", "bicycle", "meter", "egret", "selfie", "vacuum", "gasoline", "rock", "laser", "elevator"];

const words2 = ["stallion", "fuse", "boat", "stapler", "fool", "cherry", "wisdom", "fund", "artichoke", "husk", "five", "book", "fan", "code", "function", "java", "fedora", "sparks", "radio", "saxophone", "cab", "fluke", "curveball", "cat", "slugfest", "fang", "javascript", "ax", "boot", "fastball", "truck", "apples", "banana", "blueberry", "cherry", "grape", "garage", "gargoyle", "kiwi", "lemon", "orange", "doggie", "lime", "popsicle", "violin", "mango", "nectarine"];

const words3 = ["oranges", "peach", "bluebird", "plum", "zipper", "pear", "papaya", "pineapple", "raspberry", "turkey", "giblet", "zoo", "ibex", "cartoon", "bunny", "cutlass", "wagon", "strawberry", "echo", "eggplant", "iota", "umbrella", "toy", "tangerine", "watermelon", "ox", "parade"];


// Since there are so many words, let's start with map to get rid of some of them. We will keep only those strings whose length plus the length of the next string equals 12.

// The added challenge is, we need to capitalize the second word in each combo in order to have camel-case. There is no JS method for camel-casing a string, so to do this, we need to chop off the first character and capitalize that and then "glue" that back onto the rest of the word, which we obtain using the slice() method:
function makeVarNames(words) {
    return words.reduce((acc,e,i,a) => {
        let e2 = ""; // e2 is the next word after current word, e
        if(i < a.length-1) {
            e2 = a[i+1].toLowerCase();
        }
        if(e.length + e2.length == 12) {
            acc.push(e.toLowerCase() + e2[0].toUpperCase() + e2.slice(1));
            return acc;
        } else { // didn't make a var name cuz not 12 letter combo, but must return sthg
            return acc;
        }
    }, []);
}



// console.log('makeVarNames(vegArr):', makeVarNames(vegArr));
// console.log('makeVarNames(produce):', makeVarNames(produce));
console.log('makeVarNames(words1):', makeVarNames(words1));
console.log('makeVarNames(words2):', makeVarNames(words2));
console.log('makeVarNames(words3):', makeVarNames(words3));

        // capitalize the second word
        // pass second word to a var
        // capitalize the first character
        
        // obtain the rest of the word (from index 1) using slice()
 
        // "glue" the two pieces back together
        // the capitalized word


// Chained Array Methods: map() into filter() … OR for to do it all in one array, use reduce()

// 


// Max characters allowed in your solution code: 140 (Tweet!)
// Solution using chained methods: map() into filter() :
// const hyphos = words.map((e, i, a) => { return `${e}-$


// CHALLENGE D TBD:
// combine all 4 variables into one dataset:
const novelYears = [1942, 1926, 1885, 1915];
const songYears = [1973, 1979, 1973, 1973, 1979];

const classicNovels = [
    { author: 'Albert Camus', title: 'The Stranger'},
    { author: 'Ernest Hemingway', title: 'The Sun Also Rises'},
    { author: 'Mark Twain', title: 'The Adventures of Huckleberry Finn'},
    { author: 'Franz Kafka', title: 'The Trial'}
];

const seventiesSongs = [
    { author: 'Billy Joel', title: 'Piano Man'},
    { author: 'Cheap Trick', title: 'Dream Police'},
    { author: 'Elton John', title: 'Goodbye Yellow Brick Road'},
    { author: 'Bob Seger', title: 'Turn the Page'},
    { author: 'Pink Floyd', title: 'Comfortably Numb'}
];

// END Lesson 07.04
