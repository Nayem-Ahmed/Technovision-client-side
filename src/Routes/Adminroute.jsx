import React from 'react';
import useRole from '../Hooks/useRole';
 
import Loader from '../Pages/Loader';
import { Navigate } from 'react-router-dom';

const Adminroute = ({children}) => {
    const [role,loading] = useRole()
    if (loading) return <Loader></Loader>;
    if (role && role === "admin") return children;

    return <Navigate  to='/dashboard'></Navigate>
};

export default Adminroute;