import { createStackNavigator } from 'react-navigation';
import Splash from './src/SplashScreen';

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash },
});

export default AppNavigator;