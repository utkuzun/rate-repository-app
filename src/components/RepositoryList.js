import { View, FlatList, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const renderRepoItem = ({ item }) => {
  //   const { ownerAvatarUrl, ...selectedItems } = item

  return <RepositoryItem repoItem={item} />
}

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = ({ repositories }) => {
  return (
    <View>
      <FlatList
        data={repositories}
        renderItem={renderRepoItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  )
}

export default RepositoryList
