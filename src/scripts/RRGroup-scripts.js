const track = document.getElementById('marca-track');
track.innerHTML += track.innerHTML ; // duplicamos contenido
const totalWidth = track.scrollWidth / 2;
let scrollAmount = 0;
const speed = 0.7;

function animateCarousel() {
    scrollAmount += speed; // velocidad del scroll
    if (scrollAmount >= track.scrollWidth / 4) scrollAmount = 0;
    track.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animateCarousel);
}
animateCarousel();

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (window.scrollY + window.innerHeight > section.offsetTop + 100) {
            section.classList.add('visible');
        }
    });
});
window.addEventListener('load', () => {
    setTimeout(() => {
        const intro = document.getElementById('intro');
        intro.style.transition = 'opacity 0.8s';
        intro.style.opacity = '0';
        setTimeout(() => intro.style.display = 'none', 800);
    }, 2000);
});
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});