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
import Search from './src/components/Main/Search/Search'
import Contact from './src/components/Main/Contact/Contact'

import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = 'md-home';
          } else if (route.name === 'Cart') {
            iconName = 'md-cart';
          } else if (route.name === 'Search') {
            iconName = 'md-search';
          } else if (route.name === 'Contact') {
            iconName = 'md-contact';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Main" component={Main} />
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