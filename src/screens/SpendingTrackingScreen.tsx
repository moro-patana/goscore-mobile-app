import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Layout from '../components/Layout';
const {width, height} = Dimensions.get('screen');

const SpendingTrackingScreen = ({swiperRef, keyNumber}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <View style={styles.contentWrapper}>
        <ImageBackground
          source={require('../../assets/images/spending-bg.png')}
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: -120,
            left: 0,
            width: width,
            height: height,
          }}></ImageBackground>
        <View>
          <Text style={styles.baseTitle}>
            <Text style={styles.innerTitle}>Spending tracking</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
            With{' '}
            <TouchableOpacity
              style={{transform: [{translateY: 10}]}}
              onPress={() => Linking.openURL('https://goscore.me')}>
              <Image
                source={require('../../assets/images/goscore_logo.png')}
                style={{width: 107, height: 30}}
              />
            </TouchableOpacity>{' '}
            you'll see all your transactions in a joined feed with the main
            insights
          </Text>
        </View>
      </View>
    </Layout>
  );
};
export default SpendingTrackingScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  contentWrapper: {
    paddingTop: 141,
    paddingLeft: 54,
    paddingRight: 37,
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
    color: '#FFFFFF',
    lineHeight: 87,
  },
  description: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: 69,
  },
  logoContainer: {
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'none',
  },
  logo: {
    width: 171,
    height: 48,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 31,
    // paddingBottom: 53,
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
