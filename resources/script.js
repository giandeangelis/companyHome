//Handle the opening of the nav menu on mobile version

const hamburger = document.getElementById('hamburger-container');
const nav = document.getElementById('navbar');

const openNav = () => {
    nav.classList.toggle('change');
};

hamburger.addEventListener('click', openNav);