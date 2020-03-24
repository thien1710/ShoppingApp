import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class Header extends Component {
    render() {
        return (
                <View style={{ flex: 1, backgroundColor: 'red', width: 100 }}>
                    <Text>Text 2here</Text>
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
  