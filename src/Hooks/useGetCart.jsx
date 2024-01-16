
import { useQuery } from 'react-query';
import { getAddCart } from './products';
 
const useGetCart = () => {
  const { data: getCart, refetch } = useQuery('getCart', getAddCart);

  return [getCart, refetch];
};

export default useGetCart;
