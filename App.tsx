import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './src/components/tab-navigator/TabNavigator'
import InfoNavigator from './src/screens/info/InfoNavigator'

const App = () => {
  const hasAccount = true
  return (
    <NavigationContainer>
      {hasAccount ? <TabNavigator /> : <InfoNavigator />}
    </NavigationContainer>
  )
}

export default App
