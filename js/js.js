const navbar = document.querySelector('.navbar');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

// 1. Scroll Effect voor Desktop
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Hamburger Menu Openen / Sluiten
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 3. Sluit menu wanneer je op een link klikt
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburgerBtn.remove('active');
        navLinks.classList.remove('active');
    });
});
