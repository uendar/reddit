import { createStackNavigator } from 'react-navigation';
import Splash from './SplashScreen';
import ListReddit from './List_Reddit';

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash },
  ListReddit:{screen:ListReddit}
});

export default AppNavigator;