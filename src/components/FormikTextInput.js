import { Text, StyleSheet } from 'react-native'

import TextInput from './TextInput'
import { useField } from 'formik'

import theme from '../theme'

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  const showError = meta.touched && meta.error

  const styles = StyleSheet.create({
    errorText: {
      marginTop: 5,
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
  })

  return (
    <>
      <TextInput
        value={field.value}
        onBlur={() => helpers.setTouched(true)}
        onChangeText={(text) => helpers.setValue(text)}
        error={showError}
        style={styles.input}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
