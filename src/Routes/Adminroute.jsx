import React from 'react';

import Loader from '../Pages/Loader';
import { Navigate } from 'react-router-dom';
import useRole from '../Hooks/useRole';

const Adminroute = ({children}) => {
    const [role,loading] = useRole()
    console.log(role);

    if (loading) return <Loader></Loader>;
    if (role && role[0]?.role === "admin") return children;

    return <Navigate  to='/dashboard'></Navigate>
};

export default Adminroute;