import { Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'

import RepositoryItemContainer from './RepositoryItemContainer'

const RepositoryItem = ({ repoItem }) => {
  const navigate = useNavigate()

  return (
    <Pressable onPress={() => navigate(`/repositories/${repoItem.id}`)}>
      <RepositoryItemContainer repoItem={repoItem} showUrl={false} />
    </Pressable>
  )
}

export default RepositoryItem
