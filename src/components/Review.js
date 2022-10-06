import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import theme from '../theme'
import { parseDate } from '../utils/date'
import { useNavigate } from 'react-router-native'
import useDeleteReview from '../hooks/useDeleteReview'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  containerUp: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
  },

  containerDown: {
    flexDirection: 'row',
    paddingBottom: 10,
    flex: 1,
    justifyContent: 'center',
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

  button: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: 6,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: theme.colors.buttonColor,
    fontWeight: theme.fontWeights.bold,
  },

  delete: {
    backgroundColor: 'red',
  },
})

const Review = ({ review, repository, refetch }) => {
  const { rating, text, createdAt, user, id } = review
  const { username } = user
  const navigate = useNavigate()
  const { deleteReview } = useDeleteReview()

  const deleteFunc = async (id) => {
    try {
      await deleteReview(id)
      refetch()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    Alert.alert('Delete Review', 'Are you sure want to this review', [
      {
        text: 'CANCEL',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'DELETE',
        onPress: async () => {
          await deleteFunc(id)
        },
      },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerUp}>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoHead}>
            {repository?.fullName || username}
          </Text>
          <Text style={styles.date}>{parseDate(createdAt)}</Text>
          <Text style={styles.infoText}>{text}</Text>
        </View>
      </View>
      {repository?.fullName && (
        <View style={styles.containerDown}>
          <Pressable
            style={[styles.infoText, styles.button]}
            onPress={() => navigate(`/repositories/${repository?.id}`)}
          >
            <Text style={styles.buttonText}>View repository</Text>
          </Pressable>
          <Pressable
            style={[styles.infoText, styles.button, styles.delete]}
            onPress={() => {
              handleDelete()
            }}
          >
            <Text style={styles.buttonText}>Delete Review</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default Review
