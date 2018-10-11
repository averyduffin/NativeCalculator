import React from 'react';
import { StyleSheet, View } from 'react-native';
import ReactCalculator from './src';

export default class App extends React.Component {
  render() {
    return (
        <ReactCalculator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
