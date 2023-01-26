import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddBankHomeScreen from './AddBankHomeScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddBankHomeScreen"
          component={AddBankHomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
