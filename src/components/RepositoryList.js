import { View, FlatList, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'

import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  disabled: {
    color: 'gray',
  },
})

const renderRepoItem = ({ item }) => {
  return <RepositoryItem repoItem={item} />
}

const ItemSeparator = () => <View style={styles.separator} />

const SelectMenu = ({ order, setOrder }) => {
  return (
    <Picker
      selectedValue={order}
      onValueChange={(itemValue) => setOrder(itemValue)}
    >
      <Picker.Item
        label='Select an item'
        enabled={false}
        style={styles.disabled}
      />
      <Picker.Item label='Latest repositories...' value='latest' />
      <Picker.Item label='Highest rated repositories' value='highest' />
      <Picker.Item label='Lowest rated repositories' value='least' />
    </Picker>
  )
}

export const RepositoryListContainer = ({ repositories, order, setOrder }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <View>
      <FlatList
        ListHeaderComponent={<SelectMenu order={order} setOrder={setOrder} />}
        data={repositoryNodes}
        renderItem={renderRepoItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  )
}

const RepositoryList = () => {
  const [order, setOrder] = useState('ahmet')
  const { loading, data } = useRepositories(order)

  if (loading) {
    return null
  }

  return (
    <RepositoryListContainer
      repositories={data.repositories}
      order={order}
      setOrder={setOrder}
    />
  )
}

export default RepositoryList
