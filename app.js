'use strict';

class Car {
    constructor(make, model, run) {
        this._make = make;
        this._model = model;
        this._run = run;
    }

    get run() {
        return this._run;
    }

    set run(value) {
        if (value >= 0) {
            this._run = value;
        } else {
            console.log('Нет пробега')
        }
    }

    info() {
        console.log(`Автомобиль ${this._make} ${this._model} c пробегом ${this._run} километров`)
    } 
}

const car = new Car('BWM', 'X5 M Compitition', 140000);
console.log(car.info())

car.run = 43232;
console.log(car._run)
console.log(car.info())