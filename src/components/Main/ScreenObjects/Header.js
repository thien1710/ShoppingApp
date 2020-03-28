import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image source={require('../../../media/appIcon/ic_menu.png')}
                            style={styles.iconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Wearing a Dress</Text>
                    <Image source={require('../../../media/appIcon/ic_logo.png')}
                        style={styles.iconStyle} />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="What do you want to buy?"
                />
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    header: {
        height: height / 8,
        backgroundColor: '#34B089',
        justifyContent: 'space-around',
        padding: 10,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
