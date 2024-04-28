import { dbData, saveData } from '../data/data.js';

class Todos {
    nextId = 1;

    constructor() {
        if (dbData.todos.length === 0) {
            this.nextId = 1;
        } else {
            this.nextId = dbData.todos[dbData.todos.length - 1].id + 1;
        }
    }

    getAll(user) {
        return dbData.todos.filter((td) => td.ownerUserId === user.id);
    }

    addTodo(user, data) {
        const newTodo = { isCompleted: false, ...data, id: this.nextId, ownerUserId: user.id };

        dbData.todos.push(newTodo);
        this.nextId += 1;
        saveData();

        return newTodo;
    }
}

export const todos = new Todos();
