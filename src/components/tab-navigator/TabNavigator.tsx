import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavStackNavigator from './TabNavStackNavigator';
import SettingsScreen from '../../screens/SettingsScreen';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
console.log(height);

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let routeName = route.name;

          if (routeName === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (routeName === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? color : '#C4C4C4'}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          padding: 10,
          height: height / 9.69,
          backgroundColor: 'white',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={TabNavStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
