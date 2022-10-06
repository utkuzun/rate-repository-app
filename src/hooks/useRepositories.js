import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ order, search, first }) => {
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

  variables = { ...variables, searchKeyword: search, first }

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { ...variables },
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }
    console.log('in fethc')

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    loading,
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
  }
}

export default useRepositories
