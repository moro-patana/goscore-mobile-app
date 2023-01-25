import * as React from 'react';
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  View,
  Image,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default function Home() {
  return (
    <ImageBackground
      source={require('../../assets/images/homescreen-bg.png')}
      resizeMode="cover"
      style={{width: width, height: height}}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/goscore_logo.png')}
          style={styles.logo}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 90,
  },
  logo: {
    width: 235,
    height: 66,
  },
});
