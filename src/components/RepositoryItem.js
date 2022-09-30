import { View, Text } from 'react-native'

const RepositoryItem = ({ repoItem }) => {
  return (
    <View>
      {Object.entries(repoItem).map(([key, value]) => (
        <Text key={key}>{`${key} : ${value}`}</Text>
      ))}
    </View>
  )
}

export default RepositoryItem
