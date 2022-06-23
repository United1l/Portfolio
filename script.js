// Getting and storing the elements from the HTML

const switchElement = document.querySelector('.switch');
const flickerElement = document.querySelector('.flicker');
const nav = document.querySelector('.nav');
const Links = nav.querySelectorAll('p');
const tagLine = document.querySelector('#tag-line');
const mainText = document.querySelector('.content-1');
const heroName = document.querySelector('#hero-name');
const menuIcon = document.querySelector('#menu-icon');
const mouseGradient = document.querySelector('#mouse-gradient');


/*
There's a random color generator function synced to output 
different colors with each pointer movement event.
*/

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.4)`;
}

/* Pointer movement event and its intented effect with each
movement.
The effects are with each movement, the mouse gradient follows
the pointer to its coordinates position and its color changes 
to sync each movement.
 */
function getPositon(elem) {
    let positionX = 0;
    let positionY = 0;

    while(elem) {
        positionX += (elem.offsetLeft - elem.scrollLeft + elem.clientLeft);
        positionY += (elem.offsetTop - elem.scrollTop + elem.clientTop);

        elem = elem.offsetParent;
    }

    return {x: positionX, y: positionY};
}

document.body.addEventListener('pointermove', (e) => { 
    let parentPos = getPositon(mouseGradient);
    let xPosition = e.clientX - parentPos.x - (mouseGradient.offsetWidth / 2);
    let yPosition = e.clientY - parentPos.y - (mouseGradient.offsetHeight / 2);
  
    let translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    mouseGradient.style.transform = translate3dValue;
    mouseGradient.style.zIndex = -1000;
  }, false)
  

/*Toggle for light and dark mode.
When the switch is clicked, the flicker transitions to the right.
The body's background and other necessary elements change.
 */

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        flickerElement.style.transform = "translateX(40px)";
        flickerElement.style.zIndex = "1";
        flickerElement.style.transition = "0.3s";
        heroName.style.color = "white";
        menuIcon.style.stroke = "rgb(255,255,255)";
        mainText.style.color = "white";
        tagLine.style.textDecoration = "underline white 6px";
    } else {
        flickerElement.style.transform = "";
        heroName.style.color = "";
        menuIcon.style.stroke = "rgb(0,0,0)";
        mainText.style.color = "";
        tagLine.style.textDecoration = "";
    }
})

/*
Media query events for different screens.
 */

window.matchMedia('(min-width: 800px)').addEventListener(() => {
    menuIcon.remove();
})
