import { Formik } from 'formik'
import SignInForm from './SignInForm'

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  }

  const onSubmit = (values, actions) => {
    console.log(values)
    actions.resetForm()
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit }) => <SignInForm onSumbit={handleSubmit} />}
    </Formik>
    // <Text>mal ahmet</Text>
  )
}

export default SignIn
