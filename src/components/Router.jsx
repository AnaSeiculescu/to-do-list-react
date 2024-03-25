import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LoginPage />} />
            <Route path="homepage" element={<HomePage />} />
        </>
    )
);

export function Router() {
    return <RouterProvider router={router}>{/* <App /> */}</RouterProvider>;
}
