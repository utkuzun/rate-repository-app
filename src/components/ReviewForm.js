import FormikTextInput from './FormikTextInput'
import { View, StyleSheet, Pressable } from 'react-native'
import Text from './Text'
import theme from '../theme'

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

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput placeholder='Repository owner name' name='ownerName' />
      <FormikTextInput placeholder='Repository name' name='repositoryName' />
      <FormikTextInput placeholder='Rating between 0 and 100' name='rating' />
      <FormikTextInput placeholder='Review' name='text' />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  )
}

export default ReviewForm
