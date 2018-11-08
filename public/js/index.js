let hammenu = document.querySelector(".hammenu");;
let bars = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");
let navList = document.querySelector('.nav-list');
let mediumSize = 875;


if (window.innerWidth <= `${mediumSize}px`) {
    navbar.style.display = "none";
    navbar.classList.add('.inactive-navbar')
}

hammenu.addEventListener('click', (e) => {

    if (navbar.classList.contains('.inactive')) {
        navbar.classList.toggle('.active-navbar');
        navbar.classList.remove('navbar');
        navlist.classList.add('.active');
    } else {
        navbar.classList.remove('.active-navbar');
        navbar.classList.add('inactive');
    }

});
