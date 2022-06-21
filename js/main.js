    sessionStorage.cartAmount = sessionStorage.cartAmount ?? 0;
    let cart = sessionStorage.cart ?? [];
    if (typeof cart === 'string') cart = JSON.parse(cart);

   // метод установки бургер меню
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

    // метод утсановки кнопок просмотра
    function setViewButtons() {
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
    }

    function setBuyButtons() {
        const toCartButtons = document.querySelectorAll('.to-cart');

        for (let butt of toCartButtons) {
            for (let product of cart) {
                if (product.includes(butt.parentElement.children[2].textContent)) {
                    butt.classList.add('active');
                    butt.lastChild.textContent = 'В КОРЗИНЕ';
                }
            }
            
            butt.addEventListener('click', function() { 
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    this.lastChild.textContent = 'В КОРЗИНУ';
                    sessionStorage.cartAmount = +sessionStorage.cartAmount - 1;

                    for (let i = 0; i < cart.length; i++)
                        if (cart[i].includes(this.parentElement.children[2].textContent)) {
                            cart.splice(i, 1);
                            break;
                    }
                    sessionStorage.cart = JSON.stringify(cart);
                } else {
                    this.classList.add('active');
                    this.lastChild.textContent = 'В КОРЗИНЕ';
                    sessionStorage.cartAmount = +sessionStorage.cartAmount + 1;

                    cart.push(`${this.parentElement.children[2].textContent}' '${this.parentElement.children[3].textContent}`);
                    sessionStorage.cart = JSON.stringify(cart);
                }
                setCartCounter();
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
        const checkNumber = (number) => number < 10 ? '0'+number : number;

        // метод, который выполняется каждую секунду и изменяет время на баннере
        const timeUpdater = setInterval(function() {
            timer.setSeconds(timer.getSeconds() - 1);   
            if (days !== null && hours !== null && minutes !== null && seconds !== null) {
                days.textContent = checkNumber(timer.getDay());
                hours.textContent = checkNumber(timer.getHours());
                minutes.textContent = checkNumber(timer.getMinutes());
                seconds.textContent = checkNumber(timer.getSeconds());
            }
        }, 1000);
    }

    function setCartCounter() {  
        document.querySelector('#cart-counter').textContent = sessionStorage.getItem('cartAmount') ?? 0;
    }




// главное тело скрипта
(function() {

    // валюты на сайте
    const CURRENCIES = ['USD', 'EUR', 'RUB'];
    let CURRENCY = sessionStorage.getItem('crr') || CURRENCIES[0];
    const priceBlocks = document.querySelectorAll('.popular__price');
    const currencyChangeButton = document.getElementById('currency');
    setupCurrency();

    // методы изменения валюты
    function setupCurrency() {
        if (CURRENCY === CURRENCIES[0]) return;
        switch (CURRENCY) {
            case 'EUR':
                changePrices('$', '€', 0.9);
                changeButton('svg/euro_european_finance_money_icon.svg');
                break;
            case 'RUB':
                changePrices('$', '₽', 63);
                changeButton('svg/ruble_sign_icon.svg');
                break;
        }
    }
    function updateCurrency() {
        switch (CURRENCY) {
            case 'USD':
                changePrices('₽', '$', 0.0158730158730159);
                changeButton('svg/dollar_finance_money_icon.svg');
                break;
            case 'EUR':
                changePrices('$', '€', 0.9);
                changeButton('svg/euro_european_finance_money_icon.svg');
                break;
            case 'RUB':
                changePrices('€', '₽', 70);
                changeButton('svg/ruble_sign_icon.svg');
                break;
        }
    }
    function changePrices(oldSymbol, newSymbol, coefficient) {
        for (let price of priceBlocks) {
            price.innerHTML = price.innerHTML.replace(oldSymbol + ' ', '');
            let priceNumber = (+price.innerHTML) * coefficient;
            price.innerHTML = newSymbol + ' ' + priceNumber.toFixed(2);
        }
    }
    function changeButton(imgSrc) {
        currencyChangeButton.querySelector('.item-text').textContent = CURRENCY;
        currencyChangeButton.querySelector('.item-icon').src = imgSrc;
    }    

    // назначение метода изменения валюты
    currencyChangeButton.addEventListener('click', function() {
        CURRENCY = CURRENCIES.indexOf(CURRENCY) >= 2 ? CURRENCIES[0] : CURRENCIES[CURRENCIES.indexOf(CURRENCY) + 1];
        sessionStorage.setItem('crr', CURRENCY);
        updateCurrency();
    });

})();


