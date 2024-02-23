import React from 'react';
import w from '../../assets/w1.png'
import { FaBell,FaCamera  } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaWifi } from "react-icons/fa6";


const About = () => {
    return (
        <div className='mt-28 my-8 p-5 bg-gray-100'>
            <h1 className='text-center text-3xl font-semibold mb-3'>About The Product</h1>
            <p className='max-w-xl text-center mx-auto text-gray-500 my-5 mb-8'>Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>

            <div className='flex gap-5 flex-col md:flex-row justify-between mt-8'>
                <div className=''>
                    <div className='flex gap-6 mb-8'>
                        <div>
                            <FaBell className='text-4xl text-red-500'></FaBell>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>GPS System Tracking</h1>
                            <p className='text-gray-400'>For though result and talent add are parish valley.<br></br> Songs in oh other avoid it hours woman style.</p>
                        </div>
                    </div>
                    <div className='flex gap-6 mb-8'>
                        <div>
                            <BiMessageRoundedDetail className='text-4xl text-red-500'></BiMessageRoundedDetail>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>WiFi Data Sync</h1>
                            <p className='text-gray-400'>For though result and talent add are parish valley.<br></br> Songs in oh other avoid it hours woman style.</p>
                        </div>
                    </div>
                    <div className='flex gap-6 mb-8'>
                        <div>
                            <FaCamera  className='text-4xl text-red-500'></FaCamera >
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Blood Pressure Management</h1>
                            <p className='text-gray-400'>For though result and talent add are parish valley.<br></br> Songs in oh other avoid it hours woman style.</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <FaWifi className='text-4xl text-red-500'></FaWifi>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Weather Update</h1>
                            <p className='text-gray-400'>For though result and talent add are parish valley.<br></br> Songs in oh other avoid it hours woman style.</p>
                        </div>
                    </div>

                </div>

                <div>
                    <img className='w-96' src={w} alt="" />
                </div>
            </div>


        </div>
    );
};

export default About;