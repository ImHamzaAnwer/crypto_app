import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from './../utils/Constants'

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
    return (
        <View style={card}>
            <View style={row}>

                <View style={row}>
                    <Image
                        style={image}
                        source={{ uri: images[symbol] }}
                    />
                    <Text style={bold}>{symbol}<Text> | {coin_name}</Text></Text>
                </View>

                <Text style={bold}>{price_usd} $</Text>
            </View>

            <View style={row}>
                <Text>Change past 24 Hrs: {percent_change_24h}</Text>
                <Text>Change past 7 days: {percent_change_7d}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 10,
        marginHorizontal: 20,
        borderBottomWidth: .5,
    },
    image: {
        width: 40,
        height: 40,
        alignSelf: "center",
        marginHorizontal: 10
    },
    bold: {
        fontWeight: 'bold'
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})

const { card, image, bold, row } = styles;

export default CoinCard;