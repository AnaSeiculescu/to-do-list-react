import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DeleteIconButton } from './DeleteIconButton';
// import { EditTodo } from './EditTodo';
import { TextField } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';

export function FormItem({
    todo,
    handleDeleteTodo,
    handleCheckboxChange,
    // handleEditTodo,
    // editing,
}) {
    const [editing, setEditing] = useState(false);

    const handleEditTodo = () => {
        setEditing(true);
    };

    return (
        <div>
            <FormGroup row={true}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={todo.isCompleted}
                            onChange={() => handleCheckboxChange(todo)}
                        />
                    }
                    label={todo.text}
                />
                {/* <EditTodo handleEditTodo={handleEditTodo} todo={todo} /> */}
                <IconButton onClick={() => handleEditTodo(todo.id)}>
                    <ModeEditIcon />
                </IconButton>
                <DeleteIconButton
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                />
            </FormGroup>
            {editing && <TextField value={todo.text}></TextField>}
        </div>
    );
}
