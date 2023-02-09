import * as React from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Linking,
  ImageBackground,
  Dimensions,
} from 'react-native'
import Layout from '../components/Layout'
const {width, height} = Dimensions.get('window')

const SpendingTrackingScreen = ({swiperRef, keyNumber}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <ImageBackground
        source={require('../../assets/images/spending_tracking.png')}
        resizeMode='cover'
        style={{
          width: width * 2,
          height: height,
          top: '-45%',
          left: '-60%',
          position: 'absolute',
        }}></ImageBackground>
      <Text style={styles.baseTitle}>
        <Text style={styles.innerTitle}>Spending tracking</Text>
      </Text>
      <View>
        <Text style={styles.description}>
          With{' '}
          <TouchableOpacity
            // style={{transform: [{translateY: 35}]}}
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
    </Layout>
  )
}
export default SpendingTrackingScreen
const styles = StyleSheet.create({
  baseTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 80,
    lineHeight: 92,
    color: '#FFFFFF',
    paddingVertical: Math.round(width * 0.2),
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
    // paddingTop: Math.round(width * 0.5),
  },
})
