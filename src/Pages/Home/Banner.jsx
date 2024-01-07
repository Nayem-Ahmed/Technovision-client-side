import React from 'react';
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
      <div className='bg-fixed bg-[#192a56]  p-4 lg:-mt-6 text-white -mt-7'>
          <div className='flex gap-6  md:flex-row flex-col-reverse  items-center p-4'>
            <div className='content md:basis-1/2 mt-8'>
                <h2 className=' text-4xl mb-2 font-semibold'>Welcome to Our Website</h2>
                <p className=' text-2xl mb-2'>Discover amazing products<br></br> and services. Join us today!</p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Click me
                </button>
            </div>
            <div className='img mt-8'>
                <img className='w-[30rem]' src={banner} alt="" />
            </div>
        </div>
      </div>
    );
};

export default Banner;