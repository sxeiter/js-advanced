import { User } from './user.js';
import { Task } from './task.js';

const task = new Task('drink cola');
const alkash = new User(task);

alkash.do()