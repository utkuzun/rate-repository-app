import { View, Image, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import StatList from './StatList'
import theme from '../theme'
import * as Linking from 'expo-linking'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },

  article: {
    flexDirection: 'row',
    padding: 10,
  },

  infoField: {
    paddingHorizontal: 15,
    flexGrow: 0,
    alignItems: 'flex-start',
  },

  infoText: {
    marginBottom: 5,
  },

  infoHead: {
    fontWeight: theme.fontWeights.bold,
  },

  button: {
    backgroundColor: theme.colors.primary,
    padding: 7,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: theme.colors.buttonColor,
    fontWeight: theme.fontWeights.bold,
  },
})

const RepositoryItemContainer = ({ repoItem, showUrl }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url,
  } = repoItem

  const stats = [
    { label: 'stars', result: stargazersCount },
    { label: 'forks', result: forksCount },
    { label: 'reviews', result: reviewCount },
    { label: 'ratings', result: ratingAverage },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.article}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.infoField}>
          <Text style={[styles.infoHead, styles.infoText]}>{fullName}</Text>
          <Text style={styles.infoText}>{description}</Text>
          <Pressable style={[styles.infoText, styles.button]}>
            <Text style={styles.buttonText}>{language}</Text>
          </Pressable>
        </View>
      </View>
      <StatList stats={stats} />
      {showUrl && (
        <Pressable
          style={[styles.infoText, styles.button]}
          onPress={() => Linking.openURL(url)}
        >
          <Text style={styles.buttonText}>Open In GitHub</Text>
        </Pressable>
      )}
    </View>
  )
}

export default RepositoryItemContainer
