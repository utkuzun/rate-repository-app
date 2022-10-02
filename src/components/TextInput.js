import { TextInput as NativeTextInput } from 'react-native'

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style]
  {
    error && console.log(error)
  }
  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
