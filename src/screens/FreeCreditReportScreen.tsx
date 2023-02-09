import * as React from 'react'
import {
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native'
const {width, height} = Dimensions.get('window')
import Layout from '../components/Layout'
const BudgetAtGlanceScreen = ({swiperRef, keyNumber}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <ImageBackground
        source={require('../../assets/images/free_credit_report.png')}
        resizeMode='contain'
        style={{
          width: width,
          height: height,
          top: '-40%',
          right: '18%',
          position: 'absolute',
        }}></ImageBackground>
      <Image
        source={require('../../assets/images/free_credit_report_img2.png')}
        style={{position: 'absolute', top: '50%', right: '-60%'}}></Image>
      <Text style={styles.baseTitle}>
        Free
        <Text style={styles.innerTitle}> credit</Text>
        <Text style={styles.innerTitleTwo}> report</Text>
      </Text>
      <Text style={styles.description}>
        You'll understand your current rating, how to improve it and what offers
        do you deserve!
      </Text>
    </Layout>
  )
}
export default BudgetAtGlanceScreen
const styles = StyleSheet.create({
  baseTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 80,
    lineHeight: 92,
    color: '#FFFFFF',
    paddingTop: Math.round(width * 0.08),
  },
  innerTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 64,
    lineHeight: 92,
    color: '#FFFFFF',
  },
  innerTitleTwo: {
    fontSize: 64,
    lineHeight: 87,
    color: '#2E6CC6',
  },
  description: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: Math.round(width * 0.08),
    paddingRight: 45,
  },
})
