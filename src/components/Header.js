import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={headerContainer}>
                <Text style={bold}>Cryptocurrency App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 25,
        alignItems: "center",
        paddingBottom: 20,
        backgroundColor: "#333",
        elevation: 1
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 17,
        color: "#fff"
        
    }
});

const { headerContainer, bold } = styles


export default Header;