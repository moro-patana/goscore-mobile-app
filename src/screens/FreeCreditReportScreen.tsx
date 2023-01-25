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

const FreeCreditReportScreen = ({swiperRef, keyNumber}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <View style={styles.contentWrapper}>
        <ImageBackground
          source={require('../../assets/images/free-credit-report-bg-1.png')}
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: 0,
            left: -10,
            width: width,
            height: height / 2,
          }}></ImageBackground>
        <ImageBackground
          source={require('../../assets/images/free-credit-report-bg-2.png')}
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: 300,
            right: -150,
            width: width,
            height: height / 2,
          }}></ImageBackground>
        <View>
          <Text style={styles.baseTitle}>
            Free
            <Text style={styles.innerTitle}>credit</Text>{' '}
            <Text style={styles.innerTitleTwo}>report</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
            You'll understand your current rating, how to improve it and what
            offers do you deserve!
          </Text>
        </View>
      </View>
    </Layout>
  );
};
export default FreeCreditReportScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  contentWrapper: {
    paddingTop: 75,
    paddingLeft: 50,
    paddingRight: 68,
  },
  baseTitle: {
    fontSize: 96,
    fontWeight: '700',
    lineHeight: 120,
    letterSpacing: -0.05,
    color: '#FFFFFF',
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 9,
  },
  innerTitle: {
    fontSize: 64,
    lineHeight: 87,
  },
  innerTitleTwo: {
    fontSize: 64,
    lineHeight: 87,
    color: '#2E6CC6',
  },
  description: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: 30,
  },
  logoContainer: {
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 171,
    height: 48,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 31,
  },
  button: {
    flex: 1,
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
