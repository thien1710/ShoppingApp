import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Authentication from '../Authentication/Authentication';

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container1}>
                <View style={styles.header}>
                    <Text>flex1</Text>
                    <Button title="Toggle drawer" onPress={() => this.props.navigation.toggleDrawer()} />
                </View>
                <View style={styles.main}>
                    <Text>This is Main</Text>
                    <Button
                        title="Go to Authentication"
                        onPress={() => { this.props.navigation.navigate('Authentication') }}
                    />
                    <Text>flex4</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#ffff22',
    },
    header: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        backgroundColor: 'blue',
        flex: 4
    },
    buttons: {
        flex: 7,
        flexDirection: 'row',
    },
    numbers: {
        flex: 3,
        backgroundColor: '#f3f3f3',
    },
    operations: {
        flex: 1,
        backgroundColor: '#edeaea',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    resultText: {
        fontSize: 30,
        color: 'black',
    },
    calculationText: {
        fontSize: 24,
        color: 'black',
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    btnText: {
        fontSize: 30,
    },
    btnWhite: {
        color: 'black',
    },
});
