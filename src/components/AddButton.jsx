import Button from '@mui/material/Button';
// import { createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

export function AddButton({ onClick }) {
    return (
        <Button
            variant="outlined"
            size="small"
            onClick={onClick}
            style={{
                margin: '5px 10px',
                // textTransform: 'none'
            }}
        >
            add task
        </Button>
    );
}

AddButton.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
};
