import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import todoImage from '../../public/pictures/todo_image.jpeg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import '../utils/StyleLoginPage.css';

export function LoginPage() {
    const navigate = useNavigate();

    const [userNameInput, setUserNameInput] = useState('');
    const [passInput, setPassInput] = useState('');

    const inputsStyle = {
        width: '85%',
        marginBottom: '15px',
        display: 'block',
        textAlign: 'center',
    };

    const handleInputChange = (event, properSetter) => {
        properSetter(event.target.value);
    };

    return (
        <div className="styleLoginPage">
            <Grid container>
                <Card
                    sx={{ width: 300, height: 500, boxShadow: 5 }}
                    style={{
                        textAlign: 'center',
                        margin: 'auto',
                    }}
                >
                    <CardContent>
                        <TextField
                            required
                            label="Username: required"
                            value={userNameInput}
                            onChange={(event) =>
                                handleInputChange(event, setUserNameInput)
                            }
                            style={inputsStyle}
                        />
                        <TextField
                            required
                            label="Password: required"
                            type="password"
                            value={passInput}
                            onChange={(event) =>
                                handleInputChange(event, setPassInput)
                            }
                            style={inputsStyle}
                        />
                    </CardContent>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/home-page')}
                    >
                        Submit
                    </Button>
                </Card>
            </Grid>

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
