import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
// import { ArrowRight, Camera } from '@mui/icons-material';

export function EditTodo({ handleEditTodo, todo }) {
    return (
        <IconButton onClick={() => handleEditTodo(todo)}>
            <ModeEditIcon />
        </IconButton>
    );
}
