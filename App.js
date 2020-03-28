import * as React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Authentication from './src/components/Authentication/Authentication'
import OrderHistory from './src/components/OrderHistory/OrderHistory'
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo'
import Main from './src/components/Main/Main'
import DrawerComponent from './navigation/Drawer'

import Cart from './src/components/Main/Cart/Cart'
import Search from './src/components/Main/Search/Search'
import Contact from './src/components/Main/Contact/Contact'

import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

StatusBar.setHidden(true);

//import for testing
// import TopProduct from './src/components/Main/ScreenObjects/TopProduct'
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
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Main" component={Home} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Authentication" component={Authentication} />
    </Stack.Navigator>
  );
}


export default class App extends React.Component {
  render() {
    return (
      // <TopProduct/>
      <NavigationContainer>
        {/* <Drawer.Navigator initialRouteName="Root"
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 30 },
          }}
          drawerStyle={{
            backgroundColor: '#34B089',
            width: 240,
          }}
        >
          <Drawer.Screen name="Main" component={Root} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
          <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
        </Drawer.Navigator> */}
         <DrawerComponent />
      </NavigationContainer>
    );
  }
}