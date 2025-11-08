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
        hiddenMenu.style = `--visibility-headerNav: visiable; transition: all 0.4s cubic-bezier(0.72,-0.01,0.52,0.95) 0.3s; bottom: -${hiddenMenuHeight};`;
        hiddenMenuButton.style = "transition: top 0.6s cubic-bezier(0.51,-1.35,0.74,0.05); top: -240%;";
    }
    else {
        hiddenMenu.style = "transition: all 0.6s cubic-bezier(0.40,0.00,0.52,1.03); bottom: 0;";
        hiddenMenuButton.style = "transition: top 0.6s cubic-bezier(0.40,0.00,0.52,1.03); top: -40%;";
        hiddenMenu.style.setProperty("--visibility-headerNav", "hidden");
    } 

    hiddenMenuButton.setAttribute("aria-label", hiddenMenuOpened ? "Показать меню" : "Скрыть меню");
    hiddenMenuOpened = !hiddenMenuOpened;
}
hiddenMenuButton.addEventListener('click', hiddenMenuActivator);



const headerNavTopics = document.querySelector('.headerNav--topics');
headerNavTopics.scrollLeft = 1;
let swapElementWidth;
let items, lastItem, firstItem;

headerNavTopics.addEventListener('scroll', function() {
    items = this.querySelectorAll(".topicLink--header");
    lastItem = items[items.length - 1];
    firstItem = items[0];

    if (parseInt(this.scrollLeft) === 0) {
        swapElementWidth = lastItem.getBoundingClientRect().width /* + parseFloat(lastItem.style.marginleft) + parseFloat(lastItem.style.marginright) */;
        this.prepend(lastItem);
        this.scrollLeft = swapElementWidth;
    }
    else if (this.scrollLeft >= this.scrollWidth - this.clientWidth - 1) {
        swapElementWidth = firstItem.getBoundingClientRect().width /* + parseFloat(firstItem.style.marginleft) + parseFloat(firstItem.style.marginright) */;
        this.append(firstItem);
        this.scrollLeft = this.scrollWidth - this.clientWidth - swapElementWidth;
    }
});