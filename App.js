import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'

import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient'

import AuthStorage from './src/utils/authStroge'
import AuthStorageContext from './src/contexts/AuthStorageContext'

export default function App() {
  const authStroge = new AuthStorage()
  const apolloClient = createApolloClient(authStroge)
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <NativeRouter>
          <AuthStorageContext.Provider value={authStroge}>
            <Main />
          </AuthStorageContext.Provider>
        </NativeRouter>
      </ApolloProvider>
      <StatusBar style='auto' />
    </>
  )
}
