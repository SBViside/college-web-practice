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
    // массив коллекцию всех объектов, для которых нужно применить анимацию
    const blocks = document.querySelectorAll('.page__banner, .page__subscribe, .page__populars, .category-block');

    window.addEventListener('load', loadBlocks);
    window.addEventListener('scroll', loadBlocks);

    // метод загрузки блоков
    function loadBlocks() {
        if (blocks.length <= 0) return;
        for (let block of blocks) {
            let blockRect = block.getBoundingClientRect();
            let height =  blockRect.top - windowHeight;
            if (height <= 0)  {
                block.classList.add('active');
            }
        }
    }


    // закрытие обозревателя
    const viewerButton = document.getElementById('close-button');
    const viewer = viewerButton.parentElement.parentElement;
    viewerButton.addEventListener('click', function() { 
        viewer.classList.add('dn');
        viewer.lastElementChild.src = 'svg/close_delete_exit_remove_icon.svg';
    });



    // бинд кнопок обозревания товара
    const viewButtons = document.getElementsByClassName('popular__view');
    for (let butt of viewButtons) {
        butt.addEventListener('click', function() {
            let imagePath = butt.parentElement.parentElement.firstElementChild.src;
            viewer.classList.remove('dn');
            viewer.lastElementChild.lastElementChild.src = imagePath;
        });
    }
})();
