    // метод утсановки бургер меню
    function setBurgerMenu() {
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
    }

    // метод утсановки скролл-анимаций
    function setScrollAnimations(classes) {
        // анимация объектов при скролле
        const windowHeight = document.documentElement.clientHeight;
        // массив коллекцию всех объектов, для которых нужно применить анимацию
        const blocks = document.querySelectorAll(classes);

        window.addEventListener('load', loadBlocks);
        window.addEventListener('scroll', loadBlocks);

        // метод загрузки блоков
        function loadBlocks() {
            if (blocks.length <= 0) return;
            for (let block of blocks) {
                let blockRect = block.getBoundingClientRect();
                let height =  blockRect.top - windowHeight;
                if (height <= 0)  block.classList.add('active');
            }
        }
    }

    // метод утсановки кнопки закрытия обозревателя
    function setViewerCloseButton() {
        // закрытие обозревателя
        const viewerButton = document.getElementById('close-button');
        const viewer = viewerButton.parentElement.parentElement;
        viewerButton.addEventListener('click', function() { 
            viewer.classList.add('dn');
            viewer.lastElementChild.src = 'svg/close_delete_exit_remove_icon.svg';
        });
    }

    // метод утсановки кнопок просмотра
    function setViewButtons() {
        // бинд кнопок обозревания товара
        const viewButtons = document.getElementsByClassName('popular__view');
        for (let butt of viewButtons) {
            butt.addEventListener('click', function() {
                let imagePath = butt.parentElement.parentElement.firstElementChild.src;
                viewer.classList.remove('dn');
                viewer.lastElementChild.lastElementChild.src = imagePath;
            });
        }
    }

    // метод установки таймера на баннере
    function setBannerTime() {
        const days = document.getElementById('days');
        // let daysWord = days.nextElementSibling;
        const hours = document.getElementById('hours');
        // let hoursWord = hours.nextElementSibling;
        const minutes = document.getElementById('minutes');
        // let minutesWord = minutes.nextElementSibling;
        const seconds = document.getElementById('seconds');
        // let secondsWord = seconds.nextElementSibling;
        let timer = new Date(2000, 0, 7, 13, 10, 34);

        // метод, который выполняется каждую секунду и изменяет время на баннере
        const timeUpdater = setInterval(function() {
            timer.setSeconds(timer.getSeconds() - 1);   
            const checkNumber = (number) => number < 10 ? '0'+number : number;
            days.textContent = checkNumber(timer.getDay());
            hours.textContent = checkNumber(timer.getHours());
            minutes.textContent = checkNumber(timer.getMinutes());
            seconds.textContent = checkNumber(timer.getSeconds());
        }, 1000);
    }

