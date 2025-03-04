// Lesson 06.06 - PROG

// GIVEN an array movie duration in total minutes: 
const movieMinutes = [129, 175, 98, 186, 140, 93, 102];
// convert movieMinutes to "IMDB time" :
// ['2h 9m', '2h 55m', '1h 38m', '3h 6m', '2h 20m', '1h 33m', '1h 42m']
const imdbTime = [];
for(minutes of movieMinutes) {
    let hrs = ~~(minutes / 60);
    let mins = minutes % 60;
    imdbTime.push(`${hrs}h ${mins}m`);
}
console.log(imdbTime);

// 7. Start by getting the **movie-holder** div, for displaying the movies:
const movieHolder = document.querySelector('.movie-holder');

// 8. Set up a forEach to iterate the **movies** array:
movies.forEach(function(e,i) {

    // Inside the loop, movie, the argument of the callback function, is
    // the current movie object

    // 11. Get the **hours** by dividing **mins** by **60** and rounding down:
    let hrs = ~~(e.mins / 60);

    // 12. Use modulo **%** to get the remainder minutes:
    let mins = e.mins % 60;

    // 14. Add a key, hm, to the object. The value is the IMDB-style time
    e.hm = `${hrs}h ${mins}m`;

    // Now, let's move on to adding the imgFile property:

    // 15. Still in the loop, get the name of the movie and make it lowercase:
    let movieName = e.name.toLowerCase();

    // 17. Remove punctuation from the movie names by replacing commas, apostrophes, colons and periods with nothing. Use RegEx expression: /[^\w\s]/g
    movieName = movieName.replace(/[^\w\s-]/g, '');

    // Use replaceAll() to replace the spaces in the movie names with hyphens, since the image file names have hyphens instead of spaces between the words
    // 18. Complete the file name by tacking on '.jpg' at the end:
    movieName = movieName.replaceAll(" ", "-") + ".jpg";

    // 19. Add the **imgFile** property to the object:
    e.imgFile = movieName;

    // making a property with no leading articles

    // Now for the part where we make a property for the movie name, sans leading "A" or "The". This is the name that we will sort by.

    // 20. Replace leading "The " and "A " with ""
    let sortingName = e.name;
    sortingName = sortingName.replace("The ", "");
    sortingName = sortingName.replace("A ", "");
    e.sortingName = sortingName;

    // 24. Add one more line before closing the loop: a call to the **renderMovies()** function. The function should only be called 
    // ONCE, after forEach is done:
    if(i == movies.length-1) {
        renderMovies();
    }
    
}); // end forEach loop
    
// 25. Log the updated **movies** array. It should have all six properties: the original three: name, year and mins as well as the three new ones: hrMin, imgFile and noAThe:
console.log(movies);

// making the divs and images dynamically

// renderMovies() loops through the movies array and makes and outputs the grid of movies:

// 26. Define the **renderMovies()** function. 
function renderMovies() {

    // First thing to do is clear the **movieHolder** of any existing content:
    movieHolder.innerHTML = "";

    // 27. Set up a forEach to iterate the movies array:
    movies.forEach(function(e) {

        // 28. Next in the loop, make a div, give it its class and output it to movieHolder:
        const divvy = document.createElement('div');
        divvy.className = 'divvy';
        movieHolder.appendChild(divvy);

        // 29. Still in the loop, make an image object, set its source to the movie's jpg and output it to the div:
        const moviePoster = new Image();
        moviePoster.src = `images/${e.imgFile}`;
        console.log(e.name);
        divvy.appendChild(moviePoster);

        // 30. Below the image, output the text info for the movie:
        divvy.innerHTML += `${e.name}<br>${e.year} - ${e.hm}`;

        // 30B. Add Oscars as oscars.png image followed by text, such as, for example: Won: 2  Nom: 5
        // Add tomatoes icon (search ASCI symbols)
        // with rotten tomatoes score:
        divvy.innerHTML += `<span style="display:flex;margin-top:-10px;"><img src="images/oscar.png" style="width:12px; height:20px; margin:16px 5px 0 0;vertical-align:bottom;"><p>Won: ${e.oscars.won} - Nom: ${e.oscars.nominated} &nbsp; &#127813; ${e['tomatoes']}%</p></span>`;

        // 31. Close the loop, close the function and Reload the page. The grid of movies should be back, although the sort feature doesn't work yet. That's next.

    }); // end forEach

} // end renderMovies()

// sorting movies

// 32. Get the select menu and have it call the **sortMovies** function:
const sortMenu = document.getElementById('sort-menu');
sortMenu.addEventListener('change', sortMovies);

// 33. Get the checkbox. When a change occurs (check/uncheck), run an inline function that reverses the order of the movies and calls the renderMovies() to refresh the display:
const ckbox = document.getElementById('cb');
ckbox.addEventListener('change', function() {
    movies.reverse();
    renderMovies();
});

// 34. Define the sortMovies() function and get the menu choice, which is the sort key:
function sortMovies() {
    // 35. If sortKey == "name", do the string sort on the noAThe key, which is the name of the movie with no leading "A" or "The":
    let sortKey = this.value;

    if(sortKey == "name") {
        movies.sort(function(a,b) {
            return a.sortingName > b.sortingName ? 1 : -1;
        });
    // sort by oscars won or nominated
    } else if(sortKey == "won" || sortKey == "nominated") {
        movies.sort(function(a,b) {
            return a.oscars[sortKey] - b.oscars[sortKey];
        });
    } else { // sort by number: year, mins or tomatoes
        movies.sort(function(a,b) {
            return a[sortKey] - b[sortKey];
        });
    }

    // 35. Else the key is not "name", so do the number sort. Use the dynamic property access syntax, the square bracket, with **sortKey**, which is either "year" or "mins":

    // 36. If the Duration checkbox is checked, reverse the sort:
    if(ckbox.checked) movies.reverse();
    // 38. Still inside sortMovies(), call the renderMovies() function and then end the sortMovies() function:
    renderMovies();

} // end sortMovies()

// 39. That should do it. Reload the page and put the application through its paces. The sort feature should be working. 

// NEXT: Lesson 06.06
// Next: Lesson 06.07