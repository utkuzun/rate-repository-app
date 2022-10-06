import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW)

  const deleteReview = async (id) => {
    await mutate({ variables: { deleteReviewId: id } })
  }

  return { deleteReview }
}

export default useDeleteReview
