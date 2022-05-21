'use strict'

const navigator = document.getElementsByClassName('navigator__list')[0];
const burgerButton = document.getElementById('menu-burger');
burgerButton.addEventListener('change', function() {
    navigator.classList.toggle('burger-select');
});