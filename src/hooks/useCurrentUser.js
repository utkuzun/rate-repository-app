import { useQuery } from '@apollo/client'
import { CURRENT_USER } from '../graphql/queries'

const useCurrentUser = ({ includeReviews }) => {
  const { data, loading } = useQuery(CURRENT_USER, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  })

  return { loading, data }
}

export default useCurrentUser
