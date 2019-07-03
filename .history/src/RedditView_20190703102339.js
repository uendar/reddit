import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class RedditView extends Component {

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam();
    return (
      <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    );
  }
}


export default  RedditView;