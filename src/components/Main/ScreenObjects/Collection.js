import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

import Search from '../Search/Search';

export default class Collection extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <Text style={styles.textStyle} >SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Image source={require('../../../media/temp/banner.jpg')} style={styles.imageStyle} />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                    <Text>Click Click</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
