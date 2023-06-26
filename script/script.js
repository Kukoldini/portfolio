$(document).ready(function(){
  var slideCount = $('.slider-item').length;
  var currentSlide = 1;
  
  function nextSlide() {
    currentSlide++;
    if(currentSlide > slideCount) {
      currentSlide = 1;
    }
    $('.slider-item').removeClass('active');
    $('.slider-item:nth-child(' + currentSlide + ')').addClass('active');
  }
  
  setInterval(nextSlide, 3000);
});


//burger-menu
let burgerMenuButton = document.querySelector('.burger_menu_button');
let header = document.querySelector('.header');

function burgerMenuDrop() {
  let burgerLeft = getComputedStyle(burgerMenuButton).getPropertyValue('left').trim();
  if (burgerLeft === '0px') {
    header.classList.add('header_remove');
    burgerMenuButton.classList.add('burger_menu_remove');
  } else {
    header.classList.remove('header_remove');
    burgerMenuButton.classList.remove('burger_menu_remove');
    header.classList.add('header_drop');
    burgerMenuButton.classList.add('burger_menu_drop');
  }
}

burgerMenuButton.addEventListener('click', burgerMenuDrop);

//Light Theme


var themeSwitch = document.querySelector('.theme-switch');
var body = document.querySelector('body');

if (localStorage.getItem('theme') === 'dark') {
  themeSwitch.classList.remove('theme-switch-to-left')
  themeSwitch.classList.add('theme-switch-to-right');
  body.classList.add('dark-theme');  
} else {
  themeSwitch.classList.remove('theme-switch-to-right')
  themeSwitch.classList.add('theme-switch-to-left');
  body.classList.remove('dark-theme');
}

function lightThemeSwitch() {
  let themeSwitchPosition = getComputedStyle(themeSwitch).getPropertyValue('left').trim();
  if (themeSwitchPosition === '0px') {
    themeSwitch.classList.remove('theme-switch-to-left')
    themeSwitch.classList.add('theme-switch-to-right');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    themeSwitch.classList.remove('theme-switch-to-right')
    themeSwitch.classList.add('theme-switch-to-left');
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

themeSwitch.addEventListener('click', lightThemeSwitch);