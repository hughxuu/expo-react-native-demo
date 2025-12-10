import { Link, Stack } from 'expo-router'
import { View } from 'react-native'

export default function NoFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#25292e',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Link
          href='/'
          style={{
            fontSize: 20,
            textDecorationLine: 'underline',
            color: '#fff'
          }}>
          Go back to home screen
        </Link>
      </View>
    </>
  )
}
