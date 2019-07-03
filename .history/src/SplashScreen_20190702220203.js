
import React, {Component} from "react";
import {Animated, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {StackNavigator} from "react-navigation";
var Spinner = require('react-native-spinkit');

/**
 *@class
 * @classdesc SplashScreen react native module
 */
class SplashScreen extends Component {
    /**
     *
     * @param props {Object}
     */
    constructor(props) {
        super(props);
        this.state =  {};
    }


componentDidMount(){

}


    render() {
        return (

            <View style={styles.v1}>
                <View style={styles.titv1}>
                        <Image style={styles.txtlogo1} source={require('./images/reddit.png')}/>
                        <Text style={styles.title}> Loading </Text>
                        {/* <Bubbles size={7} color="#34495e"/> */}
                    <Spinner
                    type='ThreeBounce'
                    size={40}
                    color= "#34495e"
                    isVisible= {true}/>
                </View>
            </View>

        );
    }
}


const styles = {

    v1: {
        flex: 1,
        backgroundColor: '#f1f2f6',

    },

    title: {
        color: '#34495e',
        fontSize: 25,
        fontFamily: (Platform.OS === 'ios') ? 'Avenir-Light' : 'serif',
        opacity: 0.9,
        marginTop:90
    },

    subtitle: {
        color: '#34495e',
        fontWeight: 'normal',
        marginBottom: 30,
        alignSelf: 'center',

    },

    titv1: {

      alignItems: 'center',
       // flexGrow: 1,
        justifyContent: 'center',
        marginTop: 200,

        width:'100%'

    },

    bar: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    txtlogo1: {
        height: 65, width:260
    }

};


export  default SplashScreen;
