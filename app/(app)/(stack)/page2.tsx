import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const page2 = () => {
  return (
    <View className="flex-1 items-center justify-center space-y-5">
      <Text>page2</Text>

      <Link href="/page3">
        <Text>Go to page3</Text>
      </Link>
    </View>
  )
}

export default page2