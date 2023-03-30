import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
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

  const handleIncrement = async () => {
    try {
      const newCount = count + 1;
      setCount(newCount);
      await AsyncStorage.setItem('count', newCount.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrement = async () => {
    try {
      const newCount = count - 1;
      setCount(newCount);
      await AsyncStorage.setItem('count', newCount.toString());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 30
  },
  count: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});
