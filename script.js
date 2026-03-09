(function () {
  const path = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.header .link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === '/')) {
      link.classList.add('is-active');
    }
  });
})();
