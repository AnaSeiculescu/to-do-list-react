import { NewTodo } from './NewTodo';
import { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { addTodos, deleteTodo, getTodos, updateTodo } from '../utils/api';

export function Container() {
    const [todos, setTodos] = useState([]);
    const [taskName, setTaskName] = useState('');

    function handlerChangeInInput(event) {
        const input = event.target.value;
        setTaskName(input);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        getTodos()
            .then((data) => {
                console.log('data', data);
                setTodos(data);
            })

            .catch((error) => console.error('Error fetching todos:', error));
    };

    const handleAddTodo = (todo) => {
        addTodos(todo)
            .then((newTodo) => {
                console.log('body-ul este: ', newTodo);
                setTodos([...todos, newTodo]);
            })
            .catch((error) => console.error('Error adding todo:', error));

        console.log(todos);
    };

    const handleUpdates = (id, updatedTodo) => {
        updateTodo(id, updatedTodo)
            .then((updatedTodo) => {
                setTodos((prevTodos) =>
                    prevTodos.map((item) =>
                        item.id === id ? { ...item, ...updatedTodo } : item
                    )
                );
            })
            .catch((error) => console.error('Error patching todo:', error));
    };

    const handleCheckboxChange = (todoItem) => {
        // setChecked(event.target.checked);
        todoItem.isCompleted = !todoItem.isCompleted;
        handleUpdates(todoItem.id, {
            text: todoItem.text,
            isCompleted: todoItem.isCompleted,
        });
    };

    const handleDeleteTodo = (id) => {
        deleteTodo(id)
            .then(() => {
                setTodos((prevTodos) =>
                    prevTodos.filter((item) => item.id !== id)
                );
            })
            .catch((error) => console.log('Error deleting todo:', error));
    };

    return (
        <div>
            <NewTodo
                onHandlerAddTodo={handleAddTodo}
                handlerChangeInInput={handlerChangeInInput}
                taskName={taskName}
            />
            <TodoList
                todos={todos}
                handleDeleteTodo={handleDeleteTodo}
                handleCheckboxChange={handleCheckboxChange}
                handleUpdates={handleUpdates}
            />
        </div>
    );
}
