import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OrderHistory extends Component {
  render() {
    return (
      <View >
        <Text>This is OrderHistory</Text>
      </View>
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
