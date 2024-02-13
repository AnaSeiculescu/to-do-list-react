// import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteIconButton({ todo, setTodos }) {
    const handleDeleteTodo = (id) => {
        const URL = `http://localhost:3030/api/todos/${id}`;

        fetch(URL, {
            method: 'DELETE',
        })
            .then(() => {
                setTodos((prevTodos) =>
                    prevTodos.filter((item) => item.id !== id)
                );
            })
            .catch((error) => console.log('Error deleting todo:', error));
    };

    return (
        <Stack direction="row" spacing={1}>
            <IconButton
                aria-label="delete"
                onClick={() => handleDeleteTodo(todo.id)}
            >
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
}
