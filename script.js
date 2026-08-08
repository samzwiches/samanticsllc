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

if (!document.querySelector('link[href="portfolio-enhancements.css"]')) {
  const enhancements = document.createElement('link');
  enhancements.rel = 'stylesheet';
  enhancements.href = 'portfolio-enhancements.css';
  document.head.appendChild(enhancements);
}

const atigCard = document.querySelector('.project-card-gate');
if (atigCard) {
  atigCard.setAttribute('href', 'at-the-in-gate.html');
  atigCard.setAttribute('aria-label', 'Open the At The In Gate visual case study');
}

const projectIndex = document.querySelector('.project-index');
if (projectIndex && !document.querySelector('.project-card-outside')) {
  const outsideCard = document.createElement('a');
  outsideCard.className = 'project-card project-card-outside';
  outsideCard.href = 'outside-inmates.html';
  outsideCard.setAttribute('aria-label', 'Open the Outside Inmates visual case study');
  outsideCard.innerHTML = `
    <div class="project-art project-art-outside" aria-hidden="true">
      <div class="outside-grid"></div>
      <div class="outside-browser">
        <span class="outside-kicker">RESOURCES · GUIDANCE · COMMUNITY</span>
        <strong>Support does not stop at the prison gate.</strong>
        <p>A clearer place to begin when incarceration affects an entire family.</p>
        <div class="outside-paths"><span>Start here</span><span>Find help</span><span>Reentry</span></div>
      </div>
      <div class="outside-tag">purpose · systems · dignity</div>
    </div>
    <div class="project-meta"><span>02 · Mission driven platform</span><h3>Outside Inmates</h3><p>Brand strategy, guided journeys, resource architecture, family support, reentry content, community design, and product systems.</p></div>`;
  atigCard?.insertAdjacentElement('afterend', outsideCard);
}

const cardLabels = [
  ['.project-card-pharm .project-meta span', '03 · Former contract work'],
  ['.project-card-music .project-meta span', '04 · Creative product'],
  ['.project-card-samantics .project-meta span', '05 · Personal brand']
];
cardLabels.forEach(([selector, label]) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = label;
});

const atigGallery = document.querySelector('.gate-gallery');
if (atigGallery) {
  let action = document.querySelector('[data-atig-case-link]');
  if (!action) {
    action = document.createElement('div');
    action.setAttribute('data-atig-case-link', '');
    atigGallery.insertAdjacentElement('afterend', action);
  }
  action.style.marginTop = '22px';
  action.style.display = 'flex';
  action.style.flexWrap = 'wrap';
  action.style.gap = '12px';
  action.innerHTML = '<a class="button button-primary" href="at-the-in-gate.html">Open the full visual case study ↗</a>';
}

const pharmCard = document.querySelector('.project-card-pharm');
if (pharmCard) {
  pharmCard.setAttribute('href', 'pharmarcie.html');
  pharmCard.setAttribute('aria-label', 'Open the Pharmarcie customer experience systems case study');

  const pharmMeta = pharmCard.querySelector('.project-meta p');
  if (pharmMeta) pharmMeta.textContent = 'Help Scout Beacon architecture, AI Answers, micro docs, workflow automation, and ecommerce customer experience.';

  const pillA = pharmCard.querySelector('.pill-a');
  const pillB = pharmCard.querySelector('.pill-b');
  const pillC = pharmCard.querySelector('.pill-c');
  if (pillA) pillA.textContent = 'AI triage';
  if (pillB) pillB.textContent = 'Micro docs';
  if (pillC) pillC.textContent = 'Smart routing';

  const panelKicker = pharmCard.querySelector('.pharm-panel span');
  const panelTitle = pharmCard.querySelector('.pharm-panel strong');
  if (panelKicker) panelKicker.textContent = 'HELP SCOUT + AI';
  if (panelTitle) panelTitle.innerHTML = 'Support,<br>intelligently routed.';
}

const pharmGallery = document.querySelector('.pharm-gallery');
if (pharmGallery) {
  let action = document.querySelector('[data-pharm-case-link]');
  if (!action) {
    action = document.createElement('div');
    action.setAttribute('data-pharm-case-link', '');
    pharmGallery.insertAdjacentElement('afterend', action);
  }
  action.style.marginTop = '22px';
  action.style.display = 'flex';
  action.style.flexWrap = 'wrap';
  action.style.gap = '12px';
  action.innerHTML = '<a class="button button-primary" href="pharmarcie.html">Open the full CX systems case study ↗</a>';
}

function extractCssImageUrl(backgroundImage) {
  if (!backgroundImage || backgroundImage === 'none') return '';
  const match = backgroundImage.match(/^url\(["']?(.*?)["']?\)$/);
  return match ? match[1] : '';
}

function installSamanticsLogo() {
  const mark = document.querySelector('.wordmark-mark');
  if (!mark || mark.querySelector('img')) return true;

  const logoUrl = extractCssImageUrl(getComputedStyle(mark, '::before').backgroundImage);
  if (!logoUrl) return false;

  const headerLogo = document.createElement('img');
  headerLogo.src = logoUrl;
  headerLogo.alt = '';
  headerLogo.width = 54;
  headerLogo.height = 54;
  headerLogo.style.width = '54px';
  headerLogo.style.height = '54px';
  headerLogo.style.objectFit = 'contain';
  headerLogo.style.display = 'block';
  headerLogo.style.maxWidth = 'none';
  mark.textContent = '';
  mark.appendChild(headerLogo);

  const footerBrand = document.querySelector('.site-footer > div');
  if (footerBrand && !footerBrand.querySelector('[data-footer-logo]')) {
    const footerLogo = document.createElement('img');
    footerLogo.src = logoUrl;
    footerLogo.alt = 'Samantics LLC';
    footerLogo.setAttribute('data-footer-logo', '');
    footerLogo.style.width = '118px';
    footerLogo.style.height = '118px';
    footerLogo.style.objectFit = 'contain';
    footerLogo.style.flex = '0 0 auto';

    const strong = footerBrand.querySelector('strong');
    if (strong) strong.textContent = 'Samantics LLC';

    const textWrap = document.createElement('div');
    while (footerBrand.firstChild) textWrap.appendChild(footerBrand.firstChild);
    footerBrand.appendChild(footerLogo);
    footerBrand.appendChild(textWrap);
    footerBrand.style.display = 'flex';
    footerBrand.style.alignItems = 'center';
    footerBrand.style.gap = '18px';
  }

  return true;
}

const enhancementStylesheet = document.querySelector('link[href="portfolio-enhancements.css"]');
if (!installSamanticsLogo()) {
  enhancementStylesheet?.addEventListener('load', installSamanticsLogo, { once: true });
  window.setTimeout(installSamanticsLogo, 150);
  window.setTimeout(installSamanticsLogo, 700);
}
