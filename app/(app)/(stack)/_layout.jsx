import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="page1" />
      <Stack.Screen name="page2" />
      <Stack.Screen name="page3" />
    </Stack>
  );
};

export default _layout;
