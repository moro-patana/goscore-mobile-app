import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Layout from '../components/Layout';
const {width, height} = Dimensions.get('screen');
const BudgetAtGlanceScreen = ({swiperRef, keyNumber}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <View style={styles.contentWrapper}>
        <ImageBackground
          source={require('../../assets/images/budget-at-glance-bg.png')}
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: 0,
            right: -120,
            width: width,
            height: height / 2,
          }}></ImageBackground>
        <View>
          <Text style={styles.baseTitle}>
            Your Budget <Text style={styles.innerTitle}>at a glance</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
            You are just 2 minutes away from gaining control over your personal
            economy
          </Text>
        </View>
      </View>
    </Layout>
  );
};
export default BudgetAtGlanceScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  contentWrapper: {
    paddingTop: 75,
    paddingLeft: 50,
    paddingRight: 23,
  },
  baseTitle: {
    fontSize: 80,
    fontWeight: '700',
    lineHeight: 92,
    letterSpacing: -0.05,
    color: '#2E6CC6',
  },
  innerTitle: {
    fontSize: 64,
  },
  description: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: 50,
  },
  logoContainer: {
    paddingTop: 40,
    alignItems: 'center',
  },
  logo: {
    width: 171,
    height: 48,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 31,
    paddingLeft: 145,
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
  buttonText: {
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
    color: '#2E6CC6',
  },
  hairLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#2E6CC6',
  },
});
