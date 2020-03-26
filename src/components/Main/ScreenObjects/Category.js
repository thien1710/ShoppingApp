import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground} from 'react-native';

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <Text style={styles.textStyle} >LIST OF CATEGORY</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>

                        <ImageBackground source={require('../../../media/temp/little.jpg')} style={styles.imageStyle}>
                            <Text style={styles.cateTitle}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../../../media/temp/maxi.jpg')} style={styles.imageStyle}>
                            <Text style={styles.cateTitle}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../../../media/temp/party.jpg')} style={styles.imageStyle}>
                            <Text style={styles.cateTitle}>Maxi Dress</Text>
                        </ImageBackground>
                    </Swiper>
                </View>
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
    cateTitle: {
        fontSize: 20,
        color: '#9A9A9A',
    },
});
