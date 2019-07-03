/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class List_Reddit extends Component {



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vprofile1}>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               placeholder={Langue[language].searchUser}
                               placeholderTextColor="#2f3542"
                               onChangeText={(text) => (this.setState({text}), filterList(text))}
                               value={this.state.text}
                    />
                </View>
                { this.props.interactionsComplete ?
                        <FlatList
                            data={patientsList}
                            renderItem={this.renderFile.bind(this)}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        : <ActivityIndicator style={styles.activitIndicat} size="large" color="#34495e"/>}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  activitIndicat:{
    marginTop: 20
  }

});
