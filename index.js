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

    if (!hiddenMenuOpened) {
        hiddenMenu.style = `transition: all 0.4s cubic-bezier(0.72,-0.01,0.52,0.95) 0.3s; bottom: -${hiddenMenuHeight};`;
        hiddenMenuButton.style = "transition: top 0.6s cubic-bezier(0.51,-1.35,0.74,0.05); top: -240%;";
        hiddenMenuButton.setAttribute("aria-label","Скрыть меню")
    }
    else {
        hiddenMenu.style = "transition: all 0.6s cubic-bezier(0.40,0.00,0.52,1.03); bottom: 0;";
        hiddenMenuButton.style = "transition: top 0.6s cubic-bezier(0.40,0.00,0.52,1.03); top: -40%;";
        hiddenMenuButton.setAttribute("aria-label","Показать меню")
    } 

    hiddenMenuOpened = !hiddenMenuOpened;
}
hiddenMenuButton.addEventListener('click', hiddenMenuActivator);



const headerNavTopics = document.querySelector('.headerNav--topics');
headerNavTopics.scrollLeft = 1;
let swapElementWidth;
let items;

headerNavTopics.addEventListener('scroll', function() {
    items = this.querySelectorAll(".topicLink--header");

    if (parseInt(this.scrollLeft) === 0) {
        swapElementWidth = items[items.length - 1].clientWidth;
        this.prepend(items[items.length - 1]);
        this.scrollLeft = swapElementWidth;
    }
    else if (this.scrollLeft >= this.scrollWidth - this.clientWidth - 1) {
        swapElementWidth = items[0].clientWidth;
        this.append(items[0]);
        this.scrollLeft = this.scrollWidth - this.clientWidth - swapElementWidth;
    }
});



