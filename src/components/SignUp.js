import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'

import SignUpForm from './SignUpForm'

import useSignIn from '../hooks/useSignIn'
import useSignUp from '../hooks/useSignUp'

import * as yup from 'yup'

export const SignUpContainer = ({
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
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUp = () => {
  const navigate = useNavigate()

  const { signUp } = useSignUp()
  const { signIn } = useSignIn()

  const initialValues = {
    username: '',
    password: '',
    passwordRep: '',
  }

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required').min(1).max(30),
    password: yup.string().required('Password is required').min(5).max(50),
    passwordRep: yup
      .string()
      .required('Password confirm is required')
      .oneOf([yup.ref('password'), null], 'Passwords doesn"t match'),
  })

  const onSubmit = async (values, actions) => {
    try {
      const username = await signUp({
        username: values.username,
        password: values.password,
      })
      await signIn({ username, password: 'password' })
      actions.resetForm()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <SignUpContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  )
}

export default SignUp
