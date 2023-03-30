import React from 'react';
import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';

const DATA = [
  {
    title: 'First Item'
  },
  {
    title: 'Second Item'
  }
];

const Flashlist = () => {
  return (
    <View className="flex-1 w-full">
      <FlashList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default Flashlist;
