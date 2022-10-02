import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native'
import { useField } from 'formik'

import theme from '../theme'

const SignInForm = ({ onSumbit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username')
  const [passwordField, passwordMeta, passwordHelpers] = useField('password')

  const styles = StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: '#fff',
    },

    input: {
      backgroundColor: '#fff',
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: theme.fontSizes.subheading,
      borderRadius: 5,
      marginVertical: 10,
      borderColor: theme.colors.textPrimary,
      borderWidth: 1,
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
      {usernameMeta.touched && usernameMeta.error && (
        <Text>{usernameMeta.error}</Text>
      )}
      <TextInput
        placeholder='Password'
        value={passwordField.value}
        onChangeText={(text) => passwordHelpers.setValue(text)}
        onBlur={() => passwordHelpers.setTouched(true)}
        style={styles.input}
        secureTextEntry
      />
      {passwordMeta.touched && passwordMeta.error && (
        <Text>{passwordMeta.error}</Text>
      )}
      <Pressable onPress={onSumbit} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm
