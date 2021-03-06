// Getting and storing the elements from the HTML

const heroName = document.querySelector('#hero-name');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('#menu-icon');
const linksBox = document.querySelector('.links-box');
const menuLink = document.querySelectorAll('.menu-link');

const links = document.querySelectorAll('.link');
const work = document.querySelector('work-link');
const about = document.querySelector('about-link');
const contact = document.querySelector('contact-link');


const mainText = document.querySelector('.content-1');
const tagLine = document.querySelector('#tag-line');


const switchElement = document.querySelector('.switch');
const flickerElement = document.querySelector('.flicker');
const mouseGradient = document.querySelector('#mouse-gradient');



/* Click event for the menu icon
 */
menuIcon.addEventListener('click', () => {
    linksBox.classList.toggle('open');
    if (linksBox.classList.contains('open') || document.body.classList.contains('dark')) {
        menuIcon.style.stroke = "rgb(255,255,255)";
        menuLink.forEach(link => link.style.display = "block");
        }
        else {
            menuIcon.style.stroke = "";
            menuLink.forEach(link => link.style.display = "none");
        }

        while((linksBox.classList.contains('open') == false) && document.body.classList.contains('dark')) {
            menuLink.forEach(link => link.style.display = "none");
        }
    })



/* Toggle for light and dark mode.
When the switch is clicked, the flicker transitions to the right.
The body's background and other necessary elements change.
 */

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        flickerElement.style.transform = "translateX(40px)";
        flickerElement.style.zIndex = "1";
        flickerElement.style.transition = "0.3s";
        menuIcon.style.stroke = "rgb(255,255,255)";
        links.forEach(liink => liink.style.color = "white");
        mainText.style.color = "white";
        tagLine.style.textDecoration = "underline white 6px";
    } else {
        flickerElement.style.transform = "";
        menuIcon.style.stroke = "rgb(0,0,0)";
        links.forEach(liink => liink.style.color = "");
        mainText.style.color = "";
        tagLine.style.textDecoration = "";
    }
})


/* This a random color generator function synced to output 
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
  
