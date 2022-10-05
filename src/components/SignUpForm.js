import { View, Pressable, StyleSheet, Text } from 'react-native'

import FormikTextInput from './FormikTextInput'

import theme from '../theme'

const SignUpForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: '#fff',
    },

    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginVertical: 10,
      alignItems: 'center',
    },

    buttonText: {
      fontSize: theme.fontSizes.subheading,
      color: '#fff',
    },
  })

  return (
    <View style={styles.container}>
      <FormikTextInput placeholder='Username' name='username' />
      <FormikTextInput placeholder='Password' name='password' secureTextEntry />
      <FormikTextInput
        placeholder='Password confirmation'
        name='passwordRep'
        secureTextEntry
      />

      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  )
}

export default SignUpForm
