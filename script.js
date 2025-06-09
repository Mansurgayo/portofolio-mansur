// Ganti Tema
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = toggleBtn.querySelector('i');
  icon.classList.toggle('bx-sun');
  icon.classList.toggle('bx-moon');
});

// Reveal Cards on Scroll
const cards = document.querySelectorAll('.card');
function revealCards() {
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

// Back to Top
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
