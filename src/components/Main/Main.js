import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions } from 'react-native';

import Authentication from '../Authentication/Authentication';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');
export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image source={require('../../media/appIcon/ic_menu.png')}
                            style={styles.iconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Wearing a Dress</Text>
                    <Image source={require('../../media/appIcon/ic_logo.png')}
                        style={styles.iconStyle} />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="What do you want to buy?"
                />

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
    container: {
        flex: 1,
        height: height / 8,
        backgroundColor: '#34B089',
        justifyContent: 'space-around',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    main: {
        backgroundColor: 'blue',
        flex: 4
    },
    textInput: {
        backgroundColor: '#FFF',
        paddingLeft: 10,
        height: height / 23,
    },
    titleStyle: {
        color: '#FFF',

        fontSize: 20,
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
});
