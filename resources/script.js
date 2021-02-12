//Handle the opening of the nav menu on mobile version

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navbar');
const navItems = document.getElementById('nav-items');
const ezyIcon = document.getElementById('logo-small');

const openNav = () => {
    hamburger.style.display = 'none';
    ezyIcon.style.display = 'none';
    nav.style.height = '25%';
    nav.style.flexFlow = 'column';
    navItems.style.display = 'flex';
};

hamburger.addEventListener('click', openNav);