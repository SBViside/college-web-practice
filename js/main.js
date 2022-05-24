(function() {
    // получение необходимых компонентов для бургер-меню
    const body = document.body;
    const navigator = document.getElementsByClassName('navigator__list')[0];
    const navBackground = document.querySelector('.navigator-area');
    const burgerButton = document.getElementById('menu-burger');

    // добавление событий бургер-меню
    burgerButton.addEventListener('change', function() {
        navigator.classList.toggle('burger-select');
        navBackground.classList.toggle('dn');
        body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    });
    navBackground.addEventListener('click', function() {
        burgerButton.click();
    });

    // анимация объектов при скролле
    const windowHeight = document.documentElement.clientHeight;
    // собираю массив коллекцию всех объектов, для которых нужно применить анимацию
    const blocks = document.querySelectorAll('.page__banner, .page__subscribe, .page__populars');

    window.addEventListener('load', loadBlocks);
    window.addEventListener('scroll', loadBlocks);

    function loadBlocks() {
        if (blocks.length <= 0) return;
        for (let block of blocks) {
            let blockRect = block.getBoundingClientRect();
            let height =  blockRect.top - windowHeight;
            if (height <= 0) block.classList.add('active');
        }
    }
})();
