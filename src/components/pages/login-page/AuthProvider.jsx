import { AuthContext } from '../../../utils/constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('power') || '');
    const navigate = useNavigate();

    const loginAction = async (userAndPass) => {
        try {
            const apiResponse = await fetch('http://localhost:3030/auth/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(userAndPass),
            });
            const result = await apiResponse.json();
            console.log('raspuns la autentificare 2: ', result);
            if (apiResponse.status === 200) {
                // setUser(result.data.userInput);
                setToken(result.token);
                localStorage.setItem('power', result.token);
                navigate('/home-page');
                return { loginSuccessful: true };
            }
            throw new Error(result.message);
        } catch (err) {
            console.log(err);
            return { loginSuccessful: false };
            // throw err;
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
