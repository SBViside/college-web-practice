setBurgerMenu();
setScrollAnimations('.page__banner, .subscribe .container, .page__populars, .category-block, .page__populars_2');
setViewButtons();
setBannerTime();
setCartCounter();

const toCartButtons = document.querySelectorAll('.to-cart');
for (let butt of toCartButtons) {
    butt.addEventListener('click', function() { 
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            this.lastChild.textContent = 'В КОРЗИНУ';
            sessionStorage.cartAmount = +sessionStorage.cartAmount - 1;
            setCartCounter();
        } else {
            this.classList.add('active');
            this.lastChild.textContent = 'В КОРЗИНЕ';
            sessionStorage.cartAmount = +sessionStorage.cartAmount + 1;
            setCartCounter();
        }
    });
}

