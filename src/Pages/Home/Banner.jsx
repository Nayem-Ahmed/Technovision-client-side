import React from 'react';
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='flex gap-6   md:flex-row flex-col-reverse  items-center p-4'>
            <div className='content md:basis-1/2'>
                <h2 className='text-3xl'>Welcome to Our Website</h2>
                <p className='text-2xl mb-2'>Discover amazing products<br></br> and services. Join us today!</p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Click me
                </button>
            </div>
            <div className='img'>
                <img className='w-[30rem]' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;