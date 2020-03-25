import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions, ImageBackground } from 'react-native';

import Authentication from '../Authentication/Authentication';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from './Header'

import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window');
export default class Main extends Component {
    render() {
        return (

            <View style={styles.container}>

                {/* HEADER */}
                <View style={styles.header}>
                    <View style={styles.headerTop}>
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
                </View>

                {/* MAIN */}

                {/* SPRING COLLECTION */}
                <View style={styles.wrapper}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.textStyle} >SPRING COLLECTION</Text>
                    </View>
                    <View style={{ flex: 4 }}>
                        <Image source={require('../../media/temp/banner.jpg')} style={styles.imageStyle} />
                    </View>
                </View>

                {/* LIST OF CATEGORY */}
                <View style={styles.wrapper}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.textStyle} >LIST OF CATEGORY</Text>
                    </View>
                    <View style={{ flex: 4 }}>
                        <Swiper showsPagination width={imageWidth} height={imageHeight}>
                            
                            <ImageBackground source={require('../../media/temp/little.jpg')} style={styles.imageStyle}>
                                <Text style={styles.cateTitle}>Maxi Dress</Text>
                            </ImageBackground>
                            <ImageBackground source={require('../../media/temp/maxi.jpg')} style={styles.imageStyle}>
                                <Text style={styles.cateTitle}>Maxi Dress</Text>
                            </ImageBackground>
                            <ImageBackground source={require('../../media/temp/party.jpg')} style={styles.imageStyle}>
                                <Text style={styles.cateTitle}>Maxi Dress</Text>
                            </ImageBackground>
                        </Swiper>
                    </View>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    container: {

    },
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
    wrapper: {
        height: height * 0.33,
        // height: height * 0.33,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
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
    cateTitle: {
        fontSize: 20,
        color: '#9A9A9A',
    },
});
