// Getting and storing the elements from the page

const switchElement = document.querySelector('.switch');
const flickerElement = document.querySelector('.flicker');
const nav = document.querySelector('.nav');
const Links = nav.querySelectorAll('p');
const tagLine = document.querySelector('#tag-line');
const mainText = document.querySelector('.content-1');


const mouseGradient = window.getComputedStyle(document.querySelector('.mouse-gradient'));


//configuration for the mouse gradient

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.4)`;
}

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
    let xPosition = e.offsetX - (mouseGradient.offsetWidth / 2);
    let yPosition = e.offsetY - (mouseGradient.offsetHeight / 2);
  
    let translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    mouseGradient.style.transform = translate3dValue;
    mouseGradient.style.zIndex = -1000;
  }, false)
  

//configuration for darkmode

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        flickerElement.style.transform = "translateX(40px)";
        flickerElement.style.zIndex = "1";
        flickerElement.style.transition = "0.3s";
        for(let i = 0; i < Links.length; i++) {
            Links[i].style.color = "white";
        };
        mainText.style.color = "white";
        tagLine.style.textDecoration = "underline white 10px";
    } else {
        flickerElement.style.transform = "";
        for(let i = 0; i < Links.length; i++) {
            Links[i].style.color = "";
        };
        mainText.style.color = "";
        tagLine.style.textDecoration = "";
    }
})

Links[i].addEventListener('mouseover', () => {
    Links[i].style.transform = "translateY(-10px)";
})