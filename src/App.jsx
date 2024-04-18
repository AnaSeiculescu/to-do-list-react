import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/pages/login-page/LoginPage';
import { HomePage } from './components/pages/home-page/HomePage';
import AuthProvider from './components/pages/login-page/AuthProvider';
import { PrivateRoute } from './components/pages/login-page/PrivateRoute';
import { NotFoundPage } from './components/pages/not-found-page/NotFoundPage';
import { RedirectToNotFound } from './components/pages/not-found-page/RedirectToNotFound';
import { RegistrationPage } from './components/pages/login-page/RegistrationPage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" Component={LoginPage} />
                        <Route path="/register" Component={RegistrationPage} />
                        <Route element={<PrivateRoute />}>
                            <Route path="/home-page" Component={HomePage} />
                        </Route>
                        <Route path="/not-found" Component={NotFoundPage} />
                        {/* <Route path="/*" element={<Navigate to="/not-found" />} /> */}
                        <Route path="/*" Component={RedirectToNotFound} />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
