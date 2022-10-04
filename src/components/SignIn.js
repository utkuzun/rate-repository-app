import { Formik } from 'formik'
import SignInForm from './SignInForm'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native'

import * as yup from 'yup'

export const SignInContainer = ({
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
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignIn = () => {
  const { signIn } = useSignIn()
  const navigate = useNavigate()

  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = yup.object().shape({
    username: yup.string().required('a username must be provided!!'),
    password: yup.string().required('a password must be provided!!'),
  })

  const onSubmit = async (values, actions) => {
    try {
      await signIn(values)
      actions.resetForm()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <SignInContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  )
}

export default SignIn
