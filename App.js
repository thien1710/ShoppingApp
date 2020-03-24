import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Authentication from './src/components/Authentication/Authentication'
import OrderHistory from './src/components/OrderHistory/OrderHistory'
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo'
import Main from './src/components/Main/Main'

import Cart from './src/components/Main/Cart/Cart'
import Shop from './src/components/Main/Shop/Shop'
import Search from './src/components/Main/Search/Search'
import Contact from './src/components/Main/Contact/Contact'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Home} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Authentication" component={Authentication} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Root">
        <Drawer.Screen name="Main" component={Root} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}