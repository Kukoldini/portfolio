let slider = document.querySelector('.slider');
let sliderWrapper = document.querySelector('.slider-wrapper');
let offset = 0;

function sliderSwipe() {
    offset = 100 + offset;

    if (offset == 400) {
        offset = 0
        
    }

    sliderWrapper.style.left = -offset + '%';
}

setInterval(sliderSwipe, 3000);

//burger-menu

let burgerMenuButton = document.querySelector('.burger_menu_button');
let header = document.querySelector('.header');
let overlay = document.querySelector('.overlay');


burgerMenuButton.addEventListener('click', function() {
  
    if (burgerMenuButton.classList.contains('drop')) {

        overlay.classList.remove('visible');
        header.classList.remove('header_drop');
        burgerMenuButton.classList.remove('drop');

    } else {

        overlay.classList.add('visible');
        burgerMenuButton.classList.add('drop');
        header.classList.add('header_drop');

    }

})

