import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './src/components/tab-navigator/TabNavigator'
import StackNavigator from './src/screens/stack-navigator/StackNavigator'

const App = () => {
  const hasAccount = false
  return (
    <NavigationContainer>
      {hasAccount ? <TabNavigator /> : <StackNavigator />}
    </NavigationContainer>
  )
}
export default App
