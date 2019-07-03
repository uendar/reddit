import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from './SplashScreen';
import ListReddit from './ListReddit';
import RedditView from './RedditView';

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash ,
    navigationOptions: {
        header: null,
      }},
  ListReddit:{screen:ListReddit},
  RedditView:{screen:RedditView,
    navigationOptions: {
      header: null,
    }}
});


const container = createAppContainer(AppNavigator);
export default container;
