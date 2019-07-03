import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';




class RedditView extends Component {

  render() {
    const { navigation } = this.props;
    const url = navigation.state.params.url;

    return (

      <WebView source={{ uri: url }} />
    );
  }
}


export default  RedditView;