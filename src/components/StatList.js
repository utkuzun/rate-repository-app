import { View, FlatList, StyleSheet } from 'react-native'
import Statistic from './Statictis'

const styles = StyleSheet.create({
  article: {
    flexDirection: 'row',
    padding: 10,
  },

  justifyEvenly: {
    justifyContent: 'space-around',
  },
})

const renderStat = ({ item }) => {
  return <Statistic stat={item} />
}

const StatList = ({ stats }) => {
  return (
    <View>
      <FlatList
        style={[styles.article, styles.justifyEvenly]}
        data={stats}
        renderItem={renderStat}
        keyExtractor={(item) => item.label}
      />
    </View>
  )
}

export default StatList
