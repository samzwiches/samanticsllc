document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
  const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  const counter = carousel.querySelector('[data-carousel-counter]');
  let current = 0;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      if (active) {
        const scrollArea = slide.querySelector('.shot-scroll');
        if (scrollArea) scrollArea.scrollTop = 0;
      }
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });
    if (counter) counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  };

  previous?.addEventListener('click', () => show(current - 1));
  next?.addEventListener('click', () => show(current + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
  show(0);
});
