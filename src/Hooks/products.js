import axiosSecure from "./axiosSecure"

// Fetch all rooms from db
export const getAllProducts = async () => {
    const { data } = await axiosSecure('/products')
    return data
  }