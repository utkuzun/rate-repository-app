import { Formik } from 'formik'
import SignInForm from './SignInForm'

import * as yup from 'yup'

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = yup.object().shape({
    username: yup.string().required('a username must be provided!!'),
    password: yup.string().required('a password must be provided!!'),
  })

  const onSubmit = (values, actions) => {
    console.log(values)
    actions.resetForm()
  }

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSumbit={handleSubmit} />}
    </Formik>
    // <Text>mal ahmet</Text>
  )
}

export default SignIn
