import React, { useEffect, useState } from 'react';
import { getRoll } from '../../Hooks/auth';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    const [cartData, setCartData] = useState();

    useEffect(() => {
        const fetchCartData = async () => {
            if (user?.email) {
                const data = await getRoll(user?.email);
                setCartData(data[0]);
            }
        };

        fetchCartData();
    }, [user?.email]);
    console.log(cartData);
    return (
        <div>
              <div>
            {cartData && (
                <p>User Role: {cartData.role}</p>
                // Assuming your role data is stored in a property called 'role'
            )}
        </div>
            
        </div>
    );
};

export default Profile;