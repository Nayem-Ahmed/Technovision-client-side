import React from 'react';
import { getAllProducts } from './products';
import { useQuery } from 'react-query';

const useGetAllProducts = () => {
  const { data: getAllProduct, refetch } = useQuery('getAllProduct', getAllProducts);

  return [getAllProduct, refetch];
};

export default useGetAllProducts;
