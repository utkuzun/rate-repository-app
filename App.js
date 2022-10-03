import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'

import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient'

export default function App() {
  const apolloClient = createApolloClient()

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </ApolloProvider>
      <StatusBar style='auto' />
    </>
  )
}
