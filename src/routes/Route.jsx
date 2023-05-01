import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Destination from '../pages/shared/Destination';
import LoginLayout from '../layout/LoginLayout';
import Login from '../pages/Login/Login';
import Booking from '../pages/Booking/Booking';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'destination',
                element:<Destination></Destination>
            },
            {
                path:'booking',
                element:<Booking></Booking>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    },
    {
        path:'login',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;