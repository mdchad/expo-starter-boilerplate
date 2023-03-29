import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name='page1' />
      <Stack.Screen name='page2' />
      <Stack.Screen name='page3' />
    </Stack>
  )
}

export default _layout