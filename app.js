'use strict';

const rollDice = (type) => {
    let sides;
    switch (type) {
        case 'D4':
            sides = 4;
            break;
        case 'D6':
            sides = 6;
            break;
        case 'D8':
            sides = 8;
            break;
        case 'D10':
            sides = 10;
            break;
        case 'D12':
            sides = 12;
            break;
        case 'D16':
            sides = 16;
            break;
        case 'D20':
            sides = 20;
            break;
        default:
            console.log('Ошибка!');
    }
    const result = Math.floor(Math.random() * sides) + 1;
    return result;
}

console.log(rollDice('D6'));
console.log(rollDice('D4'));
console.log(rollDice('D22'));