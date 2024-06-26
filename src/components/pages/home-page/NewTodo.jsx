import { TextField } from '@mui/material';
import { AddButton } from './AddButton';
import PropTypes from 'prop-types';

export function NewTodo({ onHandlerAddTodo, handlerChangeInput, taskName }) {
    const handlerKeyAddTodo = (event) => {
        if (event.key === 'Enter') {
            onHandlerAddTodo({ text: taskName, isCompleted: false, date: '2024-05-15' });
        }
    };
    return (
        <div>
            <TextField
                className="inputTask"
                size="small"
                value={taskName}
                onChange={handlerChangeInput}
                onKeyDown={handlerKeyAddTodo}
            ></TextField>
            <AddButton onClick={() => onHandlerAddTodo({ text: taskName, isCompleted: false, date: '2024-05-15' })} />
        </div>
    );
}

NewTodo.propTypes = {
    onHandlerAddTodo: PropTypes.func,
};
