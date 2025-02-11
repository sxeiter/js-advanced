'use strict';

// function getPokemonData(pokemonName, callback) { 
//     const request = new XMLHttpRequest(); 
//     request.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonName}`, true); 
//     request.onload = function () { 
//         if (request.status >= 200 && request.status < 300) { 
//             const data = JSON.parse(request.responseText); 
//             callback(null, data); 
//         } else { 
//             callback(`Ошибка: ${request.status}`); 
//         } 
//     }; 
//     request.onerror = function () { 
//         callback('Ошибка сети'); 
//     }; 
//     request.send(); 
// } 
// function getAbilityData(abilityUrl) { 
//     const request = new XMLHttpRequest(); 
//     request.open('GET', abilityUrl, true); 
//     request.onload = function () { 
//         if (request.status >= 200 && request.status < 300) { 
//             const abilityData = JSON.parse(request.responseText); 
//             console.log('Информация о способности:', abilityData); 
//         } else { 
//             console.error(`Ошибка: ${request.status}`); 
//         } 
//     }; 
//     request.onerror = function () { 
//         console.error('Ошибка сети'); 
//     }; 
// } 
// getPokemonData('ditto', function (error, data) { 
//     if (error) { 
//         console.error(error); 
//     } else { 
//         console.log(data); 
//         const abilityUrl = data.abilities[0].ability.url; 
//         console.log('URL способности:', abilityUrl); 
//         getAbilityData(abilityUrl); 
//     } 
// });

function getPokemonData(pokemonName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

function getAbilityData(abilityUrl) {
    return fetch(abilityUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

function getAbilityEffectDescription(abilityData) {
    const englishEffect = abilityData.effect_entries.find(entry => entry.language.name === 'en');
    return englishEffect ? englishEffect.effect : 'Описание отсутствует';
}

getPokemonData('ditto')
    .then(data => {
        console.log('Информация о покемоне:', data);
        const abilityUrl = data.abilities[0].ability.url;
        console.log('URL способности:', abilityUrl);
        return getAbilityData(abilityUrl);
    })
    .then(abilityData => {
        console.log('Информация о способности:', abilityData);
        const description = getAbilityEffectDescription(abilityData);
        console.log('Описание эффекта способности:', description);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });