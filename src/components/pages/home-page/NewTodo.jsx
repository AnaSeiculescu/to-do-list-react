import { TextField } from '@mui/material';
import { AddButton } from './AddButton';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function NewTodo({ onHandlerAddTodo }) {
    const [task, setTask] = useState('');

    const handlerKeyAddTodo = (event) => {
        if (event.key === 'Enter') {
            onHandlerAddTodo({ text: task, isCompleted: false, date: '2024-05-15' });
        }
    };

    function handlerChangeInput(event) {
        event.preventDefault();
        const input = event.target.value;
        setTask(input);
    }

    return (
        <div>
            <TextField
                className="inputTask"
                size="small"
                value={task}
                onChange={handlerChangeInput}
                onKeyDown={handlerKeyAddTodo}
            ></TextField>
            <AddButton onClick={() => onHandlerAddTodo({ text: task, isCompleted: false, date: '2024-05-15' })} />
        </div>
    );
}

NewTodo.propTypes = {
    onHandlerAddTodo: PropTypes.func,
};
