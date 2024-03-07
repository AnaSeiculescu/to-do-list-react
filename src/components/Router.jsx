// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter as Router } from 'react-router-dom';

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

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
