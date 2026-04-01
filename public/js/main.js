const glow = document.getElementById('cursor-glow');
if (glow) {
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;
const saved = localStorage.getItem('fk-theme') || 'dark';
html.setAttribute('data-theme', saved);
if (themeBtn) themeBtn.textContent = saved === 'light' ? '☀️' : '🌙';
themeBtn && themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  themeBtn.textContent = next === 'light' ? '☀️' : '🌙';
  localStorage.setItem('fk-theme', next);
});
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
  });
}, { threshold: 0.1 });
document.querySelectorAll('.animate').forEach(el => observer.observe(el));
const path = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === path) link.classList.add('active');
});
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.style.boxShadow = window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,0.25)' : 'none';
}, { passive: true });
