import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from './SplashScreen';
import ListReddit from './List_Reddit';

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash },
  ListReddit:{screen:ListReddit}
});


const container = createAppContainer(AppNavigator);
export default container;
