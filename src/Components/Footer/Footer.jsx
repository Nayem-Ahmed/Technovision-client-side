import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-50 p-10'>
            <div className='flex mx-auto text-center items-center justify-center flex-col md:flex-row lg:flex-row cursor-pointer '>
                <NavLink
                    to='/'
                    className=' lg:px-4 lg:py-3 hover:bg-neutral-100 transition font-semibold'
                >
                    Home
                </NavLink>
                <NavLink
                    to='/products'
                    className=' lg:px-4 lg:py-3 hover:bg-neutral-100 transition font-semibold'
                >
                    Products
                </NavLink>
            </div>

            <div className='text-center'>
                <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;