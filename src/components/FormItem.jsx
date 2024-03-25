import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DeleteIconButton } from './DeleteIconButton';
import { EditableTodoInput } from './EditableTodoInput';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ToggleButton from '@mui/material/ToggleButton';

export function FormItem({ todo, handleDeleteTodo, handleCheckboxChange, handleUpdates }) {
    const [editing, setEditing] = useState(false);

    const handleEditTodo = () => {
        setEditing(!editing);
    };

    return (
        <div>
            <FormGroup row={true}>
                <FormControlLabel
                    control={<Checkbox checked={todo.isCompleted} onChange={() => handleCheckboxChange(todo)} />}
                    label={
                        editing ? (
                            <EditableTodoInput
                                todo={todo}
                                handleUpdates={handleUpdates}
                                editing={editing}
                                setEditing={setEditing}
                            ></EditableTodoInput>
                        ) : (
                            todo.text
                        )
                    }
                />
                <ToggleButton
                    value="editing"
                    size="small"
                    selected={editing}
                    onChange={() => {
                        handleEditTodo();
                    }}
                    style={{
                        border: 'none',
                    }}
                >
                    <ModeEditIcon />
                </ToggleButton>

                <DeleteIconButton todo={todo} handleDeleteTodo={handleDeleteTodo} />
            </FormGroup>
        </div>
    );
}
