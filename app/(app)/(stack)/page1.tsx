import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const page1 = () => {
  return (
    <View className="flex-1 items-center justify-center space-y-5">
      <Text>page1</Text>

      <Link href="/page2">
        <Text>Go to page2</Text>
      </Link>

      <Link href="/">
        <Text>Go to main</Text>
      </Link>
    </View>
  );
};

export default page1;
