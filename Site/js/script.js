// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('open');
});

// Manual Carousel – NO auto-play (as requested!)
let currentSlide = 0;
const slidesContainer = document.getElementById('slides');
const totalSlides = slidesContainer.children.length;

document.querySelector('.next').addEventListener('click', () => moveSlide(1));
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Dark / Light Mode Toggle + persistence
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
}

// Simple fade-in on load
window.addEventListener('load', () => {
  document.querySelectorAll('.fade_Description').forEach(el => el.style.opacity = 1);
});