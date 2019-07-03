import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';




class RedditView extends Component {

  render() {
    const { navigation } = this.props;
    const itemId = navigation.state.params.url;
    console.log(itemId)
    return (
        <View>
            <Text>ASADAsd</Text>
        </View>
    //   <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    );
  }
}


export default  RedditView;