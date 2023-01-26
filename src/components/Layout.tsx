import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CustomButton from '../components/Button';
function Layout({children, swiperRef, keyNumber}) {
  return (
    <View style={styles.layout}>
      <View style={styles.layoutMain}>{children}</View>
      <View style={styles.layoutFooter}>
        <View>
          <Image
            source={require('../../assets/images/goscore_logo.png')}
            style={{overflow: 'hidden'}}></Image>
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

export default Layout;
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 75,
    paddingBottom: 55,
    overflow: 'hidden',
    position: 'relative',
  },
  layoutMain: {
    paddingLeft: 50,
    paddingRight: 23,
  },
  layoutFooter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 31,
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
