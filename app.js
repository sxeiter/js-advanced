'use strict';

const dateString1 = '2002-11-20';

function checkAge(dateString) {
    const parts = dateString.split('-');
    const birthDate = new Date(parts[0], parts[1] - 1, parts[2]);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && 
        currentDate.getDate() < birthDate.getDate())) {
        age--; 
    }

    if (age >= 14) {
        console.log('Вам есть 14 лет!');
    } else {
        console.log('Вам нет 14 лет!');
    }
}

checkAge(dateString1);