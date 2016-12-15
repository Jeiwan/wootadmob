/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {PublisherBanner} from 'react-native-admob';
const AD_UNIT_ID = '/6499/example/banner';

export default class wootadmob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adSize: 'smartBannerPortrait',
      adUnitID: AD_UNIT_ID,
      testDeviceID: null,
      isAd: "AD IS NOT LOADED"
    };

    this.woot = this.woot.bind(this);
  }

  woot(event) {
    this.setState({isAd: "AD IS LOADED"});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={{color: 'red', fontWeight: 'bold'}}>
          {this.state.isAd}
        </Text>
        <PublisherBanner
          adViewDidReceiveAd={this.woot}
          bannerSize={this.state.adSize} testDeviceID={this.state.testDeviceID} adUnitID={this.state.adUnitID}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('wootadmob', () => wootadmob);
