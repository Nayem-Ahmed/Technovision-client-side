import React from 'react';
import technovision from '../../assets/technovision.png'
import MenuDropdown from './MenuDropdown';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import Headroom from 'react-headroom';

const Navbar = () => {
    return (
        <div>
            <Headroom>
                <div className='flex items-center justify-between px-5 w-full  bg-[#192a56]  z-50 shadow-sm'>
                    <div className='logo'>
                        <Link to='/'><img className='w-28' src={technovision} alt="" /></Link>
                    </div>

                    <div className='flex text-white flex-col md:flex-row lg:flex-row cursor-pointer '>
                        <NavLink
                            to='/'
                            className='nav lg:px-4 lg:py-3   transition font-semibold'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/products'
                            className='nav lg:px-4 lg:py-3  transition font-semibold'
                        >
                            Products
                        </NavLink>

                    </div>
                    <div className='button'>
                        <MenuDropdown></MenuDropdown>
                    </div>
                </div>

            </Headroom>

        </div>
    );
};

export default Navbar;