(function() {

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
})();