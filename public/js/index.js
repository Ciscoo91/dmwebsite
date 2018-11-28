let hamMenu = document.getElementById("hammenu");
let navbar = document.getElementById('navbar');
let bar = document.querySelector(".fa-bars");
let content = document.querySelector(".main-content");
let dropdownList = document.getElementById('dropdown-link');



hamMenu.addEventListener("click", () => {
    navbar.classList.toggle('active-navbar');
    content.classList.toggle('content-margin');
});
