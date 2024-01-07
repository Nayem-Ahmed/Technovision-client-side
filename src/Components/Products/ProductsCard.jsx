import React from 'react';
import { FaHeart } from "react-icons/fa";



const ProductsCard = ({products}) => {
    return (
        <div className='col-span-1 cursor-pointer group'>
        <div className='flex flex-col gap-2 w-full'>
            <div className=' aspect-square  w-full  relative  overflow-hidden  rounded-xl ' >
                <img className=' object-cover  h-full  w-full  group-hover:scale-110  transition ' src={products.img} alt='Products' />
                <div className=' absolute top-3 right-3'>
                   <FaHeart className='text-red-500'></FaHeart>  
                </div>
            </div>
            <div className='font-semibold text-lg'>{products.productname}</div>
            <div className='font-light text-neutral-500'>
                5 nights . June 19 - 26
            </div>
            <div className='flex flex-row items-center justify-between gap-1'>
                <div className='font-semibold'>${products.price}</div>
                <div className='font-light'>{products.rating}</div>
            </div>
        </div>
    </div>
    );
};

export default ProductsCard;