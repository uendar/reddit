import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';




class RedditView extends Component {

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam();
    console.log(itemId)
    return (
        <View></View>
    //   <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    );
  }
}


export default  RedditView;