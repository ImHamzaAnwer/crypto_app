import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import FetchCoinData from './../actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin, index) => {
            return <CoinCard
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        })
    }

    render() {
        const { crypto } = this.props;

        if (crypto.isFetching) {
            return (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }

        return (
            <ScrollView>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)