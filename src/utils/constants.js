import { useContext, createContext } from 'react';
export const AuthContext = createContext();

const isProd = import.meta.env.VITE_APP_ENV === 'production';

export const URL_TODOS = isProd ? '/api/todos/' : 'http://localhost:3050/api/todos/';
export const URL_AUTH = isProd ? '/auth/' : 'http://localhost:3050/auth/';

export const useAuth = () => {
    return useContext(AuthContext);
};
