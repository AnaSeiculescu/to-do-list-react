import { useLocation, Navigate } from 'react-router-dom';

export function RedirectToNotFound() {
    const location = useLocation();
    console.log('location: ', location);

    return <Navigate to={`/not-found?source=${location.pathname}`} />;
}
