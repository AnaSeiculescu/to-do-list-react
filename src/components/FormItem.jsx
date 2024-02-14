import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DeleteIconButton } from './DeleteIconButton';

export function FormItem({ todo, setTodos, handleUpdates, handleDeleteTodo }) {
    const [checked, setChecked] = useState(todo.isCompleted);

    // console.log('todo este: ', todo);

    const handleCheckboxChange = (ev) => {
        setChecked(ev.target.checked);
        handleUpdates(todo.id, {
            text: todo.text,
            isCompleted: !todo.isCompleted,
        });
    };

    return (
        <FormGroup row={true}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={() => handleCheckboxChange(event)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label={todo.text}
            />
            <DeleteIconButton
                todo={todo}
                setTodos={setTodos}
                handleDeleteTodo={handleDeleteTodo}
            />
        </FormGroup>
    );
}
