import { useContext, createContext } from 'react';
export const AuthContext = createContext();

export const URL_TODOS = 'http://localhost:3030/api/todos/';

export const useAuth = () => {
    return useContext(AuthContext);
}
