import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import { useAuth } from '../../../utils/constants';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';

export function LoginPage() {
    console.log('reneding login page');
    // const navigate = useNavigate();

    const inputsStyle = {
        marginBottom: '21px',
    };
    const labelsStyle = {
        marginBottom: '7px',
    };
    const mySecondaryColor = grey[500];

    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [alertMsg, setAlertMsg] = useState({
        open: false,
    });

    const handleAlertOnClick = () => {
        setAlertMsg({ open: true });
    };

    const handleAlertOnCLose = () => {
        setAlertMsg({ open: false });
    };

    const auth = useAuth();
    const handleLogingOnClick = () => {
        setIsLoading(true);
    };
    const handleSubmitEvent = (e) => {
        e.preventDefault();

        if (userInput.username !== '' && userInput.password !== '') {
            handleLogingOnClick();
            auth.loginAction(userInput).then(({ loginSuccessfull }) => {
                if (!loginSuccessfull) {
                    setAlertMsg({ open: true });
                }
                setIsLoading(false);
            });

            return;
        } else {
            handleAlertOnClick();
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Box
            sx={{
                '&::before': {
                    content: '""',
                    backgroundImage: 'url(../../pictures/todo_image.jpeg)',
                    width: '100vw',
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    filter: 'grayscale(30%) opacity(0.65) brightness(0.30)',
                    zIndex: '-1',
                },
            }}
        >
            <Card
                sx={{
                    boxShadow: 5,
                    padding: '16px',
                    width: '380px',
                }}
            >
                <CardContent
                    sx={{
                        textAlign: 'left',
                    }}
                >
                    <Box
                        sx={{
                            marginBottom: '40px',
                        }}
                    >
                        <Typography variant="h5" fontWeight="fontWeightBold">
                            Power organizer
                        </Typography>
                        <Typography gutterBottom color={mySecondaryColor}>
                            Unleash your productivity
                        </Typography>
                    </Box>

                    <Box>
                        <Typography fontWeight="fontWeightBold" sx={labelsStyle}>
                            Username:
                        </Typography>
                        <TextField
                            required
                            disabled={isLoading}
                            id="outlined-required"
                            name="username"
                            label="Required"
                            value={userInput.username}
                            onChange={(event) => handleInput(event)}
                            sx={inputsStyle}
                            fullWidth
                        />
                    </Box>

                    <Box borderBottom={1} borderColor={mySecondaryColor} marginBottom="48px">
                        <Typography fontWeight="fontWeightBold" sx={labelsStyle}>
                            Password:
                        </Typography>
                        <TextField
                            required
                            disabled={isLoading}
                            name="password"
                            label="Required"
                            type="password"
                            value={userInput.password}
                            onChange={(event) => handleInput(event)}
                            sx={inputsStyle}
                            fullWidth
                        />
                        <Typography gutterBottom color="primary" fontSize={14} sx={{ cursor: 'pointer' }}>
                            Forgot your password?
                        </Typography>
                    </Box>
                </CardContent>

                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        variant="outlined"
                        disabled={isLoading}
                        sx={{ color: 'black', border: '1px solid black', boxShadow: 3 }}
                        // onClick={() => navigate('/home-page')}
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="contained"
                        disabled={isLoading}
                        sx={{ bgcolor: 'black', color: 'white', boxShadow: 3 }}
                        // onClick={() => navigate('/home-page')}
                        onClick={handleSubmitEvent}
                        // onSubmit={handleSubmitEvent}
                    >
                        {isLoading && <CircularProgress size={25} sx={{ marginRight: '7px' }} />}
                        Sign In
                        <Snackbar
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            open={alertMsg.open}
                            onClose={handleAlertOnCLose}
                            message="Please provide valid input"
                            sx={{ textAlign: 'center' }}
                        />
                    </Button>
                </Stack>
            </Card>
        </Box>
    );
}
