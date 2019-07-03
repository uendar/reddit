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
import axios from 'react-native-axios';
import Toast from 'react-native-simple-toast';

import ListView from './components/ListView';
const URL ='https://api.reddit.com/r/pics/hot.json';
export default class List_Reddit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource:[]

        };
    }


     componentDidMount =()=>{
        this.getPostsFromServer();
     };



     getPostsFromServer =()=>{
        axios.get(URL)
        .then(function (response) {
            if(response.status === 200){
                 let data = response.data.data.children;
                 if(data.length >0){
                     this.setState({
                        dataSource:data
                     })
                 }
                 this.setState({
                    loading:false
                 })
            }else{
                Toast.show('Could not get data. Please try again!');
            }
        })
        .catch(function (error) {
          console.log(error);
        });
     }

  render() {
    return (
      <View style={styles.container}>
        { !this.state.loading ?
             <FlatList
                data={this.state.data}
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
