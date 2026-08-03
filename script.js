const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
}

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 18);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const atigCard = document.querySelector('.project-card-gate');
if (atigCard) {
  atigCard.setAttribute('href', 'at-the-in-gate.html');
  atigCard.setAttribute('aria-label', 'Open the full At The In Gate visual case study');
}

const atigGallery = document.querySelector('.gate-gallery');
if (atigGallery && !document.querySelector('[data-atig-case-link]')) {
  const action = document.createElement('div');
  action.setAttribute('data-atig-case-link', '');
  action.style.marginTop = '22px';
  action.style.display = 'flex';
  action.style.flexWrap = 'wrap';
  action.style.gap = '12px';
  action.innerHTML = '<a class="button button-primary" href="at-the-in-gate.html">Open the full visual case study ↗</a><a class="button button-ghost" href="https://attheingate.com" target="_blank" rel="noreferrer">Visit the live site ↗</a>';
  atigGallery.insertAdjacentElement('afterend', action);
}
