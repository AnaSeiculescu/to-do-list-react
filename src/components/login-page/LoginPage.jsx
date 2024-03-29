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
import { useAuth } from '../../utils/constants';
import CircularProgress from '@mui/material/CircularProgress';

export function LoginPage() {
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

    const [isDisabled, setIsDisabled] = useState(false);

    // const handleLogin = (username, password) => {
    //     if (username === 'ana' && password === 'mere') {
    //         alert('Login successfull!');
    //     } else {
    //         alert('Invalid credentials. Please try again!');
    //     }
    // };

    const auth = useAuth();
    const handleLogingOnClick = () => {
        setIsLoading(true);
        setIsDisabled(true);
    };
    const handleSubmitEvent = (e) => {
        e.preventDefault();
        // console.log('Loading is ', isLoading);
        if (userInput.username !== '' && userInput.password !== '') {
            // handleLogin(userInput.username, userInput.password);
            handleLogingOnClick();
            auth.loginAction(userInput).then(() => {
                setIsLoading(false);
                setIsDisabled(false);
            });
            // console.log('Loading is ', isLoading);
            return;
        } else {
            alert('Please provide valid input');
            // console.log('Loading is ', isLoading);
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
                            disabled={isDisabled}
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
                            disabled={isDisabled}
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
                        disabled={isDisabled}
                        sx={{ color: 'black', border: '1px solid black', boxShadow: 3 }}
                        // onClick={() => navigate('/home-page')}
                    >
                        Sing Up
                    </Button>
                    <Button
                        variant="contained"
                        disabled={isDisabled}
                        sx={{ bgcolor: 'black', color: 'white', boxShadow: 3 }}
                        // onClick={() => navigate('/home-page')}
                        onClick={handleSubmitEvent}
                        // onSubmit={handleSubmitEvent}
                    >
                        {isLoading && <CircularProgress size={25} sx={{ marginRight: '7px' }} />}
                        Sing In
                        {/* {isDisabled ? (
                            <CircularProgress size={25} sx={{ color: 'blue', marginRight: '5px' }} />
                        ) : (
                            'Sing In'
                        )} */}
                    </Button>
                </Stack>
            </Card>
        </Box>
    );
}
