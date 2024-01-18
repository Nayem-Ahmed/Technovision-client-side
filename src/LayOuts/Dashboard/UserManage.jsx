import React from 'react';
import useAllRole from '../../Hooks/useAllRole';
import { patchData } from '../../Hooks/auth';

const UserManage = () => {
    const [roledata, refetch] = useAllRole();
    const handleAdmin = async (id) => {
        try {
            await patchData(id);
            refetch();
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };
    

    return (
        <div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2  border-b">User id</th>
                        <th className="py-2  border-b">User Email</th>
                        <th className="py-2  border-b">User Role</th>
                        <th className="py-2  border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {roledata?.map((userrole, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{userrole._id}</td>
                            <td className="py-2 px-4 border-b">{userrole.email}</td>
                            <td className="py-2 px-4 border-b">{userrole.role.toUpperCase()}</td>
                            <td className="py-2 px-4 border-b">
                                {userrole.role === "admin" ? (
                                    <span className='text-green-500'>Admin</span>
                                ) : (
                                    <button onClick={() => handleAdmin(userrole._id)} className='bg-blue-600 text-white p-1 rounded-lg' type='btn'>
                                        Add admin
                                    </button>
                                )}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManage;