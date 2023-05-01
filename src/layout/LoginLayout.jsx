import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Header style={'black'}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;