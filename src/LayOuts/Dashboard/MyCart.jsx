import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { getAddCart } from '../../Hooks/products';

const MyCart = () => {
    const { user } = useAuth();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const fetchCartData = async () => {
            if (user?.email) {
                const data = await getAddCart(user?.email);
                setCartData(data);
            }
        };

        fetchCartData();
    }, [user?.email]);

    return (
        <div>
            {/* Display your cart data here using the 'cartData' state */}
            {cartData.map(item => (
                <div key={item._id}>
                    <p>{item.productName}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default MyCart;
