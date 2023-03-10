import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {sm} from './SizeHelper';

const {width, height} = Dimensions.get('window');
function ChartHeader({income, spendings}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/transaction-bg.png')}
        resizeMode="cover"
        style={{
          width: width,
          height: height / 4,
          position: 'absolute',
          top: '-40%',
          //   elevation: 3,
        }}></ImageBackground>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <Text style={styles.title}>Income</Text>
          <Text style={styles.amount}>{income} Kr</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.title}>Spendings</Text>
          <Text style={styles.amount}>{spendings} Kr</Text>
        </View>
      </View>
    </View>
  );
}

export default ChartHeader;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    bottom: 30,
  },
  headerItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: sm,
    textTransform: 'lowercase',
  },
  amount: {
    color: '#ffffff',
    fontSize: sm,
    fontWeight: '700',
  },
});
