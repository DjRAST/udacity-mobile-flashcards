import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CreateDeck from './views/CreateDeck';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{height: Constants.statusBarHeight}}></View>
      <Text>Open up App.js to start working on your app!</Text>
      <CreateDeck />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
