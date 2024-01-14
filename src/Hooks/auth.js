import axiosSecure from "./axiosSecure"

// Save user data in database
export const saveUser = async (user) => {
    const currentUser = {
      email: user?.email,
      role: 'user',
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
  
    return data
  }
  // get users roll
  export const getRoll = async (email) => {
    const { data } = await axiosSecure(`/userrole/${email}`)
    return data
  }
  
