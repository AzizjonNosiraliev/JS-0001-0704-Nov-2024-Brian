// Lesson 03.07 - FINAL

// Apartment Rent Estimator

// In this form, we present the user with two select menus and two checkboxes, from which they choose their desired apartment configuration. Each choice has a  price: the more bedrooms, bathrooms and amenities chosen, the higher the rent. The choices are:

/* 
- Number of Bedrooms, chosen from a select menu.
- Number of Baths, also chosen from a select menu.
- Doorman Building checkbox
- Parking Space checkbox
- Fitness Center checkbox
- Skyline View checkbox

The html and css are already done, but of course the form doesn't work yet. We will write the JS that powers the form.

The select menus are for choosing numbers of Bedrooms and Baths. The greater the choice, the higher the value (rent).

- The 1 Bath choice has a value of 0, so choosing that will not raise the rent.

- One bedroom is pre-selected by default, even though it is not the first menu choice.

checkboxes
The fees associated with the checkboxes will, of course, only be charged if the checkbox is checked. We will first assess the flat fees and add those to the rent. Then we will calculate the percent surchargess on top of the rent.

- Parking value = 350, for the $350 parking fee
- Fitness Center (gym) value = 100, for the $100 gym fee
- Skyline View value = 0.25, for the 25% surcharge for a skyline view.
- The Doorman value = 0.1, for the 10% surcharge for a doorman building.

- The html also includes a `calculate rent()` button and an `h3` for posting the answer.

*/

// 1. Get the button and have it call a function when clicked:
const calcBtn = document.querySelector('button');
calcBtn.addEventListener('click', calculateRent);

// 5. Get the values of the select menus. We don't need the whole objects--just their values. The values come in as strings, so convert them to numbers:
let bdrmsMenu = document.getElementById('bdrms');
let bathsMenu = document.getElementById('baths');
let closetsMenu = document.getElementById("closets");

// 7. Get the checkboxes
const doormanCB = document.getElementById('doorman');
const parkingCB = document.getElementById('parking');
const viewCB = document.getElementById('view');
const gymCB = document.getElementById('gym');
const balconyCB = document.getElementById("balcony"); // +$100
const petCB = document.getElementById("pet"); // +5%

// 2. Get the "feedback" tag:
const feedbackTag = document.getElementById('feedback');

// 3. Declare the function. Start with the preventDefault() method, so that the button click does not reload the page and reset the form:
function calculateRent(event) {

    // 4. Prevent the button from submitting the form, which would reset it:
    event.preventDefault();

    // 5. Get the values of the select menus. We don't need the whole objects--just their values. The values come in as strings, so convert them to numbers:
    let bdrms = +bdrmsMenu.value;
    let baths = +bathsMenu.value;
    let closets = +closetsMenu.value;

    // 6. Add the values from the menus to get the rent, not including any applicable checkbox fees:
    let rent = bdrms + baths + closets;
    let baseRent = rent; // baseRent is used to do the checkbox surcharge math

    // Checkboxes have a .checked property, which returns a boolean.
    // Write if-statements to see if the checkboxex are checked. 
    // Start with the flat-fee checkboxes:
    // 8. Add the flat fees in $ to the base rent:
    if(parkingCB.checked) rent += +parkingCB.value; // +350
    if(gymCB.checked) rent += +gymCB.value; // +100
    if(petCB.checked) rent += +petCB.value; // +50

    // Next, evaluate the percent fee checkboxes. Calculate the individual fees in terms of base rent, and then add those fees to the total rent:

    // 10. Declare variables to store the percent fees:
    // let doormanFee = viewFee = balconyFee = 0;

    // 11. A doorman building incurs a 10% surcharge, so to get the doorman fee, multiply the rent by the value of the doorman checkbox, which is 0.1 (10%):
    if(doormanCB.checked) rent += baseRent*doormanCB.value; // +10%
    // 12. An apartment with a skyline view is 25% more expensive than one without such a view, so to get the view fee, multiply the rent by the value of the view checkbox, which is 0.25 (25%):
    if(viewCB.checked) rent += baseRent*viewCB.value; // +25%
    if(balconyCB.checked) rent += baseRent*balconyCB.value; // +25%

    // 13. Add the percent fees to the rent and output the final rent, rounded off to the nearest integer:
    feedbackTag.textContent = `Estimated rent: $${Math.round(rent)}`;

} // end function calculateRent(event)

// 14. Run the page in the browser and test various configurations, from the cheapest to the most expensive, and a few in between.

// CHALLENGE: ADD 2 checkboxes and a select menu
// Checkboxes: Balcony (+10%), Pet-Friendly (+$100)
// Menu: Closets: 
// 2 closets are standard (no extra fee)
// each additional closet (max 5) is $150 extra


