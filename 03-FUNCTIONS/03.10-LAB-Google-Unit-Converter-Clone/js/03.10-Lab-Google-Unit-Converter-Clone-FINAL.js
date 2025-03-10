// Google Unit Converter
// fetch DOM objects

// 1. Get the conversion type category menu:
const categoryMenu = document.getElementById('category-menu');

// 2. Get the two numeric input fields:
const n1 = document.getElementById('num1');
const n2 = document.getElementById('num2');

// 3. Get the menus below the input boxes. These un-selectable 
//    menus serve as the labels of the input boxes:
const unit1 = document.getElementById('unit1');
const unit2 = document.getElementById('unit2');

// 4. Get the h2 for displaying the conversion formula:
const formula = document.getElementById('formula');

// 5. Have a change to the category menu call the changeCategory function:
categoryMenu.addEventListener('change', changeCategory);

// Call convert() function whenever:
// - user hits Enter after entering number
// - user changes unmber by clicking stepper

// 6. Have the number fields call the convert function on change:
n1.addEventListener('change', convert);
n2.addEventListener('change', convert);

// 7. Define the convert() function:
function convert() {

    // 8. Pass this.id -- the id of the the number field that called the function -- and save it simply as id:
    let id = this.id;

    // 9. Set up the switch par of a switch-case-break, where the category menu value is compared to various cases, looking for a match:
    switch(categoryMenu.value) {

        // 10. Check if the categoryMenu value is 'temperature':
        case 'temperature': // value1: fahrenheit; value2: celsius
        // 11. If the num1 box called the function:
        if(id == 'num1') {
            // 12. Set the nun2 box to the converted value:
            n2.value = ((n1.value - 32) * 5 / 9).toFixed(5);
        } else {
            // 13. Set the nun1 box to the converted value:
            n1.value = (n2.value * 9 / 5 + 32).toFixed(5);
        }
        break;

        // 14. Run the case-break on the other menu choices:
        case 'distance': // num1: mi; num2: ft
            if(id == 'num1') {
                n2.value = (n1.value * 3.28084).toFixed(5);
            } else {
                n1.value = (n2.value / 3.28084).toFixed(5);
            }
        break;

        case 'length': // num1: in; num2: cm
            if(id == 'num1') {
                n2.value = (n1.value * 2.54).toFixed(5);
            } else {
                n1.value = (n2.value / 2.54).toFixed(5); 
            } 
        break;

        case 'weight': // num1: kg; num2: lb
            if(id == 'num1') {
                n2.value = (n1.value * 2.20462).toFixed(5);
            } else {
                n1.value = (n2.value / 2.20462).toFixed(5);
            }
        break;

        case 'time': // num1: min; num2: hr
            if(id == 'num1') {
                n2.value = (n1.value * 60).toFixed(5); 
            } else {
                n1.value = (n2.value / 60).toFixed(5); 
            }
        break;
    }
}

// Call changeCategory() function whenever:
// - user chooses from the category menu

// 15. Define the changeCategory() function:
function changeCategory() {

    // 16. Set up a switch that considers the chosen category:
    switch(categoryMenu.value) {

        // 17. If the chosen category is 'temperature':
        case 'temperature':

            // 18. Display the starter temperature values:
            n1.value = '212'; // 212 F
            n2.value = '100'; // 100 C

            // 19. Set the text of the menu "labels". Since there is only the one option, we can access it at index [0]:
            unit1[0].text = 'Fahrenheit';
            unit2[0].text = 'Celsius';

            // 20. Display the Formula text:
            formula.textContent = "F = C * 9/5 + 32";

        break;

        // 21. Move on to see if the chosen category is 'distance':
        case 'distance':

            // 22. Set the default, which is 1 as the left number:
            n1.value = '1'; // 1 meter
            n2.value = '3.28084'; // 3.28084 ft

            // 23. Set value and text of the menu "labels":
            unit1[0].text = 'Meter';
            unit2[0].text = 'Foot';

            // 24. Update the formula display
            formula.textContent = "1 m = 3.28084 ft";
        break;

        // 25. Repeat the above for the other three cases
        case 'length':
            n1.value = '1'; // 1 inch
            n2.value = '2.54'; // 2.54 cm
            unit1[0].text = 'Inch';
            unit2[0].text= 'Centimeter';
            formula.textContent = "1 in = 2.54 cm";
        break;

        case 'weight':
            n1.value = '1'; // 1 kg
            n2.value = '2.20462'; // 2.20462 lb
            unit1[0].text = 'Kilogram';
            unit2[0].text = 'Pound';
            formula.textContent = "1 kg = 2.20462 lb";
        break;

        case 'time':
            n1.value = '1'; // 1 hour
            n2.value = '60'; // 60 min
            unit1[0].text = 'Hour';
            unit2[0].text = 'Minute';
            formula.textContent = "1 hour = 60 min";
        break;

    }
}
