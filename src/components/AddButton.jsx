import Button from '@mui/material/Button';
// import { createMuiTheme } from '@material-ui/core/styles';

export function AddButton() {
    return (
        <Button 
        variant="outlined" 
        size='small'
        
        style={{
            margin: '5px 10px',
            // textTransform: 'none'
        }}>add task</Button>
    )
}