const ToggleButton = document.querySelector('.toggle-button');
const Navbar = document.querySelector('.navbar');

ToggleButton.addEventListener('click', () => {
    Navbar.classList.toggle('active');
});