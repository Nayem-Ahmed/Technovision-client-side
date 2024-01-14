import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../Hooks/products';
import { MdUpdate,MdDelete } from "react-icons/md";

const ManageProducts = () => {
    const [loading, setLoading] = useState(true);
    const [manageproducts, setProductsmanage] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      getAllProducts()
        .then(data => {
          setProductsmanage(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    }, []);

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
                    {manageproducts.map((product, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{product.productname}</td>
                            <td><img className='w-20' src={product.img} alt="" /></td>
                            <td className="py-2 px-4 border-b"><MdDelete></MdDelete></td>
                            <td className="py-2 px-4 border-b"><MdUpdate></MdUpdate></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;