import { Formik } from 'formik'
import * as yup from 'yup'

import { useNavigate } from 'react-router-native'

import ReviewForm from './ReviewForm'
import useAddReview from '../hooks/useAddReview'

const CreateReviewContainer = ({
  onSubmit,
  initialValues,
  validationSchema,
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const CreateReview = () => {
  const { addReview } = useAddReview()
  const navigate = useNavigate()

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: 0,
    text: '',
  }

  const validationSchema = yup.object().shape({
    repositoryName: yup.string().required('Repository name is required'),
    ownerName: yup.string().required('Repository owner name is required'),
    rating: yup.number().required('Rating is required').min(0).max(100),
  })

  const onSubmit = async (values, actions) => {
    try {
      const repository = await addReview(values)
      console.log(repository)
      const { id } = repository
      actions.resetForm()
      navigate(`/repositories/${id}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <CreateReviewContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  )
}

export default CreateReview
