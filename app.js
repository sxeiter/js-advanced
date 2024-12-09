'use strict';

function Character(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function() {
    console.log(`${this.language}: ${this.name}`);
};

function Orc(name, language, weapon) {
    Character.call(this, 'Орк', name, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function() {
    console.log(`${this.name} наносит удар с оружием ${this.weapon}!`);
};

Orc.prototype.castSpell = function() {
    console.log(`${this.name} использует заклинание!`);
};

Orc.prototype.createSpell = function(spellName) {
    console.log(`${this.name} создает заклинание: ${spellName}`);
};

const orc1 = new Orc('Грог', 'Оркский', 'Топор');
orc1.speak();
orc1.hit();
orc1.castSpell();
orc1.createSpell('Огненный шар');
