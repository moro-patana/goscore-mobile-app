// // import React from 'react';
// // import {StyleSheet, View} from 'react-native';
// // import Swipable from './src/screens/Swipable';
// // // import UncategorizedTransactionScreen from './src/screens/UncategorizedTransactionScreen';
// // import TransactionsScreen from './src/screens/TransactionsScreen';
// // import { NavigationContainer } from '@react-navigation/native';
// // import MainContainer from './src/components/MainContainer'
// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       {/* <Swipable /> */}
// //       {/* <UncategorizedTransactionScreen/> */}
// //       {/* <TransactionsScreen/> */}
// //       <MainContainer />
// //     </View>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
// import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
// import * as React from 'react'
// import {NavigationContainer} from '@react-navigation/native'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import HomeScreen from './src/screens/HomeScreen'
// import TransactionsScreen from './src/screens/TransactionsScreen'
// import SettingsScreen from './src/screens/SettingsScreen'
// import SupportScreen from './src/screens/SupportScreen'
// const Tab = createBottomTabNavigator()
// export default function App () {
//   return (
// <NavigationContainer>
//   <Tab.Navigator
//     initialRouteName='Home'
//     screenOptions={({route}) => ({
//       tabBarIcon: ({focused, color, size}) => {
//         let iconName
//         let routeName = route.name

//         if (routeName === 'Home') {
//           iconName = focused ? 'home' : 'home-outline'
//         } else if (routeName === 'Transaction') {
//           iconName = focused ? 'bookmarks' : 'bookmarks-outline'
//         } else if (routeName === 'Settings') {
//           iconName = focused ? 'settings' : 'settings-outline'
//         } else if (routeName === 'Support') {
//           iconName = focused
//             ? 'chatbubble-ellipses'
//             : 'chatbubble-ellipses-outline'
//         }

//         return <Ionicons name={iconName} size={size} color={color} />
//       },
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'black',
//       tabBarShowLabel: false,
//       tabBarStyle: {padding: 10, height: 100, backgroundColor: 'white'},
//     })}>
//     <Tab.Screen
//       name='Home'
//       component={HomeScreen}
//       options={{headerShown: false, tabBarStyle:{display:'none'}}}
//     />
//     <Tab.Screen
//       name='Transaction'
//       component={TransactionsScreen}
// options={{
//   title: '',
//   headerLeft: () => (
//    <Text style={styles.title}>My Activity</Text>
//   ),
//   headerStyle: {
//     backgroundColor: '#fff',
//   },
//   headerRight: () => (
//     <TouchableOpacity style={{padding: 16}}>
//     <Image source={require('./assets/images/plus-icon.png')}></Image>
//   </TouchableOpacity>
//   )
// }}
//     />
//     <Tab.Screen name='Support' component={SupportScreen} />
//     <Tab.Screen name='Settings' component={SettingsScreen} />
//   </Tab.Navigator>
// </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
// title: {
//   fontSize: 17,
//   fontWeight: '400',
//   lineHeight: 22,
//   color: '#2E6CC6',
//   padding: 16
// },
// })

// import {StyleSheet, View} from 'react-native'
// import * as React from 'react'
// import LockScreen from './src/screens/lock/LockScreen'
// import MainScreen from './src/screens/MainScreen'

// const App = () => {
//   return (
//     <>
//       {/* <LockScreen /> */}
//       <MainScreen />
//     </>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// })

// import React from 'react'
// import {
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   Dimensions,
//   StyleSheet,
// } from 'react-native'
// import {createStackNavigator} from '@react-navigation/stack'
// import {NavigationContainer} from '@react-navigation/native'
// import Icon from 'react-native-vector-icons/Ionicons'
// const {width, height} = Dimensions.get('window')
// const SongList = ({navigation}) => {
//   const songs = [
//     {
//       title: 'Song 1',
//       singer: 'Singer 1',
//       lyrics: 'Lyrics for Song 1...',
//     },
//     {
//       title: 'Song 2',
//       singer: 'Singer 2',
//       lyrics: 'Lyrics for Song 2...',
//     },
//   ]

//   return (
//     <View>
//       {songs.map((song, index) => (
//         <Song
//           key={index}
//           title={song.title}
//           singer={song.singer}
//           lyrics={song.lyrics}
//           navigation={navigation}
//         />
//       ))}
//     </View>
//   )
// }
// const Song = ({title, singer, lyrics, navigation}) => {
//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('LyricsModal', {title, singer, lyrics})
//         }>
//         <Text>
//           {title} by {singer}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bigImage: {
//     width: '100%',
//     height: '50%',
//     position: 'absolute',
//     top: '-20%',
//   },
//   smallImage: {
//     position: 'absolute',
//     top: '15%',
//     left: '40%',
//     width: 83,
//     height: 82,
//   },
//   amount: {
//     fontWeight: '700',
//     fontSize: 36,
//     color: '#2E6CC6',
//   },
//   category: {
//     fontWeight: '700',
//     fontSize: 20,
//     color: '#102463',
//   },
//   description: {
//     fontWeight: '400',
//     fontSize: 17,
//     color: '#2E6CC6',
//     paddingTop: 10,
//   },
// })

// const LyricsModal = ({route}) => {
//   const {title, singer, lyrics} = route.params

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('./assets/images/category-details-bg.png')}
//         style={styles.bigImage}
//       />
//       <Image
//         source={require('./assets/images/traveling.png')}
//         style={styles.smallImage}
//       />
//       <View>
//         <Text style={styles.amount}>-300 kr</Text>
//         <View
//           style={{
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingTop: 10,
//           }}>
//           <Text style={styles.category}>Leisure</Text>
//           <Text style={styles.description}>Norwegian Tour</Text>
//         </View>
//       </View>
//     </View>
//   )
// }

// const Stack = createStackNavigator()

// const App = () => (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name='SongList' component={SongList} />
//       <Stack.Screen
//         name='LyricsModal'
//         component={LyricsModal}
//         options={{
//           headerBackTitle: 'Back',
//           headerBackTitleStyle: {
//             fontWeight: '400',
//             fontSize: 17,
//             color: '#2E6CC6',
//           },
//           headerTitle: 'Leisure',
//           headerTitleStyle: {
//             fontWeight: '600',
//             fontSize: 17,
//             color: '#2E6CC6',
//           },
//           headerRight: () => (
//             <Icon name='information-circle-outline' size={20} color='#2E6CC6' />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   </NavigationContainer>
// )

// export default App
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import BudgetScreen from './src/screens/info/BudgetScreen'
import SpendingScreen from './src/screens/info/SpendingScreen'
import CreditReportScreen from './src/screens/info/CreditReportScreen'
import AddBankHomeScreen from './src/screens/AddBankHomeScreen'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Information1'>
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
    </NavigationContainer>
  )
}
