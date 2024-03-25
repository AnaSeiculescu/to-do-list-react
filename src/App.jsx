import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/login-page/LoginPage';
import { HomePage } from './components/HomePage';
import AuthProvider from './components/login-page/AuthProvider';
import PrivateRoute from './components/login-page/PrivateRoute';

function App() {
    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/login/*" Component={LoginPage} />
                        <Route element={<PrivateRoute />}>
                            <Route path="/home-page" Component={HomePage} />
                        </Route>
                        <Route path="/*" Component={LoginPage} />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
