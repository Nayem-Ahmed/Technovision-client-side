import { useQuery } from 'react-query'
import useAuth from './useAuth'
import { getAllRoleData } from './auth'
 
const useAllRole = () => {
  const { user, loading } = useAuth()
  const { data: roledata,refetch } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getAllRoleData(),
    queryKey: ['roledata'],
  })

  return [roledata,refetch]
}

export default useAllRole;