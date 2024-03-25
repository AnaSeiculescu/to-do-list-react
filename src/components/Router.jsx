import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import AuthProvider from './login-page/AuthProvider';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LoginPage />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="/" element={<AuthProvider />} />
            <Route path="homepage" element={<AuthProvider />} />
        </>
    )
);

export function Router() {
    return <RouterProvider router={router}>{/* <App /> */}</RouterProvider>;
}
