import * as React from 'react';
import {View, Image, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import CustomButton from './Button';
const {width, height} = Dimensions.get('screen');
export default function Layout({children, swiperRef, keyNumber}) {
  return (
    <View style={{width: width, height: height}}>
      <View>{children}</View>
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/goscore_logo.png')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <View style={styles.hairLine} />

          <CustomButton
            buttonColor="#FFFFFF"
            text={`${keyNumber === 3 ? 'Getting started' : 'Next'}`}
            textColor={'#2E6CC6'}
            buttonStyle={styles.button}
            textStyle={{fontSize: 17}}
            onPress={() => swiperRef.current?.scrollBy(1)}
          />
          <View style={styles.hairLine} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logoContainer: {
    paddingTop: 40,
    alignItems: 'center',
  },
  logo: {
    width: 171,
    height: 48,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 31,
  },
  button: {
    paddingTop: 2,
    paddingLeft: 19,
    paddingRight: 18,
    paddingBottom: 4,
    borderWidth: 1,
    borderColor: '#2E6CC6',
    borderRadius: 50,
  },

  hairLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#2E6CC6',
  },
});
