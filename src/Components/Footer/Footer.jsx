import React from 'react';
import { NavLink } from 'react-router-dom';
import flogo from '../../assets/technovision.png'

const Footer = () => {
    return (
        <div className='bg-[#2c3e50] text-white p-5'>
            <div className='flex mx-auto text-center border-b-2 items-center justify-between flex-col md:flex-row lg:flex-row cursor-pointer '>
                <img className='w-44' src={flogo} alt="" />
                <div>
                    <NavLink
                        to='/'
                        className=' lg:px-4 lg:py-3 hover:text-red-500   transition font-semibold'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/products'
                        className=' lg:px-4 lg:py-3 hover:text-red-500 transition font-semibold'
                    >
                        Products
                    </NavLink>
                </div>
            </div>

            <div className='text-center mt-3'>
                <p>&copy; 2024 - All rights reserved by <span className='font-semibold'>Technovision Inc</span></p>
            </div>
        </div>
    );
};

export default Footer;