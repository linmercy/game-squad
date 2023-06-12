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


