// import React, { useEffect, useState } from 'react';
// import { getAllProducts } from '../Hooks/products';
// import Loader from './Loader';
// import ProductsCard from '../Components/Products/ProductsCard';

// const Products = () => {
//     const [loading, setLoading] = useState(true);
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         setLoading(true);

//         getAllProducts()
//             .then(data => {
//                 // Assuming data is an array of products
//                 setProducts(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching products:', error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <Loader />;

//     return (
//         <div>
            

//         <div className='pt-12 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
//             {products.map(products => (
//                 <ProductsCard key={products._id} products={products} />
//             ))}
//         </div>
//         </div>
//     );
// }

// export default Products;

import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../Hooks/products';
import Loader from './Loader';
import ProductsCard from '../Components/Products/ProductsCard';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);

    getAllProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  // const filteredProducts = products.filter(product =>
  //   product.productname.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  if (loading) return <Loader />;

  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Search products...'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className='mb-6 p-2 mt-12 bg-gray-50  border-2 rounded w-3/5 focus:outline-none focus:ring focus:border-blue-300'
      />

      {/* {filteredProducts.length === 0 ? (
        <p className='text-gray-500 text-center'>No products found.</p>
      ) : ( */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          { products.map(product => (
            <ProductsCard key={product._id} products={product} />
          ))}
        </div>
      {/* )} */}
    </div>
  );
};

export default Products;



