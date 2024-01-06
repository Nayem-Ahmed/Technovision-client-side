import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../Hooks/products';
import Loader from './Loader';
 
 
const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getAllProducts()
      .then(data => {
        // Handle the fetched data (e.g., set it to state)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return  <Loader></Loader>;

  return (
    <div className='p-4'>
      {/* Display your products here */}
    </div>
  );
};

export default Products;
