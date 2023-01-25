import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import BudgetAtGlanceScreen from './src/screens/BudgetAtGlanceScreen';
import FreeCreditReportScreen from './src/screens/FreeCreditReportScreen';
import LockScreen from './src/screens/LockScreen';
import SpendingTrackingScreen from './src/screens/SpendingTrackingScreen';
import Swipable from './src/screens/Swipable';
import Introduction from './src/components/Introduction';
const {width, height} = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>
      {/* <LockScreen /> */}
      {/* <BudgetAtGlanceScreen /> */}
      {/* <SpendingTrackingScreen /> */}
      {/* <FreeCreditReportScreen /> */}
      <Swipable />
      {/* <Introduction /> */}
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
