import * as React from 'react';
import {Text, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import Layout from '../components/Layout';
const {height} = Dimensions.get('screen');
const BudgetAtGlanceScreen = ({swiperRef, keyNumber}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <ImageBackground
        source={require('../../assets/images/introduction-bg.png')}
        imageStyle={{
          resizeMode: 'contain',
          width: 600,
          height: height,
          top: '-90%',
          left: '75%',
        }}>
        <Text style={styles.baseTitle}>
          Your Budget <Text style={styles.innerTitle}>at a glance</Text>
        </Text>
        <Text style={styles.description}>
          You are just 2 minutes away from gaining control over your personal
          economy
        </Text>
      </ImageBackground>
    </Layout>
  );
};
export default BudgetAtGlanceScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 80,
    lineHeight: 92,
    color: '#2E6CC6',
  },
  innerTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 64,
    lineHeight: 92,
    color: '#2E6CC6',
  },
  description: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: 30,
  },
});
