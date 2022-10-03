import { StyleSheet, View } from 'react-native'
import { Routes, Route, Navigate } from 'react-router-native'

import theme from '../theme'

import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
    marginBottom: 100,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<RepositoryList />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}

export default Main
