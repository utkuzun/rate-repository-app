import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  infoHead: {
    fontWeight: theme.fontWeights.bold,
  },
})

const Statistic = ({ stat }) => {
  const { label, result } = stat
  return (
    <View>
      <Text style={styles.infoHead}>{result}</Text>
      <Text>{label}</Text>
    </View>
  )
}

export default Statistic
