import React from 'react';

import technovision from '../../assets/technovision.png'
import MenuDropdown from './MenuDropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex  items-center justify-between px-5  w-full bg-white z-10 shadow-sm'>
            <div className='logo'>
                <Link to='/'><img className='w-24' src={technovision} alt="" /></Link>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row cursor-pointer '>
                <Link
                    to='/'
                    className=' lg:px-4 lg:py-3 hover:bg-neutral-100 transition font-semibold'
                >
                    Home
                </Link>
                <Link
                    to='/products'
                    className=' lg:px-4 lg:py-3 hover:bg-neutral-100 transition font-semibold'
                >
                    Products
                </Link>
 
            </div>
            <div className='button'>
                <MenuDropdown></MenuDropdown>
            </div>
        </div>
    );
};

export default Navbar;