import { useParams } from 'react-router-native'
import { StyleSheet, View, FlatList } from 'react-native'

import RepositoryItemContainer from './RepositoryItemContainer'
import useRepository from '../hooks/useRepository'
import Review from './Review'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const renderItem = ({ item }) => {
  return <Review review={item.node} />
}

const Repository = () => {
  const { id } = useParams()
  const { loading, repoItem, handleFetchMore } = useRepository({ id, first: 2 })

  if (loading) {
    return null
  }

  const onEndReached = () => {
    console.log('review end reached')
    handleFetchMore()
  }

  return (
    <FlatList
      data={repoItem.reviews.edges}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.node.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <RepositoryItemContainer repoItem={repoItem} showUrl={true} />
      }
    />
  )
}

export default Repository
