import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import InfoScreen from '../info/InfoScreen'
import AddBankHomeScreen from '../AddBankHomeScreen'

const Stack = createStackNavigator()

const InfoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='InfoScreen'
        component={InfoScreen}
        options={{
          headerBackTitle: 'Back',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='AddBankHomeScreen'
        component={AddBankHomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default InfoNavigator
