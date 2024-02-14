import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteIconButton({ todo, handleDeleteTodo }) {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton
                aria-label="delete"
                onClick={() => handleDeleteTodo(todo.id)}
            >
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
}
