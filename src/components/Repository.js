import { useParams } from 'react-router-native'
import RepositoryItemContainer from './RepositoryItemContainer'
import useRepository from '../hooks/useRepository'

const Repository = () => {
  const { id } = useParams()
  const { loading, repoItem } = useRepository({ id })

  if (loading) {
    return null
  }

  return <RepositoryItemContainer repoItem={repoItem} showUrl={true} />
}

export default Repository
