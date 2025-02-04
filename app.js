'use strict';

class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        throw new Error("Метод calculateTotal должен быть переопределен в подклассе");
    }
}

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return this.amount * this.items;
    }
}
