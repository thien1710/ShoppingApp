import * as React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import DrawerComponent from './navigation/Drawer'

StatusBar.setHidden(true);
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
         <DrawerComponent />
      </NavigationContainer>
    );
  }
}