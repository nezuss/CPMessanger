import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

//? Pages
//! User
import Login from './Pages/User/Login';
import Register from './Pages/User/Register';
import Main from './Pages/User/Main';
//! Admin
import Dashboard from './Pages/Admin/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="user/*" element={
                    <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="main/" element={<Main />} />
                        <Route path="main/:id" element={<Main />} />
                    </Routes>
                } />
                <Route path="admin/*" element={
                    <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                    </Routes>
                } />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
