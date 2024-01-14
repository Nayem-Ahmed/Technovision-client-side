import { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import useAuth from '../../Hooks/useAuth'
// logo
import logo from '../../assets/technovision.png'

// Icons

import { AiOutlineBars } from 'react-icons/ai'
import { CgProfile } from "react-icons/cg";
import { IoBagAddSharp, IoHomeSharp } from "react-icons/io5";
import { MdManageAccounts, MdAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom'
import { getRoll } from '../../Hooks/auth'




const Sidebar = () => {
    const { user } = useAuth();
    const [cartData, setCartData] = useState();
    const [isActive, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!isActive)
    }


    useEffect(() => {
        const fetchCartData = async () => {
            if (user?.email) {
                const data = await getRoll(user?.email);
                setCartData(data[0]);
            }
        };

        fetchCartData();
    }, [user?.email]);
    console.log(cartData?.role);



    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <h2>Technovision Inc</h2>

                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-100 mx-auto'>
                            {/* <Logo /> */}
                            <img className='w-10' src={logo} alt="" />Technovision Inc.
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>

                        <nav>
                            {
                                cartData?.role === 'admin' && <>
                                    <MenuItem
                                        icon={IoBagAddSharp}
                                        label='Add Products'
                                        address='/dashboard/addproducts'
                                    />
                                    <MenuItem
                                        icon={MdManageAccounts}
                                        label='Manage Products'
                                        address='/dashboard/manage'
                                    />
                                </>
                            }
                            <MenuItem
                                icon={MdAddShoppingCart}
                                label='My Carts'
                                address='/dashboard/mycarts'
                            />
                        </nav>

                    </div>
                </div>
                <div>
                    <hr />
                    <MenuItem
                        icon={CgProfile}
                        label='Profile'
                        address='/dashboard/profile'
                    />
                    <Link to='/'>
                        <button
                            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                        >
                            <IoHomeSharp className='w-5 h-5' />

                            <p className='mx-4 font-medium'>Go Home</p>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar
