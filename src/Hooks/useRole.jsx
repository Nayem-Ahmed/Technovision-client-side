import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { getRoll } from './auth';

const useRole = () => {
    const { user } = useAuth();
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getRoll(user?.email)
            .then(data => {
                setRole(data[0]?.role);  
            })
            .catch(error => {
                console.error('Error fetching role:', error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [user?.email]);

    return [role, loading];
};

export default useRole;
