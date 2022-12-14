import { View, StyleSheet, FlatList } from 'react-native'
import useCurrentUser from '../hooks/useCurrentUser'

import Review from './Review'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const MyReviewsContainer = ({ reviewNodes, refetch }) => {
  const renderItem = ({ item }) => {
    return (
      <Review
        review={item.node}
        repository={item.node.repository}
        refetch={refetch}
      />
    )
  }

  return (
    <View>
      <FlatList
        data={reviewNodes}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  )
}

const MyReviews = () => {
  const { loading, data, refetch } = useCurrentUser({ includeReviews: true })

  if (loading) {
    return null
  }

  return (
    <MyReviewsContainer reviewNodes={data.me.reviews.edges} refetch={refetch} />
  )
}

export default MyReviews
