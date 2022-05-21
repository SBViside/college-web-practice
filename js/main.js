'use strict'

// получение необходимых компонентов для бургер-меню
    const navigator = document.getElementsByClassName('navigator__list')[0];
    const navBackground = document.querySelector('.navigator-area');
    const burgerButton = document.getElementById('menu-burger');

// добавление событий бургер-меню
    burgerButton.addEventListener('change', function() {
        navigator.classList.toggle('burger-select');
        navBackground.classList.toggle('dn');
    });
    navBackground.addEventListener('click', function() {
        burgerButton.click();
    });