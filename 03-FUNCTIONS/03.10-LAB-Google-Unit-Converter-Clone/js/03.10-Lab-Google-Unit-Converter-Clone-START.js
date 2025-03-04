// Google Unit Converter
// fetch DOM objects

// 1. Get the conversion type category menu:

// 2. Get the two numeric input fields:


// 3. Get the menus below the input boxes. These un-selectable menus serve as the labels of the input boxes:


// 4. Get the h2 for displaying the conversion formula:

// 5. Have a change to the category menu call the changeCategory function:

// Call convert() function whenever:
// - user hits Enter after entering number
// - user changes unmber by clicking stepper

// 6. Have the number fields call the convert function on change:


// 7. Define the convert() function:

    // 8. Pass this.id -- the id of the the number field that called the function -- and save it simply as id:

    // 9. Set up the switch par of a switch-case-break, where the category menu value is compared to various cases, looking for a match:

        // 10. Check if the categoryMenu value is 'temperature':

        // 11. If the num1 box called the function:

        // 12. Set the nun2 box to the converted value:

            // 13. Set the nun1 box to the converted value:
     

        // 14. Run the case-break on the other menu choices:


// Call changeCategory() function whenever:
// - user chooses from the category menu

// 15. Define the changeCategory() function:

    // 16. Set up a switch that considers the chosen category:

        // 17. If the chosen category is 'temperature':

            // 18. Display the starter temperature values:
            // 212 F
            // 100 C

            // 19. Set the text of the menu "labels". Since there is only the one option, we can access it at index [0]:

            // 20. Display the Formula text:
            // "F = C * 9/5 + 32";

        // 21. Move on to see if the chosen category is 'distance':

            // 22. Set the default, which is 1 as the left number:
            // 1 meter
            // 3.28084 ft

            // 23. Set value and text of the menu "labels":

            // 24. Update the formula display
            // 1 m = 3.28084 ft;

        // 25. Repeat the above for the other three cases
            // 1 inch
            // 2.54 cm
            // 1 in = 2.54 cm;

            // 1 kg
            // 2.20462 lb
            // 1 kg = 2.20462 lb;

            // 1 hour
            // 60 min
            // 1 hour = 60 min;
