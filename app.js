'use strict';

const array = [
    {   
        id:1,
        name: 'Вася',
    },
    {
        id: 2,
        name: 'Петя'
    },
    {
        id: 1,
        name: 'Вася'
    },
    {
        id: 3,
        name: 'Энакин Скайуокер'
    }
];

const newArray = [];

array.map(item => {
    if (!newArray.find(newItem => newItem.id === item.id)) {
        newArray.push(item)
    }
})

console.log(newArray)