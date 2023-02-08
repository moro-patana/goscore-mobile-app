// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import Swipable from './src/screens/Swipable';
// // import UncategorizedTransactionScreen from './src/screens/UncategorizedTransactionScreen';
// import TransactionsScreen from './src/screens/TransactionsScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import MainContainer from './src/components/MainContainer'
// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Swipable /> */}
//       {/* <UncategorizedTransactionScreen/> */}
//       {/* <TransactionsScreen/> */}
//       <MainContainer />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './src/screens/HomeScreen'
import TransactionsScreen from './src/screens/TransactionsScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import SupportScreen from './src/screens/SupportScreen'
const Tab = createBottomTabNavigator()
export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName
            let routeName = route.name

            if (routeName === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (routeName === 'Transaction') {
              iconName = focused ? 'bookmarks' : 'bookmarks-outline'
            } else if (routeName === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline'
            } else if (routeName === 'Support') {
              iconName = focused
                ? 'chatbubble-ellipses'
                : 'chatbubble-ellipses-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
          tabBarShowLabel: false,
          tabBarStyle: {padding: 10, height: 100, backgroundColor: 'white'},
        })}>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name='Transaction'
          component={TransactionsScreen}
          options={{
            title: '',
            headerLeft: () => (
             <Text style={styles.title}>My Activity</Text>
            ),
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerRight: () => (
              <TouchableOpacity style={{padding: 16}}>
              <Image source={require('./assets/images/plus-icon.png')}></Image>
            </TouchableOpacity>
            )
          }}
        />
        <Tab.Screen name='Support' component={SupportScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    color: '#2E6CC6',
    padding: 16
  },
})
