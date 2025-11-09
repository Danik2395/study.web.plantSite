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
        swapElementWidth = lastItem.getBoundingClientRect().width;
        this.prepend(lastItem);
        this.scrollLeft = swapElementWidth;
    }
    else if (this.scrollLeft >= this.scrollWidth - this.clientWidth - 1) {
        swapElementWidth = firstItem.getBoundingClientRect().width;
        this.append(firstItem);
        this.scrollLeft = this.scrollWidth - this.clientWidth - swapElementWidth;
    }
});



let themeDark = false;
const themeButton = document.getElementById("themeButton");
const mainImages = document.querySelectorAll(".mainTileImage");
const body = document.querySelector("body");

themeButton.addEventListener("mouseover", function() {
    const preloadBG = new Image();
    preloadBG.src = "img/bg_dark.jpg";
});

themeButton.addEventListener("click", function() {
    mainImages.forEach(mainImg => {
        mainImg.style.setProperty("filter", "blur(10px)");
    });
    parallaxElement.style.setProperty("filter", "blur(20px)");
    body.classList.replace("dark", "light");

    if (themeDark) {
        this.querySelector("i").classList.replace("fa-moon", "fa-sun");
        
        setTimeout(() => {
            mainImages.forEach(mainImg => {
                mainImg.src = mainImg.src.replace("_dark.png", "_light.png");
            });

            parallaxElement.style = "background-position-y: bottom; background-image: url(img/bg_light.jpg);";
        }, 400);
    }
    else {
        this.querySelector("i").classList.replace("fa-sun", "fa-moon");
        body.classList.replace("light", "dark");

        setTimeout(() => {
            mainImages.forEach(mainImg => {
                mainImg.src = mainImg.src.replace("_light.png", "_dark.png");
            });

            parallaxElement.style = "background-position-y: center; background-image: url(img/bg_dark.jpg);";
        }, 400);
    }

    setTimeout(() => {
        mainImages.forEach(mainImg => {
            mainImg.style.setProperty("filter", "unset");
        });

        parallaxElement.style.setProperty("filter", "unset");
    }, 400);

    themeDark = !themeDark;
});