import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = ({ id, first }) => {
  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id, first },
    fetchPolicy: 'cache-and-network',
  })

  const handleFetchMore = () => {
    const canRefetch = !loading && data?.repository.reviews.pageInfo.hasNextPage
    if (!canRefetch) {
      return
    }

    fetchMore({
      variables: {
        id,
        first,
        after: data.repository.reviews.edges.cursor,
      },
    })
  }

  return {
    repoItem: data ? data.repository : undefined,
    loading,
    handleFetchMore,
  }
}

export default useRepository
