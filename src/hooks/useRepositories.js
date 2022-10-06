import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (order) => {
  // const [loading, setLoading] = useState(false)
  // const [repositories, setRepositories] = useState([])

  // const fetchRepositories = async () => {
  //   setLoading(true)

  //   const response = await fetch(url)
  //   const json = await response.json()
  //   setRepositories(json)
  // }

  // useEffect(() => {
  //   fetchRepositories()
  // }, [])

  let variables = {
    orderDirection: 'DESC',
    orderBy: 'CREATED_AT',
  }

  if (order === 'latest') {
    variables = { orderDirection: 'DESC', orderBy: 'CREATED_AT' }
  }
  if (order === 'highest') {
    variables = { orderDirection: 'DESC', orderBy: 'RATING_AVERAGE' }
  }
  if (order === 'least') {
    variables = { orderDirection: 'ASC', orderBy: 'RATING_AVERAGE' }
  }

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  })

  return { loading, data }
}

export default useRepositories
