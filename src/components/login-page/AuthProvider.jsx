import { AuthContext } from '../../utils/constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('power') || '');
    const navigate = useNavigate();

    const loginAction = async (data) => {
        try {
            const apiResponse = await fetch('http://localhost:3030/auth/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(data),
            });
            const result = await apiResponse.json();
            if (result.data) {
                setUser(result.data.user);
                setToken(result.token);
                localStorage.setItem('power', result.token);
                navigate('/home-page');
                return;
            }
            throw new Error(result.message);
        } catch (err) {
            console.log(err);
        }
    };

    const logOut = () => {
        setUser(null);
        setToken('');
        localStorage.removeItem('power');
        navigate('/login/');
    };

    return <AuthContext.Provider value={{ token, user, loginAction, logOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
