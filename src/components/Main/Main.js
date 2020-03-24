import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Authentication from '../Authentication/Authentication';
import Header from './Header'

export default class Main extends Component {
    render() {
        return (
            <View style={{flexDirection:'column', flex:1}}>
                <Header/>
                <View style={{backgroundColor:'blue', flex:4, width: 100}}>
                    <Text>This is Main</Text>
                    <Button
                        title="Go to Authentication"
                        onPress={() => { this.props.navigation.navigate('Authentication') }}
                    />
                {/* <Button title="Toggle drawer" onPress={() => this.props.navigation.toggleDrawer()} /> */}
                </View>
            </View>
        );
    }
}