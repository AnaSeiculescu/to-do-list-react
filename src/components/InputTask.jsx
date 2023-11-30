import { AddButton } from "./AddButton";
import TextField from '@mui/material/TextField';

export function InputTask({value, onChange}) {
    return (
        <div>
            <TextField 
                size="small"
                value={value} 
                onChange={onChange}>
            </TextField>
            <AddButton />
        </div>
        
    )
}