import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Constants from 'expo-constants'
import { setContext } from '@apollo/client/link/context'
import { relayStylePagination } from '@apollo/client/utilities'

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: Constants.manifest.extra.APOLLO_URI,
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
})

const createApolloClient = (authStroge) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStroge.getAccessToken()

      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      }
    } catch (error) {
      console.log(error)
      return { headers }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  })
}

export default createApolloClient
