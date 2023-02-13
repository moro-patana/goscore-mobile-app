import {StyleSheet, Text, View} from 'react-native'
import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import BudgetScreen from '../info/BudgetScreen'
import SpendingScreen from '../info/SpendingScreen'
import CreditReportScreen from '../info/CreditReportScreen'
import AddBankHomeScreen from '../AddBankHomeScreen'
const Stack = createStackNavigator()

const InfoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='BudgetScreen'
        component={BudgetScreen}
        options={{
          headerBackTitle: 'Back',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='SpendingScreen'
        component={SpendingScreen}
        options={{
          headerBackTitle: 'Back',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='CreditReportScreen'
        component={CreditReportScreen}
        options={{
          headerBackTitle: 'Back',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='AddBankHomeScreen'
        component={AddBankHomeScreen}
        options={{
          headerBackTitle: 'Back',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default InfoNavigator
