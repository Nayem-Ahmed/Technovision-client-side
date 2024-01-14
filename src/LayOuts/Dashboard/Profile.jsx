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
    console.log(user);
    return (
        <div>
              <div>

                <p>User Role: {cartData?.role}</p>
                <p>User Role: {cartData?.email}</p>
                <img className='w-24' src={user?.photoURL} alt="" />
       
        </div>
            
        </div>
    );
};

export default Profile;