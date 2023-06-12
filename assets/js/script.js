const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback)
    }
}

// showing navbar on menu button click on mobile devices
const navbar = document.querySelector("[data-navbar]")
const toggler = document.querySelector("[data-toggle]")
const navLinks = document.querySelectorAll("[data-navLink]")

const showLinks = function () {
    navbar.classList.toggle("active")
    this.classList.toggle("active")
}

toggler.addEventListener("click", showLinks )

const closeLinks = () => {
    navbar.classList.remove("active")
    toggler.classList.remove("active")
}

addEventOnElements(navLinks, "click", closeLinks) 

// show header after 100px scroll
const header = document.querySelector("[data-header]")
const activeElements = function () {
    if (window.scrollY > 100){
        header.classList.add("active")
    } 
    else{
        header.classList.remove("active")
    }
}

window.addEventListener("scroll", activeElements)

// adding ripple effect on buttons
const btn = document.querySelectorAll("[data-btn]")
const btnRipple = function (event) {
    this.style.setProperty("--top", `${event.offsetY}px`)
    this.style.setProperty("--left", `${event.offsetX}px`)
}

addEventOnElements(btn, "mousemove", btnRipple)

// show back to top button after 500px scroll
const topBtn = document.querySelector("[data-top]")
const showBtn = function () {
    if (window.scrollY > 500){
        topBtn.classList.add("active")
    }
    else{
        topBtn.classList.remove("active")
    }
}

window.addEventListener("scroll", showBtn)

//reveal lineup on scroll
const revealElements = document.querySelectorAll("[data-reveal]")
const revealElementsOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++ ){
        const isElementInWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

        if (isElementInWindow){
            revealElements[i].classList.add("revealed")
        }
    }
}

window.addEventListener("scroll", revealElementsOnScroll)
window.addEventListener("load", revealElementsOnScroll)

// customized cursor
const cursor = document.querySelector("[data-cursor]")

const hoverElements =  [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", cursorMove)

addEventOnElements(hoverElements, "mouseover", function() {
    cursor.classList.add("hovered")
})

addEventOnElements(hoverElements, "mouseout", function() {
    cursor.classList.remove("hovered")
})

