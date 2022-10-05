import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'
import { parseDate } from '../utils/date'

const Review = ({ review }) => {
  const { rating, text, createdAt, user } = review
  const { username } = user

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      padding: 10,
      flex: 1,
    },

    ratingContainer: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 0.25,
    },
    rating: {
      height: 60,
      width: 60,
      borderColor: theme.colors.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderRadius: 30,
    },

    ratingText: {
      fontSize: 25,
      color: theme.colors.primary,
    },

    infoContainer: {
      flex: 0.75,
    },

    infoHead: {
      fontWeight: theme.fontWeights.bold,
    },

    date: {
      color: 'gray',
    },

    infoText: {
      marginVertical: 5,
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoHead}>{username}</Text>
        <Text style={styles.date}>{parseDate(createdAt)}</Text>
        <Text style={styles.infoText}>{text}</Text>
      </View>
    </View>
  )
}

export default Review
