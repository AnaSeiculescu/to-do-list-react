import express from 'express';
import { verifyToken } from '../middleware/authCheck.js';
import { todos } from '../dao/todos.js';

const todosRouter = express.Router();

let todoItems = [];

const isValidId = (id) => {
    return todoItems.some((item) => item.id === parseInt(id));
};

const todoProperties = ['text', 'isCompleted'];

const isValidTodo = (todo) => {
    for (const key of Object.keys(todo)) {
        if (!todoProperties.includes(key)) {
            return false;
        }

        if (key === 'text' && typeof todo[key] !== 'string') {
            return false;
        }

        if (key === 'isCompleted' && typeof todo[key] !== 'boolean') {
            return false;
        }
    }

    return true;
};

const hasAllTodoProperties = (todo) => {
    return todoProperties.every((prop) => todo[prop] !== undefined);
};

todosRouter.use(verifyToken);

todosRouter.get('/', (req, res) => {
    res.json(todoItems);
});

todosRouter.post('/', (req, res) => {
    const todo = req.body;
    if (!isValidTodo(todo)) {
        res.status(400).send('Invalid todo. Allowed properties: text (string), isCompleted (boolean)');
        return;
    }

    if (!hasAllTodoProperties(todo)) {
        res.status(400).send(
            `Todo must have all properties: ${todoProperties.join(', ')}. Received: ${Object.keys(todo).join(', ')}`
        );
        return;
    }

    const newTodo = todos.addTodo(req.user, todo);

    res.status(201).json(newTodo);
});

todosRouter.patch('/:id', (req, res) => {
    const todoId = req.params.id;
    if (!isValidId(todoId)) {
        res.status(404).send(`Todo with ID ${todoId} not found`);
        return;
    }

    const todo = req.body;
    if (!isValidTodo(todo)) {
        res.status(400).send('Invalid todo. Allowed properties: text (string), isCompleted (boolean)');
        return;
    }

    const todoIndex = todoItems.findIndex((item) => item.id === parseInt(todoId));
    todoItems[todoIndex] = { ...todoItems[todoIndex], ...todo };

    res.json(todoItems[todoIndex]);
});

todosRouter.delete('/:id', (req, res) => {
    const todoId = req.params.id;
    if (!isValidId(todoId)) {
        res.status(404).send(`Todo with ID ${todoId} not found`);
        return;
    }

    todoItems = todoItems.filter((td) => td.id !== parseInt(todoId));
    res.status(204).end();
});

export { todosRouter };
