const parallaxElement = document.getElementById('parallax');

function parallax() {
    let offset = window.pageYOffset;

    parallaxElement.style.transform = `translateY(${offset * -0.1}px)`;

    requestAnimationFrame(parallax);
}

parallax();


const hiddenMenu = document.querySelector(".headerNav");
let hiddenMenuHeight = 0;
const hiddenMenuButton = document.getElementById("hiddenMenuButton");
let hiddenMenuOpened = false;

function hiddenMenuActivator() {
    hiddenMenuHeight = getComputedStyle(hiddenMenu).height;

    if (!hiddenMenuOpened) hiddenMenu.style = `bottom: -${hiddenMenuHeight};`;

    else hiddenMenu.style = "bottom: 0;";

    hiddenMenuOpened = !hiddenMenuOpened;
}

hiddenMenuButton.addEventListener('click', hiddenMenuActivator);