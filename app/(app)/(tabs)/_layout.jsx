import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name='page1' />
      <Tabs.Screen name='page2' />
      <Tabs.Screen name='page3' />
    </Tabs>
  )
}

export default _layout