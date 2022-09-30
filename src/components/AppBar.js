import { View, StyleSheet, Text, Pressable } from 'react-native'
import Constants from 'expo-constants'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: theme.colors.background,
  },

  text: {
    color: '#fff',
    fontSize: theme.fontSizes.subheading,
  },
})

const AppBar = () => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Text style={styles.text}>Repositories</Text>
      </View>
    </Pressable>
  )
}

export default AppBar
