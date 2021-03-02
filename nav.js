const menuToggler = document.querySelector('#menu-toggler');
const mobileMenu = document.querySelector('#mobile-menu');

menuToggler.addEventListener('click', function () {
  if (menuToggler.classList.contains('open')) {
    menuToggler.textContent = '=';
    menuToggler.classList.remove('open');
    mobileMenu.classList.remove('open');
  } else {
    menuToggler.textContent = 'x';
    menuToggler.classList.add('open');
    mobileMenu.classList.add('open');
  }
})