import * as React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {sm} from './SizeHelper';
import CustomButton from './Button';

const {width} = Dimensions.get('window');

export const Layout = ({children, swiperRef, keyNumber}) => (
  <View style={styles.container}>
    <View style={styles.box}>{children}</View>
    <View style={styles.box2}>
      <View style={{paddingBottom: 29}}>
        <Image
          source={require('../../assets/images/goscore_logo.png')}
          style={{overflow: 'hidden'}}></Image>
      </View>
      <View
        style={{
          ...styles.buttonWrapper,
          paddingLeft: keyNumber === 1 ? Math.round(width * 0.36) : 0,
        }}>
        <View
          style={{
            ...styles.hairLine,
            display: keyNumber === 1 ? 'none' : 'flex',
          }}
        />
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
export default Layout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  },
  box: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: Math.round(width * 0.13),
    paddingRight: Math.round(width * 0.06),
  },
  box2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#2E6CC6',
    borderRadius: 50,
    paddingTop: 2,
    paddingLeft: 19,
    paddingRight: 18,
    paddingBottom: 4,
  },
  buttonText: {
    fontSize: sm,
    color: '#2E6CC6',
  },
  hairLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#2E6CC6',
  },
});
