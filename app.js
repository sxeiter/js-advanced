'use strict'

const buttonContainer = document.getElementById('buttonContainer');
const counterDisplay = document.getElementById('counter');
let count = 0;
let lastButton = null;

buttonContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
        count++;

        if (lastButton) {
            lastButton.textContent = 'Нажми меня';
        }
        lastButton = event.target;
        lastButton.textContent = 'Нажата';

        counterDisplay.textContent = `Количество нажатий: ${count}`;
    }
});