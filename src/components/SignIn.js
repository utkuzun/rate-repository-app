import { Formik } from 'formik'
import SignInForm from './SignInForm'
import useSignIn from '../hooks/useSignIn'

import * as yup from 'yup'

const SignIn = () => {
  const { signIn, result } = useSignIn()

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

      const {
        authenticate: { accessToken },
      } = result.data ? result.data : null

      actions.resetForm()
      console.log(accessToken)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSumbit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
