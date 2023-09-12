let burgerMenuButton = document.querySelector('.burger_menu_button');
let burgerMenuLines = burgerMenuButton.querySelectorAll('.burger-menu-button-line');
let header = document.querySelector('.header');
let overlay = document.querySelector('.overlay');

burgerMenuButton.addEventListener('click', function() {

    if (burgerMenuButton.classList.contains('drop')) {

        overlay.classList.remove('visible');
        header.classList.remove('header_drop');
        burgerMenuButton.classList.remove('drop');
        burgerMenuButton.classList.toggle('border');
        burgerMenuLines[0].style.transform = 'rotate(0)';
        burgerMenuLines[1].classList.toggle('rotate');

    } else {

        overlay.classList.add('visible');
        burgerMenuButton.classList.add('drop');
        header.classList.add('header_drop');
        burgerMenuButton.classList.toggle('border');
        burgerMenuLines[0].style.transform = 'rotate(45deg)';
        burgerMenuLines[1].classList.toggle('rotate');
        
    }

})

overlay.addEventListener('click', function() {

    if (burgerMenuButton.classList.contains('drop')) {

        header.classList.remove('header_drop');
        burgerMenuButton.classList.remove('drop');
        overlay.classList.remove('visible');
        burgerMenuButton.classList.toggle('border');
        burgerMenuLines[0].style.transform = 'rotate(0)';
        burgerMenuLines[1].classList.toggle('rotate');

    }

})

