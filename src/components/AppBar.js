import { ScrollView, View, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'

import Text from './Text'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: '#24292e',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    color: '#fff',
    fontSize: theme.fontSizes.subheading,
  },

  link: {
    marginRight: 15,
  },

  // scrollView: {
  //   flexGrow: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '100%',
  // },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal styles={styles.scrollView}>
        <Link to='/'>
          <Text style={[styles.text, styles.link]}>Repositories</Text>
        </Link>
        <Link to='/signin'>
          <Text style={[styles.text, styles.link]}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar
