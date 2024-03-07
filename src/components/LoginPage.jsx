// import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { useState } from 'react';
// import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

export function LoginPage() {
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
        <div>
            <div>
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
            </div>
            <div>
                <TextField
                    required
                    label="Password: required"
                    // defaultValue="Password"
                    type="password"
                    value={passInput}
                    onChange={(event) => handleInputChange(event, setPassInput)}
                    style={inputsStyle}
                />
            </div>
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
            <Button variant="contained" onClick={() => navigate('/home-page')}>
                Submit
            </Button>
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
