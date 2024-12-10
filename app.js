'use strict';

const newYearDate = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = newYearDate - now;

    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownString = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;

    document.getElementById("countdown").innerText = countdownString;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerText = "С Новым Годом!";
    }
}

const interval = setInterval(updateCountdown, 1000);

updateCountdown();