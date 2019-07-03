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

import ListView from './components/ListView';

export default class List_Reddit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }



  render() {
    return (
      <View style={styles.container}>
        { !this.state.loading ?
             <FlatList
                data={patientsList}
                renderItem={(item) => ListView({item})}
                keyExtractor={(item, index) => index.toString()}
                />: <ActivityIndicator style={styles.activitIndicat} size="large" color="#34495e"/>
        }

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
