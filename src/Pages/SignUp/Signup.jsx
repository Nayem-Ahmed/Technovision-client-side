import React from 'react';
import { useForm } from 'react-hook-form';
import { IoMdPerson, IoMdMail, IoMdLock, IoMdAttach } from 'react-icons/io';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { imgUpload } from '../../Hooks/imgbb';

const Signup = () => {
    const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Your form submission logic goes here
            console.log(data);

            // Create user
            const { user } = await createUser(data.email, data.password);

            // Assuming imgUpload is a function that handles image upload
            const imageData = await imgUpload(data.photo[0]);
            console.log(imageData);

            // Update user profile with additional data (name, photo, etc.)
            await updateUserProfile(data.name,imageData?.data?.url);

            // save user data in Database

             // get token

             toast('Sign Up successfull')
             navigate('/')
             

            console.log('Registration successful!', user);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            // Additional logic or redirection after Google sign-in
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center my-16 h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                {/* Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdPerson className="inline mr-2" />
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">This field is required</p>}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdMail className="inline mr-2" />
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">Please enter a valid email address</p>
                    )}
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdLock className="inline mr-2" />
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder='*****'
                        {...register("password", { required: true, minLength: 6 })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs italic">Password must be at least 6 characters</p>
                    )}
                </div>

                {/* Photo Input */}
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdAttach className="inline mr-2" />
                        Photo
                    </label>
                    <input
                        type="file"
                        id="photo"
                        {...register("photo")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Sign Up
                    </button>
                </div>
                <div className='  text-center block'><span className='text-xl'>----------------- or ----------------</span></div>
                {/* Continue with Google Button */}
                <div className="mb-6">
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                        onClick={() => handleGoogleSignIn()}
                    >
                        <FcGoogle className="mr-2" />
                        Continue with Google
                    </button>
                </div>
                <p>Already have an account? <Link className='hover:underline text-blue-500' to='/login'>Login in</Link></p>


            </form>
        </div>
    );
};

export default Signup;
