
// Select Elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and Close Menu
menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});