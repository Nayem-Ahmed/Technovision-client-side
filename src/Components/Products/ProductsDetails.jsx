import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ProductsDetails = () => {
    const productsDetails = useLoaderData();
    return (
        <div className='my-10 p-4'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='aspect-w-3 aspect-h-4 w-64 md:w-96 relative overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full h-full transition-transform transform hover:scale-105'
                    src={productsDetails.img}
                    alt='Product'
                />
                <div className='absolute top-3 right-3'>
                    <FaHeart className='text-red-500' />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='font-semibold text-2xl mb-2'>{productsDetails.productname}</div>
                <div className=' text-xl mb-2'>Brand name: {productsDetails.brandname}</div>
                <div className='font-light text-neutral-500 mb-2'>
                    5 nights . June 19 - 26
                </div>
                <div className='flex flex-row items-center justify-between mb-2'>
                    <div className='font-semibold text-xl'>Price: ${productsDetails.price}</div>
                    <div>
                        <Rating value={productsDetails.rating} style={{ maxWidth: 180 }} readOnly />
                    </div>
                </div>
                <div className='mb-5 text-lg text-neutral-500'>${productsDetails.description}</div>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='button'
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>

    );
};

export default ProductsDetails;