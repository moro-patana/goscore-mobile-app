import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from './src/components/tab-navigator/TabNavigator';
import StackNavigator from './src/screens/stack-navigator/StackNavigator';
import CustomSplashScreen from './src/screens/SplashScreen';
export default function App() {
  const hasAccount = false;
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <CustomSplashScreen />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}
