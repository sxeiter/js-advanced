'use strict';

const newYearDate = new Date('January 1, 2026 00:00:00').getTime();

function correctEnd(number, title) {
    number = Math.abs(number);
    let cases= [2, 0, 1, 1, 1, 2];
    return title[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = newYearDate - now;

    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const monthTitle = correctEnd(months, ['месяц', 'месяца', 'месяцев']);
    const dayTitle = correctEnd(days, ['день', 'дня', 'дней']);
    const hourTitle = correctEnd(hours, ['час', 'часа', 'часов']);
    const minuteTitle = correctEnd(minutes, ['минута', 'минуты', 'минут']);
    const secondTitle = correctEnd(seconds, ['секунда', 'секунды', 'секунд']);

    const countdownString = `${months} ${monthTitle}, ${days} ${dayTitle}, ${hours} ${hourTitle}, ${minutes} ${minuteTitle}, ${seconds} ${secondTitle}`;

    document.getElementById("countdown").innerText = countdownString;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerText = "С Новым Годом!";
    }
}

const interval = setInterval(updateCountdown, 1000);

updateCountdown();