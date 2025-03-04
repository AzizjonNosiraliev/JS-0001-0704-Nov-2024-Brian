/* Lesson 02.02 - START

// - nested if-else logic
// - truthy-falsey values

// nested if-else logic

// Consider if-else logic involving a planned activity: 

// - if it's rainy, let's go to the museum.
// - else if it's sunny, let's go to the beach
// - else it's neither rainy nor sunny, so let's go to the park.
    
// But what if there are also wind conditions that will determine what activities we engage in once we reach our destination. This requires nested if-else logic.

// 1. Declare two variables: a string and a boolean:
*/
let weather = "rainy";
let windy = true;

// - if it's rainy, let's go to the museum.
// - else if it's sunny, let's go to the beach
// - else it's neither rainy nor sunny, so let's go to the park.
// 2. Set up the non-nested logic, where we consider the weather, but not the wind conditions:
weather = "sunny";

if(weather == "rainy") {
    console.log(`The weather is ${weather}! Let's go to the museum!`);
} else if(weather == "sunny") {
    console.log(`The weather is ${weather}! Let's go to the beach!`);
} else {
    console.log(`The weather is ${weather}! Let's go to the park!`);
}

// 3. Make the weather "sunny" so that the "else if" part runs:
// 4. Make the weather "cloudy" so that the "else" part runs:

// nested if-else

// The wind don't much matter at the museum, but does at the beach and park. If it's windy at the beach, we will go windsurfing; otherwise we'll play frisbee.

// 5. Add a nested if-else to specify what to do at the beach, based on the wind:

// 6. Moving on to the last part, specify what to do at the park based on the wind:
if(weather == "rainy") {
    console.log(`The weather is ${weather}! Let's go to the museum!`);
} else if(weather == "sunny") {
    console.log(`The weather is ${weather}! Let's go to the beach!`);
    if(windy) {
        console.log(`It's windy! Let's go windsurfing!`);
    } else {
        console.log(`It's not windy! Let's play volleyball!`);
    }
} else {
    console.log(`The weather is ${weather}! Let's go to the park!`);
    if(windy) {
        console.log(`It's windy! Let's fly a kite!`);
    } else {
        console.log(`It's not windy! Let's have a picnic!`);
    }
}

// 7. Change the values of weather and windy to get different output.

/*

DONE: Lesson 02.02
NEXT: Lab 02.02
THEN: Lesson 02.03
___________________________________________________________________

Lab 02.02

1. Write nested if-else logic that considers whether today is a weekday, weekend or holiday, as well or if you're a student or not. Depending on the variable values, the logic should log one of six different strings. HINT: you need to declare 2 variables, one for the string ('weekday', 'weekend', 'holiday') and another variable, preferably a boolean to tell if we have a student or not.

    - if it's a weekday and student is true: "Go to school!"
    - if it's a weekday and student is false: "Go to work!"
    - if it's the weekend and student is true: "Keg Party!"
    - if it's the weekend and student is false: "Happy Hour!"
    - if it's a holiday and student is true: "Road trip!"
    - if it's a holiday and student is false: "Backyard BBQ!"
*/
let day = "holiday";
let isStudent = true;
if (day == "weekday") {
    if (isStudent) {
        console.log("Go to school!")
    } else {
        console.log("Go to work!")
    }
} else if (day == "weekend") {
    if (isStudent) {
        console.log("Keg Party!")
    } else {
        console.log("Happy Hour!")
    }
} else {
    if (isStudent) {
        console.log("Roadtrip!")
    } else {
        console.log("Backyard BBQ!")
    }
}
/*
2. Write a nested if-else block, that satisfies the following conditions:

    - If the student score is greater than or equal to 90, if the student is in high school, they get a grade of "A", but if they are in college they get a grade of 4.

    - If the student score is greater than or equal to 80 and less than 90, if the student is in high school, they get a grade of "B", but if they are in college they get a grade of 3.

    - If the student score is greater than or equal to 70 and less than 80, if the student is in high school, they get a grade of "C", but if they are in college they get a grade of 2.

    - If the student score is greater than or equal to 65 and less than 70, if the student is in high school, they get a grade of "D", but if they are in college they get a grade of 1.

    - Else the grade is "FAIL" for both high school and college.
*/

let studentScore = ~~(Math.random()*101);
let college = true;
let grade ;
if  (studentScore >= 90) {
    if (college == true) {
        grade = 4;
    } else {
        grade = "A"
    }
} else if  (studentScore >= 80) {
    if (college == true) {
        grade = 3;
    } else {
        grade = "B"
    }
} else if  (studentScore >= 70) {
    if (college == true) {
        grade = 2;
    } else {
        grade = "C"
    }
} else if  (studentScore >= 65) {
    if (college == true) {
        grade = 1;
    } else {
        grade = "D"
    }
} else {
    grade = "FAIL"
}
console.log(` Your score is ${studentScore}. You received a ${grade}`)

/*
3. Write a nested if-else block, that calculates the price of a pet, 
   based on the following conditions:

    - If the pet is a cat, increase the pet price by 20%, unless it is a kitten (baby cat), in which case decrease the price by 10%.

    - If the pet is a dog, increase the pet price by 30%, unless it is a puppy (baby dog), in which case decrease the price by 15%.

    - If the pet is anything besides a dog or a cat, double the price, unless it is a baby version of the pet, in which case cut the price in half.

    END Lab 02.02
*/

let price = 100;
let pet = "iguana";
let baby = true;
let babyType="";

if (pet == "cat") {
    if (baby) {
        price *= 0.9;
        babyType = "You got a kitten!"
    } else {
        price *= 1.2;
    }
} else if (pet == "dog") {
    if (baby) {
        babyType = "You got a puppy!"
        price *= 0.85;

    } else {
        price *= 1.3;
    }
} else {
    if (baby) {
        price *= 0.5;
        babyType = `You got a baby ${pet}`
    } else {
        price *= 2;
    }
}
console.log(`${babyType}. Your new pet ${pet} costs ${price}`)