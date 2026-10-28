// Mobile menu: show/hide the navigation on small screens
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

// Sticky header: share its real height as --site-header-height, so anchor jumps and other sticky parts sit below it
const header = document.querySelector('.site-header');

if (header) {
  const setHeaderHeight = () => document.documentElement.style.setProperty('--site-header-height', header.offsetHeight + 'px');
  setHeaderHeight();
  if ('ResizeObserver' in window) new ResizeObserver(setHeaderHeight).observe(header);
  window.addEventListener('resize', setHeaderHeight);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setHeaderHeight);
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
