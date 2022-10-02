import { View, StyleSheet, Text, Pressable } from 'react-native'
import Constants from 'expo-constants'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: '#24292e',
  },

  text: {
    color: '#fff',
    fontSize: theme.fontSizes.subheading,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  )
}

export default AppBar
