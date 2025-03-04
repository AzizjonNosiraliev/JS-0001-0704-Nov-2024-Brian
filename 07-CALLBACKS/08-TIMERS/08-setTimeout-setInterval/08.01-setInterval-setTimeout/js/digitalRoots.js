const digitInput = document.getElementById(`find-digital-root`);
const digitOut = document.getElementById(`digital-root`);
digitInput.addEventListener("change", findDigitalRoot2)

function findDigitalRoot() {
  digitOut.innerHTML = "";
  let value = digitInput.value; //assuming its a whole number
 
  if (value < 10) { // if its a single digit just return itself
      digitOut.innerHTML = `Answer: ${value}`;
  } else {
    let sum = 0;
    let string = "";
    const timer = setInterval(() => { 
      String(value).split("").forEach(i => { // convert to string so we can .split and .forEach
        sum += +i; // all values are digits so we convert numbers so we can add them
        string += i + "+"; // makes the string of digits with + sign
      }); // could probably use .reduce rather than .forEach

      // theres an addtional + from "string +=" , so we chop it off 
      // and then we need the = and the sum at the end
      digitOut.innerHTML += string.slice(0, string.length - 1) + " = " + `${sum} <br>`
      value = sum;  // since our loop checks value, we need to update it with sum to see if we go again
      sum = 0; // this preps sum to be used again in the while loop
      string = ""; // resets everything for out next loop through

      if (value < 10) { // if the value is greater than 10 we keep going
        digitOut.innerHTML += `Answer: ${value}` // displays the answer
        clearInterval(timer); // stops the interval loop
      }
    }, 500)
  }
}