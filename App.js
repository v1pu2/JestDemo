/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Home from './src/Home';

const App = () => {
  const check = n => {
    return n * 3;
  };
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{check(6)}</Text>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default App;
