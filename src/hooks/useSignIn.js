import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'
import { useApolloClient } from '@apollo/client'

const useSignIn = () => {
  const authStroge = useAuthStorage()
  const client = useApolloClient()

  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    })

    const {
      authenticate: { accessToken },
    } = result.data ? result.data : null
    accessToken && (await authStroge.setAccessToken(accessToken))
    client.resetStore()
  }

  return { signIn, result }
}

export default useSignIn
