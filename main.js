// toggle menu
const toggleMenu = document.querySelector(".menu");
const nav = document.querySelector("nav");

toggleMenu.addEventListener("click", function() {
    if (nav.style.display == "block")
    nav.style.display = "none"
    else
    nav.style.display = "block"
});