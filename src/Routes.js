import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PasswordCreaterFile from './components/PasswordCreaterFile';
import MyAllPassFiles from './components/MyAllPassFiles';

const AppRoutes = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/createPasswordDocument" element={<PasswordCreaterFile />} />                    
                    <Route path="/MyAllPassFiles" element={<MyAllPassFiles />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRoutes;
