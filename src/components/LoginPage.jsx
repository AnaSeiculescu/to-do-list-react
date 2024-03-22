import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import { useState } from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import todoImage from '../../public/pictures/todo_image.jpeg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
import '../utils/StyleLoginPage.css';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

export function LoginPage() {
    const navigate = useNavigate();

    const [userNameInput, setUserNameInput] = useState('');
    const [passInput, setPassInput] = useState('');

    const inputsStyle = {
        marginBottom: '15px',
        display: 'inline-block',
    };

    const handleInputChange = (event, properSetter) => {
        properSetter(event.target.value);
    };

    const mySecondaryColor = grey[500];

    return (
        <div className="styleLoginPage">
            {/* <Grid container> */}
            <Card
                sx={{
                    // width: '100%',
                    // height: 400,
                    boxShadow: 5,
                    display: 'grid',
                    padding: '16px',
                    alignItems: 'stretch',
                }}
            >
                <CardContent
                    sx={{
                        alignSelf: 'center',
                        textAlign: 'left',
                    }}
                >
                    <Box
                        sx={{
                            marginBottom: '24px',
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
                        <Typography fontWeight="fontWeightBold">Username</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            value={userNameInput}
                            onChange={(event) => handleInputChange(event, setUserNameInput)}
                            style={inputsStyle}
                            fullWidth
                        />
                    </Box>

                    <Box borderBottom={1} borderColor={mySecondaryColor} marginBottom="40px">
                        <Typography fontWeight="fontWeightBold">Password</Typography>
                        <TextField
                            required
                            label="Required"
                            type="password"
                            value={passInput}
                            onChange={(event) => handleInputChange(event, setPassInput)}
                            style={inputsStyle}
                            fullWidth
                        />
                        <Typography gutterBottom color="primary" fontSize={14} sx={{ cursor: 'pointer' }}>
                            Forgot your password?
                        </Typography>
                    </Box>
                </CardContent>

                <Stack direction="row" spacing={22} justifyContent="center" alignSelf="flex-end">
                    <Button
                        variant="outlined"
                        sx={{ color: 'black', border: '1px solid black' }}
                        onClick={() => navigate('/home-page')}
                    >
                        Sing Up
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ bgcolor: 'black', color: 'white' }}
                        onClick={() => navigate('/home-page')}
                    >
                        Sing In
                    </Button>
                </Stack>
            </Card>
            {/* </Grid> */}

            {/* <Routes>
                <Route
                    path="/green"
                    element={
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                background: 'green',
                            }}
                        />
                    }
                />
                <Route
                    path="/yellow"
                    element={
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                background: 'yellow',
                            }}
                        />
                    }
                /> */}
            {/* </Routes> */}
        </div>
    );
}
