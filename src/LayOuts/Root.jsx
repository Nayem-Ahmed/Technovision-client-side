import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto"'>
            <Navbar></Navbar>
            <div className='pt-6 min-h-[calc(100vh-58px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;