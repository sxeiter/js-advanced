(function () {
    'use strict';

    class User {
        constructor(task) {
            this.task = task;
        }

        do() {
            this.task.run();
        }
    }

    class Task {
        constructor(message) {
            this.message = message;
        }

        run() {
            console.log(this.message);
        }
    }

    const task = new Task('drink cola');
    const alkash = new User(task);

    alkash.do();

})();
