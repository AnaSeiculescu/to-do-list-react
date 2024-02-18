import { TextField } from '@mui/material';
import { useState } from 'react';

export function EditableTodoInput({
    todo,
    editing,
    setEditing,
    handleUpdates,
}) {
    const [editedTask, setEditedTask] = useState(todo.text);

    const handlerChangeEditedInput = (event) => {
        const newInput = event.target.value;
        setEditedTask(newInput);
    };

    const handleEditingDone = (event) => {
        if (event.key === 'Enter') {
            handleUpdates(todo.id, {
                text: editedTask,
                isCompleted: todo.isCompleted,
            });
            setEditing(!editing);
        }
    };

    return (
        <TextField
            value={editedTask}
            // placeholder={todo.text}
            onChange={handlerChangeEditedInput}
            onKeyDown={handleEditingDone}
        ></TextField>
    );
}
