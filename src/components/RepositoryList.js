import { View, FlatList, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'

// import useRepositories from '../hooks/useRepositories'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const renderRepoItem = ({ item }) => {
  return <RepositoryItem repoItem={item} />
}

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  // const reposUrl = 'http://192.168.97.39:5000/api/repositories'

  // const { repositories } = useRepositories(reposUrl)

  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  if (loading) {
    return null
  }

  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : []

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        renderItem={renderRepoItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  )
}

export default RepositoryList
