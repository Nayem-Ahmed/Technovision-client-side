import React, { useEffect, useState } from 'react';
import { deleteproduct, getAllProducts } from '../../Hooks/products';
import { MdUpdate, MdDelete } from "react-icons/md";
import useGetAllProducts from '../../Hooks/useGetAllProducts';
import Swal from 'sweetalert2';

const ManageProducts = () => {
    // const [loading, setLoading] = useState(true);
    // const [manageproducts, setProductsmanage] = useState([]);
    const [getAllProduct, refetch] = useGetAllProducts();

    // useEffect(() => {
    //   setLoading(true);
    //   getAllProducts()
    //     .then(data => {
    //       setProductsmanage(data);
    //       setLoading(false);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching products:', error);
    //       setLoading(false);
    //     });
    // }, []);
    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });
    
            if (result.isConfirmed) {
                await deleteproduct(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
                refetch();
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
    

    return (
        <div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2  border-b">Product Name</th>
                        <th className="py-2  border-b">Products Image</th>
                        <th className="py-2  border-b">Delete</th>
                        <th className="py-2  border-b">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {getAllProduct?.map((product, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{product.productname}</td>
                            <td><img className='w-20' src={product.img} alt="" /></td>
                            <td className="py-2 px-4 border-b"><MdDelete onClick={() => handleDelete(product._id)} className='text-2xl'></MdDelete></td>
                            <td className="py-2 px-4 border-b"><MdUpdate className='text-2xl'></MdUpdate></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;




