const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('main section[id]');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: '-35% 0px -55% 0px' }
);

sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();
