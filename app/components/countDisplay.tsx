import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CountDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function loadData() {
      try {
        const value = await AsyncStorage.getItem('count');
        if (value !== null) {
          setCount(parseInt(value));
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function updateData() {
      try {
        await AsyncStorage.setItem('count', count.toString());
      } catch (error) {
        console.log(error);
      }
    }
    updateData();
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  count: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});
