// import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../utils/constants';

export function PrivateRoute() {
    console.log('Rendering private route');
    const userAuthData = useAuth();
    if (!userAuthData.token) return <Navigate to="/login" />;
    return <Outlet />;
}
