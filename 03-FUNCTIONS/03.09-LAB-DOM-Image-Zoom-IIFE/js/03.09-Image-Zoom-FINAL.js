/* Lesson 03.09 - FINAL
Image Zoom, IEFE
- Image Zoom, IIFE, mousemover
Image Zoom
In this project, we will make an Image Zoomer:
- The UI consists of two divs and an image
- The user mouses over the image
- An empy framed box called "zoom-window" follows the mouse
- The other div shows the closeup from the "zoom-window" 
- The function for this will be an IIFE

IIFE (Immediately Invoked Function Expression)
An IIFE (Immediately Invoked Function Expression):
- automatically runs as soon as it is declared. 
- has no name: it's just function()
- is entirely wrapped in parentheses
- is called by another set of parentheses at the end
- runs immediately--but only once
- cannot be called again later, since it has no name
*/

// IIFE example
// declare a "regular function":
function greetWorld() {
    alert("Hello World");
}
// greetWorld();

// make an IIFE version of the above:
// (function() {
//     alert("Hello from IIFE !");
// })()

// offsetWidth and offsetHeight vs. height and width
// try to read the w and h of the li'l 80x80px zoom frame box
// .style property of DOM elems lets you SET (write) CSS properties
// BUT you cannot GET (read) them that way
// SOOOO... to read the W & H of a DOM elem, use offsetWidth and offsetHeight
const img = document.getElementById('full-image');
console.log('img Style Width:', img.style.width); // nothing
console.log('img Width:', img.width); // 838
console.log('img offsetWidth:', img.offsetWidth); // 844

// 1. Declare the IIFE: everything is wrapped in parentheses, and then the function is called by a set of empty parentheses, right at the end
/*   (function() { 
        // do stuff; 
     })()

*/ 

(function() {
    // 2. Get the image:
    const fullImg = document.getElementById('full-image');

    // 3. Have the image call a function on mousemove, that is, whenever the mouse is moved over the image, a function is called:
    fullImg.addEventListener('mousemove', renderZoom);

    // 4. Get the "zoom-frame" div. This is the div that follows the cursor as a little framed box:
    const zoomFrame = document.getElementById('zoom-frame');

    // 5. Have the zoomWindow also call the same function. Having the image and the framed zoom window box both call the function makes the zoom effect smoother:
    zoomFrame.addEventListener('mousemove', renderZoom);
    window.console.log('getBoundingClientRect()', zoomFrame.getBoundingClientRect());

    // 6. Get the zoom image div for displaying the zoomed-in close-up of the image:
    const zoomImgDiv = document.getElementById('zoom-image');

    // 7. Declare variables for the offset width and the offset height. These are for defining the zommed-in portion of the image:
    // - zoomImage.offsetWidth is 560px (or whatever)
    // - zoomFrame.offsetWidth is some small pct of that 560, in this case it is 80px (1/7). this provides for a 7x zoom effect
    // - both zoomFactorW and zoomFactorH are exactly 7 (560/80)
    let zoomFactorW = zoomImgDiv.offsetWidth / zoomFrame.offsetWidth;
    let zoomFactorH = zoomImgDiv.offsetHeight / zoomFrame.offsetHeight;

    // 8. Set the zoomImage div background image to be the image we want to zoom in on. The image itself should be MUCH larger than the div that contains it, since the zoom image shows a detail.
    zoomImgDiv.style.backgroundImage = 'url(images/_chinese-day-bed-2.jpg)';
    zoomImgDiv.style.backgroundPosition = "41% 24%"; // central dragon zoomed in on

    // 9. Set the background size (don't worry about what the math is doing). The backgroundSize property has two values: width and height:
    zoomImgDiv.style.backgroundSize = `${fullImg.width * zoomFactorW}px ${fullImg.height * zoomFactorH}px`;

    // pageX, pageY, pageXOffset, scrollX and getBoundingClientRect()
    // - the event object has pageX and pageY properties
    //   pageX and pageY store the (x, y) coordinates of the cursor
    // - the getBoundingClientRect() method is called on a DOM object and returns an 
    //   object of 8 properties, pertaining to the object's size and position: 
    //   left, top, right, bottom, x, y, width, height
    // - pageXOffset property, equal to the scrollX property, 
    //   returns how far the document has been scrolled from the top of the window.
    // - the offsetWidth property returns the viewable width of 
    //   an element (in pixels) including padding, border and scrollbar, but not margin

    // Understanding (or not) the math:
    // These various properties are ingeniously tapped to create the zoom effect. You are free to analyze the math on your own, but suffice it to say, there are many such "widget" projects where some or most of the math and logic may be hard to grasp. The thing to know is not the nuances of the math, but the fact that such widgets as the  image zoomer exist, are Googleable, and can, for the most part be copy-pasted and then customized as needed--we don't usually need to mess with the core math.

    // 10. Declare the renderZoom function that is called when the mouse if over the image and/or the zoom window that follows the cursor:
    function renderZoom(event) {
        zoomFrame.style.visibility = "visible";

        // 11. Make the zoomWindow (the box that follows the mouse) appear:

        // 12. Get the 8 properties of the non-zoomed full image:
        const bounds = fullImg.getBoundingClientRect();

        // 13. Declare a variable, x, set equal to a fairly complicated math expression:
        // event.PageX is the horiz pos of the mouse in px
        // event.PageY is the vert pos of the mouse in px
        // bounds.left is the left pos of the full image
        let x = event.pageX - bounds.left - window.pageXOffset - (zoomFrame.offsetWidth / 2);

        // 14. If x is greater than the image's width, subtract the zoom frames's offset width from x. This constrains the x pos of the mouse-following frame to the edge of img
        // little frame cannot leave the img it is over

        if(x > fullImg.width - zoomFrame.offsetWidth) {
            x = fullImg.width - zoomFrame.offsetWidth;
        }

        // 15. If x less than 0, set x to 0:
        if (x < 0) x = 0;

        // 16. Set the left position of the zoom frame to be x pixels:
        zoomFrame.style.left = x + 'px';

        // 17. Repeat the "x calculations" for y. This constrains the little frame box inside the image bounding box -- little frame cannot descend lower than image / or ascend higher
        let y = event.pageY - bounds.top - window.pageYOffset - (zoomFrame.offsetHeight / 2);
        
        if(y > fullImg.height - zoomFrame.offsetHeight) {
            y = fullImg.height - zoomFrame.offsetHeight;
        }

        if (y < 0) y = 0;

        zoomFrame.style.top = y + 'px';

        // 18. Set the zoom image background position as negative x and y values:
        zoomImgDiv.style.backgroundPosition = `-${x * zoomFactorW}px -${y * zoomFactorH}px`;


    } // end renderZoom() function 
  
})() // END IIFE -- don't forget you gotta call it ()

