import { View, FlatList, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { Picker } from '@react-native-picker/picker'
import { Searchbar } from 'react-native-paper'
import { useDebounce } from 'use-debounce'

import { useState } from 'react'

import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  disabled: {
    color: 'gray',
  },

  searchInput: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
})

const renderRepoItem = ({ item }) => {
  return <RepositoryItem repoItem={item} />
}

const ItemSeparator = () => <View style={styles.separator} />

const SelectMenu = ({ order, setOrder, search, setSearch }) => {
  return (
    <>
      <Searchbar
        placeholder='Search'
        onChangeText={(query) => setSearch(query)}
        value={search}
        style={styles.searchInput}
      />
      <Picker
        selectedValue={order}
        onValueChange={(itemValue) => setOrder(itemValue)}
        style={styles.searchInput}
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
    </>
  )
}

export const RepositoryListContainer = ({
  setSearch,
  search,
  repositories,
  order,
  setOrder,
  onEndReached,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <SelectMenu
            search={search}
            setSearch={setSearch}
            order={order}
            setOrder={setOrder}
          />
        }
        data={repositoryNodes}
        renderItem={renderRepoItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

const RepositoryList = () => {
  const [order, setOrder] = useState('latest')
  const [search, setSearch] = useState('')
  const [searchDebounced] = useDebounce(search, 500)

  const { loading, repositories, fetchMore } = useRepositories({
    order,
    search: searchDebounced,
    first: 8,
  })

  const onEndReached = () => {
    fetchMore()
  }

  if (loading) {
    return null
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      search={search}
      setSearch={setSearch}
      onEndReached={onEndReached}
    />
  )
}

export default RepositoryList
