import { useContext, createContext } from 'react';
export const AuthContext = createContext();

export const URL_TODOS = '/api/todos/';

export const useAuth = () => {
    return useContext(AuthContext);
};
