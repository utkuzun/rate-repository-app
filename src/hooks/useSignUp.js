import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'

const useSignUp = () => {
  const [mutate] = useMutation(CREATE_USER)

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        user: {
          username,
          password,
        },
      },
    })

    if (data) {
      const {
        createUser: { username },
      } = data
      return username
    }
  }

  return { signUp }
}

export default useSignUp
