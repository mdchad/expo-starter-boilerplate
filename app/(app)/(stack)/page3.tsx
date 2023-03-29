import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const page3 = () => {
  return (
    <View className="flex-1 items-center justify-center space-y-5">
      <Text>page3</Text>

      <Link href="/page1">
        <Text>Go to page1</Text>
      </Link>
    </View>
  );
};

export default page3;
