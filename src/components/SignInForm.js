import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native'
import { useField } from 'formik'

import theme from '../theme'

const SignInForm = ({ onSumbit }) => {
  const [usernameField, , usernameHelpers] = useField('username')
  const [passwordField, , passwordHelpers] = useField('password')

  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },

    input: {
      backgroundColor: '#fff',
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: theme.fontSizes.subheading,
      borderRadius: 5,
      marginVertical: 10,
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
      <TextInput
        placeholder='Username'
        value={usernameField.value}
        onChangeText={(text) => usernameHelpers.setValue(text)}
        onBlur={() => usernameHelpers.setTouched(true)}
        style={styles.input}
      />
      <TextInput
        placeholder='Password'
        value={passwordField.value}
        onChangeText={(text) => passwordHelpers.setValue(text)}
        onBlur={() => passwordHelpers.setTouched(true)}
        style={styles.input}
        secureTextEntry
      />
      <Pressable onPress={onSumbit} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm
