import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { getAllProducts } from "../../Hooks/products";
import { Link } from "react-router-dom";

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts()
            .then(data => {
                setProducts(data);

            })
            .catch(error => {
                console.error('Error fetching products:', error);

            });
    }, []);

    // Display only the first 6 products
    const displayedProducts = products.slice(0, 6);
    return (
        <div className="mt-5 p-4">
            <h1 className="text-3xl text-center font-semibold my-5  mb-8"><span className="text-red-500 border-b-4 border-indigo-700">Featured </span><span className="border-b-4 border-indigo-700">Products</span></h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                {
                    displayedProducts.map(product => (
                        <ProductsCard key={product._id} products={product} />
                    ))
                }
            </div>
            <div className="mx-auto text-center block">
                <Link to='/products'>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        All Products
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default HomeProducts;