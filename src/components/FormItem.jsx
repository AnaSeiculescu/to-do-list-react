// import React from 'react';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DeleteIconButton } from './DeleteIconButton';

export function FormItem({ todo, todos, setTodos, fetchTodos }) {
    const [checked, setChecked] = useState(todo.isCompleted);
    // const [updatedTodo, setUpdatedTodo] = useState(todo.isComplete);

    // console.log(`todo cu id ${todo.id} este ${todo}`);
    console.log('todo este: ', todo);

    // const fetchUpdatedTodo = (id, updatedTodo) => {
    //     const URL = `http://localhost:3030/api/todos/${id}`;

    //     fetch(URL, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(updatedTodo),
    //     })
    //         .then((response) => response.json())
    //         .then((updatedTodo) => {
    //             // updatedTodo.isCompleted = updatedTodo;
    //             setTodos((prevTodos) =>
    //                 prevTodos.map((item) =>
    //                     item.id === id ? { ...item, ...updatedTodo } : todo
    //                 )
    //             );
    //         })
    //         .catch((error) => console.error('Error patching todo:', error));
    // };

    const handleChange = (ev, id, updatedTodo) => {
        setChecked(ev.target.checked);
        // todo.isCompleted = true;
        // setUpdatedTodo(!todo.isComplete);
        console.log(todo);

        const URL = `http://localhost:3030/api/todos/${id}`;

        fetch(URL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTodo),
        })
            .then((response) => response.json())
            .then((updatedTodo) => {
                // updatedTodo.isCompleted = updatedTodo;
                setTodos((prevTodos) =>
                    prevTodos.map((item) =>
                        item.id === id ? { ...item, ...updatedTodo } : item
                    )
                );
            })
            .catch((error) => console.error('Error patching todo:', error));
    };

    return (
        <FormGroup row={true}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={() =>
                            handleChange(event, todo.id, {
                                text: todo.text,
                                isCompleted: !todo.isCompleted,
                            })
                        }
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label={todo.text}
            />
            <DeleteIconButton
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                fetchTodos={fetchTodos}
            />
        </FormGroup>
    );
}
