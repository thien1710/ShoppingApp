import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Collection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>TOP PRODUCT</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.productContainer}>
                        <Image source={require('../../../media/temp/sp1.jpeg')} style={styles.productImage} />
                        <Text style={styles.produceName}>PRODUCT NAME</Text>
                        <Text style={styles.producePrice}>400$</Text>
                    </View>
                    <View style={styles.productContainer}>
                        <Image source={require('../../../media/temp/sp2.jpeg')} style={styles.productImage} />
                        <Text style={styles.produceName}>PRODUCT NAME</Text>
                        <Text style={styles.producePrice}>250$</Text>
                    </View>
                    <View style={{ height: 10, width }} />
                    <View style={styles.productContainer}>
                        <Image source={require('../../../media/temp/sp3.jpeg')} style={styles.productImage} />
                        <Text style={styles.produceName}>PRODUCT NAME</Text>
                        <Text style={styles.producePrice}>400$</Text>
                    </View>
                    <View style={styles.productContainer}>
                        <Image source={require('../../../media/temp/sp4.jpeg')} style={styles.productImage} />
                        <Text style={styles.produceName}>PRODUCT NAME</Text>
                        <Text style={styles.producePrice}>250$</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        // fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        // fontFamily: 'Avenir',
        color: '#662F90'
    }
});
