setBurgerMenu();
setScrollAnimations('.subscribe .container');
setBannerTime();
setCartCounter();

(function() {

    if (cart.length === 0) {
        let main = document.querySelector('main');
        main.innerHTML = "<h1 align=center class='hder' style='margin: 100px 0; font-size: 50px; color: grey;'>КОРЗИНА ПУСТА</h1>";
    } else {
        let table = document.querySelector('table.order-table').firstElementChild;
        let beforeThis = table.children[1];
        let sum = 0;

        for (let product of cart) {
            let np = product.split(`' '`);
            sum += +np[1].split(' ')[1];
            let item = document.createElement('tr');
            item.classList.add('order-item');
            item.innerHTML = `                            
                <td>${np[0]}</td>
                <td>${np[1]}</td>`;
            table.insertBefore(item, beforeThis);
        }
        document.querySelector('.total-price').textContent = '$ ' + sum.toFixed(2);
    }
 
})();