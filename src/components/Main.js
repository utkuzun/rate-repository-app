import { StyleSheet, View } from 'react-native'
import { Routes, Route, Navigate } from 'react-router-native'

import theme from '../theme'

import RepositoryList from './RepositoryList'
import Repository from './Repository'
import SignIn from './SignIn'
import SignUp from './SignUp'
import AppBar from './AppBar'
import CreateReview from './CreateReview'
import MyReviews from './MyReviews'

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
        <Route path='/repositories/:id' element={<Repository />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reviews/create' element={<CreateReview />} />
        <Route path='/reviews/my' element={<MyReviews />} />
        <Route path='/' element={<RepositoryList />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}

export default Main
