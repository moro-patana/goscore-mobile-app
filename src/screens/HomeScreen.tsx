import * as React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
export default function HomeScreen() {
  return (
    <View style={styles.contentWrapper}>
      <LinearGradient
        colors={[
          '#00DB90',
          '#2E6CC6',
          '#2E6CC6',
          '#2E6CC6',
          '#2E6CC6',
          '#00DB90',
        ]}
        style={styles.linearGradient}
        start={{x: 1, y: 0}}>
        <View>
          <Image
            source={require('../../assets/images/home.png')}
            style={{width: '100%'}}></Image>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/goscore_logo_lg.png')}></Image>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  linearGradient: {
    height: height,
    width: width,
  },
  logoContainer: {
    position: 'absolute',
    top: '40%',
    left: '20%',
  },
});
