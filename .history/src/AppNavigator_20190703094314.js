import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from './SplashScreen';
import ListReddit from './ListReddit';

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash ,
    navigationOptions: {
        header: null,
      }},
  ListReddit:{screen:ListReddit}
});


const container = createAppContainer(AppNavigator);
export default container;
