import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

const useAddReview = () => {
  const [mutate] = useMutation(CREATE_REVIEW)

  const addReview = async (values) => {
    console.log({ review: { ...values } })
    const { data } = await mutate({
      variables: { review: { ...values, rating: Number(values.rating) } },
    })
    const repository = data ? data.createReview.repository : undefined
    return repository
  }
  return { addReview }
}

export default useAddReview
