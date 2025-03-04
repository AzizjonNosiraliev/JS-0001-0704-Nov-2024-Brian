// Lesson 09.02 - Shortest Lines Alogrithm
// Spread Operator ...
// shortest lines algo: given lines of customers of varying lengths 
// write a function with two arguments: the lines as an array and a number
// of new customers to add to the lines. customers must be added one at a time
// to the shortest line. if more than one line is same length, add to the array
// with the lowest index
// if the lines have 3, 2 and 5 customers, the array argument is [3,2,5]
// how many customers are in the line with the last customer?

const lines1 = [3,2,5]; // add 4: [5,4,5]
const lines2 = [3,2,5,3,6,1]; // add 20: [7,7,7,7,6,6]
const lines3 = [13,8,5,10,6,7,9,10,4,12]; // add 100: [19,19,19,19,18,18,18,18,18,18]
const lines4 = [13,8,5,10,6,7,9,10,4,12]; // add 5: [13,8,7,10,7,7,9,10,6,12] 4
const lines5 = [13,8,5,10,6,7,9,10,4,12]; // add 10: [13,8,7,10,7,7,9,10,6,12] 4
const lines6 = [13,8,5,10,6,7,9,10,4,12];
const lines7 = [13,8,5,10,6,7,9,10,4,12];

function lengthenLines(arr, ppl) {
    // let orig = [...arr];
    let indx = 0;
    for(let i = 0; i < ppl; i++) { // loop once per new customer to add to line(s)
        // get the index of the minimum value in the array (the shortest line)
        let minArrVal = Math.min(...arr); // minimum array value (shortest line)
        indx = arr.indexOf(minArrVal); // index of shortest line (new customer goes here)
        // add a customer to the "mindex line" -- indexOf returns the FIRST match
        // so if there are 2+ lines with same number of customers, the first line
        // gets the new customer
        arr[indx]++;
    }
    return `
            Original customer lines: ${orig}
            After ${ppl} more customers: ${arr} 
            Last customer in line ${(indx+1)}`;
}

console.log('lines1', lengthenLines(lines1, 4)); // [5,4,5] 1
console.log('lines2', lengthenLines(lines2, 20)); // [7,7,7,7,6,6] 4
console.log('lines3', lengthenLines(lines3, 100)); // [19,19,19,19,18,18,18,18,18,18] 4
console.log('lines4', lengthenLines(lines4, 5)); // [13,8,7,10,7,7,9,10,6,12] 5
console.log('lines5', lengthenLines(lines5, 10)); // [13,8,8,10,8,8,9,10,8,12] 9
console.log('lines6', lengthenLines(lines6, 20)); // [13,10,10,10,10,10,10,10,9,12] 7
console.log('lines7', lengthenLines(lines7, 30)); // [14,14,14,14,13,13,13,13,13,13] 4

