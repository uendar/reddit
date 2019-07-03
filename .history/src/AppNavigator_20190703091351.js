import { createStackNavigator } from 'react-navigation';
import Splash from './src/SplashScreen';
import ListReddit from './src/List_Reddit';

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash },
  ListReddit:{screen:ListReddit}
});

export default AppNavigator;