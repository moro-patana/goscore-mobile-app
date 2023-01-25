import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Swipable from './src/screens/Swipable';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <Swipable />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
