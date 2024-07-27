import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import React from 'react';

function RoutesComponent() {
    const isAuthenticated = true;

    function loginRedirect() {
        if (isAuthenticated) {
            return <Navigate to='/home' replace />;
        }
        return <Login />;
    }

    return (
        <Routes>
            <Route path='/login' element={loginRedirect()} />
            {isAuthenticated ? (
                <>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                </>
            ) : (
                <Route path='*' element={<Navigate replace to='/login' />} />
            )}
        </Routes>
    );
}

export default RoutesComponent;