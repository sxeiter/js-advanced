'use strict';

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