// 07.05 Lab - Solution

// Array Callback Methods Review
// use forEach(), map(), filter(), sort(), find() and reduce() methods to 
// get and set this data, an array of objects:

let lakersGreats = [
  { team: "Lakers", fName: "Lebron", lName: "James", active: true, pts: 37062 },
  { team: "Lakers", fName: "Magic", lName: "Johnson", active: false, pts: 17707},
  { team: "Lakers", fName: "Russell", lName: "Westbrook", active: true, pts: 23298},
  { team: "Lakers", fName: "Kareem", lName: "Abdul-Jabbar", active: false, pts: 38387},
  { team: "Lakers", fName: "Anthony", lName: "Davis", active: true, pts: 14390},
  { team: "Lakers", fName: "Shaquille", lastName: "O'Neal", active: false, pts: 28596}
];

// loop
// before doing forEach() version, first loop through
// the lakersGreats array and log all players, including 
// boolean team.active converted to activeStatus string 
function logPlayerInfo(team) {
  for(let i = 0; i < team.length; i++) {
    let activeStatus = "";
    if(item.active == true) {
      activeStatus = "is actively playing";
    } else {
      activeStatus = "is not actively playing";
    }
    console.log(`${item.fName} ${item.lName} ${activeStatus} for the ${item.team}.`);
  }
}

console.log('for loop w if-else:');
logPlayerInfo(lakersGreats);

// refactor:
// A. instead of a for-loop, use the forEach method
// B. simplify item.active == true to the boolean item.active
// C. trim if-else by moving "actively playing" to console.log
function logPlayerInfo(team) {
  team.forEach(function(item) {
    let activeStatus = "";
    if(item.active) {
      activeStatus = "is";
    } else {
      activeStatus = "is not";
    }
    console.log(`${item.fName} ${item.lName} ${activeStatus} actively playing for the ${item.team}.`);
  });
}

console.log('\nforEach function w if-else:');
logPlayerInfo(lakersGreats);

// refactor again:
// A. use arrow => syntax instead of function keyword for callbacks
// B. ternary instead of if-else, where possible
//    ternary set equal to variable stores true/false return value

function logPlayerInfo(team) {
  team.forEach((item) => {
    let isActive = item.active ? "is" : "is not";
    console.log(`${item.fName} ${item.lName} ${isActive} actively playing for the Lakers.`);
  });
}

console.log('\nforEach => w ternary:');
logPlayerInfo(lakersGreats);


// loop
// before doing filter() version, first loop through
// the lakersGreats array and log info for active players only
// the function has a second parameter: flag
// function expects second argument: "active" or "inactive"
function getPlayers(team, flag) {
  const players = [];
  for(let i = 0; i < team.length; i++) {
    let player = team[i];
    // use ternary to obtain a boolean from flag string "active" 
    let isActive = flag == "active" ? true : false;
    if(player.active == isActive) {
      players.push(player);
    }
  }
  return players;
}

let activeLakers = getPlayers(lakersGreats, "active");
console.log('activeLakers: ', activeLakers);

let formerLakers = getPlayers(lakersGreats, "inactive");
console.log('formerLakers: ', formerLakers);

// flag arg alternative to "active" does not have to be "inactive"
// any string besides "active" counts as "inactive"
let exLakers = getPlayers(lakersGreats, "ex");
console.log('exLakers: ', exLakers);

// refactor:
// A. filter() method instead of for loop
// B. if-else sets isActive boolean based on flag arg "active" or not
//   two return values: filter method and the filterPlayers function
function filterPlayers(team, flag) {
  let isActive = "";
  if(flag == "active") {
    isActive = true; 
  } else {
    isActive = false;
  }
  let players = team.filter(function(item) {
    return item.active == isActive; // isActive is boolean
  });
  return players;
}

let filteredActivePlayers =  filterPlayers(lakersGreats, "active")
console.log('filteredPlayers: ', filteredActivePlayers);

let filteredInactivePlayers =  filterPlayers(lakersGreats, "inactive")
console.log('filteredInactivePlayers: ', filteredInactivePlayers);

// refactor again:
// A. => instead of function keyword
// B. ternary instead of if-else
function filterPlayers(team, flag) {
  let isActive = flag == "active" ? true : false;
  let players = team.filter((item) => {
    return item.active == isActive; // isActive is boolean
  });
  return players;
}

filteredActivePlayers =  filterPlayers(lakersGreats, "active")
console.log('filteredPlayers: ', filteredActivePlayers);

filteredInactivePlayers =  filterPlayers(lakersGreats, "inactive")
console.log('filteredInactivePlayers: ', filteredInactivePlayers);


// sorting arrays of objects by string and number key 
// 2nd arg can be "name" or "points"
// the sort is by points

function sortPlayers(team, sortKey) {
  if(sortKey == "name") { // sort by lastName
    team.sort((a, b) => {
      return a.lName > b.lName ? 1 : -1;
    });
  } else { // nd arg is anything besides "name", but should be "points"
    team.sort((a, b) => { 
      // b - a sorts pts by descending. a - b sorts by points ascending
      return b.pts - a.pts;
    });
  }
  return team;
}

// console.log("sorted by name: ", sortPlayers(lakersGreats, "name")); // sort by points
console.log("sorted by points: ", sortPlayers(lakersGreats, "points")); // sort by points

// map()
// use map to return a new array called pointSummmaries:
// ex: "Lebron James has 37,062 career points."
//     add comma to points with points.toLocaleString("en-US");

// copy lakersGreats to lakersGreatsCopy
// use forEach() to add two new properties to each lakersGreatsCopy object: 
// fullName and pointsStr
// use map() to do the same as above, except this time, you get a new array

const lakersGreatsCopy = [...lakersGreats]; // make a copy of the array of objects
lakersGreatsCopy.forEach((item) => {
  item.fullName = item.firstName + " " + item.lastName;
  item.ptsStr = item.pts.toLocaleString('en-US');
});

console.log('team with 2 new properties added by forEach:\n', lakersGreatsCopy);

const lakersGreatsPlus2 = lakersGreats.map((item) => {
  let player = {};
  player.firstName = item.firstName;
  player.lastName = item.lastName;
  player.fullName = item.firstName + " " + item.lastName;
  player.pts = item.pts;
  player.pointsStr = item.pts.toLocaleString('en-US');
  return player;
});

console.log('teamPlus2 with 2 more properties than team made with map():\n', lakersGreatsPlus2);

// filter() make a team of only players with at least 25000 pts
const pts25K = lakersGreatsPlus2.filter((item) => {
  return item.pts >= 25000;
});

console.log('pts25K with players with at least 25000 pts using filter():\n', pts25K);

// filter() -- less is more!
// make a team of only players with less than 20000 pts
// use ultra-concise syntax:
// no parentheses around the callback argument, item
// no curly braces for callback
// no return keyword
// no semi-colon at end of callback line
const max20Kpts = lakersGreatsPlus2.filter(item => item.pts < 20000);

console.log('max20Kpts with players with less than 20000 pts using filter():\n', max20Kpts);

// reduce()
// first use a loop to add up all the points
let totPoints = 0;
for(let i = 0; i < lakersGreats.length; i++) {
  totPoints += lakersGreats[i].pts;
}

console.log('totPoints added up by means of for loop:\n', totPoints.toLocaleString('en-US'));

// use reduce() method to add up all the points
let totalPoints = lakersGreats.reduce((tot, item) => {
  return tot += item.pts;
}, 0);

console.log('totalPoints added up by reduce():\n', totalPoints.toLocaleString('en-US'));

// more concise syntax: don't need 0 accumulator which is the default datatype
let totPts = lakersGreats.reduce((tot, e) => tot += e.pts, 0);

console.log('totPts added up by reduce():\n', totPts.toLocaleString('en-US'));

// use find() to find the first player with more than 30000 pts
let first30000pts = lakersGreats.find((item) => {
  return item.pts > 30000;
});

console.log('first player 30000 pts w find():\n', first30000pts);

// use findIndex() to find the index of the first player with less than 20000 pts
// use more concise syntax
let less20000PtsIndex = lakersGreats.findIndex((item) => item.pts < 20000);

console.log('first player less than 20000 pts w findIndex():\n', less20000PtsIndex);
