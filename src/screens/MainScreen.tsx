import * as React from 'react'
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TransactionsScreen from './TransactionsScreen'
import SettingsScreen from './SettingsScreen'
import SupportScreen from './SupportScreen'
import HomeScreen from './HomeScreen'
const Tab = createBottomTabNavigator()

const MainScreen = () => {
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
            headerLeft: () => <Text style={styles.title}>My Activity</Text>,
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerRight: () => (
              <TouchableOpacity style={{paddingHorizontal: 20}}>
                <Image
                  source={require('../../assets/images/plus-icon.png')}></Image>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen name='Support' component={SupportScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    color: '#2E6CC6',
    paddingHorizontal: 20,
  },
})
