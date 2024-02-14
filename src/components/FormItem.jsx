// import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DeleteIconButton } from './DeleteIconButton';

export function FormItem({ todo, handleDeleteTodo, handleCheckboxChange }) {
    return (
        <FormGroup row={true}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={todo.isCompleted}
                        onChange={() => handleCheckboxChange(todo)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label={todo.text}
            />
            <DeleteIconButton todo={todo} handleDeleteTodo={handleDeleteTodo} />
        </FormGroup>
    );
}
