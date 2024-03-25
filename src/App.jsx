import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/login-page/LoginPage';
import { HomePage } from './components/HomePage';
// import CssBaseline from '@mui/material/CssBaseline';

function App() {
    return (
        <BrowserRouter>
            {/* <div style={{ height: 200, width: 200, background: 'blue' }}></div> */}
            <Routes>
                <Route path="/login/*" Component={LoginPage} />
                <Route path="/home-page" Component={HomePage} />
                <Route path="/*" Component={LoginPage} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
