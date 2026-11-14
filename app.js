'use strict';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// Formularze demonstracyjne zatrzymują poprawne zgłoszenia w przeglądarce.
document.addEventListener('submit', event => {
  if (!event.target.matches('.demo')) return;
  event.preventDefault();
  const status = $('[role=status]', event.target);
  if (status) status.textContent = document.documentElement.lang === 'de'
    ? 'Demo – es werden keine Daten gesendet.'
    : 'Dane poprawne. demo – formularz nie wysyła danych';
});
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    });
  }, {threshold: 0.08});
  $$('.section').forEach(section => observer.observe(section));
}
function readStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { /* Zmiany pozostają w bieżącej sesji. */ }
}
