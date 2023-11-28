// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.getElementById(link.getAttribute('href').substr(1));
        window.scrollTo({
            behavior: 'smooth',
            top: targetSection.offsetTop
        });
    });
});
