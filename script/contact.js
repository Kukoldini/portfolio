var body = document.querySelector('body');
var contactLink = document.querySelector('.contact-link');
var savedTheme = localStorage.getItem('theme');


if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
} else {
  body.classList.remove('dark-theme');
}