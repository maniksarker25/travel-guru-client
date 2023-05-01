import React, { useContext } from 'react';
import './Main.css'
import  bgImg from '../assets/Rectangle 1.png'
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import { styleContext } from '../Provider/StyleProvider/StyleProvider';

const Main = () => {
    // const {setA} = useContext(styleContext)
    // setA('okey')
    return (
        <div className='main'>
            <Header style={'white'}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;