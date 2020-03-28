import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Contact from '../Authentication/Authentication'

export default class MenuDrawer extends Component {
  render() {
    return (
      <View>
      <DrawerItem
                label="Logout"
                labelStyle={{ color: 'dark' }}
                onPress={() => alert('Are your sure to logout?')}
            />
            <DrawerItem
                label="Contact" onPress={() => props.navigation.navigate('Contact')} />
            <Text >contact@react-ui-kit.com</Text>
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
