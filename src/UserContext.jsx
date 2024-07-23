import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
    });
    return <UserContext.Provider value={{ userInput, setUserInput }}>{children}</UserContext.Provider>;
};
