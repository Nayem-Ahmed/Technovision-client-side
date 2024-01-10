import React from 'react';
import { useForm } from 'react-hook-form';
import { IoMdAttach } from 'react-icons/io';
import { imgUpload } from '../../Hooks/imgbb';
import { toast } from 'react-toastify';
import { AddProductsPost } from '../../Hooks/products';
 ;
const AddProducts = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Your form submission logic goes here
            console.log(data);

            // Assuming imgUpload is a function that handles image upload
            const imgData = await imgUpload(data.photo[0]);
            const img = imgData.data.display_url;
            console.log(img);
            // save products data in Database
            const sendProducts = await AddProductsPost([{ img,brandname: data.brandname ,productname:data.productname,price:data.price,rating:data.rating,description:data.description}])
            console.log(sendProducts)


             toast(' Add Products successfull')
            //  navigate('/')



        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen mt-20">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Add Products</h2>

                {/* Brand Name and Product Name Side by Side */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Brand Name Input */}
                    <div>
                        <label htmlFor="brandname" className="block text-gray-700 text-sm font-bold mb-2">
                            Brand Name
                        </label>
                        <input
                            type="text"
                            id="brandname"
                            {...register('brandname', { required: 'Brand Name is required' })}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.brandName ? 'border-red-500' : ''}`}
                        />
                        {errors.brandName && <p className="text-red-500 text-xs italic">{errors.brandName.message}</p>}
                    </div>

                    {/* Product Name Input */}
                    <div>
                        <label htmlFor="productname" className="block text-gray-700 text-sm font-bold mb-2">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="productname"
                            {...register('productname', { required: 'Product Name is required' })}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productName ? 'border-red-500' : ''}`}
                        />
                        {errors.productName && <p className="text-red-500 text-xs italic">{errors.productName.message}</p>}
                    </div>
                </div>
                {/* Price Input */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        {...register('price', { required: 'Price is required' })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.price ? 'border-red-500' : ''}`}
                    />
                    {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
                </div>

                {/* Rating Input */}
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
                        Rating
                    </label>
                    <input
                        type="number"
                        id="rating"
                        {...register('rating', { required: 'Rating is required' })}
                        step="any"  // Allow decimal numbers
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.rating ? 'border-red-500' : ''}`}
                    />
                    {errors.rating && <p className="text-red-500 text-xs italic">{errors.rating.message}</p>}
                </div>

                {/* Description Input */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        {...register('description', { required: 'Description is required' })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''}`}
                    />
                    {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
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
                {/* Sign In Button */}
                <div className="mb-6">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Product
                    </button>
                </div>



            </form>
        </div>
    );
};

export default AddProducts;
