// Lesson 03.04 - START
// RESTAURANT BILL TAX AND TIP CALCULATOR

/* The restaurant bill calculator consists of a web form: 
- inputs for Food and Beverage Subtotals
- inputs for Food and Beverage subtotals
- select menus for Tip and Tax percent
- a Calculate button to call the calcBill function
- an h2 to display the itemized bill made by the function
*/
// 1. Get the form objects:

const foodBox = document.getElementById("food-box");
const bevBox = document.getElementById("bev-box");
const tipMenu = document.getElementById("tip-menu");
const taxMenu = document.getElementById("tax-menu");
const calcBtn = document.getElementById("calc-btn");
const outBox = document.getElementById("out-box");

// 2. Have the button listen for a click and call the calcBill function when it is clicked:
calcBtn.addEventListener('click', calcBill); 
// 3. Start writing the function.
function calcBill() {
    let tip = +tipMenu.value;
    let tax = +taxMenu.value;
    // 4. Get the values from the form. 
    // - Use the Number() method or + to convert the "number-like strings" to real numbers. Add the food and bev together to obtain the sub-total:
    let foodTot = +foodBox.value;
    let bevTot = +bevBox.value;
    let subTot = foodTot + bevTot;
    // 5. Calc the tax and tip totals by mutiplying the subTot by the tax and tip rates. Since 15% is 0.15 (not 15) divide by 100:
    let tipTot = subTot * tip / 100;
    let taxTot = subTot * tax / 100;
    // 6. Add the tax and tip to the subtotal and round off tipTot, taxTot, total to two decimal places with toFixed(2). Be sure to do toFixed() AFTER the math is done, because toFixed() converts number to strings:
    let grandTot = subTot + tipTot + taxTot;
    grandTot = grandTot.toFixed(2);
    
    // 7. Get the date and time, so that they can be added to the bill. This is all review of Unit 02.04 - Date Object, so we won't discuss the code again here:
    let dt = new Date();
    let time = dt.toLocaleTimeString('en-US');
    let date = dt.toLocaleDateString("en-US", {weekday:'long', month:'long', year: 'numeric', day:'numeric'});
    // 8. Concatenate the itemized bill and output it. The string includes <br> tags, so use innerHTML, rather than textContent:

    let bill = 
    `***JS CAFE***
    <br>***GUEST CHECK***
    <br>${date}
    <br>${time}
    <br>Food: $${foodTot.toFixed(2)}
    <br>Beverage: $${bevTot.toFixed(2)}
    <br>Sub-Total: $${subTot.toFixed(2)}
    <br>Tax pct: ${tax}%
    <br>Tax: $${taxTot.toFixed(2)}
    <br>Tip Pct: ${tip}%
    <br>Tip: $${tipTot.toFixed(2)}
    <br>***PLEASE PAY:***
    <br>TOTAL: $${grandTot}
    <br>***THANK YOU!***`;
    // output the bill to the web page (DOM)
    outBox.innerHTML = bill;
}
// end calcBill function