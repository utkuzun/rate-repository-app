import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'
import { useApolloClient } from '@apollo/client'

const useSignIn = () => {
  const authStroge = useAuthStorage()
  const client = useApolloClient()

  const [mutate] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    })

    if (data) {
      const {
        authenticate: { accessToken },
      } = data
      accessToken && (await authStroge.setAccessToken(accessToken))
      client.resetStore()
    }
  }

  return { signIn }
}

export default useSignIn
