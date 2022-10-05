import { View, FlatList, StyleSheet } from 'react-native'
import Statistic from './Statictis'

const styles = StyleSheet.create({
  article: {
    padding: 10,
  },

  flatList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 1,
  },
})

const renderStat = ({ item }) => {
  return <Statistic stat={item} />
}

const StatList = ({ stats }) => {
  return (
    <View style={styles.article}>
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal
        data={stats}
        renderItem={renderStat}
        keyExtractor={(item) => item.label}
      />
    </View>
  )
}

export default StatList
