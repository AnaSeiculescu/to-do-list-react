// import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { useState } from 'react';
// import React from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Route, Routes, useNavigate } from 'react-router-dom';
import todoImage from '../../pictures/todo_image.jpeg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function LoginPage() {
    const styleLoginPage = {
        backgroundImage: `url(${todoImage})`,
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: '0',
        left: '0',
        filter: 'grayscale(30%) opacity(0.7) brightness(0.3)',
    };

    const navigate = useNavigate();

    const [userNameInput, setUserNameInput] = useState('');
    const [passInput, setPassInput] = useState('');

    const inputsStyle = {
        marginBottom: '15px',
    };

    const handleInputChange = (event, properSetter) => {
        properSetter(event.target.value);
    };

    // const handleOnClikHomeButton = () => {};

    return (
        <div style={styleLoginPage}>
            <Card
                sx={{ maxWidth: 400 }}
                style={{
                    textAlign: 'center',
                    margin: 'auto',
                    filter: 'invert(0%)',
                }}
            >
                <CardContent>
                    <TextField
                        required
                        label="Username: required"
                        // defaultValue="User Name"
                        value={userNameInput}
                        onChange={(event) =>
                            handleInputChange(event, setUserNameInput)
                        }
                        style={inputsStyle}
                    />
                    <TextField
                        required
                        label="Password: required"
                        // defaultValue="Password"
                        type="password"
                        value={passInput}
                        onChange={(event) =>
                            handleInputChange(event, setPassInput)
                        }
                        style={inputsStyle}
                    />
                </CardContent>

                {/* <Link
                    to="/home-page"
                    // size="small"
                    // onClick={handleOnClikHomeButton}
                    // style={{
                    //     margin: '5px 10px',
                    //     // textTransform: 'none'
                    // }}
                >
                    Home
                </Link> */}
                <Button
                    variant="contained"
                    onClick={() => navigate('/home-page')}
                >
                    Submit
                </Button>
            </Card>

            <Routes>
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
                />
            </Routes>
        </div>
    );
}
