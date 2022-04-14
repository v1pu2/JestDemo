/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

const Home = () => {
  const [data, setData] = useState(0);
  //   useEffect(() => {
  //     setData(10);
  //   }, []);
  const change = x => {
    return x * 10;
  };

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Home </Text>
      <TextInput
        testID="userName"
        placeholder="Enter UserName"
        onChangeText={text => change(text)}
        style={{backgroundColor: 'grey', marginTop: 20, padding: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default Home;
