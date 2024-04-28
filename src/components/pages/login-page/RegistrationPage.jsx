import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
// import { useAuth } from '../../../utils/constants';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';

export function RegistrationPage() {
    // console.log('reneding login page');

    const navigate = useNavigate();

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
        passwordConfirmation: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [alertMsg, setAlertMsg] = useState({
        open: false,
        message: '',
    });

    // const auth = useAuth();
    // const handleLoadingOnClick = () => {
    //     setIsLoading(true);
    // };
    // const handleSubmitEvent = (e) => {
    //     e.preventDefault();

    //     if (userInput.username !== '' && userInput.password !== '') {
    //         handleLogingOnClick();
    //         auth.loginAction(userInput).then(({ loginSuccessfull }) => {
    //             if (!loginSuccessfull) {
    //                 setAlertMsg({ open: true });
    //             }
    //             setIsLoading(false);
    //         });

    //         return;
    //     } else {
    //         handleAlertOnClick();
    //     }
    // };

    const submitRegisterAction = async (userRegisterInfo) => {
        try {
            const apiResponse = await fetch('http://localhost:3030/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userRegisterInfo),
            });
            const result = await apiResponse.json();
            console.log('result: ', result);
            if (apiResponse.status === 201) {
                navigate('/login');
                return { registerSuccessful: true };
            }
            if (apiResponse.status === 400) {
                setAlertMsg({ open: true, message: result.errorMessage });
                // console.log('Password confirmation does not match the given password.');
                return { registerSuccessful: false };
            }

            throw new Error(result.message);
        } catch (err) {
            console.log(err);
            return { registerSuccessful: false };
        }
    };

    const handleSubmitRegistration = async (e) => {
        e.preventDefault();

        if (userInput.username !== '' && userInput.password !== '' && userInput.passwordConfirmation !== '') {
            setIsLoading(true);
            await submitRegisterAction(userInput);
            setIsLoading(false);
            return;
        }
        setAlertMsg({ open: true, message: 'Please provide valid input' });
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBackToSignIn = () => {
        navigate('/login');
    };

    return (
        <Stack
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
                    <Stack
                        sx={{
                            marginBottom: '40px',
                        }}
                    >
                        <Typography variant="h5" fontWeight="fontWeightBold">
                            Register acount
                        </Typography>
                        <Typography gutterBottom color={mySecondaryColor}>
                            Enter your details below to sign up
                        </Typography>
                    </Stack>

                    <Stack>
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
                    </Stack>

                    <Stack>
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
                    </Stack>

                    <Stack borderBottom={1} borderColor={mySecondaryColor} marginBottom="48px">
                        <Typography fontWeight="fontWeightBold" sx={labelsStyle}>
                            Confirm Password:
                        </Typography>
                        <TextField
                            required
                            disabled={isLoading}
                            name="passwordConfirmation"
                            label="Required"
                            type="password"
                            value={userInput.passwordConfirmation}
                            onChange={(event) => handleInput(event)}
                            sx={inputsStyle}
                            fullWidth
                        />
                    </Stack>
                </CardContent>

                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        variant="outlined"
                        disabled={isLoading}
                        sx={{ color: 'black', border: '1px solid black', boxShadow: 3 }}
                        onClick={handleBackToSignIn}
                    >
                        Back To Sign In
                    </Button>
                    <Button
                        variant="contained"
                        disabled={isLoading}
                        sx={{ bgcolor: 'black', color: 'white', boxShadow: 3 }}
                        onClick={handleSubmitRegistration}
                    >
                        {isLoading && <CircularProgress size={25} sx={{ marginRight: '7px' }} />}
                        Sign Up
                        <Snackbar
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            open={alertMsg.open}
                            onClose={() => setAlertMsg({ open: false, message: '' })}
                            message={alertMsg.message}
                            sx={{ textAlign: 'center' }}
                        />
                    </Button>
                </Stack>
            </Card>
        </Stack>
    );
}
