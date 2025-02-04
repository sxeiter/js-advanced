'use strict';

function getPokemonData(pokemonName, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonName}`, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            const data = JSON.parse(request.responseText);
            callback(null, data);
        } else {
            callback(`Ошибка: ${request.status}`);
        }
    };
    request.onerror = function () {
        callback('Ошибка сети');
    };
    request.send();
}

function getAbilityData(abilityUrl) {
    const request = new XMLHttpRequest();
    request.open('GET', abilityUrl, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            const abilityData = JSON.parse(request.responseText);
            console.log('Информация о способности:', abilityData);
        } else {
            console.error(`Ошибка: ${request.status}`);
        }
    };
    request.onerror = function () {
        console.error('Ошибка сети');
    };
}

getPokemonData('ditto', function (error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
        const abilityUrl = data.abilities[0].ability.url;
        console.log('URL способности:', abilityUrl);

        getAbilityData(abilityUrl);
    }
});
