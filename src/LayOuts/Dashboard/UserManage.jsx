import React from 'react';
import useAllRole from '../../Hooks/useAllRole';

const UserManage = () => {
    const [roledata, refetch] =  useAllRole();
    console.log(roledata);

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
                        <td className="py-2 px-4 border-b"><button className='bg-lime-300 text-white p-1 rounded-lg' type='btn'>Add admin</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default UserManage;