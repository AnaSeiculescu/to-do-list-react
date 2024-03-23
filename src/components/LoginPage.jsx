import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../utils/StyleLoginPage.css';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

export function LoginPage() {
    const navigate = useNavigate();

    const [userNameInput, setUserNameInput] = useState('');
    const [passInput, setPassInput] = useState('');

    const inputsStyle = {
        marginBottom: '21px',
    };

    const labelsStyle = {
        marginBottom: '7px',
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
                    boxShadow: 5,
                    display: 'grid',
                    padding: '16px',
                    alignItems: 'stretch',
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
                            id="outlined-required"
                            label="Required"
                            value={userNameInput}
                            onChange={(event) => handleInputChange(event, setUserNameInput)}
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
                            label="Required"
                            type="password"
                            value={passInput}
                            onChange={(event) => handleInputChange(event, setPassInput)}
                            sx={inputsStyle}
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
                        sx={{ color: 'black', border: '1px solid black', boxShadow: 3 }}
                        onClick={() => navigate('/home-page')}
                    >
                        Sing Up
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ bgcolor: 'black', color: 'white', boxShadow: 3 }}
                        onClick={() => navigate('/home-page')}
                    >
                        Sing In
                    </Button>
                </Stack>
            </Card>
            {/* </Grid> */}
        </div>
    );
}
