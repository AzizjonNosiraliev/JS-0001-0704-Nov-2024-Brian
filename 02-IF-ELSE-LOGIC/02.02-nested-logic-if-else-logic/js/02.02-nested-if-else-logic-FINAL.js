/* Lesson 02.02 - FINAL

// - nested if-else logic
// - truthy-falsey values

// nested if-else logic

// Consider if-else logic involving a planned activity: 

// - if it's rainy, let's go to the museum.
// - else if it's sunny, let's go to the beach
// - else it's neither rainy nor sunny, so let's go to the park.
    
// But what if there are also wind conditions that will determine what activities we engage in once we reach our destination. This requires nested if-else logic.

// 1. Declare two variables: a string and a boolean:
let weather = "sunny";
let windy = true;

// log the result "Let's go to the beach!"
// or BONUS / better: save result to a variable
// to be logged at the end:
let plans = "";

if (weather == "rainy") {
    plans = "Let's go to the museum!";
} else if (weather == "sunny") {
    plans = "Let's go to the beach!";
} else {
    plans = "Let's go to the park!";
}

console.log('plans:', plans);

// 2. Set up the non-nested logic, where we consider the weather, but not the wind conditions:


// 3. Make the weather "sunny" so that the "else if" part runs:

// 4. Make the weather "cloudy" so that the "else" part runs:

// nested if-else

// The wind don't much matter at the museum, but does at the beach and park. If it's windy at the beach, we will go "fly a kite"; otherwise we'll "play frisbee".

// 5. Add a nested if-else to specify what to do at the beach, based on the wind:

// 6. Moving on to the last part, specify what to do at the park based on the wind:

weather = "overcast";
plans = "";
// windy = !windy; // toggle windy

// add to (concatenate) the plans based on wind 
if (weather == "rainy") {
    plans = "Let's go to the museum!";
    // wind conditions do not apply to musuem
} else if (weather == "sunny") {
    plans = "Let's go to the beach!";
    // nested if else: what to do at beach if 
    // windy ("fly kite") or not ("play frisbee")
    if(windy) { // windy == true
        plans += " Let's fly a kite!";
    } else { // windy == false
        plans += " Let's go swimming!";
    }
} else {
    plans = "Let's go to the park!";
    // nested if else: what to do at park if windy or not
    if(windy) { // windy == true
        plans += " Let's fly a kite!";
    } else { // windy == false
        plans += " Let's play frisbee!";
    }
}

console.log('plans:', plans);

// 7. Change the values of weather and windy to get different output.

/*

DONE: Lesson 02.02
NEXT: Lab 02.02
THEN: Lesson 02.03
___________________________________________________________________

Lab 02.02

1. Write nested if-else logic that considers whether today is a weekday, weekend or holiday, as well or if you're a student or not. Depending on the variable values, the logic should log one of six different strings:

    - if it's a weekday and student is true: "Go to school!"
    - if it's a weekday and student is false: "Go to work!"
    - if it's the weekend and student is true: "Keg Party!"
    - if it's the weekend and student is false: "Happy Hour!"
    - if it's a holiday and student is true: "Road trip!"
    - if it's a holiday and student is false: "Backyard BBQ!"
*/

// day possibilities: "weekday", "weekend" or "holiday"
let day = "holiday"; 
// or:
let days = ["holiday", "weekday", "weekend"];
let r = ~~(Math.random() * 3) // generate random int from 0-2
day = days[r]; // day[1], day[2]
// or: random day

let student = true;
// student = !student; // flip the boolean

let action = "";

if(day == "weekday") {
    if(student) {
        action = "Go to school!";
    } else {
        action = "Go to work!";
    }
} else if(day == 'weekend') {
    if(student) {
        action = "Keg party!";
    } else {
        action = 'Happy Hour!';
    }
} else if(day == 'holiday') {
    if(student) {
        action = 'Road trip!';
    } else {
        action = 'Backyard BBQ!';
    }
}

console.log('action:', action);

/*
2. Write a nested if-else block, that satisfies the following conditions:

    - If the student score is greater than or equal to 90, if the student is in high school, they get a grade of "A", but if they are in college they get a grade of 4.

    - If the student score is greater than or equal to 80 and less than 90, if the student is in high school, they get a grade of "B", but if they are in college they get a grade of 3.

    - If the student score is greater than or equal to 70 and less than 80, if the student is in high school, they get a grade of "C", but if they are in college they get a grade of 2.

    - If the student score is greater than or equal to 65 and less than 70, if the student is in high school, they get a grade of "D", but if they are in college they get a grade of 1.

    - Else the grade is "FAIL" for both high school and college.
*/

let score = 74;
let highSchool = true;
let grade; // will be set to either a string letter grade or
// a number grade

if(score >= 90) {
    if(highSchool) {
        grade = "A";
    } else {
        grade = 4;
    }
} else if(score >= 80) {
    if(highSchool) {
        grade = "B";
    } else {
        grade = 3;
    }
} else if(score >= 70) {
    if(highSchool) {
        grade = "C";
    } else {
        grade = 2;
    }
} else if(score >= 65) {
    if(highSchool) {
        grade = "D";
    } else {
        grade = 1;
    }
} else { // score less than 65
    grade = "FAIL"; // same gread for HS and college
}

console.log(grade);

/*
3. Write a nested if-else block, that calculates the price of a pet, 
   based on the following conditions:

    - If the pet is a cat, increase the pet price by 20%, unless it is a kitten (baby cat), in which case decrease the price by 10%.

    - If the pet is a dog, increase the pet price by 30%, unless it is a puppy (baby dog), in which case decrease the price by 15%.

    - If the pet is anything besides a dog or a cat, double the price, unless it is a baby version of the pet, in which case cut the price in half.
*/

let pet = "bunny";
let price = 100;
let baby = true;

if(pet == "cat") {
    if(baby) {
        price *= 0.9; // to decrease by 10%, multiply by 0.9
    } else {
        price *= 1.2; // to increase by 20%, multiply by 1.2
    }
} else if(pet == "dog") {
    if(baby) {
        price *= 0.85; // to decrease by 15%, multiply by 0.85
    } else {
        price *= 1.3; // to increase by 30%, multiply by 1.3
    }
} else { // neither dog nor cat
    if(baby) {
        price *= 0.5; // to decrease by half (50%), multiply by 0.5
    } else {
        price *= 2; // to double a number, multiply it by 2
    }
}

console.log(price);

// END Lab 02.02