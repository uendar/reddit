import React, { Component } from 'react';
import { WebView } from 'react-native-webview';



class RedditView extends Component {

  render() {
    const { navigation } = this.props;
    const url = navigation.state.params.url;
    return (
      <WebView source={{ uri: url }}
        onError={syntheticEvent => {
        const { nativeEvent } = syntheticEvent;
        console.warn('WebView error: ', nativeEvent);
      }}/>
    );
  }
}


export default  RedditView;