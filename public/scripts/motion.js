// Scroll-driven motion for the portfolio. No dependencies.
// Served as a static file so the strict CSP (script-src 'self') allows it.
// - [data-reveal] and [data-animate] elements get `.is-in` the first time they enter the viewport.
// - <html data-scrolled> is set once the page leaves the top, so the header can show its border.

const root = document.documentElement;
const targets = document.querySelectorAll('[data-reveal], [data-animate]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-in'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => observer.observe(el));
}

const updateScrolled = () => root.toggleAttribute('data-scrolled', window.scrollY > 8);
window.addEventListener('scroll', updateScrolled, { passive: true });
updateScrolled();
