import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Linking,
  ImageBackground,
} from 'react-native';
import Layout from '../components/Layout';
const SpendingTrackingScreen = ({swiperRef, keyNumber}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <ImageBackground
        source={require('../../assets/images/introduction-bg.png')}
        resizeMode="contain"
        style={{
          width: 869,
          height: 555,
          top: '-60%',
          left: '-30%',
          position: 'absolute',
        }}></ImageBackground>
      <View style={{paddingTop: 40, paddingLeft: 4, paddingRight: 14}}>
        <Text style={styles.baseTitle}>
          <Text style={styles.innerTitle}>Spending tracking</Text>
        </Text>
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
    flex: 1,
  },
  baseTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 80,
    lineHeight: 92,
    color: '#FFFFFF',
  },
  innerTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 64,
    lineHeight: 92,
    color: '#FFFFFF',
  },
  description: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: 60,
  },
});
