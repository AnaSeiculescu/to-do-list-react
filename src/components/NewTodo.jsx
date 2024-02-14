import { TextField } from '@mui/material';
// import { useState } from 'react';
import { AddButton } from './AddButton';
import PropTypes from 'prop-types';

export function NewTodo({ onHandlerAddTodo, handlerChangeInInput, taskName }) {
    return (
        <div>
            <TextField
                className="inputTask"
                size="small"
                value={taskName}
                onChange={handlerChangeInInput}
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
