var hamburger = document.getElementById('hamburger');
var navbar = document.getElementById('nav');
console.log(hamburger)
console.log(navbar)
navbar.style.display = "none"
hamburger.addEventListener('click', () => {
    navbar.style.display = (navbar.style.display === "none") ? "block" : "none"
})