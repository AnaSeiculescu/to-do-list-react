import { TextField } from '@mui/material';
import { useState } from 'react';
import { AddButton } from './AddButton';
import PropTypes from 'prop-types';

export function NewTodo({ onHandlerAddTodo }) {
    const [taskName, setTaskName] = useState('');

    function handlerChange(event) {
        // console.log(event);
        const input = event.target.value;
        setTaskName(input);
    }

    return (
        <div>
            <TextField
                className="inputTask"
                size="small"
                value={taskName}
                onChange={handlerChange}
            ></TextField>
            <AddButton
                onClick={() =>
                    onHandlerAddTodo({ text: taskName, isCompleted: false })
                }
            />
        </div>
    );
}

NewTodo.propTypes = {
    onHandlerAddTodo: PropTypes.func,
};
