import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { getAddCart } from '../../Hooks/products';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import { RiDeleteBin6Line } from "react-icons/ri";
import useRole from '../../Hooks/useRole';


const MyCart = () => {
    const { user } = useAuth();
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        const fetchCartData = async () => {
            if (user?.email) {
                const data = await getAddCart(user?.email);
                setCartData(data);
            }
        };

        fetchCartData();
    }, [user?.email]);

    return (
        <div className="cart-items">
                {cartData.map(item => (
                        <div key={item._id} className='my-10 p-4 shadow-md rounded-md'>
                        <div className='flex flex-col md:flex-row gap-8 items-center'>
                            <div className='  relative overflow-hidden rounded-xl'>
                                <img
                                    className='object-cover w-40 transition-transform transform hover:scale-105'
                                    src={item.img}
                                    alt='Product'
                                />
                                <div className='absolute top-3 right-3'>
                                    <FaHeart className='text-red-500' />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='font-semibold text-xl mb-2'>{item.productname}</div>
                                <div className=' text-xl mb-2'>Brand name: {item.brandname}</div>
                    
                                <div className='flex flex-row items-center justify-between mb-2'>
                                    <div className='font-semibold  '>Price: ${item.price}</div>
                                    <div>
                                        <Rating value={item.rating} style={{ maxWidth: 150 }} readOnly />
                                        <RiDeleteBin6Line className='mt-6 text-2xl'></RiDeleteBin6Line>                                        
                                    </div>
                                </div>
                               

                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default MyCart;
