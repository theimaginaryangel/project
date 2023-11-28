// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.getElementById(event.target.href.split('#')[1]);
    const targetOffset = targetSection.offsetTop;
    const windowOffset = window.pageYOffset;

    window.scrollTo({
      top: targetOffset - windowOffset,
      behavior: 'smooth'
    });
  });
});
