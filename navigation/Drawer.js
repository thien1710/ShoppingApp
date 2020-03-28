/* eslint-disable react-native/sort-styles */
/* eslint-disable import/order */
import React, { Component } from 'react';
import { Image, StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    DrawerItem,
    createDrawerNavigator,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// screens
import Main from '../src/components/Main/Main'
import Cart from '../src/components/Main/Cart/Cart'
import Search from '../src/components/Main/Search/Search'
import Contact from '../src/components/Main/Contact/Contact'

import Authentication from '../src/components/Authentication/Authentication'
import OrderHistory from '../src/components/OrderHistory/OrderHistory'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
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

// const loginJSX = (
//     // <View style={{alignItems:'center'}}>
//     //         <Image source={require('../src/media/temp/profile.png')}
//     //             style={{width: 70, height: 70}} />
//     //         <DrawerItem
//     //             label="Logout"
//     //             labelStyle={{ color: 'dark' }}
//     //             onPress={() => alert('Are your sure to logout?')}
//     //         />
//     //         <DrawerItem
//     //             label="Contact" onPress={() => props.navigation.navigate('Contact')} />
//     //         <Text >contact@react-ui-kit.com</Text>
//     //         </View>
//     
// );

function LoginJSX() {
    return (
        <View style={styles.loginContainer}>
            <Text style={styles.username}>Nguyen Van Pho</Text>
            <View>
                <TouchableOpacity style={styles.btnSignInStyle}>
                    <Text style={styles.btnTextSignIn}>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSignInStyle}>
                    <Text style={styles.btnTextSignIn}>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSignInStyle}>
                    <Text style={styles.btnTextSignIn}>Sign out</Text>
                </TouchableOpacity>
            </View>
            <View />
        </View>
    );
}

function LogoutJSX() {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnStyle}>
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <LoginJSX />;
    }
    return <LogoutJSX />;
}

const Screens = ({ navigation, style }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: null,
            }}>
            <Stack.Screen name="Home">{props => <Home {...props} />}</Stack.Screen>
            <Stack.Screen name="Authentication">{props => <Authentication {...props} />}</Stack.Screen>
            <Stack.Screen name="OrderHistory">{props => <OrderHistory {...props} />}</Stack.Screen>
        </Stack.Navigator>);
};
import MenuDrawer from '../src/components/MenuDrawer/MenuDrawer'
const DrawerContent = props => {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#34B089' }}>
            <Greeting isLoggedIn={true} />
        </DrawerContentScrollView>
    );
};

export default class DrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <Drawer.Navigator drawerContent={props => { return <DrawerContent {...props} />; }}>
                <Drawer.Screen name="Screens">
                    {props => <Screens {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        );
    }
};

const styles = StyleSheet.create({
    test: {
        backgroundColor: 'green'
    },
    stack: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5,
    },
    drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
    drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
    drawerLabel: { color: 'white', marginLeft: -16 },
    // avatar: {
    //     borderRadius: 60,
    //     marginBottom: 16,
    //     borderColor: 'white',
    //     borderWidth: StyleSheet.hairlineWidth,
    // },
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70
    },
    btnText: {
        color: '#34B089',
        fontSize: 20
    },
    btnSignInStyle: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: 15
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    username: {
        color: '#fff',
        // fontFamily: 'Avenir', 
        fontSize: 20
    }
});
