import axiosSecure from "./axiosSecure"

// Fetch all rooms from db
export const getAllProducts = async () => {
    const { data } = await axiosSecure('/products')
    return data
  }

// Add Cart products
export const addCart = async (cartdata) => {
  const { cart } = await axiosSecure.post('/addcart',cartdata)
  return cart
}
