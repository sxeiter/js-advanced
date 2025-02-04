'use strict';

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     buy() {
//         console.log('buy')
//     }
// }

// class AudioBook extends Book {
//     constructor(title, author, lenMin) {
//         super(title, author);
//         this.lenMin = lenMin;
//     }

//     log() {
//         console.log(`${this.title} - ${this.lenMin}`)
//     }
// }

// const aub = new AudioBook('asdasdf', 'sdfgsdf111', 120);
// console.log(aub.buy());

class Enemy {
    health;
    constructor(health) {
        this.health = health;
    }

    recieveDamage(damage) {
        this.health = this.health - damage;
        console.log(this.health)
    }
}

class Sword {
    #damage;
    constructor(damage) {
        this.#damage = damage;
    }

    strike(enemy) {
        enemy.recieveDamage(this.#damage);
    }
}

class Ork extends Enemy {
    constructor(health) {
        super(health);
    }

    recieveDamage(damage) {
        if (Math.random() > 0.5) {
            this.health = this.health - damage;
        }
        console.log(this.health)
    }
}