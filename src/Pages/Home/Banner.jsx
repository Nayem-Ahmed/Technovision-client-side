import React, { useEffect } from 'react';
import banner from '../../assets/banner.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='bg-fixed bg-[#192a56]  p-4 lg:-mt-6 text-white -mt-7'>
      <div className='flex gap-6  md:flex-row flex-col-reverse  items-center p-4'>
        <div className='content md:basis-1/2 mt-8'>
          <h2 data-aos="fade-right" className=' text-4xl mb-2 font-semibold'>Welcome to Our Website</h2>
          <p data-aos="fade-right" className=' text-2xl mb-2'>Discover amazing products<br></br> and services. Join us today!</p>
          <Link to="/products">
            <button data-aos="fade-up"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Let’s Explore
            </button>
          </Link>
        </div>
        <div className='img mt-8'>
          <img className='w-[30rem]' src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;