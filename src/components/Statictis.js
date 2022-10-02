import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  infoHead: {
    fontWeight: theme.fontWeights.bold,
  },
})

const Statistic = ({ stat }) => {
  const { label, result } = stat

  const parseResult = (number) => {
    const letters = ['', 'k', 'm', 'b']
    let letterIndex = 0

    while (number > 1000) {
      number = number / 1000
      letterIndex += 1
    }

    const numberParsed = letterIndex > 0 ? number.toFixed(1) : number

    return { multiplier: letters[letterIndex], numberParsed }
  }

  const { multiplier, numberParsed } = parseResult(result)

  return (
    <View style={styles.container}>
      <Text style={styles.infoHead}>
        {numberParsed}
        {multiplier !== '' && multiplier}
      </Text>
      <Text>{label}</Text>
    </View>
  )
}

export default Statistic
