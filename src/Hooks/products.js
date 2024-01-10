import axiosSecure from "./axiosSecure"

// Add products 
export const AddProductsPost = async (productdata) => {
  const { addData } = await axiosSecure.post('/products',productdata)
  return addData
}

// Fetch all products from db
export const getAllProducts = async () => {
    const { data } = await axiosSecure('/products')
    return data
}

// Add Cart products
export const addCart = async (cartdata) => {
  const { cart } = await axiosSecure.post('/addcart',cartdata)
  return cart
}
