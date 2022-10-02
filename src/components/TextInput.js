import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const TextInput = ({ style, error, ...props }) => {
  const styleError = StyleSheet.create({
    input: {
      color: error && theme.colors.error,
      borderColor: error && theme.colors.error,
    },
  })

  const textInputStyle = [style, styleError.input]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
