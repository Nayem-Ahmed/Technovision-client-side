import axiosSecure from "./axiosSecure"

// Add products (post) databse
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

// Get Cart products by params
export const getAddCart = async (email) => {
  //  const { data } = await axiosSecure(`/addcart?email=${email}`)
  const { data } = await axiosSecure(`/addcart/${email}`)
  return data
}

//Delete products
export const deleteproduct = async (deleteproid) => {
  const { deletedata } = await axiosSecure.delete(`/products/${deleteproid}`)
  return deletedata;
}
//Delete Cart
export const deleteCart = async (deletecartid) => {
  const { deletecart} = await axiosSecure.delete(`/addcart/${deletecartid}`)
  return deletecart;
}
