import { ScrollView, View, StyleSheet, Pressable } from 'react-native'
import { Link, useNavigate } from 'react-router-native'
import Constants from 'expo-constants'

import { useApolloClient } from '@apollo/client'
import useCurrentUser from '../hooks/useCurrentUser'
import useAuthStorage from '../hooks/useAuthStorage'

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
  const { data, loading } = useCurrentUser({ includeReviews: false })
  const authStroge = useAuthStorage()
  const client = useApolloClient()
  const navigate = useNavigate()

  if (loading) {
    return null
  }

  const signout = async () => {
    await authStroge.removeAccessToken()
    await client.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal styles={styles.scrollView}>
        <Link to='/'>
          <Text style={[styles.text, styles.link]}>Repositories</Text>
        </Link>
        {!data.me ? (
          <>
            <Link to='/signin'>
              <Text style={[styles.text, styles.link]}>Sign in</Text>
            </Link>
            <Link to='/signup'>
              <Text style={[styles.text, styles.link]}>Sign up</Text>
            </Link>
          </>
        ) : (
          <>
            <Pressable onPress={() => navigate('/reviews/create')}>
              <Text style={[styles.text, styles.link]}>Create a review</Text>
            </Pressable>
            <Pressable onPress={() => navigate('/reviews/my')}>
              <Text style={[styles.text, styles.link]}>My Reviews</Text>
            </Pressable>
            <Pressable onPress={signout}>
              <Text style={[styles.text, styles.link]}>Sign out</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
