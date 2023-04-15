const nav = document.querySelector(".nav-btns");

const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const mobileNav = document.querySelector(".mobile-nav");

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

//Mobile Nav
//Opening mobile menu
menuBtn.addEventListener ("click", function() {
    mobileNav.classList.add("active");
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
})

//Closing mobile menu
closeBtn.addEventListener ("click", function() {
    mobileNav.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
})

mobileNav.addEventListener ("click", function() {
    mobileNav.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
})

// Mobile Nav Menu Links

mobileNavLinks.forEach(link => (link.addEventListener("click", 
function(){
    mobileNav.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";

})))

// // Scroll Menu bar

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 30) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
})

