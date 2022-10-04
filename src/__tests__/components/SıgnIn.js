import { render, fireEvent, waitFor } from '@testing-library/react-native'

import { SignInContainer } from '../../components/SignIn'

import * as yup from 'yup'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button

      const onSubmit = jest.fn()

      const initialValues = {
        username: '',
        password: '',
      }

      const validationSchema = yup.object().shape({
        username: yup.string().required('a username must be provided!!'),
        password: yup.string().required('a password must be provided!!'),
      })

      const { getByText, getByPlaceholderText } = render(
        <SignInContainer
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      )

      fireEvent.changeText(getByPlaceholderText('Username'), 'kalle')
      fireEvent.changeText(getByPlaceholderText('Password'), 'password')
      fireEvent.press(getByText('Sign In'))

      await waitFor(
        () => {
          // expect the onSubmit function to have been called once and with a correct first argument
          expect(onSubmit).toHaveBeenCalledTimes(1)
        },
        { timeout: 3000, interval: 50 }
      )

      // onSubmit.mock.calls[0][0] contains the first argument of the first call
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      })
    })
  })
})
