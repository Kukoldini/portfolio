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
